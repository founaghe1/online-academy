import React from 'react';
import { Route, Routes } from "react-router-dom";
import Domain from '../ComponentApprenant/DomainApprnt/DomainApprt';
import Programmation from '../ComponentApprenant/DomainApprnt/ProgrammationApprt';
import Marketing from '../ComponentApprenant/DomainApprnt/MarketingApprt';
import Design from '../ComponentApprenant/DomainApprnt/DesignApprt';
import Voirlivraison from '../ComponentApprenant/Livraisons/Voirlivraison';
import LayoutApp from '../ComponentApprenant/Layout/LayoutApp';
import StudentDashboard from '../ComponentApprenant/StudentDashboard/StudentDashboard';
import Login from '../ComponentCoach/login/Login';
import ForgotPW from '../ComponentCoach/ForgotPW/ForgotPW';
import CourCard from '../ComponentApprenant/StudentDashboard/courCard/CourCard';

function ApprenantRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPW" element={<ForgotPW />} />
        <Route path="/cch/dashboard/*" element={<ApprenentLayout />} />
    </Routes>
  )
}

function ApprenentLayout() {
    return (
      <Routes>
          <Route path="/" element={<LayoutApp />} >
            <Route index element={<StudentDashboard />} />
            <Route path="/Livraison" element={<Voirlivraison />} />
            <Route path="/cours" element={<CourCard />} />
          </Route>  
      </Routes>
    );
  }


function DomAppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Domain />} />
        <Route path="/programmation" element={<Programmation />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    );
  }

export default ApprenantRoutes