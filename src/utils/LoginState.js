import React, { useReducer, createContext, useContext} from "react";
import { ADD_HOME, DELETE_HOME, GET_HOME } from "./actions";

const homeContext = createContext({
    username: "",
    HomeId: "",
    loggedIn: true
});

const { Provider } = homeContext;

const reducer = function (state, action) {
    switch(action.type) {
        case ADD_HOME:
            return {...state, 
                homes: [...state.homes, action.home]
            };
        case GET_HOME:
            return {...state, 
                homes: [...action.homes]
            };
        case DELETE_HOME:
            return {...state,
                homes: state.homes.filter((home) => {
                    return home.username !== action.username;
                })
            };
        default:
            return state;
    }
};

const HomeProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        users: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useHomeContext = function() {
    return useContext(homeContext);
}

export {HomeProvider, useHomeContext};