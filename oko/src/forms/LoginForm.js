import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onClick() {
        console.log('Click');
    }

    render() {
        return <div><a className="waves-effect waves-light btn" onClick={this.onClick}>Login</a></div>
    }
}

export default LoginForm
