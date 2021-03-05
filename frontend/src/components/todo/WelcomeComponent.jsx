import React, {Component} from "react";
import {Link} from 'react-router-dom';
class WelcomeComponent extends Component {
    render() {
        return (
            <>
            <h1>Welcome</h1>
            <div className="container"></div>
    
        
        <div>Welcom {this.props.match.params.name}. Manage yout todos <Link to="/todos">here</Link>
        </div>
        </>
        )
    }
}

export default WelcomeComponent