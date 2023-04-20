<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\DoctorApiController;
use App\Http\Controllers\AppointmentApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/doctor-list', 'App\Http\Controllers\DoctorApiController@doctorList');
Route::post('/doctor-add', 'App\Http\Controllers\DoctorApiController@createDoctor');
Route::get('/doctor-edit/{id}', 'App\Http\Controllers\DoctorApiController@editDoctor');
Route::post('/doctor-update/{id}', 'App\Http\Controllers\DoctorApiController@updateDoctor');
Route::delete('/doctor-delete/{id}', 'App\Http\Controllers\DoctorApiController@deleteDoctor');

Route::get('/appointment-list', 'App\Http\Controllers\AppointmentApiController@appointmentList');
Route::post('/appointment-add', 'App\Http\Controllers\AppointmentApiController@createAppointment');
Route::get('/appointment-edit/{id}', 'App\Http\Controllers\AppointmentApiController@editAppointment');
Route::post('/appointment-update/{id}', 'App\Http\Controllers\AppointmentApiController@updateAppointment');
Route::delete('/appointment-delete/{id}', 'App\Http\Controllers\AppointmentApiController@deleteAppointment');