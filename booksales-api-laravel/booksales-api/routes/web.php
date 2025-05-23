<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\BookController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/genres', [GenreController::class, 'index']);
Route::get('/books', [BookController::class, 'index']);

// use App\Http\Controllers\AuthorController;
// use App\Http\Controllers\BookController;

// Route::apiResource('authors', AuthorController::class);
// Route::apiResource('books', BookController::class);