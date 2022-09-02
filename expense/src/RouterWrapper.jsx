import React, { Component } from 'react';
import {Routes ,Route} from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';

class RouterWrapper extends Component {
    
    render() { 
        return ( 
          <Routes>
            <Route path = '/login' element={<Login/>}/>
            <Route path = '/' element= {<App/>}/>
          </Routes>
         );
    }
}
 
export default RouterWrapper;