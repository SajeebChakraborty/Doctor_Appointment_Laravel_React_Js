<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DoctorApiController extends Controller
{
    
    public function showDoctorList()
    {
        $doctors = Doctor::all();
        return response()->json($doctors);
    }
    public function createDoctor(Request $request)
    {
        $doctor = new Doctor();
        $doctor->name = $request->name;
        $doctor->phone = $request->phone;
        $doctor->save();
        
        $message = "Doctor added successfully";
        return response()->json($message,201);

    }
    public function editDoctor($id)
    {
        $doctor = Doctor::find($id);
        return response()->json($doctor);
    }
    public function updateDoctor(Request $request, $id)
    {
        $doctor = Doctor::find($id);
        $doctor->name = $request->name;
        $doctor->phone = $request->phone;
        $doctor->save();

        $message = "Doctor updated successfully";
        Return response()->json($message,201);
    }
    public function deleteDoctor($id)
    {
        $doctor = Doctor::find($id);
        $doctor->delete();

        $message = "Doctor deleted successfully";
        return response()->json($message,200);
    }

}
