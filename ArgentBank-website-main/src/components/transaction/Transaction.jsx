// Importation du composant Button pour utilisation dans ce composant
import Button from "../button/Button";
// Importation des styles spécifiques pour ce composant
import "./Transaction.scss";

// Déclaration et exportation du composant Transaction
export default function Transaction(children) {
    return (
        // Section principale avec la classe CSS 'transaction' pour le style
        <section className="transaction">
            {/* Conteneur pour le contenu de la transaction avec une classe CSS pour le style */}
            <div className="transaction-content-wrapper">
                {/* Titre de la transaction */}
                <h3 className="transaction-title">{children.title}</h3>
                {/* Montant de la transaction */}
                <p className="transaction-amount">{children.amount}</p>
                {/* Description de la transaction */}
                <p className="transaction-amount-description">{children.description}</p>
            </div>
            {/* Bouton pour afficher les transactions */}
            <Button>View transactions</Button>
        </section>
    );
}
