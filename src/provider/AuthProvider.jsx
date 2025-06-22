import { createContext, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "DelwarCSE",
        email: "patient@gmai.com",
    });
    const authInfo = {
        user,
        setUser
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;