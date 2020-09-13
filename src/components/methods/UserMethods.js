import axios from "axios";

// adding new user
export const adduser = (newUser) => {
    return axios
        .post("http://localhost:3000/SignUp", {
        userName: newUser.username,
        password: newUser.password,
    })
    .then((res) => {
        console.log("New User has been added");
    })
    .catch((err) => {
        console.log(err);
    });
};