import React, { createContext, useReducer, useContext } from "react";
import { ADD_EVENT, GET_EVENTS, DELETE_EVENT, EDIT_EVENT} from "./actions";

const EventContext = createContext({
    eventName: "",
    eventDate: ""
});

const {Provider} = ExpenseContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state, action.event]
            };
        case DELETE_EVENTS: 
            return {
                ...state,
                events: state.events.filter((event) => {
                    return event._id !== action._id;
                })
            };
        case GET_EVENTS:
            return {
                ...state,
                events: [...action.events]
            };
        default:
            return state;
    }
};

const EventProvider = ({value =[], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        events: []
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useEventContext = function() {
    return useContext(EventContext);
};

export { EventProvider, useEventContext };