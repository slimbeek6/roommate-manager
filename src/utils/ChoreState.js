import React, { createContext, useReducer, useContext } from "react";
import { ADD_CHORE, EDIT_CHORE, GET_CHORES, DELETE_CHORE } from "./actions";

const ExpenseContext = createContext({
    choreName: "",
    assignedTo: "",
    dueDate: Date.now(),
    completed: false,    incurredBy: ""
});

const {Provider} = ExpenseContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_CHORE:
            return {
                ...state,
                chores: [...state, action.chore]
            };
        case DELETE_CHORE: 
            return {
                ...state,
                chores: state.chores.filter((chore) => {
                    return chore._id !== action._id;
                })
            };
        case GET_CHORES:
            return {
                ...state,
                chores: [...action.chores]
            };
        default:
            return state;
    }
};

const ChoreProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        chores: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useChoreContext = function() {
    return useContext(ExpenseContext);
};

export { ChoreProvider, useChoreContext };