import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPlus } from '@fortawesome/fontawesome-free-solid';


class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <div className="container">
                        <p href="#" className="navbar-brand"> Contact Manager </p>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav text-light">

                                <li className="nav-item mx-3">
                                    <FontAwesomeIcon className="" icon={faHome} />
                                    <Link to="/" className="hover-nav text-lead px-3">Home</Link>
                                </li>

                                <li className="nav-item mx-3">
                                    <FontAwesomeIcon icon={faPlus} />
                                    <Link to="/Add" className="hover-nav text-lead px-3"> Add</Link>
                                </li>

                                <li className="nav-item mx-3">
                                    <FontAwesomeIcon icon={faUser} />
                                    <Link to="/About" className="hover-nav text-lead px-3">About</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                

               

            </div>
        )
    }
    
    
}
export default Nav