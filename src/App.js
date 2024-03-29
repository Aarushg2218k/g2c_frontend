// import logo from './logo.svg';
import './App.css';
import Signup from './signup';
import Login from './login';
import Profile from './Profile';
import { Avail } from './add-product';
import Header, { Navbar } from './nav';
import { Route, Routes } from 'react-router-dom';
import Manage from './manage_product';
import Grower from './find_grower';
import { GDash } from './dash-Grower';
import { Dash } from './Dashboard';

function App() {
  return (
    <>
    <Header></Header>
    {/* <Profile></Profile> */}
    {/* <Avail></Avail> */}
    {/* <Manage></Manage> */}
    {/* <Grower></Grower> */}
    
    <Routes>
      {/* <Route path="/"/> */}
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile-form" element={<Profile/>} />
      <Route path="/Avail_product" element={<Avail/>} />
      <Route path="/Manage_product" element={<Manage/>} />
      <Route path="/dashboard" element={<Dash/>} />
      <Route path="/find_grower" element={<Grower/>} />
    </Routes>

    </>
  );
}

export default App;
