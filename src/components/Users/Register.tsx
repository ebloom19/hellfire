 
import React from "react";
import '../scss/Users.scss';

export function Register() {

    return (
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text"/><br/>
            <label>Password</label>
            <input type="password"/> <br />
            <button>Register</button>
        </div>
    )

}
 
