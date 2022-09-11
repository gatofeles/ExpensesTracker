import React, {useState} from "react";
import axios from 'axios';
import Joi from "joi";
import {useNavigate} from 'react-router-dom';
import "./Register.css";

const Register = () =>{

    const [creds, setCreds] = useState({
        name : "",
        password : "",
        email : ""
    });

    const navigate = useNavigate();

    const validateUser = (creds) =>{
        const credsSchema = Joi.object({
            name: Joi.string().max(70).min(5).required(),
            password: Joi.string().max(70).min(5).required(),
            email:  Joi.string().email({ tlds: { allow: false } }).max(70).min(5).required()
        });

        return credsSchema.validate(creds);
    }

    const handleChange = e =>{
        let cred = creds;
        cred[e.currentTarget.name] = e.currentTarget.value;

        setCreds(cred);
        console.log(cred);  
    }

    const handleSubmit = async(e) =>{

        e.preventDefault();
        
        const blankUser = {
            name : '',
            email : '',
            password : ''
        };

        const valid = validateUser(creds);

        if(valid.error){
            alert(valid.error.message);
            setCreds(blankUser);
        }
        else{
            try{
                const result = await axios.post(
                    process.env.REACT_APP_BACKEND +'users',creds
                  );

                  if(result.status === 200){
                    alert("User Created Successfully.");
                    navigate("/Login");
                }
    
                else{
                    alert("Not able to register");
                }
            }
           
           catch(e){
               alert(e.message);
           }
        }
    }
    
    return (<div className = "addTopicos">
                <h2>Register a new user</h2>
                <h3>Enter your data in the form below</h3>
                <form className = "addForm" onSubmit ={handleSubmit}>
                    <div className="addItem">
                        <label htmlFor="name">User</label>
                        <input name = 'name'  onChange = {handleChange} autoFocus className = "addInput" type="text" id="name" />
                    </div>
                    <div className="addItem">
                        <label htmlFor="password">Password</label>
                        <input name = 'password'  onChange = {handleChange} className = "addInput"  type="password" id="password" />
                    </div>
                    <div className="addItem">
                        <label htmlFor="email">Email</label>
                        <input name = 'email' onChange = {handleChange} className = "addInput"  type="text" id="email" />
                    </div>
                    <div className="addItem">
                        <input className = "submitBtn" type="submit" value="Register"/>
                    </div>
                </form>
            </div>);
}

export default Register;