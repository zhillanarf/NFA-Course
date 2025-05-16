<!DOCTYPE html>
<html>
<head>
    <title>Authors List</title>
</head>
<body>
    <h1>Authors</h1>
    <ul>
        @foreach($authors as $author)
            <li>
                {{ $author->name }} ({{ $author->email }})
                <ul>
                    @foreach($author->books as $book)
                        <li>{{ $book->title }} - {{ $book->genre }} ({{ $book->year }})</li>
                    @endforeach
                </ul>
            </li>
        @endforeach
    </ul>
</body>
</html>
