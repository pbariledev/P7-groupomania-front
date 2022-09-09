
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
import Test from './pages/Test'
import "./styles/index.scss";
import CreatePost from './components/Post/CreatePost'

ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      <Router>
         <Header />
         <div className='global_container'>
            <Routes >
              <Route  path="/" element={<RequireAuth><Home /></RequireAuth>}/> 
              <Route  path="/loginpage" element={<LoginPage />}/>
              <Route  path="/test" element={<Test />}/>
              <Route  path="/profil" element={<RequireAuth><Profil /></RequireAuth>}/>
              <Route  path="/newPost" element={<RequireAuth><CreatePost /></RequireAuth>}/>
              <Route  path="*" element={<Error />}/>
            </Routes>
          </div>
      </Router>
      </AuthProvider>
    </React.StrictMode>,
document.getElementById('root')
)