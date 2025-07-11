import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import { ToastContainer } from 'react-toastify'
import Register from './controllers/Register'
import Login from './controllers/Login'
import Home from './page/Home'

const App = () => {

  const browserRouter=createBrowserRouter([


    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return (
    <div className='w-full h-screen'>
<RouterProvider router={browserRouter}/>
      
        <ToastContainer />
      
    </div>
  )
}

export default App
