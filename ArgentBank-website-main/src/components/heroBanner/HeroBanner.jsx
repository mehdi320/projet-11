// Importation des styles pour ce composant
import "./HeroBanner.scss";

// Déclaration et exportation du composant HeroBanner
export default function HeroBanner() {
    return (
        // Conteneur principal de la bannière
        <div className="hero">
            {/* Section pour le contenu de la bannière */}
            <section className="hero-content">
                {/* Titre de niveau 2 pour les lecteurs d'écran uniquement */}
                <h2 className="sr-only">Promoted Content</h2>
                {/* Sous-titres de la bannière */}
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                {/* Texte d'invitation */}
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}
