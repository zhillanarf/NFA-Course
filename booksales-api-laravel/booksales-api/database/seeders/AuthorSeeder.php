<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        Author::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);

        Author::create([
            'name' => 'Jane Smith',
            'email' => 'jane@example.com',
        ]);
    }
}
