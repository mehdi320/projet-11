// Importation de PropTypes pour la vérification des types de props
import PropTypes from "prop-types";

// Importation du fichier de styles CSS (ou SCSS dans ce cas) pour ce composant
import "./Button.scss";

// Déclaration et exportation du composant Button
// Ce composant prend une prop `children` qui est le contenu à afficher à l'intérieur du bouton
export default function Button({ children }) {
    return (
        // Wrapper pour le bouton, appliquant des styles additionnels
        <div className="transaction-content-wrapper cta">
            {/* Bouton qui affiche les enfants passés en prop */}
            <button className="transaction-button">{children}</button>
        </div>
    );
}

// Définition des types de props pour le composant Button
Button.propTypes = {
    // `children` est une prop obligatoire et doit être de type node (tout ce qui peut être rendu, comme des éléments React, des chaînes de caractères, etc.)
    children: PropTypes.node.isRequired,
};
