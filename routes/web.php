<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    ChatController,
};

Route::redirect('/', '/chat')->name('home');

Route::get('/chat', [ChatController::class, 'index'])->name('chat')->middleware('auth');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
