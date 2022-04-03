import { createContext, useReducer } from "react";

export const AppContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGOUT': {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isLoggedIn: false,
                    user: null
                }
            }
        }
        case 'LOGGED_IN': {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    isLoggedIn: true,
                    user: action.user
                }
            }
        }
        default:
            return state;
    }
};

const initialState = {
    auth: {
        isLoggedIn: false,
        user: null
    },
};

export function AppContextProvider(props) {
    const fullInitialState = {
        ...initialState,
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export const AppContextConsumer = AppContext.Consumer;