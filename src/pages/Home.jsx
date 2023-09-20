import React from 'react'
import { client } from '../supabase/client'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){

    const navigate = useNavigate();

    useEffect(()=>{
        if(!client.auth.user){
            navigate('/login')
        }
    },[navigate]);

    return (
        <div>Home
            <button onClick={()=> client.auth.signOut()}>Login</button>
        </div>
    );
}

export default Home