import React, { createContext, useReducer, useContext } from "react";
import { ADD_EXPENSE, EDIT_EXPENSE, GET_EXPENSES, DELETE_EXPENSE} from "./actions";

const ExpenseContext = createContext({
    expensename: "",
    expenseAmount: "",
    expenseDate: Date.now(),
    expenseType: "Other",
    incurredBy: ""
});

const {Provider} = ExpenseContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state, action.expense]
            };
        case DELETE_EXPENSE: 
            return {
                ...state,
                expenses: state.expenses.filter((expense) => {
                    return expense._id !== action._id;
                })
            };
        case GET_EXPENSES:
            return {
                ...state,
                expenses: [...action.expenses]
            };
        default:
            return state;
    }
};

const ExpenseProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        expenses: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useExpenseContext = function() {
    return useContext(ExpenseContext);
};

export { ExpenseProvider, useExpenseContext };