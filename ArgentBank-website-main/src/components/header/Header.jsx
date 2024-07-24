import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken, setUser } from "../../store/actions/userActions";
import Logo from "../logo/Logo";

import "./Header.scss";

export default function Header() {
    const isLogged = useSelector((state) => state.user.isLogin);
    const userName = useSelector((state) => state.user.dataUser.userName);

    let logOption = null;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setLogin(false));
        dispatch(setToken(null));
        dispatch(setUser(""));
        navigate("/");
    };

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

    return (
        <header>
            <nav className="main-nav">
                <Logo />
                {logOption}
            </nav>
        </header>
    );
}
