import React,{useState} from "react";
import "./Loginpage.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";
const Loginpage = ({setLoginUser}) => {

    const history=useNavigate();

    const [user, setUser] = useState({
        mobile:"",
        aadhar:"",
        password:"",
        password1:""
    })

    const Handlechange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const login = () =>{
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user);
            
        });
        history("/home");
    }
    return(
        <div style={{width:"100%",height:"100%",background:"orange"}}>

        
        <div className="login">
            <h1><b>Book a Gas Cylinder (Existing User)</b></h1>
            <input type="text" name="password" value={user.password} required placeholder="Enter your name" onChange={Handlechange}></input>
            <input type="tel" name="mobile" value={user.mobile} required minlength={"10"} maxlength={"10"} placeholder="Enter your Mobile Number" onChange={Handlechange} autoComplete="off"></input>
            <input type="tel" name="aadhar" value={user.aadhar} required minlength={"12"} maxlength={"12"} placeholder="Enter your Aadhar Number" onChange={Handlechange} autoComplete="off"></input>
            
            
            <input type="text" name="password1" value={user.password1} placeholder="Your Address (If Changed)" onChange={Handlechange}></input>
            <div className="button" onClick={login}>Login</div>
            <div><b>OR</b></div>
            <div>------------------</div>
            <div><i>If New User</i></div>
            <div className="button" onClick={()=> history("/")}>Register</div>
        </div>
        </div>
    )
}

export default Loginpage