import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Programmation from "../ComponentCoach/Domain/Programmation";
import Marketing from "../ComponentCoach/Domain/Marketing";
import Design from "../ComponentCoach/Domain/Design";
import Domain from "../ComponentCoach/Domain/Domain";
import Dashboard from "../ComponentCoach/Dashboard/Dashboard";
import Livraison from "../ComponentCoach/LivraisonCoach/Livraison";
// import Login from "../ComponentCoach/login/Login";
// import ForgotPW from "../ComponentCoach/ForgotPW/ForgotPW";
// import Sidebar from "../ComponentCoach/SideBar/Sidebar";
// import Navbar from "../ComponentCoach/NavBar/Navbar";
import Layout from "../ComponentCoach/Layout/Layout";
import ListeApprenants from "../ComponentCoach/ListeApprenants/ListeApprenants";
import ChatPage from "../ComponentCoach/ChatPage/ChatPage";
import RecupereCours from "../ComponentCoach/Recuperationcour/RecupereCoursHtmlCss";
import RecuperationCourBootstr from "../ComponentCoach/Recuperationcour/RecuperationCourBootstr"
import RcuperationCourJavascrip from "../ComponentCoach/Recuperationcour/RcuperationCourJavascrip"
import RecuperationCourPHP from "../ComponentCoach/Recuperationcour/RecuperationCourPHP"
import Recuperationdjango from "../ComponentCoach/Recuperationcour/Recuperationdjango"
import RecuperationC from '../ComponentCoach/Recuperationcour/RecuperationC+'
import RecupcourMarketdigi from "../ComponentCoach/Recuperationcour/RecupcourMarketdigi"
import  RecuperatCoursResauxS from "../ComponentCoach/Recuperationcour/RecuperatCoursResauxS"
import RecuperationMarkBooster from "../ComponentCoach/Recuperationcour/RecuperationMarkBooster"
import  RecuperationCourPhotosho from "../ComponentCoach/Recuperationcour/RecuperationCourPhotosho"
import  RecuperationCourDesigIllustra from "../ComponentCoach/Recuperationcour/RecuperationCourDesigIllustra"
import RecuperationDesigPro from "../ComponentCoach/Recuperationcour/RecuperationDesigPro"
import  RecuperationCourdesiginitiat from "../ComponentCoach/Recuperationcour/RecuperationCourdesiginitiat"
import Voircour from "../ComponentApprenant/VoirCours/VoirCour";
import Quizzes from "../ComponentApprenant/VoirCours/Quizzes";
import CourBoostrap from "../ComponentApprenant/VoirCours/CourBoostrap";
import QuizzBoostrap from "../ComponentApprenant/VoirCours/QuizzBoostrap";
import Voircourjs from "../ComponentApprenant/VoirCours/VoircourJS";
import QuizzJs from "../ComponentApprenant/VoirCours/QuizzJs";
import Voircourphp from "../ComponentApprenant/VoirCours/Voircourphp";
import QuizzPhp from "../ComponentApprenant/VoirCours/QuizzPhp";
import Voircourdiago from "../ComponentApprenant/VoirCours/Voircourdiago";
import Quizzdjango from "../ComponentApprenant/VoirCours/Quizzdjango";
import Voircourc from "../ComponentApprenant/VoirCours/Voircousc++";
import QuizzC from "../ComponentApprenant/VoirCours/QuizzC++";
import Voircourmarketud from "../ComponentApprenant/VoirCours/Voircourmarketud";
import QuizzMarketinDigital from "../ComponentApprenant/VoirCours/QuizzMarketinDigital";
import Voircourmarkdevelo from "../ComponentApprenant/VoirCours/Voircourmarkdevelo";
import Quizzresauxsocia from "../ComponentApprenant/VoirCours/Quizzresauxsocia";
import Courbooster from "../ComponentApprenant/VoirCours/Courbooster";
import Quizzbooster from "../ComponentApprenant/VoirCours/QuizzBooter";
import Designinitialisa from "../ComponentApprenant/VoirCours/Designinitialisa";
import Quizzinitialisation from "../ComponentApprenant/VoirCours/Quizzinitialisation";
import Ulistration from "../ComponentApprenant/VoirCours/ulistratindesi";
import Quizzullustrator from "../ComponentApprenant/VoirCours/Quizzullustrator";
import Designpro from "../ComponentApprenant/VoirCours/Designpro";
import Quizzpro from "../ComponentApprenant/VoirCours/Quizzpro";
import Voircourdegiadop from "../ComponentApprenant/VoirCours/Voircourdegiadop";
import QuizzPhotos from "../ComponentApprenant/VoirCours/QuizzPhotos";
import SousDomain from "../ComponentCoach/Domain/SousDomain";
import { db } from "../firebase/Firebase";

