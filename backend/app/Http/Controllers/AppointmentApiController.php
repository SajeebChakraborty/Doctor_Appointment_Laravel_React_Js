<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doctor_appointment;
use App\Models\Doctor;

class AppointmentApiController extends Controller
{
    
    public function appointmentList()
    {
        $appointments = Doctor_appointment::all();
        return response()->json($appointments);
    }
    public function createAppointment(Request $request)
    {
        $appointment = new Doctor_appointment();
        $appointment->doctor_id = $request->doctor_id;
        $appointment->patient_name = $request->patient_name;
        $appointment->patient_phone = $request->patient_phone;
        $appointment->serial_number = $request->serial_number;
        $appointment->appointment_date = $request->appointment_date;
        $appointment->save();
        
        $message = "Appointment added successfully";
        return response()->json($message,201);

    }
    public function editAppointment($id)
    {
        $appointment = Doctor_appointment::find($id);
        return response()->json($appointment);
    }
    public function updateAppointment(Request $request, $id)
    {
        $appointment = Doctor_appointment::find($id);
        $appointment->doctor_id = $request->doctor_id;
        $appointment->patient_name = $request->patient_name;
        $appointment->patient_phone = $request->patient_phone;
        $appointment->serial_number = $request->serial_number;
        $appointment->appointment_date = $request->appointment_date;
        $appointment->save();

        $message = "Appointment updated successfully";
        Return response()->json($message,201);
    }
    public function deleteAppointment($id)
    {
        $appointment = Doctor_appointment::find($id);
        $appointment->delete();

        $message = "Appointment deleted successfully";
        return response()->json($message,200);
    }

}
