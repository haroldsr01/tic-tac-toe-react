import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState({});
    console.log(auth)
    console.log(auth.user)
    console.log(auth.password)
    console.log(auth?.user)
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
