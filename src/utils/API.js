import axios from "axios";

const baseURL = "https://glacial-eyrie-04065.herokuapp.com";

export default {
    // Login routes for home model
    getHome: function(id) {
        return axios.get(`${baseURL}/api/homes/` + id);
    },
    addHome: function(homeData) {
        return axios.post(`${baseURL}/api/homes/`, homeData);
    },
    deleteHome: function(id) {
        return axios.delete(`${baseURL}/api/homes/` + id);
    }
};