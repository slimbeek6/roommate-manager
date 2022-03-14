import axios from "axios";

const baseURL = "localhost:3000/";

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
    },

    // Expense Routes
    getExpenses: function(id) {
        return axios.get(`${baseURL}/api/expenses/` + id);
    },
    addExpense: function(expenseData) {
        return axios.post(`${baseURL}/api/expenses/`, expenseData);
    },
    editExpense: function(id, expenseData) {
        return axios.put(`${baseURL}/api/expenses/` + id, expenseData);
    },
    removeExpense: function(id) {
        return axios.delete(`${baseURL}/api/expenses/` + id);
    },

    // Payment Routes
    getPayments: function(id) {
        return axios.get(`${baseURL}/api/payments/` + id);
    },
    addPayment: function(paymentData) {
        return axios.post(`${baseURL}/api/payments/`, paymentData);
    },
    editPayment: function(id, paymentData) {
        return axios.put(`${baseURL}/api/payments/` + id, paymentData);
    },
    removePayment: function(id) {
        return axios.delete(`${baseURL}/api/payments/` + id);
    },

    // Chore Routes
    getChores: function(id) {
        return axios.get(`${baseURL}/api/chores/` + id);
    },
    addChore: function(choreData) {
        return axios.post(`${baseURL}/api/chores/`, choreData);
    },
    editChore: function(id, choreData) {
        return axios.put(`${baseURL}/api/chores/` + id, choreData);
    },
    removeChore: function(id) {
        return axios.delete(`${baseURL}/api/chores/` + id);
    },

    // Event Routes
    getEvents: function(id) {
        return axios.get(`${baseURL}/api/events/` + id);
    },
    addEvent: function(eventData) {
        return axios.post(`${baseURL}/api/events/`, eventData);
    },
    editEvent: function(id, eventData) {
        return axios.put(`${baseURL}/api/events/` + id, eventData);
    },
    removeEvent: function(id) {
        return axios.delete(`${baseURL}/api/events/` + id);
    },

    // User Routes
    getUsers: function(id) {
        return axios.get(`${baseURL}/api/users/` + id);
    },
    addUser: function(userData) {
        return axios.post(`${baseURL}/api/users/`, userData);
    },
    editUser: function(id, userData) {
        return axios.put(`${baseURL}/api/users/` + id, userData);
    },
    removeUser: function(id) {
        return axios.delete(`${baseURL}/api/users/` + id);
    }
};