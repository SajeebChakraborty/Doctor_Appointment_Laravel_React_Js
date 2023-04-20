import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, Route,Routes} from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import DoctorList from './pages/DoctorList';
import AddDoctor from './pages/AddDoctor';
import EditDoctor from './pages/EditDoctor';

function App() {
  return (
    <div>   
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/"} className='navbar-brand'>Square Hospital</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/"} className='nav-link'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/doctor-list"} className='nav-link'>Doctor's List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/appointment-list"} className='nav-link'>Appointment List</Link>
                  </li>
                </ul>
              </div>
            </div>
            </nav>
            <div className="container mt-3">
              <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/doctor-list" element={<DoctorList />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/edit-doctor/:id" element={<EditDoctor />} />
                <Route path="*" element={<Error />} />


              </Routes>

            </div>

    </div>
  );
}

export default App;
