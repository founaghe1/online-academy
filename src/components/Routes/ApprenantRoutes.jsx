import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import Domain from '../ComponentApprenant/DomainApprnt/DomainApprt';
import Programmation from '../ComponentApprenant/DomainApprnt/ProgrammationApprt';
import Marketing from '../ComponentApprenant/DomainApprnt/MarketingApprt';
import Design from '../ComponentApprenant/DomainApprnt/DesignApprt';
import Voirlivraison from '../ComponentApprenant/Livraisons/Voirlivraison';
import LayoutApp from '../ComponentApprenant/Layout/LayoutApp';
import StudentDashboard from '../ComponentApprenant/StudentDashboard/StudentDashboard';
import Login from '../ComponentCoach/login/Login';
import ForgotPW from '../ComponentCoach/ForgotPW/ForgotPW';
import Sousdomain from '../ComponentApprenant/DomainApprnt/Sousdomain';
import Voircour from '../ComponentApprenant/VoirCours/VoirCour';
import Quizzes from '../ComponentApprenant/VoirCours/Quizzes';
import CourBoostrap from '../ComponentApprenant/VoirCours/CourBoostrap';
import QuizzBoostrap from '../ComponentApprenant/VoirCours/QuizzBoostrap';
import Voircourjs from '../ComponentApprenant/VoirCours/VoircourJS';
import QuizzJs from '../ComponentApprenant/VoirCours/QuizzJs';
import Voircourphp from '../ComponentApprenant/VoirCours/Voircourphp';
import QuizzPhp from '../ComponentApprenant/VoirCours/QuizzPhp';
import Voircourdiago from '../ComponentApprenant/VoirCours/Voircourdiago';
import Quizzdjango from '../ComponentApprenant/VoirCours/Quizzdjango';
import Voircourc from '../ComponentApprenant/VoirCours/Voircousc++';
import QuizzC from '../ComponentApprenant/VoirCours/QuizzC++';
import Voircourmarketud from '../ComponentApprenant/VoirCours/Voircourmarketud';
import QuizzMarketinDigital from '../ComponentApprenant/VoirCours/QuizzMarketinDigital';
import Voircourmarkdevelo from '../ComponentApprenant/VoirCours/Voircourmarkdevelo';
import Quizzresauxsocia from '../ComponentApprenant/VoirCours/Quizzresauxsocia';
import Courbooster from '../ComponentApprenant/VoirCours/Courbooster';
import Quizzbooster from '../ComponentApprenant/VoirCours/QuizzBooter';
import Designinitialisa from '../ComponentApprenant/VoirCours/Designinitialisa'
import Quizzinitialisation from '../ComponentApprenant/VoirCours/Quizzinitialisation';
import Ulistration from '../ComponentApprenant/VoirCours/ulistratindesi';
import Quizzullustrator from '../ComponentApprenant/VoirCours/Quizzullustrator';
import Designpro from '../ComponentApprenant/VoirCours/Designpro';
import Quizzpro from '../ComponentApprenant/VoirCours/Quizzpro';
import Voircourdegiadop from '../ComponentApprenant/VoirCours/Voircourdegiadop';
import QuizzPhotos from '../ComponentApprenant/VoirCours/QuizzPhotos';



function ApprenantRoutes() {
  return (
    
    <Routes>
          <Route path="/" element={<LayoutApp />} >
            <Route index element={<StudentDashboard />} />
            <Route path="/livraison" element={<Voirlivraison />} />
            <Route path="/cours" element={<Sousdomain />} />
            <Route path="/cours/*" element={<TachesRoutes />} />
          </Route>  
      </Routes>
    
  )
}

// function ApprenentLayout() {
//     return (
//       // <Routes>
//       //     <Route path="/" element={<LayoutApp />} >
//       //       <Route index element={<StudentDashboard />} />
//       //       <Route path="/livraison" element={<Voirlivraison />} />
//       //       <Route path="/cours" element={<Sousdomain />} />
//       //       <Route path="/cours/*" element={<TachesRoutes />} />
//       //     </Route>  
//       // </Routes>
//     );
//   }


function TachesRoutes() {
    return (
      <Routes>
        <Route path="/html-css" element={<Voircour />} />
        <Route path="/html-css-Quizz" element={<Quizzes />} />
        <Route path="/bootstrap" element={<CourBoostrap />} />
        <Route path="/bootstrap-Quizz" element={<QuizzBoostrap />} />
        <Route path="/javascript" element={<Voircourjs />} />
        <Route path="/javascript-Quizz" element={<QuizzJs />} />
        <Route path="/php" element={<Voircourphp />} />
        <Route path="/php-Quizz" element={<QuizzPhp />} />
        <Route path="/django" element={<Voircourdiago />} />
        <Route path="/django-Quizz" element={<Quizzdjango />} />
        <Route path="/csharp" element={<Voircourc />} />
        <Route path="/csharp-Quizz" element={<QuizzC />} />
        <Route path="/introduction-au-marketing-digital" element={<Voircourmarketud />} />
        <Route path="/introduction-au-marketing-digital-Quizz" element={<QuizzMarketinDigital />} />
        <Route path="/se-démarquer-sur-les-réseaux sociaux" element={<Voircourmarkdevelo />} />
        <Route path="/se-démarquer-sur-les-réseaux sociaux-Quizz" element={<Quizzresauxsocia />} />
        <Route path="/comment-booster-ses-stats" element={<Courbooster />} />
        <Route path="/comment-booster-ses-stats-Quizz" element={<Quizzbooster />} />
        <Route path="/apprendre-adobe-photoshop" element={<Designinitialisa />} />
        <Route path="/apprendre-adobe-photoshop-Quizz" element={<QuizzPhotos />} />
        <Route path="/apprendre-adobe-illustrator" element={<Ulistration />} />
        <Route path="/apprendre-adobe-illustrator-Quizz" element={<Quizzullustrator />} />
        <Route path="/apprendre-adobe-premier-pro" element={<Designpro />} />
        <Route path="/apprendre-adobe-premier-pro-Quizz" element={<Quizzpro />} />
        <Route path="/initiation-au-3D" element={<Voircourdegiadop />} />
        <Route path="/initiation-au-3D-Quizz" element={<Quizzinitialisation />} />
      </Routes>
    );
  }

export default ApprenantRoutes