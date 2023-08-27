import propTypes from "prop-types";
import {Link} from 'react-router-dom'

// fixing the datatype of props | errors will be shown on console
Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about_us: propTypes.string.isRequired,
};

Navbar.defaultProps = {
    title: "Set Title Here",
    about_us: "About",
};

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {" "}
                        {props.title}{" "}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    {props.about_us}
                                </Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-2 text-light" style={{ float: "right" }}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                <b>Dark Mode</b>
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
