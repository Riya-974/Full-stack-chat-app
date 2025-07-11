import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css"
import App from './App.jsx'
import { AuthProvider } from './context/Auth.jsx'
import { SocketProvider } from './context/Socket.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SocketProvider>
    <App />
    </SocketProvider>
    </AuthProvider>
  </StrictMode>,
)
