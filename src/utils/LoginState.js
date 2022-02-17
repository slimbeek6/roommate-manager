import React, { useReducer, useContext} from "react";
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
            
            };
        case DELETE_HOME:
            return {...state,
            
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

export {HomeProvider};