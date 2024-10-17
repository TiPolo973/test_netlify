export default function Signin() 
{
    return(
        <div className="container mt-5">
        <h2>Connection</h2>
        <form className="form">

        <div className="mb-3">
        <label className="form-label">Adresse mail</label>
        <input placeholder="Votre email" className="form-control"/>
        </div>

        <div className="mb-3">
        <label className="form-label">Mots de passe</label>
        <input className="form-control" placeholder="Votre mots de passe"/>
        </div>
        
        <button className="btn btn-primary w-100" type="submit" >Envoyer</button>

        </form>
        </div>
    )
}