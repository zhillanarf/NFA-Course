<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with(['author', 'genre'])->get();
        return response()->json($books, 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'cover_photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'author_id' => 'required|exists:authors,id',
            'genre_id' => 'required|exists:genres,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $validated = $validator->validated();

        if ($request->hasFile('cover_photo')) {
            $validated['cover_photo'] = $request->file('cover_photo')->store('cover_photos', 'public');
        }

        $book = Book::create($validated);

        return response()->json([
            'message' => 'Book created successfully',
            'data' => $book
        ], 201);
    }

    public function show($id)
    {
        $book = Book::with(['author', 'genre'])->find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json($book, 200);
    }

    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'cover_photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'author_id' => 'sometimes|required|exists:authors,id',
            'genre_id' => 'sometimes|required|exists:genres,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $validated = $validator->validated();

        if ($request->hasFile('cover_photo')) {
            if ($book->cover_photo && Storage::disk('public')->exists($book->cover_photo)) {
                Storage::disk('public')->delete($book->cover_photo);
            }
            $validated['cover_photo'] = $request->file('cover_photo')->store('cover_photos', 'public');
        }

        $book->update($validated);

        return response()->json([
            'message' => 'Book updated successfully',
            'data' => $book
        ], 200);
    }

    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        if ($book->cover_photo && Storage::disk('public')->exists($book->cover_photo)) {
            Storage::disk('public')->delete($book->cover_photo);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted successfully'], 200);
    }
}
