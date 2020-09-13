import React, { useState } from 'react'
import { adduser } from '../methods/UserMethods'

const Signup = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState();
    const [password, setPassword] = useState("");
    
    function validateInputs() {}

    function handleSubmit(event) {
        event.preventDefault();
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            phonenumber: phonenumber,
            password: password,
        };
        adduser(newUser).then((res) => {
            props.history.push("/");
        });
    }

    return (
        <section class="section container scrollspy" id="contact">
            <div class="row" >
                <div class="col s12 l8 offset-l3">
                    <h2 class="teal-text text-accent-4" id="signup-text">Create New Account</h2>
                </div>
                <div class="col s12 l5 offset-l3">
                    <form onSubmit={handleSubmit}>
                    <div class="input-field col s6 l6">
                        <i class="material-icons prefix">recent_actors</i>
                        <input id="first_name" type="text" onChange={(e) => setFirstname(e.target.value)}/>
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6 l6">
                        <input id="last_name" type="text" onChange={(e) => setLastname(e.target.value)}/>
                        <label for="last_name">Last Name</label>
                    </div>
                    <div class="input-field col s12 l12">
                            <i class="material-icons prefix">account_circle</i>
                            <input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                            <label for="username">UserName</label>
                        </div>
                        <div class="input-field col s12 l12">
                            <i class="material-icons prefix">email</i>
                            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s12 l12">
                            <i class="material-icons prefix">phone</i>
                            <input type="text" id="phonenumber" onChange={(e) => setPhonenumber(e.target.value)}/>
                            <label for="phonenumber">Phone number</label>
                        </div>
                        <div class="input-field col s12 l12">
                            <i class="material-icons prefix">lock</i>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field col s12 l12 center">
                            <button class="btn" /*disabled={!validateInputs()}*/>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )

}
export default Signup