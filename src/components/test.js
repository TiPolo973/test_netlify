import React,{useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../config/firebase';



export default function Test() 
{

    const Récupérer = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "user"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          });
        } catch (error) {
          console.error("Erreur lors de la récupération des données : ", error);
        }
      };


    return(
        <div>
            <p>
                la page test
            </p>
            <button onClick={Récupérer}>clique</button>
        </div>
    )
}