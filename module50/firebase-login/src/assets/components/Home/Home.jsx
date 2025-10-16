import React from 'react';
import { useUser } from '../../../contexts/UserContext';
import { Link } from 'react-router';

const Home = () => {
    const { user, isLoggedIn } = useUser();

    return (
        <div className="container mx-auto px-4 py-8 my-8">
            <h2 className="text-4xl font-bold text-center mb-8">Welcome to Home!</h2>
            
            {isLoggedIn && user ? (
                <div className="max-w-md mx-auto">
                    <div className="card bg-base-100 shadow-xl border">
                        <div className="card-body items-center text-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img 
                                        src={user.photoURL} 
                                        alt={user.displayName}
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${user.email}&background=random&color=fff&size=96`;
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <h2 className="card-title text-2xl font-bold text-center">
                                {user.displayName}
                            </h2>
                            
                            <div className="divider my-2"></div>
                            
                            <div className="space-y-3 w-full">
                                <div className="flex items-center justify-between bg-base-200 p-3 rounded-lg">
                                    <span className="font-semibold text-sm opacity-70">Email:</span>
                                    <span className="text-sm">{user.email}</span>
                                </div>
                                
                                <div className="flex items-center justify-between bg-base-200 p-3 rounded-lg">
                                    <span className="font-semibold text-sm opacity-70">Status:</span>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${user.emailVerified ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        <span className="text-sm">
                                            {user.emailVerified ? 'Verified' : 'Not Verified'}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between bg-base-200 p-3 rounded-lg">
                                    <span className="font-semibold text-sm opacity-70">User ID:</span>
                                    <span className="text-xs font-mono opacity-60">
                                        {user.uid.substring(0, 8)}...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="card bg-base-100 shadow-xl border max-w-md mx-auto py-8">
                        <div className="card-body items-center text-center">
                            <h3 className="text-xl font-semibold mb-4">Please log in to see your profile</h3>
                            <p className="text-base-content/70 mb-6">
                                You need to be logged in to view your profile information.
                            </p>
                            <div className="card-actions">
                                <Link to="/login" className="btn btn-primary">
                                    Go to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;