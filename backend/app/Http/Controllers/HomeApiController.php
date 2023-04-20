<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doctor_appointment;
use App\Models\Doctor;

class HomeApiController extends Controller
{
    public function information()
    {

        $totalDoctors=Doctor::count();
        $totalAppointments=Doctor_appointment::count();

        $today=date('Y-m-d');

        $todayAppointments=Doctor_appointment::where('appointment_date',$today)->count();

        return response()->json([
            'totalDoctors' => $totalDoctors,
            'totalAppointments' => $totalAppointments,
            'todayAppointments' => $todayAppointments,
        ]);

    }
}
