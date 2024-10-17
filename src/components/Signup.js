import React from "react";

export default function Signup() {

    const senddata = async (event) => {
        console.log('synchroniser');
        event.preventDefault();

    }


  return (
    <div>
      <form className="form" onSubmit={senddata}>
        <p>Prenom</p>
        <input id="2"/>
        <p>nom</p>
        <input />
        <p>age</p>
        <input />
        <p>sexe</p>
        <input />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
