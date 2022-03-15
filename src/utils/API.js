import axios from "axios";

const baseURL = "localhost:3000";

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