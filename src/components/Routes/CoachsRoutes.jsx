import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Programmation from "../ComponentCoach/Domain/Programmation";
import Marketing from "../ComponentCoach/Domain/Marketing";
import Design from "../ComponentCoach/Domain/Design";
import Domain from "../ComponentCoach/Domain/Domain";
import Dashboard from "../ComponentCoach/Dashboard/Dashboard";
import Livraison from "../ComponentCoach/LivraisonCoach/Livraison";
import Login from "../ComponentCoach/login/Login";
import ForgotPW from "../ComponentCoach/ForgotPW/ForgotPW";
import Sidebar from "../ComponentCoach/SideBar/Sidebar";
import Navbar from "../ComponentCoach/NavBar/Navbar";
import Layout from "../ComponentCoach/Layout/Layout";
import ListeApprenants from "../ComponentCoach/ListeApprenants/ListeApprenants";
import ChatPage from "../ComponentCoach/ChatPage/ChatPage";

function CoachsRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/list_apprenants" element={<ListeApprenants />} />
          <Route path="/messagerie" element={<ChatPage />} />
          <Route path="/domain/*" element={<DomCchRoutes />} />
        </Route>  
    </Routes>
  );
}

// function CoachLayout() {
//   return (
//     <Routes>
//         <Route path="/" element={<Layout />} >
//           <Route index element={<Dashboard />} />
//           <Route path="/Livraison" element={<Livraison />} />
//           <Route path="/list_apprenants" element={<ListeApprenants />} />
//           <Route path="/messagerie" element={<ChatPage />} />
//           <Route path="/domain/*" element={<DomCchRoutes />} />
//         </Route>  
//     </Routes>
//     // <>
//     //   <div className="container-fluid">
//     //     <div className="row">
//     //       <div className="col-lg-2">
//     //         <Sidebar />
//     //       </div>
//     //       <div className="col-lg-10">
//     //         <div className="row bg-primary-subtle ">
//     //           <Navbar />
//     //         </div>
//     //         <Outlet />
//     //       </div>
//     //     </div>
//     //   </div>

      
//     // </>
//   );
// }

function DomCchRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Domain />} />
      <Route path="/programmation" element={<Programmation />} />
      <Route path="/programmation/*" element={<Programmation />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/design" element={<Design />} />
    </Routes>
  );
}

// function TacheProgRoutes() {
//   return (
//     <Routes>
//       <Route path="/programmation" element={<Programmation />} />
//       <Route path="/marketing" element={<Marketing />} />
//       <Route path="/programmation" element={<Design />} />
//     </Routes>
//   );
// }

export default CoachsRoutes;
