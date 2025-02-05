import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './appwrite/auth.js'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'




function App() {

  // loading
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
    <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
      <div className="w-full block bg-amber-300">
        <Header />
        <main>
          {/* {TODO : <Outlet />} */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null

}

export default App
