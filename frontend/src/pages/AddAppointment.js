import React from 'react'

import { useState,useEffect } from 'react'
import http from '../http'
import { useNavigate,useParams } from 'react-router-dom';

export default function AddAppointment() {

   const navigate = useNavigate();

   const { id } = useParams();

   const[input,setInput] = useState({});

   const[messages,setMessages] = useState();
   const[serialNumber,setSerialNumber] = useState();

   useEffect(() => {

    fetchDoctor();
    document.title = "Add Appointment";

    }, [])

    const fetchDoctor = () => {
        http.get('/doctor/'+id)
            .then(response => {
                setInput(
                    {
                        name:response.data.name,
                        phone:response.data.phone,
                    }
                )
            })
            .catch(e => {
                console.log(e);
            });
    }


   const handleChange = (e) => {
        
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values,[name]:value}));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        http.post('/appointment-add/process/'+id,input)
           .then(response => {
                

                setMessages("Appointment added successfully");
                console.log(messages);
                setSerialNumber(response.data.serialNumber);


            })
            .catch(e => {
                console.log("Not added");
            });
    }


  return (
    <div>


        {messages && 

            <div className="alert alert-primary" role="alert">
                {messages} and Serial Number is {serialNumber}
            </div>

        }

        <div style={{ border: "2px solid black",padding:"30px" }}>

        <h2>Add Appointment</h2>

        <br></br>

            <div className="form-group col-lg-6">
                <label htmlFor="name">Doctor's Name</label>
                <input type="text" className="form-control" id="name" name="name" value={input.name || ''} onChange={handleChange} placeholder="Enter name" readOnly/>
            </div>
            <div className="form-group col-lg-6">
                <label htmlFor="name">Doctor's Phone</label>
                <input type="text" className="form-control" id="name" name="phone" value={input.phone || ''} onChange={handleChange} placeholder="Enter name" readOnly/>
            </div>
            <div className="form-group col-lg-6">
                <label htmlFor="name">Patient's Name</label>
                <input type="text" className="form-control" id="name" name="patient_name" value={input.patient_name || ''} onChange={handleChange} placeholder="Enter patient name" />
            </div>
            <div className="form-group col-lg-6">
                <label htmlFor="name">Patient's Phone</label>
                <input type="number" className="form-control" id="phone" name="patient_phone" value={input.patient_phone || ''} onChange={handleChange}  placeholder="Enter patient phone" />
            </div>
            <div className="form-group col-lg-6">
                <label htmlFor="name">Appointment Date</label>
                <input type="date" className="form-control" id="phone" name="appointment_date" value={input.appointment_date || ''} onChange={handleChange}  placeholder="Enter appointment date" />
            </div>

            <br></br>

            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>


        </div>

    </div>
  )
}
