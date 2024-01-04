import { Link } from "react-router-dom" ; 

function ErrorPage() {
    return (
        <div className="errorpage pageContent">
            <div className="errorpage__title">404</div>
            <div className="errorpage__text">Oups ! La page que vous demandez n'existe pas</div>
            <Link to="/" className="errorpage__link">Retournez sur la page d'accueil</Link>
        </div>
    )
}
export default ErrorPage; 