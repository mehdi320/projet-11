// Importation des modules nécessaires
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken, setUser } from "../../store/actions/userActions";
import Logo from "../logo/Logo";

// Importation des styles pour ce composant
import "./Header.scss";

// Déclaration et exportation du composant Header
export default function Header() {
    // Sélectionne les états `isLogin` et `userName` du store Redux
    const isLogged = useSelector((state) => state.user.isLogin);
    const userName = useSelector((state) => state.user.dataUser.userName);

    // Déclaration de la variable pour les options de connexion/déconnexion
    let logOption = null;

    // Utilisation de useDispatch pour dispatcher des actions Redux et useNavigate pour naviguer
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fonction pour gérer la déconnexion
    const logout = () => {
        dispatch(setLogin(false));
        dispatch(setToken(null));
        dispatch(setUser(""));
        navigate("/");
    };

    // Définir les options de navigation en fonction de l'état de connexion
    if (isLogged === false) {
        logOption = (
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
        );
    }

    if (isLogged === true) {
        logOption = (
            <div>
                <Link to="/userLogin" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    <span className="main-nav-name">{userName}</span>
                </Link>
                <Link to="/">
                    <button className="main-nav-item btn-logout" onClick={logout}>
                        <i className="fa fa-sign-out"></i>
                        Logout
                    </button>
                </Link>
            </div>
        );
    }

    // Rendu du composant Header
    return (
        <header>
            <nav className="main-nav">
                {/* Affichage du logo */}
                <Logo />
                {/* Affichage des options de connexion/déconnexion */}
                {logOption}
            </nav>
        </header>
    );
}
