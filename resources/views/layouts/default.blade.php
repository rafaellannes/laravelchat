<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    @vite(['resources/sass/app.scss', 'resources/css/chat.css', 'resources/js/app.js'])
</head>

<body>
    <div id="app">
        @yield('content')
    </div>



</body>

</html>
