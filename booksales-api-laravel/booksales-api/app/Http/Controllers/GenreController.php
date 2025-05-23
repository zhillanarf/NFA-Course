<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function index()
    {
        return response()->json(Genre::all(), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:genres,name',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $validated = $validator->validated();

        $genre = Genre::create($validated);

        return response()->json([
            'message' => 'Genre created successfully',
            'data' => $genre
        ], 201);
    }

    public function show($id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre not found.'], 404);
        }

        return response()->json($genre, 200);
    }

    public function update(Request $request, $id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre not found.'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|unique:genres,name,' . $genre->id,
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        $validated = $validator->validated();

        $genre->update($validated);

        return response()->json([
            'message' => 'Genre updated successfully',
            'data' => $genre
        ], 200);
    }

    public function destroy($id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre not found.'], 404);
        }

        $genre->delete();

        return response()->json([
            'message' => 'Genre deleted successfully'
        ], 200);
    }
}
