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

    async function save_data(){
        try {
            let pass_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}/<>]{8,}$)/
      let username_RE = /^[A-Za-z_-]{3,20}$/
      if (!name || !email || !pswd || age === 0) {
        toast.error("All Fields Are Empty Please Fill All Required Fields")
      } else if(!pass_RE.test(pswd)) {
        toast.error("Password Invalid")
      } else if(!username_RE.test(name)) {
        toast.error("Username Invalid")
      } else if(age < 18) {
        toast.error("Age Must Be Greater Than 18")
      } else {
                await axios.post("http://localhost:3000/web/reg",{
            name:name,
            email:email,
            password:pswd,
            age:age
        })
        console.log("data save succesfully")
        toast.success("data enter successfully")
        clear()

            }
           

        } catch (error) {
            if (error.status===409) {
                toast.error("Email Alredy Exist")
            } else {
                toast.error(error)
                console.log(error)
            }            
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
