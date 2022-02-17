import axios from "axios";

const API_URL = "";

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
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = function() {
    localStorage.removeItem("user");
};

const getCurrentUser = function() {
    return JSON.parse(localStorage.getItem("user"));
}

export default {register, login, logout, getCurrentUser};