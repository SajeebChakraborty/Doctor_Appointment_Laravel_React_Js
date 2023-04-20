<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Doctor_appointment;
use App\Models\Doctor;

class AppointmentApiController extends Controller
{
    
    public function appointmentList()
    {
        $appointments = Doctor_appointment::with('doctor')->get();
        return response()->json($appointments);
    }
    public function createAppointment(Request $request,$id)
    {


        $appointmentAmount=Doctor_appointment::where('doctor_id',$id)->where('appointment_date',$request->appointment_date)->count();

        if($appointmentAmount>0)
        {

            $appointments=Doctor_appointment::where('doctor_id',$id)->where('appointment_date',$request->appointment_date)->get();

            foreach($appointments as $appointment){
                $serial_number=$appointment->serial_number;
            }
        }
        else
        {
            $serial_number=0;
        }


        $appointment = new Doctor_appointment();
        $appointment->doctor_id = $id;
        $appointment->patient_name = $request->patient_name;
        $appointment->patient_phone = $request->patient_phone;
        $appointment->serial_number = $serial_number+1;
        $appointment->appointment_date = $request->appointment_date;
        $appointment->status = "Appointed";
        $appointment->save();
        
        $message = "Appointment added successfully";

        return response()->json(

            [
                'message' => $message,
                'serialNumber' => $serial_number+1,
            ],201

        );

    }
    public function cancelAppointment($id)
    {
        $appointment = Doctor_appointment::find($id);
        $appointment->status="Cancelled";
        $appointment->save();

        $message = "Appointment cancelled successfully";
        return response()->json($message,200);
    }
    public function appointmentSearch(Request $request)
    {
        if($request->date==NULL)
        {
            $appointments = Doctor_appointment::with('doctor')->where('patient_name','like','%'.$request->name.'%')->get();
        }
        else if($request->name==NULL)
        {
            $appointments = Doctor_appointment::with('doctor')->where('appointment_date',$request->date)->get();

        }
        else if($request->name!=NULL && $request->date!=NULL)
        {
            $appointments = Doctor_appointment::with('doctor')->where('patient_name','like','%'.$request->name.'%')->where('appointment_date',$request->date)->get();
        }
        else
        {
            $appointments = Doctor_appointment::with('doctor')->get();
        }

        return response()->json($appointments,200);
        
    }

}
