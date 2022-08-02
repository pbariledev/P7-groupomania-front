
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyProfil from './pages/MyProfil'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Routes >
              <Route  path="/" element={<Home />}/> 
              <Route  path="/MyProfil" element={<MyProfil />}/>
            </Routes>
        </Router>

    </React.StrictMode>,
document.getElementById('root')
)