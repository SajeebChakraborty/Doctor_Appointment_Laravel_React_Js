import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';


import Home from '../Home';
import Error from '../Error';
import DoctorList from '../DoctorList';
import AddDoctor from '../AddDoctor';
import EditDoctor from '../EditDoctor';
import AppointmentList from '../AppointmentList';
import AddAppointment from '../AddAppointment';
import AuthUser from '../AuthUser';

export default function Auth() {

    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }


  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/home"} className='navbar-brand'>Square Hospital</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/home"} className='nav-link'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/doctor-list"} className='nav-link'>Doctor's List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/appointment-list"} className='nav-link'>Appointment List</Link>
                  </li>
                  <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
                </ul>
              </div>
            </div>
            </nav>
            <div className="container mt-3">
              <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/doctor-list" element={<DoctorList />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/edit-doctor/:id" element={<EditDoctor />} />
                <Route path="/appointment-list" element={<AppointmentList />} />
                <Route path="/appointment-add/:id" element={<AddAppointment />} />

                <Route path="*" element={<Error />} />


              </Routes>

            </div>

      
    </div>
  )
}
