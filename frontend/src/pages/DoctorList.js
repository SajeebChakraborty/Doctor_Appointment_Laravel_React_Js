import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import http from '../http'

export default function DoctorList() {

  const [doctors, setDoctors] = useState([])

    useEffect(() => {

        document.title = "Doctor List";
        fetchDoctors();

    }, [])

    const fetchDoctors = () => {
        http.get('/doctor-list')
            .then(response => {
                setDoctors(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleDelete = (id) => {
        http.delete('/doctor-delete/'+id)
            .then(response => {
                fetchDoctors();
            })
            .catch(e => {
                console.log(e);
            });
    }


  return (
    <div>

        <Link to={"/add-doctor"} className="btn btn-primary btn-large" style={{float: "right"}}>Add Doctor</Link>
        <br></br>
        <br></br>
        <h2>Doctor List</h2>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Appointment</th>
                    <th>Doctor's Action</th>
                </tr>
            </thead>
            <tbody>
                {doctors && doctors.map((doctor, index) => (
                    <tr key={index}>
                        <td>{doctor.id}</td>
                        <td>{doctor.name}</td>
                        <td>{doctor.phone}</td>
                        <td><Link to={"/appointment-add/" + doctor.id} className="btn btn-success" style={{marginRight: "10px"}}>Make an Appointment</Link></td>
                        <td>
                            <Link to={"/edit-doctor/" + doctor.id} className="btn btn-primary" style={{marginRight: "10px"}}>Edit</Link>
                           <button onClick={()=>{handleDelete(doctor.id)}} className="btn btn-danger" >Delete</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}
