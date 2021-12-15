import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AllFirebaseContext = useFirebase();
    
    return (
        <AuthContext.Provider value={AllFirebaseContext}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;