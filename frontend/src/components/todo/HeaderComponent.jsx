import React, {Component} from "react";
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-gray bg-gray">
                    <div>Bitcoin and Cryptocurrency</div>
                    <ul className="navbar-nav">
                        <li><Link className="navbar-nav" to="/welcome/jeanasong">Home</Link></li>
                        <li><Link className="navbar-nav" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collaps justify-content-end">
                    <li><Link className="nav-link" to="/login">login</Link></li>
                    <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
    
        )
    }
}

export default HeaderComponent