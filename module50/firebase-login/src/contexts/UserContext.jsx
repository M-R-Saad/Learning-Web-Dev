import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

// Provider component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const saveUser = (userData) => {
        const userInfo = {
            uid: userData.uid,
            email: userData.email,
            displayName: userData.displayName || userData.email.split('@')[0], // Use email prefix if displayName is null
            photoURL: userData.photoURL || `https://ui-avatars.com/api/?name=${userData.email}&background=random`,
            emailVerified: userData.emailVerified
        };
        setUser(userInfo);
        setIsLoggedIn(true);
    };

    const clearUser = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    const value = {
        user,
        isLoggedIn,
        saveUser,
        clearUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;