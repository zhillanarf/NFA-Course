<!DOCTYPE html>
<html>
<head>
    <title>Author List</title>
</head>
<body>
    <h1>Author List</h1>
    <ul>
        @foreach($authors as $author)
            <li>{{ $author['id'] }} - {{ $author['name'] }}</li>
        @endforeach
    </ul>
</body>
</html>
