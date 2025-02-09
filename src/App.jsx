import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './appwrite/auth.js'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return !loading ? (
    <div className="flex flex-col min-h-screen content-between bg-black">
        <Header />
        <main className='flex-grow mx-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl'>
          <Outlet />
        </main>
        <Footer />
    </div>
  ) : null
}

export default App
