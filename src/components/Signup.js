import React from "react";

export default function Signup() {

    const senddata = async (event) => {
        console.log('synchroniser');
        event.preventDefault();

    }


  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Inscription</h2>
        <form className="form" onSubmit={senddata}>
          <div className="mb-3">
            <label className="form-label">Prénom</label>
            <input type="text" className="form-control" placeholder="Entrez votre prénom" />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" placeholder="Entrez votre nom" />
          </div>

          <div className="mb-3">
          <label className="form-label">Adresse mail</label>
          <input type="email" className="form-control" placeholder="Entrez votre adresse mail"/>
          </div>

          <div className="mb-3">
            <label className="form-label">Âge</label>
            <input type="number" className="form-control" placeholder="Entrez votre âge" />
          </div>

          <div className="mb-3">
            <label className="form-label">Sexe</label>
            <select className="form-select">
              <option>Masculin</option>
              <option>Féminin</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Entrez votre mots de passe"/>
          </div>

          <button type="submit" className="btn btn-primary w-100">Envoyer</button>
        </form>
      </div>
  );
}
