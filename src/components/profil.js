import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Test() {


  const Récupérer = async (event) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log('Personne est connecter');
    }
  });
  };
  return (
    <div>
      <p>la page test</p>
      <button onClick={Récupérer}>clique</button>
    </div>
  );
}
