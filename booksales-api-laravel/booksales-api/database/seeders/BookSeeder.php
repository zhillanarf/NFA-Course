<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    public function run(): void
    {
        Book::create([
            'title' => 'Learn Laravel Basics',
            'description' => 'A beginner friendly Laravel book.',
            'price' => 150000,
            'stock' => 10,
            'cover_photo' => null,
            'genre_id' => 1,   
            'author_id' => 1,  
        ]);

        Book::create([
            'title' => 'Mastering PHP',
            'description' => 'Advanced PHP programming concepts.',
            'price' => 200000,
            'stock' => 5,
            'cover_photo' => null,
            'genre_id' => 1,
            'author_id' => 2,
        ]);
    }
}
