// Importation des hooks et fonctions nécessaires
import { useState } from "react";
import { fetchLogin, userProfile } from "../../store/api";
import { useDispatch } from "react-redux";
import { setLogin, setToken, setUser } from "../../store/actions/userActions";
import { useNavigate } from "react-router-dom";

// Importation des styles pour ce composant
import "./Form.scss";

// Déclaration et exportation du composant Form
export default function Form() {
    // Définition des états locaux pour email, password, rememberMe et errorLoginMessage
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe") === "true");
    const [errorLoginMessage, setErrorLoginMessage] = useState(false);

    // Utilisation de useDispatch pour dispatcher des actions et useNavigate pour naviguer
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction pour gérer la soumission du formulaire
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // Appel de l'API pour tenter de se connecter avec l'email et le mot de passe fournis
            const response = await fetchLogin({
                email: email,
                password: password,
            });

            // Si la réponse est positive, mise à jour des états et redirection
            if (response.status === 200) {
                dispatch(setLogin(true));
                dispatch(setToken(response.body.token));
                const profile = await userProfile(response.body.token);
                const data = await profile.body;
                dispatch(setUser(data));
                navigate("/userLogin");
                console.log(data);
                console.log(response.body.token);

                // Sauvegarde des informations de connexion si rememberMe est coché
                if (rememberMe) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("rememberMe", "true");
                } else {
                    localStorage.removeItem("email");
                    localStorage.removeItem("password");
                    localStorage.setItem("rememberMe", "false");
                }
            }

            // Si la réponse est négative, affichage d'un message d'erreur
            if (response.status === 400) {
                setErrorLoginMessage(true);
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Affichage d'un message d'erreur si les informations de connexion sont incorrectes
    let errorMessage = null;
    if (errorLoginMessage) {
        errorMessage = <p style={{ color: "red" }}>Error in Email or password! Please try again</p>;
    }

    // Rendu du formulaire
    return (
        <form onSubmit={handleSubmit}>
            {/* Champ pour l'email */}
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            {/* Champ pour le mot de passe */}
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {/* Checkbox pour se souvenir des informations de connexion */}
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Bouton de soumission */}
            <button type="submit" className="sign-in-button">
                Sign in
            </button>
            {/* Affichage du message d'erreur */}
            {errorMessage}
        </form>
    );
}
