
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./Components/PrivateRoute";


function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="w-screen min-h-[100vh] bg-black flex flex-col">
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      </Navbar>

      <Routes>

        <Route path="/"  element={<Home isLoggedIn={isLoggedIn} />}/>
        <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup"  element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>

        <Route path="/dashboard"  element={

            <PrivateRoute  isLoggedIn={isLoggedIn}>
                <Dashboard/>
            </PrivateRoute>
          

          }>

        </Route>

      </Routes>

      <ToastContainer/>

    </div>
  );
}

export default App;
