// Importation des dépendances
import "./EditName.scss"; // Importation des styles pour ce composant
import PropTypes from "prop-types"; // Importation pour vérifier les types de props
import { useState } from "react"; // Importation du hook useState pour gérer l'état local
import { userEditProfile } from "../../store/api"; // Importation de la fonction API pour éditer le profil utilisateur
import { useDispatch, useSelector } from "react-redux"; // Importation des hooks de Redux pour dispatcher des actions et sélectionner des états
import { setUser } from "../../store/actions/userActions"; // Importation de l'action Redux pour définir les informations de l'utilisateur

// Déclaration et exportation du composant EditName
export default function EditName({ setEdit }) {
    // Déclaration de l'état local pour le nom d'utilisateur
    const [username, getUsernameChange] = useState("");

    // Initialisation du dispatch de Redux
    const dispatch = useDispatch();

    // Sélection de différentes parties de l'état utilisateur depuis Redux
    const token = useSelector((state) => state.user.token);
    const userName = useSelector((state) => state.user.dataUser.userName);
    const firstName = useSelector((state) => state.user.dataUser.firstName);
    const lastName = useSelector((state) => state.user.dataUser.lastName);

    // Fonction asynchrone pour sauvegarder les modifications
    async function onSave(e) {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        try {
            // Appel à l'API pour éditer le profil utilisateur
            const response = await userEditProfile(token, username);
            console.log(response); // Log de la réponse pour le débogage
            if (response.status === 200) {
                // Si la réponse est réussie, on met à jour l'état utilisateur dans Redux
                dispatch(setUser(response.body));
                // On sort du mode édition
                setEdit(false);
            }
        } catch (error) {
            console.log(error); // Log de l'erreur pour le débogage
        }
    }

    // Fonction pour annuler l'édition et sortir du mode édition
    function cancel(e) {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        setEdit(false); // Sort du mode édition
    }

    // Rendu du formulaire d'édition
    return (
        <form className="form-edit">
            <h2>Edit user info</h2>
            <div className="input-edit">
                <label htmlFor="username">User name :</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => getUsernameChange(e.target.value)} // Mise à jour de l'état local lors du changement de la valeur de l'input
                    required
                    placeholder={userName} // Placeholder affichant le nom d'utilisateur actuel
                />
            </div>
            <div className="input-edit">
                <label htmlFor="firstname">First name :</label>
                <input type="text" id="firstname" disabled placeholder={firstName} /> {/* Champ désactivé affichant le prénom */}
            </div>
            <div className="input-edit">
                <label htmlFor="lastname">Last name :</label>
                <input type="text" id="lastname" disabled placeholder={lastName} /> {/* Champ désactivé affichant le nom de famille */}
            </div>
            <div className="btn-edit">
                <button onClick={onSave}>Save</button> {/* Bouton pour sauvegarder les modifications */}
                <button onClick={cancel}>Cancel</button> {/* Bouton pour annuler l'édition */}
            </div>
        </form>
    );
}

// Définition des types de props pour le composant EditName
EditName.propTypes = {
    setEdit: PropTypes.func.isRequired, // La prop `setEdit` est une fonction requise
};
