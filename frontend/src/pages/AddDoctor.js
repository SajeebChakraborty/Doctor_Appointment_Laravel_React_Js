import React from 'react'

import { useState,useEffect } from 'react'
import http from '../http'
import { useNavigate } from 'react-router-dom';

export default function AddDoctor() {

   const navigate = useNavigate();

   const[input,setInput] = useState({});

   const[messages,setMessages] = useState();

   useEffect(() => {

    document.title = "Add Doctor";

    }, [])

   const handleChange = (e) => {
        
        const name=e.target.name;
        const value=e.target.value;
        setInput(values=>({...values,[name]:value}));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        http.post('/add-doctor/process',input)
           .then(response => {
                

                setMessages("Doctor added successfully");
                console.log(messages);


            })
            .catch(e => {
                console.log("Not added");
            });
    }


  return (
    <div>
 
        <br></br>

        {messages && 

            <div className="alert alert-primary" role="alert">
                {messages}
            </div>

        }

        <div style={{ border: "2px solid black",padding:"50px" }}>

        <h2>Add Doctor</h2>

        <br></br>

            <div className="form-group col-lg-6">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={input.name || ''} onChange={handleChange} placeholder="Enter name" />
            </div>
            <div className="form-group col-lg-6">
                <label htmlFor="name">Phone</label>
                <input type="number" className="form-control" id="phone" name="phone" value={input.phone || ''} onChange={handleChange}  placeholder="Enter phone" />
            </div>

            <br></br>

            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>


        </div>

    </div>
  )
}
