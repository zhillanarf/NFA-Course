<!DOCTYPE html>
<html>
<head>
    <title>Books List</title>
</head>
<body>
    <h1>Books</h1>
    <ul>
        @foreach($books as $book)
            <li>
                {{ $book->title }} by {{ $book->author->name ?? 'Unknown' }} - {{ $book->genre }} ({{ $book->year }})
            </li>
        @endforeach
    </ul>
</body>
</html>
