
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
Route::get('/crear-admin', [AuthController::class, 'crearAdmin']);