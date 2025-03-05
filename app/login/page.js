
"use client"
import Image from "next/image";
import React from "react";

export default function Login() {
    const [data, setData] = React.useState({
        username:"",
        password:""
    })


    const [timeout, setITimeout] = React.useState(150)
    React.useEffect(()=>{
      setInterval(()=>{
        setITimeout((i)=>i-1)
      },1000)  
    },[])


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <h1 class="text-white text-3xl">{timeout}</h1>

            <input className="border border-white"  onChange={(e)=>setData((d)=>({...d, username:e.target?.value}))} ></input>
            <input className="border border-white" onChange={(e)=>setData((d)=>({...d, password:e.target?.value}))} type="password"></input>

            <button onClick={async ()=>{
              console.log(data)

              const response = await fetch("http://localhost:5000/auth/login",{
                method:"POST",
                mode:"cors",
                headers:{
                  "Content-Type":"application/json",
                },
                body:JSON.stringify(data)

              })

              const resp = await response.json()

              localStorage.setItem("auth-token", resp.token)
                
            }}>submit</button>
        </div>


    </div>
  );
}