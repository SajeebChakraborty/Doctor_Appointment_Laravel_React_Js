import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import http from '../http'

export default function AppointmentList() {

  const [appointments, setAppointments] = useState([])
  const[input,setInput] = useState({});

  useEffect(() => {
    document.title = "Appointment List";
    fetchAppointments();

  }, [])

   const handleChange = (e) => {
        
        e.persist();
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);

        // http.post('/appointment-search',input)
        // .then(response => {
             
        //     setAppointments(response.data)
        //     console.log(response.data);

        //  })
        //  .catch(e => {
        //      console.log("Not Found");
        //  });

    }

  

    const fetchAppointments = () => {
        http.get('/appointment-list')
            .then(response => {
                setAppointments(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        http.post('/appointment-search',input)
           .then(response => {
 
                setAppointments(response.data)
                console.log("Found")
 
            })
            .catch(e => {
                console.log("Not Found");
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
        <div className="row">
            <div className="col-lg-4">
            <label htmlFor="name">Patient Name</label>
            <input type="text" class="form-control" name="name" value={input.name || ''} onChange={handleChange} placeholder="Doctor Name"/>
            </div>
            <div className="col-lg-4">
            <label htmlFor="name">Appointment Date</label>
            <input type="date" class="form-control" name="date" value={input.date || ''} onChange={handleChange} placeholder="Appointment Date"/>
            </div>               
            <div className="col-lg-4">
            <button className="btn btn-primary btn-large"  onClick={handleSubmit}  style={{ marginTop:"25px" }}>Search</button>
            </div>
        </div>
       

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
