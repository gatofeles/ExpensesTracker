import axios from 'axios';
import React, {useState} from "react";
import './Login.css';
import {useNavigate} from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    const login = async (e) => {

        e.preventDefault();
        const creds = {
            email:email,
            password:password
        }

        try{
            const result = await axios.post(
                process.env.REACT_APP_BACKEND +'users/login',creds
              );
              //console.log("from logi");
              //console.log(result.data);
              if(result.status === 200){
                
                localStorage.setItem("finance-token", result.data.token);
                localStorage.setItem("finance-user", result.data.userId);
                //console.log(localStorage.getItem("finance-token"));
                navigate("/");
            }

            else{
                alert("Not able to login");
            }
        }
       
       catch{
           alert("Not able to login");
       }
        
    }


    return(
        <div className="containerLogin">
            <img id = "loginImage" src={require("../../images/coelhoLogin.png")} alt="Logo"/>
            <div className="title">Finance App</div>
                <form className="form" onSubmit ={login}>
                    <label htmlFor="userName">Email</label>
                    <input onChange = {getEmail} className = "loginInput" type="text" id="fname" name="userName"/>
                    <label htmlFor="senha">Password</label>
                    <input onChange = {getPassword} className = "loginInput" type="password" id="senha" name="password"/>
                <div className="buttons">
                    <input id = 'loginBtn' className = "submitBtn" type="submit" name="Login" value="Login"/>
                    <div id = 'registerBtn' className = "submitBtn"> Register </div>
                </div>
                </form>
        </div>
        
    );
}

export default Login;


