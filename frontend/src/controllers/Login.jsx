import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../context/Auth'

const Login = () => {
    const navigate=useNavigate()
    const [auth,setAuth]=useAuth()
    const [input, setinput] = useState({
     
        username:"",
        password:"",
        
    })

    const onChangeHandler=(e)=>{
        setinput({...input,[e.target.name]:e.target.value})
    }

    const onSubmitHandler=async(e)=>{
        e.preventDefault()

        try {

            const res=await axios.post("http://localhost:3005/api/v1/user/login",input)

            if(res.data.success){
                toast.success(res.data.message)

                setAuth({
                    ...auth,
                     user:res.data.user,
                     token:res.data.token
                })

                localStorage.setItem("auth",JSON.stringify(res.data))
                navigate("/")
            }else{
                toast.error(res.data.message)
            }
            
            
        } catch (error) {
            console.log(error);
            
            
        }

    }

  return (
    <div className='bg-black  w-[100vw] h-[100vh] flex justify-center align-item-centers '>

      <form  onSubmit={onSubmitHandler}className='w-[70%] h-[45%] bg-sky-800 mt-[200px] md:h-[35%] md:w-[35%]'>
        <div className='text-center mt-[20px]'>
            <h1 className='font-bold text-4xl'>LOGIN FORM</h1>
        </div>
        <div className='W-[50%] h-[30%] text-center'>
           
  <input type="text"  name="username" value={input.username} onChange={onChangeHandler} placeholder='USERNAME' className='w-[90%] p-[10px] border border-gray-700 bg-black hover:border-2 hover:border-sky-600 focus:outline-none  placeholder:text-white rounded-2xl mt-[10px]  '/>

          
             <input type="text" name="password" value={input.password} onChange={onChangeHandler} placeholder='PASSWORD' className='w-[90%] p-[10px] border border-gray-700 bg-black hover:border-2 hover:border-sky-600 focus:outline-none  placeholder:text-white rounded-2xl mt-[10px]  '/>
    


<button type="submit" className='w-[90%] p-[10px] border border-gray-700 bg-sky-700 hover:border-2
 hover:border-sky-600 focus:outline-none  placeholder:text-white rounded-2xl mt-[10px] hover:bg-sky-900 '
>LOGIN</button>

<div>
    <h4>YOU DON'T HAVE A ACCOUNT THEN <Link to="/register">REGISTER</Link></h4>
</div>
        </div>

      </form>
    </div>
  )
}

export default Login
