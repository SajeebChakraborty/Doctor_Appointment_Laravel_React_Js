<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSlotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slots', function (Blueprint $table) {
            $table->id();
            $table->string('doctor_id');
            $table->string('date');
            $table->string('time_9am_10am')->default('0');
            $table->string('time_10am_11am')->default('0');
            $table->string('time_11am_12pm')->default('0');
            $table->string('time_12pm_1pm')->default('0');
            $table->string('time_1pm_2pm')->default('0');
            $table->string('time_2pm_3pm')->default('0');
            $table->string('time_3pm_4pm')->default('0');
            $table->string('time_4pm_5pm')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('slots');
    }
}
