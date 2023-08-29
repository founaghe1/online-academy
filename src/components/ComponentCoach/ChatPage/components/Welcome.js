import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../../../firebase/Firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import logo from "../../../../medias/logo.jpeg"

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Bienvenue dans votre espace messagerie.</h2>
      <img src={logo} alt="logo online academy" width={100} height={100} />
      <p>Pour plus de sécurité et de confidentialité veillez vous connecter avec Google .</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
