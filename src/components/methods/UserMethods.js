import axios from "axios";

// adding new user
export const adduser = (newUser) => {
    return axios
        .post("http://localhost:3000/Signup", {
        firstName: newUser.firstname,
        lastName: newUser.lastname,
        userName: newUser.username,
        email: newUser.email,
        phonenumber: newUser.phonenumber,
        password: newUser.password,
    })
    .then((res) => {
        console.log("New User has been added");
    })
    .catch((err) => {
        console.log(err, 'from here ?!');
    });
};