import React from "react";
import { useState } from "react";
import {client} from '../supabase/client'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
const [email,setEmail] = useState("");
const navigate = useNavigate

const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
        const result = await client.auth.signInWithOtp({
            email,
        })
        console.log(result)
    } catch (error) {
        console.error(error)
    }
};

useEffect(()=>{
    if(client.auth.user){
        navigate("/");
    }
}
,[navigate])
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            placeholder="tucorreo@ejemplo.com"
            onChange={(e)=> setEmail(e.target.value)}/>
            <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Send</button>
            </form>
        </div>
    )
}

export default Login