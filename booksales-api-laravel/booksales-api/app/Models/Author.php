<?php

namespace App\Models;

class Author
{
    public static function all()
    {
        return [
            ['id' => 1, 'name' => 'J.K. Rowling'],
            ['id' => 2, 'name' => 'George Orwell'],
            ['id' => 3, 'name' => 'Agatha Christie'],
            ['id' => 4, 'name' => 'Isaac Asimov'],
            ['id' => 5, 'name' => 'Walter Isaacson'],
        ];
    }
}
