import React, { useState } from 'react'
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[pswd,setPswd]=useState("");
    let[age,setAge]=useState(0);

    function clear(){
        setName("");
        setEmail("");
        setPswd("");
        setAge(0);
    }

    function save_data(){
        try {
            axios.post("http://localhost:3000/web/reg",{
                name:name,
                email:email,
                password:pswd,
                age:age
            })
            toast.success("Data saved Successfully");
            clear();
        } catch (error) {
            toast.error(error);
            console.log(error);         
        }
    }
  return (
   <>
   <div className='container'>
    <h1>User Register Form</h1>
    <label htmlFor="">Enter your Name</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)} />

    <label htmlFor="">Enter your Email</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />

    <label htmlFor="">Enter your Password</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Password' value={pswd} onChange={(e)=>setPswd(e.target.value)} />

    <label htmlFor="">Enter your Age</label>
    <input className='form-control my-2' type="text" placeholder='Enter your Age' value={age} onChange={(e)=>setAge(e.target.value)} />

<button className='btn btn-primary' onClick={save_data}>Register Now</button>
   </div>
   <ToastContainer/>
   </>
  )
}
