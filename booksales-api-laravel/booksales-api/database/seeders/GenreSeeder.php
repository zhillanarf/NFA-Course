<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    public function run(): void
    {
        Genre::create([
            'name' => 'Programming',
            'description' => 'Books related to programming and software development.',
        ]);

        Genre::create([
            'name' => 'Fiction',
            'description' => 'Fictional books including novels and stories.',
        ]);
    }
}
