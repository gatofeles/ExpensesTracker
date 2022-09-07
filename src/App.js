
import React, {useEffect, useState} from "react";
import "./App.css";
import MainApp from "./components/MainApp";
import {Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
function App() {

  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    //console.log(localStorage.getItem('finance-token'));
    if(localStorage.getItem('finance-token')){
      setToken(localStorage.getItem('finance-token')); 
      setUserId(localStorage.getItem('finance-user'));
    }
   
   //console.log(token);
  },[]);

  return (
    <Routes>
      <Route path="/login" element = {<Login/>} />
      <Route path="/" element = {<MainApp token = {token} userId = {userId}/>} />
    </Routes>
     
  );
}

export default App;
