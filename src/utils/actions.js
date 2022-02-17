import axios from "axios";

const baseURL = "";

export default {
    getHome: function(id) {
        return axios.get(`${baseURL}/api/homes/` + id);
    },
    addHome: function(data) {
        return axios.get(`${baseURL}/api/homes/` + data.HomeId);
    },
    deleteHome: function(id) {
        return axios.delete(`${baseURL}/api/homes/` + id)
    }
};