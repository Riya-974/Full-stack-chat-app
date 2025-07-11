import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext=createContext()

const AuthProvider=({children})=>{

const [auth, setAuth] = useState({
    user:null,
    token:""
})


const [loading, setloading] = useState(true)

useEffect(() => {
 const data=localStorage.getItem("auth")
 if(data){
    const parse=JSON.parse(data)
    setAuth(parse)
 }

 setloading(false)
}, [])

if(loading){
    return <div>LOADING</div>
}







    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth=()=>useContext(AuthContext)

export  {useAuth,AuthProvider}