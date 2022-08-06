
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import { Profile } from './components/profile'
import Header from './components/Header'
import Error from './components/Error'
import { AuthProvider } from './components/Auth'
import { RequireAuth } from './components/requireAuth'
import LoginForm from './components/Log/LoginForm'

ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      <Router>
         <Header />
          <Routes >
            <Route  path="/" element={<RequireAuth><Home /></RequireAuth>}/> 
            <Route  path="/loginpage" element={<LoginPage />}/>
            <Route  path="/profile" element={<RequireAuth><Profile /></RequireAuth>}/>
            <Route  path="/login" element={<LoginForm />}/>
            <Route  path="*" element={<Error />}/>
          </Routes>
      </Router>
      </AuthProvider>
    </React.StrictMode>,
document.getElementById('root')
)