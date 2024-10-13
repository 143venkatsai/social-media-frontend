import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/Home"
import UserForm from "./components/UserForm"
import AdminDashboard from "./components/AdminDashboard"
import AdminLogin from "./components/AdminLogin"

const App = () =>(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<Home />} />
        <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin-login" element={<AdminLogin />} />
        <Route exact path="/user" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
)

export default App;
