<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthorSeeder extends Seeder
{
    public function run()
    {
        DB::table('authors')->insert([
            ['name' => 'J.K. Rowling', 'email' => 'jkrowling@example.com'],
            ['name' => 'George Orwell', 'email' => 'gorwell@example.com'],
            ['name' => 'Agatha Christie', 'email' => 'achristie@example.com'],
            ['name' => 'Isaac Asimov', 'email' => 'iasimov@example.com'],
            ['name' => 'Walter Isaacson', 'email' => 'wisaacson@example.com'],
        ]);
    }
}
