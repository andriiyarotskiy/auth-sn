import React, {useReducer, createContext, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from "./containers/Header/Header";


const initialState = {
    isAuth: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_AUTH' :
            return {...state, isAuth: true}
        case 'LOG_OUT' :
            return {...state, isAuth: false}
        default :
            return state
    }
}

export const Context = createContext()


const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch({type: 'USER_AUTH'})
        } else {
            localStorage.removeItem('token')
        }
    }, [])

    return (
        <BrowserRouter>
            <Context.Provider value={{state, dispatch}}>
                <Header/>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
