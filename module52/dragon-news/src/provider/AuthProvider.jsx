import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;