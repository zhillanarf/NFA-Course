<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        return response()->json(Book::with('author')->get());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'author_id' => 'required|exists:authors,id',
            'genre' => 'required|string',
            'year' => 'required|integer',
        ]);
        $book = Book::create($data);
        return response()->json($book, 201);
    }

    public function show($id)
    {
        $book = Book::with('author')->find($id);
        if (!$book) return response()->json(['message' => 'Not found'], 404);
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        if (!$book) return response()->json(['message' => 'Not found'], 404);

        $data = $request->validate([
            'title' => 'sometimes|required|string',
            'author_id' => 'sometimes|required|exists:authors,id',
            'genre' => 'sometimes|required|string',
            'year' => 'sometimes|required|integer',
        ]);
        $book->update($data);
        return response()->json($book);
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        if (!$book) return response()->json(['message' => 'Not found'], 404);
        $book->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
