import { Link } from "react-router-dom";

import { pictures } from "../../constants/constants";
import "./Logo.scss";

export default function Logo() {
    return (
        <Link to="/" className="main-nav-logo">
            <img src={pictures[0].image} alt={pictures[0].alt} className="main-nav-logo-image" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
}
