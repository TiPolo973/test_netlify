import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";

export default function Signin() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      signInWithEmailAndPassword(auth, mail, password).then(
        (userCredential) => {
          const user = userCredential.user;
        }
      );
    } catch (error) {
      console.error("Une erreur :", error);
    }
  };


const déco = async () =>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('déconnexion réussie');
      })
      .catch((error) => {
        console.error('erreur :', error);
      });
}
 

  return (
    <div className="container mt-5">
      <h2>Connection</h2>
      <form className="form" onSubmit={signin}>
        <div className="mb-3">
          <label className="form-label">Adresse mail</label>
          <input
            placeholder="Votre email"
            className="form-control"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mots de passe</label>
          <input
            className="form-control"
            placeholder="Votre mots de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Envoyer
        </button>
      </form>
      <button className="btn btn-primary" onClick={déco}>Déconnexion</button>
    </div>
  );
}
