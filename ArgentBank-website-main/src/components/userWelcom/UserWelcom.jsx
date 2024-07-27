// Importation des hooks et composants nécessaires
import { useState } from "react";
import { useSelector } from "react-redux";
import EditName from "../editName/EditName";

// Importation des styles spécifiques pour ce composant
import "./UserWelcom.scss";

// Déclaration et exportation du composant UserWelcom
export default function UserWelcom() {
    // État local pour gérer l'affichage du formulaire d'édition du nom
    const [edit, setEdit] = useState(false);

    // Récupération du nom d'utilisateur depuis le store Redux
    const userName = useSelector((state) => state.user.dataUser.userName);

    return (
        <div className="header">
            {/* Affichage conditionnel basé sur l'état 'edit' */}
            {edit ? (
                // Si 'edit' est vrai, afficher le composant EditName
                <EditName setEdit={setEdit} />
            ) : (
                // Sinon, afficher le message de bienvenue et le bouton d'édition
                <>
                    <h1>
                        Welcome back
                        <br />
                        {userName}!
                    </h1>
                    <button className="edit-button" onClick={() => setEdit(true)}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    );
}
