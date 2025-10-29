import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const [error, setError] = React.useState('');
    const { signIn } = React.use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;   
        
        // console.log(email, password);

        signIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);

            navigate(location.state || '/', { replace: true });
        })
        .catch((error) => {
            console.error(error);
            setError(error.message);
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
                    <input name='email' type="email" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your email address" required />

                    <label class="text-sm font-semibold text-[#403F3F] mb-2">Password</label>
                    <input name='password' type="password" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-2" placeholder="Enter your password" required />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    {
                        error && <p className='text-red-500 text-sm mt-4 text-center'>{error}</p>
                    }

                    <button type='submit' className="btn btn-primary btn-lg mt-6">Login</button>

                    <p className="text-center font-medium text-sm text-accent mt-6">
                        Don't have an account? 
                        <Link to='/auth/register' className="text-secondary font-semibold cursor-pointer hover:underline ml-1">
                            Register
                        </Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;