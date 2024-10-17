import React from "react";
import { getAuth } from "firebase/auth";

export default function Test() {
  const Récupérer = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    try {
      if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
      }
    } catch (error) {
      console.error('Erreur', error);
    }
  };
  return (
    <div>
      <p>la page test</p>
      <button onClick={Récupérer}>clique</button>
    </div>
  );
}
