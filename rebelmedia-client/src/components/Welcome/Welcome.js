import React, {Component} from 'react';

class Welcome extends Component {
 render() {
        return (
        <div className="row " id="Body">
        <div className="medium-12 columns">
        <h2 id="welcomeText">Make people fall in love with your ideas</h2>
        <a href="/login" className="button">Login</a>
        <a href="/register" className="button success">Register</a>
        </div>
        </div>
        );
    }
}
export default Welcome;