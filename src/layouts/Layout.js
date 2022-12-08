import {NavLink } from "react-router-dom";
import LoadingBar from 'react-redux-loading'
import { Fragment } from "react";

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to='/questions'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }}/>
            </header>

            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout