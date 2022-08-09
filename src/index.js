
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import { Profil } from './pages/Myprofil'
import Header from './components/Header'
import Error from './components/Error'
import { AuthProvider } from './components/Auths/Auth'
import { RequireAuth } from './components/Auths/requireAuth'


ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      <Router>
         <Header />
          <Routes >
            <Route  path="/" element={<RequireAuth><Home /></RequireAuth>}/> 
            <Route  path="/loginpage" element={<LoginPage />}/>
            <Route  path="/profil" element={<RequireAuth><Profil /></RequireAuth>}/>
            <Route  path="*" element={<Error />}/>
          </Routes>
      </Router>
      </AuthProvider>
    </React.StrictMode>,
document.getElementById('root')
)