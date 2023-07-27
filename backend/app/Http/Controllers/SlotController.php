<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slot;

class SlotController extends Controller
{
    public function freeTime($date)
    {
        //all doctors free time slots in this date
        $available = [];
        //date find in database
        $dateAvailable = Slot::where('date', $date)->count();
        if ($dateAvailable == 0) {
            $available = ["date not available"];
            return response()->json([
                'available' => $available,
            ]);
        }

        $time9am_10am_booked = Slot::where('date', $date)->where('time_9am_10am', '1')->count();
        if ($time9am_10am_booked == 0)
            $available[] = "9am-10am";

        $time10am_11am_booked = Slot::where('date', $date)->where('time_10am_11am', '1')->count();
        if ($time10am_11am_booked == 0)
            $available[] = "10am-11am";

        $time11am_12pm_booked = Slot::where('date', $date)->where('time_11am_12pm', '1')->count();
        if ($time11am_12pm_booked == 0)
            $available[] = "11am-12pm";

        $time12pm_1pm_booked = Slot::where('date', $date)->where('time_12pm_1pm', '1')->count();
        if ($time12pm_1pm_booked == 0)
            $available[] = "12pm-1pm";

        $time1pm_2pm_booked = Slot::where('date', $date)->where('time_1pm_2pm', '1')->count();
        if ($time1pm_2pm_booked == 0)
            $available[] = "1pm-2pm";

        $time2pm_3pm_booked = Slot::where('date', $date)->where('time_2pm_3pm', '1')->count();
        if ($time2pm_3pm_booked == 0)
            $available[] = "2pm-3pm";

        $time3pm_4pm_booked = Slot::where('date', $date)->where('time_3pm_4pm', '1')->count();
        if ($time3pm_4pm_booked == 0)
            $available[] = "3pm-4pm";

        $time4pm_5pm_booked = Slot::where('date', $date)->where('time_4pm_5pm', '1')->count();
        if ($time4pm_5pm_booked == 0)
            $available[] = "4pm-5pm";

        return response()->json([
            'available' => $available,
        ]);
    }
}
