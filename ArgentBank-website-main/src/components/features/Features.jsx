import "./Features.scss"; // Importation du fichier de styles SCSS

// Définition du composant fonctionnel Features
export default function Features(children) {
    return (
        <div className="feature-item"> {/* Conteneur principal pour un élément de fonctionnalité */}
            <img className="feature-icon" src={children.image} alt={children.alt} /> {/* Image de l'icône de la fonctionnalité */}
            <h3 className="feature-item-title">{children.title}</h3> {/* Titre de la fonctionnalité */}
            <p>{children.description}</p> {/* Description de la fonctionnalité */}
        </div>
    );
}