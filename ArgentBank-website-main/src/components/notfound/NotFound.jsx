// Importation des styles spécifiques pour ce composant
import "./NotFound.scss";
// Importation du composant Button pour utilisation dans ce composant
import Button from "../button/Button";
// Importation de Link depuis react-router-dom pour la navigation
import { Link } from "react-router-dom";

// Déclaration et exportation du composant NotFound
export default function NotFound() {
    return (
        // Conteneur principal avec la classe CSS 'error-container' et 'bg-dark' pour le style
        <div className="error-container bg-dark">
            {/* Titre de l'erreur */}
            <h1 className="error-title">404</h1>
            {/* Message d'erreur */}
            <p className="error-text">Sorry, we couldn&apos;t find this page.</p>
            {/* Lien vers la page d'accueil avec un bouton */}
            <Link to="/">
                <Button>Back to Homepage</Button>
            </Link>
        </div>
    );
}
