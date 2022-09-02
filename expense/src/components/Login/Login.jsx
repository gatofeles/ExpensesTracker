import axios from 'axios';
import React, {useState} from "react";
import './Login.css';

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

        const result = await axios.post(
            'https://financeappback.herokuapp.com/users/login',creds
          );
        console.log(result.data);
        
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
                    <input id = 'registerBtn' className = "submitBtn" type="submit" name="Register" value="Register"/>
                </div>
                </form>
        </div>
        
    );
}

export default Login;


