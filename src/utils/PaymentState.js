import React, { createContext, useReducer, useContext } from "react";
import { ADD_PAYMENT, EDIT_PAYMENT, GET_PAYMENTS, DELETE_PAYMENT } from "./actions";

const PaymentContext = createContext({
    paymentType: "Other",
    amount: "",
    paymentDate: Date.now(),
    paidBy: ""
});

const {Provider} = PaymentContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_PAYMENT:
            return {
                ...state,
                payments: [...state, action.payment]
            };
        case DELETE_PAYMENT: 
            return {
                ...state,
                payments: state.payments.filter((payment) => {
                    return payment._id !== action._id;
                })
            };
        case GET_PAYMENTS:
            return {
                ...state,
                payments: [...action.payments]
            };
        default:
            return state;
    }
};

const PaymentProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        payments: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const usePaymentContext = function() {
    return useContext(PaymentContext);
};

export { PaymentProvider, usePaymentContext };