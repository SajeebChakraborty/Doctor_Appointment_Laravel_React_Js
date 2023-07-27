<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    use HasFactory;
    protected $fillable = [
        'doctor_id',
        'date',
        'time_9am_10am',
        'time_10am_11am',
        'time_11am_12pm',
        'time_12pm_1pm',
        'time_1pm_2pm',
        'time_2pm_3pm',
        'time_3pm_4pm',
        'time_4pm_5pm',
    ];
}
