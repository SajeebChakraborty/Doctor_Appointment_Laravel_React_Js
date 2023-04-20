import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import http from '../http'

export default function AppointmentList() {

  const [appointments, setAppointments] = useState([])

    useEffect(() => {

        document.title = "Appointment List";
        fetchAppointments();

    }, [])

    const fetchAppointments = () => {
        http.get('/appointment-list')
            .then(response => {
                setAppointments(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleCancel = (id) => {
        http.patch('/appointment-cancel/'+id)
            .then(response => {
                fetchAppointments();
            })
            .catch(e => {
                console.log(e);
            });
    }

  return (
    <div>

        <br></br>
        <br></br>
        <h2>Appointment List</h2>
        <br></br>

        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Serial Number</th>
                    <th>Patient Name</th>
                    <th>Patient Phone</th>
                    <th>Doctor Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {appointments && appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.id}</td>
                        <td>{appointment.appointment_date}</td>
                        <td>{appointment.serial_number}</td>
                        <td>{appointment.patient_name}</td>
                        <td>{appointment.patient_phone}</td>
                        <td>{appointment.doctor.name}</td>
                        <td>{appointment.status}</td>
                        <td>
                            {appointment.status == "Appointed" ?
                                <button onClick={() => {handleCancel(appointment.id)}} className="btn btn-danger">Cancel</button>
                                :
                                "Already Cancelled"
                            }
                            </td>

                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
    
  )

}