import {
  doc,
  getDocs,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  orderBy,
  query,
  where,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

function CoachsRoutes() {

  const sousDomaineCollectionRef = collection(db, "sousdomaines");
  const [sousDomaines, setSousDomaines] = useState([]);

  useEffect(() => {
    const q = query(sousDomaineCollectionRef);
    onSnapshot(q, (querySnapshot) => {
      const sousDomains = [];
      querySnapshot.forEach((doc) => {
        sousDomains.push(doc.data().titre);
      });
      const getSousDomaines = async () => {
        const data = await getDocs(q);
        setSousDomaines(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getSousDomaines();
    }); 
    // eslint-disable-next-line
  }, []);

  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Dashboard />} />
    //     <Route path="/Livraison" element={<Livraison />} />
    //     <Route path="/list_apprenants" element={<ListeApprenants />} />
    //     <Route path="/messagerie" element={<ChatPage />} />
    //     <Route path="/domain" element={<Domain domaines={vosDomaines} />} />
    //     <Route path="/domain/:domaineId" element={<SousDomainesPage />} />
    //   </Route>
    // </Routes>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/Livraison" element={<Livraison />} />
        <Route path="/list_apprenants" element={<ListeApprenants />} />
        <Route path="/messagerie" element={<ChatPage />} />
        <Route path="/domain" element={<Domain />} />
        {sousDomaines.map((sousDomaine) => (
        <Route path="/domain/:domaineId" element={<SousDomain />} />
        ))}
      </Route>
    </Routes>
  );
}

// function CoachLayout() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="/livraison" element={<Livraison />} />
//         <Route path="/list_apprenants" element={<ListeApprenants />} />
//         <Route path="/messagerie" element={<ChatPage />} />
//         <Route path="/domain/*" element={<DomCchRoutes />} />
//       </Route>
//     </Routes>
//   );
// }

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

// function DomCchRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Domain />} />
//       <Route path="/programmation/*" element={<ProgrammationRoutes />} />
//       <Route path="/marketing/*" element={<MarketingRoutes />} />
//       <Route path="/design/*" element={<DesignRoutes />} />
//     </Routes>
//   );
// }

// function ProgrammationRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Programmation />} />
//       <Route path="/html-css" element={<Voircour />} />
//       <Route path="/html-css-Quizz" element={<Quizzes />} />
//       <Route path="/bootstrap" element={<CourBoostrap />} />
//       <Route path="/bootstrap-Quizz" element={<QuizzBoostrap />} />
//       <Route path="/javascript" element={<Voircourjs />} />
//       <Route path="/javascript-Quizz" element={<QuizzJs />} />
//       <Route path="/php" element={<Voircourphp />} />
//       <Route path="/php-Quizz" element={<QuizzPhp />} />
//       <Route path="/django" element={<Voircourdiago />} />
//       <Route path="/django-Quizz" element={<Quizzdjango />} />
//       <Route path="/csharp" element={<Voircourc />} />
//       <Route path="/csharp-Quizz" element={<QuizzC />} />
//     </Routes>
//   );
// }

// function MarketingRoutes() {
//   <Routes>
//     <Route path="/" element={<Marketing />} />
//     <Route
//       path="/introduction-au-marketing-digital"
//       element={<Voircourmarketud />}
//     />
//     <Route
//       path="/introduction-au-marketing-digital-Quizz"
//       element={<QuizzMarketinDigital />}
//     />
//     <Route
//       path="/se-démarquer-sur-les-réseaux sociaux"
//       element={<Voircourmarkdevelo />}
//     />
//     <Route
//       path="/se-démarquer-sur-les-réseaux sociaux-Quizz"
//       element={<Quizzresauxsocia />}
//     />
//     <Route path="/comment-booster-ses-stats" element={<Courbooster />} />
//     <Route path="/comment-booster-ses-stats-Quizz" element={<Quizzbooster />} />
//   </Routes>;
// }

// function DesignRoutes() {
//   <Routes>
//     <Route path="/" element={<Design />} />
//     <Route path="/apprendre-adobe-photoshop" element={<Designinitialisa />} />
//     <Route path="/apprendre-adobe-photoshop-Quizz" element={<QuizzPhotos />} />
//     <Route path="/apprendre-adobe-illustrator" element={<Ulistration />} />
//     <Route
//       path="/apprendre-adobe-illustrator-Quizz"
//       element={<Quizzullustrator />}
//     />
//     <Route path="/apprendre-adobe-premier-pro" element={<Designpro />} />
//     <Route path="/apprendre-adobe-premier-pro-Quizz" element={<Quizzpro />} />
//     <Route path="/initiation-au-3D" element={<Voircourdegiadop />} />
//     <Route path="/initiation-au-3D-Quizz" element={<Quizzinitialisation />} />
//   </Routes>;
// }

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
