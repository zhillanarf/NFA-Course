<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index()
    {
        return response()->json(Author::with('books')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:authors,email',
        ]);
        $author = Author::create($data);
        return response()->json($author, 201);
    }

    public function show($id)
    {
        $author = Author::with('books')->find($id);
        if (!$author) return response()->json(['message' => 'Not found'], 404);
        return response()->json($author);
    }

    public function update(Request $request, $id)
    {
        $author = Author::find($id);
        if (!$author) return response()->json(['message' => 'Not found'], 404);

        $data = $request->validate([
            'name' => 'sometimes|required',
            'email' => 'sometimes|required|email|unique:authors,email,' . $id,
        ]);
        $author->update($data);
        return response()->json($author);
    }

    public function destroy($id)
    {
        $author = Author::find($id);
        if (!$author) return response()->json(['message' => 'Not found'], 404);
        $author->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
