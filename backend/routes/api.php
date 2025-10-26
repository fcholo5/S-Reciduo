<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\usuarios;
use App\Http\Controllers\Api\clientes;
use App\Http\Controllers\Api\productos;
use App\Http\Controllers\Api\categorias;
use App\Http\Controllers\Api\ventas;
use App\Http\Controllers\Api\detalle_ventas;
use App\Http\Controllers\Api\compras;
use App\Http\Controllers\Api\detalle_compras;
use App\Http\Controllers\Api\proveedores;

// Rutas públicas
Route::post('/auth/logear', [AuthController::class, 'logear']);
Route::get('/crear-admin', [AuthController::class, 'crearAdmin']);
// Rutas protegidas por Sanctum
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/logout', [AuthController::class, 'logout']);

    Route::get('/usuarios', [usuarios::class, 'index']);
    Route::post('/usuarios', [usuarios::class, 'store']);
    Route::get('/usuarios/{id}', [usuarios::class, 'edit']);
    Route::put('/usuarios/{id}', [usuarios::class, 'update']);
    Route::delete('/usuarios/{id}', [usuarios::class, 'destroy']);
    Route::get('/usuarios/tbody', [usuarios::class, 'tbody']);
    Route::put('/usuarios/{id}/estado/{estado}', [usuarios::class, 'estado']);
    Route::patch('usuarios/{id}/estado/{estado}', [usuarios::class, 'updateEstado']);

   
});
