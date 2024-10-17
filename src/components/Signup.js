import { addDoc, collection  } from "firebase/firestore";
import React,{useState} from "react";
import { db} from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [age, setAge] = useState('');
    const [sexe, setSexe] = useState('');
    const [password, setPassword] = useState('');

    const senddata = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "user"),{
                prenom: prenom,
                nom: nom,
                age: age,
                sexe: sexe,
                adresse: adresse,
                password: password
            });
            console.log('Document ID : ', docRef.id);
            
        } catch (error) {
            console.error('Erreur lors de lajout : ', error);
        }

    }

    const signup = async (event) => {
        event.preventDefault();
        try {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, adresse, password)
            .then((userCredential)=>{
                const user = userCredential.user;
            })
        } catch (error) {
            console.error("Une erreur s'est produite", error);
            
        }
    }


  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Inscription</h2>
        <form className="form" onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label">Prénom</label>
            <input type="text" className="form-control" placeholder="Entrez votre prénom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" placeholder="Entrez votre nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
          </div>

          <div className="mb-3">
          <label className="form-label">Adresse mail</label>
          <input type="email" className="form-control" placeholder="Entrez votre adresse mail" value={adresse} onChange={(e)=>setAdresse(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Âge</label>
            <input type="number" className="form-control" placeholder="Entrez votre âge" value={age} onChange={(e)=>setAge(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Sexe</label>
            <select className="form-select" value={sexe} onChange={(e)=>setSexe(e.target.value)}>
              <option>Masculin</option>
              <option>Féminin</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Entrez votre mots de passe" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <button type="submit" className="btn btn-primary w-100">Envoyer</button>
        </form>
      </div>
  );
}
