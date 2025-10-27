import React from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { signIn } = React.use(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;   
        
        console.log(email, password);

        signIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className='bg-white max-w-xl mx-auto mt-22 py-20 rounded-md shadow-lg'>
            <h2 className='text-2xl font-semibold text-center text-[#403F3F]'>
                Login with your Account
            </h2>
            <hr className='mx-10 my-12 text-base-300' />
            <form onSubmit={handleLogin} className='max-w-md mx-auto flex flex-col gap-6'>
                <fieldset className="fieldset">
                    <label className="text-sm font-semibold text-[#403F3F] mb-2">Email Address</label>
                    <input name='email' type="email" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your email address" />

                    <label class="text-sm font-semibold text-[#403F3F] mb-2">Password</label>
                    <input name='password' type="password" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-2" placeholder="Enter your password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-primary btn-lg mt-6">Login</button>

                    <p className="text-center font-medium text-sm text-accent mt-6">
                        Don't have an account? 
                        <button type='submit' className="text-secondary font-semibold cursor-pointer hover:underline ml-1">
                            Register
                        </button>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;