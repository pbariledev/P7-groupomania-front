
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import { Profile } from './components/profile'
import Header from './components/Header'
import Error from './components/Error'
import { AuthProvider } from './components/Auth'
import { Login } from './components/login'

ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      <Router>
         <Header />
          <Routes >
            <Route  path="/" element={<Home />}/> 
            <Route  path="/loginpage" element={<LoginPage />}/>
            <Route  path="/profile" element={<Profile />}/>
            <Route  path="/login" element={<Login />}/>
            <Route  path="*" element={<Error />}/>
          </Routes>
      </Router>
      </AuthProvider>
    </React.StrictMode>,
document.getElementById('root')
)