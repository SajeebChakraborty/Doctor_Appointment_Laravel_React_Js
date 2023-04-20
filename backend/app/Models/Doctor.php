<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
    ];
    public function doctor_appointments()
    {

        return $this->many(Doctor_appointments::class);

    }

}
