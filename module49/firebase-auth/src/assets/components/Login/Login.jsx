import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase_init';

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.error("Error during sign in:", error);
            });
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.error("Error during GitHub sign in:", error);
            });
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.error("Error during sign out:", error);
        });
    }

    return (
        <div className='flex flex-col gap-8 justify-center items-center'>
            <h2 className='text-3xl text-center'>Login</h2>

            {
                user ? 
                    <button onClick={handleSignOut} className='btn btn-error text-lg text-white px-8'>
                        Sign Out
                    </button>
                :
                    <>
                    <button onClick={handleGoogleSignIn} className='btn btn-info text-lg text-white px-8'>
                        Sign in with Google
                    </button>
                    <button onClick={handleGitHubSignIn} className='btn btn-neutral text-lg text-white px-8'>
                        Sign in with GitHub
                    </button>
                    </>
            }

            {
                user && 
                <div className='flex items-center gap-8 text-center border-2 border-white p-8 rounded-lg'>
                    <div>
                        <img className='mx-auto w-20 rounded-full' src={user.photoURL} alt={user.displayName} />
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold'>{user.displayName}</h3>
                        <p className='text-xl font-bold'>Email: {user.email}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;