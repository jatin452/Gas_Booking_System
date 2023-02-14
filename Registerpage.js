import React, { useState } from "react";
import "./Registerpage.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Registerpage = () => {
    const history=useNavigate()
    const [user, setUser] = useState({
        name:"",
        mobile:"",
        aadhar:"",
        password:"",
        reEnterPassword:""
    })

    const Handlechange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const register = () =>{
        const { name,mobile,aadhar,password,reEnterPassword } = user
        if(name && mobile && aadhar && password && (password===reEnterPassword)){
            axios.post("http://localhost:9002/register",user)
            .then(res => {
                alert(res.data.message)
                history("/login")
            })
        }else{
            alert("Invalid Input")
        }
        
    }
    return(
        <div style={{width:"100%",height:"100%",background:"orange"}}>
        <div className="register">
            {console.log("User",user)}
            <h1>Gas Booking Form (New User)</h1>
            <input type="text" name="name" value={user.name} autoComplete="off" placeholder="Your Name" onChange={Handlechange} required ></input>
            <input type="tel" name="mobile" value={user.mobile} autoComplete="off" minLength={"10"} maxLength={"10"} placeholder="Your Mobile Number" required onChange={Handlechange}></input>
            <input type="tel" name="aadhar" value={user.aadhar} autoComplete="off" minLength={"12"} maxLength={"12"} required placeholder="Your Aadhar Number" onChange={Handlechange}></input>
            <input type="text" name="password" value={user.password} autocomplete="off" placeholder="Your Address" onChange={Handlechange} required></input>
            <input type="text" name="reEnterPassword" value={user.reEnterPassword} autocomplete="off" placeholder="Re-enter Address" onChange={Handlechange} required></input>
            <div className="button" onClick={register}>Book as new user</div>
            <div><b>OR</b></div>
            <div>------------------</div>
            <div><i>If Existing User</i></div>
            <div className="button" onClick={()=>history("/login")}>Login</div>
        </div>
        </div>
    )
}

export default Registerpage