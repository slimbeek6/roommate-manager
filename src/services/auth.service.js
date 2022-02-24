import axios from "axios";

// const API_URL = "https://glacial-eyrie-04065.herokuapp.com/api/homes/";
const API_URL = "https://localhost:3001/api/homes/";

const register = function (username, email, password) {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
};

const login = function(username, password) {
    return axios
        .post(API_URL+"login", {
            username,
            password
        })
        .then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem("home", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = function() {
    localStorage.removeItem("home");
};

const getCurrentHome = function() {
    return JSON.parse(localStorage.getItem("home"));
}

export default {register, login, logout, getCurrentHome};