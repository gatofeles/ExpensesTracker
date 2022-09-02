
import React, {useEffect} from "react";
import "./App.css";
import MainApp from "./components/MainApp";
import {Route, Switch} from 'react-router-dom';
function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token){
      this.props.history.push("/login");
    }
  });

  return (
    
    <Route path="/" component = {MainApp} />
     
  );
}

export default App;
