// Importation du composant Link depuis react-router-dom pour la navigation
import { Link } from "react-router-dom";

// Importation des constantes, y compris les images
import { pictures } from "../../constants/constants";
// Importation des styles spécifiques pour ce composant
import "./Logo.scss";

// Déclaration et exportation du composant Logo
export default function Logo() {
    return (
        // Utilisation du composant Link pour créer un lien vers la page d'accueil
        <Link to="/" className="main-nav-logo">
            {/* Affichage de l'image du logo */}
            <img 
                src={pictures[0].image} // Source de l'image du logo, issue des constantes
                alt={pictures[0].alt}   // Texte alternatif pour l'image
                className="main-nav-logo-image" // Classe CSS pour styler l'image du logo
            />
            {/* Titre caché pour les lecteurs d'écran */}
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
}
