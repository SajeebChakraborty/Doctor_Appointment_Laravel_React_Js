import React from 'react'
import { Link } from 'react-router-dom'
import http from '../http'
import { useState,useEffect } from 'react'

export default function Home() {

    const [information, setInformation] = useState([])

    useEffect(() => {

        document.title = "Home";
        fetchInformation();

    }, [])

    const fetchInformation = () => {
        http.get('/information')
            .then(response => {
                setInformation(response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }


  return (
    <div>

        <br></br>

        <div class="card-group">

                        
        <div class="card text-white bg-primary" style={{ maxWidth: "20rem",marginRight:"20px"}}>

            <div class="card-body">
            <h2 class="card-title">Total Doctors</h2>
            <br></br>
            <p class="card-text"><h3>Amount : { information.totalDoctors }</h3></p>
            <br></br>

            </div>

        </div>

        <div class="card text-white bg-secondary" style={{ maxWidth: "20rem",marginRight:"20px"}}>

            <div class="card-body">
                <h2 class="card-title">Today's Appoints</h2>
                <br></br>
                <p class="card-text"><h3>Amount : { information.todayAppointments }</h3></p>
                <br></br>
            </div>

        </div>

        <div class="card text-white bg-success" style={{ maxWidth: "20rem"}}>

        <div class="card-body">
            <h2 class="card-title">Total Appointments</h2>
            <br></br>
            <p class="card-text"><h3>Amount : { information.totalAppointments }</h3></p>
            <br></br>
        </div>

        </div>
        
     
        </div>

        <br></br>

        <p>Square Hospital is a private hospital located in the heart of Dhaka, the capital city of Bangladesh. It is one of the leading and largest hospitals in the country, offering a wide range of medical services and facilities to patients from all over Bangladesh and abroad.

The hospital was established in 2006 by Square Group, a prominent business conglomerate in Bangladesh, with the aim of providing world-class healthcare services to the people of Bangladesh. The hospital is equipped with modern and state-of-the-art facilities, and it has highly qualified and experienced medical professionals, nurses, and support staff.

The hospital offers a comprehensive range of medical services, including cardiology, neurology, gastroenterology, oncology, orthopedics, and many more. It also has a well-equipped emergency department that operates 24 hours a day, seven days a week, to provide immediate medical attention to patients in need.

Apart from medical services, Square Hospital also offers various support services such as diagnostic services, rehabilitation services, and wellness services to ensure that patients receive comprehensive care and treatment.

Overall, Square Hospital is a trusted and respected name in the healthcare industry of Bangladesh, and it continues to provide high-quality medical services to patients with compassion, dedication, and excellence.</p>

    </div>
  )
}
