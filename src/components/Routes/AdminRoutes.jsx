import React from 'react';
import Admin from '../ComponentAdmin/admin/Admin';
import { Routes, Route } from "react-router-dom";
import Login from '../ComponentCoach/login/Login';
import ForgotPW from '../ComponentCoach/ForgotPW/ForgotPW';


function AdminRoutes() {
  return (
    <Routes>
        
        <Route path="/admin/dashboard" element={<Admin />} />
    </Routes>
  )
}

export default AdminRoutes