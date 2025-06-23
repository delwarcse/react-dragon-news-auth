import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        loginUser,
        logOut,
        loading

    };

    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubScribe();
        }
    })
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;