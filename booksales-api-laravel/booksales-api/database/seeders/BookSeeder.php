<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    public function run()
    {
        DB::table('books')->insert([
            ['title' => 'Harry Potter and the Sorcerer\'s Stone', 'author_id' => 1, 'genre' => 'Fantasy', 'year' => 1997],
            ['title' => '1984', 'author_id' => 2, 'genre' => 'Dystopian', 'year' => 1949],
            ['title' => 'Murder on the Orient Express', 'author_id' => 3, 'genre' => 'Mystery', 'year' => 1934],
            ['title' => 'Foundation', 'author_id' => 4, 'genre' => 'Science Fiction', 'year' => 1951],
            ['title' => 'Steve Jobs', 'author_id' => 5, 'genre' => 'Biography', 'year' => 2011],
        ]);
    }
}
