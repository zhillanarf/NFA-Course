<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        // Optional eager loading author untuk response lebih lengkap
        $books = Book::with('author')->get();
        return response()->json($books);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'author_id' => 'required|exists:authors,id',
            'genre' => 'required|string',
            'year' => 'required|integer',
        ]);

        $book = Book::create($validated);

        return response()->json($book, 201);
    }

    public function show($id)
    {
        $book = Book::with('author')->findOrFail($id);
        return response()->json($book);
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string',
            'author_id' => 'sometimes|required|exists:authors,id',
            'genre' => 'sometimes|required|string',
            'year' => 'sometimes|required|integer',
        ]);

        $book->update($validated);

        return response()->json($book);
    }

    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(null, 204);
    }
}
