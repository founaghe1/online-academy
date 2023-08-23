import React, { useState } from 'react';
import Programmation from './ProgrammationApprt';
import Marketing from './MarketingApprt';
import Design from './DesignApprt';
import CourCard from '../StudentDashboard/courCard/CourCard';

const Sousdomain = () => {

    const [user, setUser] = useState(null); // État de l'utilisateur (null pour non connecté)
  const [authorizedDomain, setAuthorizedDomain] = useState(['design']);

  let userDomain = null;
    if (authorizedDomain.includes('programmation')) {
      userDomain = <Programmation />;
    } else if (authorizedDomain.includes('marketing')) {
      userDomain = <Marketing />;
    } else if (authorizedDomain.includes('design')) {
      userDomain = <Design />;
    }

  return (
    <>
        <CourCard />
        <div>
         {userDomain}
        </div>
    </>
  )
}

export default Sousdomain