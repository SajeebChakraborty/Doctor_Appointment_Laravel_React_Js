import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './pages/AuthUser';

import Guest from './pages/navbar/Guest';
import Auth from './pages/navbar/Auth';

function App() {

    const {getToken} = AuthUser();
    if(!getToken()){
      return <Guest />
    }
    return (
        <Auth />
    );
  
}

export default App;
