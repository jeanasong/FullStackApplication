import React, {Component} from "react";
class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'jeanasong',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
    //     this.handleUserNameChange = this.handleUserNameChange.bind(this);
    //     this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked= this.loginClicked.bind(this);
}

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                :event.target.value
            })
    }

    // handleUserNameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]
    //             :event.target.value
    //         })
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({passowrd:event.target.value})
    // }

    loginClicked() {
        // jeanasong,blockchain
        if(this.state.username === "jeanasong" && this.state.password === "blockchain") {
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:flase})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailedMessage:true})
        }
            
        //console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {this.state.hasLoginFailed && <div className="alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                <div>Login Successful</div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/> 
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn=s" onClick={this.loginClicked}>Login</button>
            </div>
            
        )
    }
} 

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default LoginComponent