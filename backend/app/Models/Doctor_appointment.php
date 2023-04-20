<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor_appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'doctor_id',
        'patient_name',
        'patient_phone',
        'serial_number',
        'appointment_date',
        'status',
    ];
    public function doctor()
    {

        return $this->belongsTo(Doctor::class);

    }

}
