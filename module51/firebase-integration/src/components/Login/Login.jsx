import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../utilities/firebase_init';
import AuthContext from '../../contexts/AuthContext';

const Login = () => {

  const [successMsg, setSuccessMsg] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const emailRef = React.useRef();

  const { signInUser, googleSignIn } = React.useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMsg(error.message);
      });
  }

  const handleForgetPassword = () => {
    //console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      alert('Please enter your email address to reset password.');
      return;
    }
    setErrorMsg('');

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent. Please check your inbox (and spam).');
      })
      .catch(err => {
        console.error('sendPasswordResetEmail error:', err);
        setErrorMsg(err.message || 'Failed to send password reset email.');
      });
  }

  const handleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    setErrorMsg('');

    // signInWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     console.log(result.user);
    //     // event.target.reset();
    //     if (result.user.emailVerified) {
    //       setSuccessMsg(true);
    //     }
    //     else {
    //       setErrorMsg('Your email is not verified. Please verify your email address.');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     setErrorMsg(error.message);
    //   });

    signInUser(email, password)
      .then(result => {
        // console.log(result.user);
        // event.target.reset();
        navigate(location?.state || '/');
        if (result.user.emailVerified) {
          setSuccessMsg(true);
        }
        else {
          setErrorMsg('Your email is not verified. Please verify your email address.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMsg(error.message);
      });
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto border shrink-0 shadow-2xl py-16 my-20">
      <h2 className="text-3xl font-semibold text-center mt-2">Login</h2>
      {
        errorMsg && <p className='text-red-400 text-center pt-6 -mb-2'>{errorMsg}</p>
      }
      {
        successMsg && <p className='text-green-400 text-center pt-6 -mb-2'>User has been logged in successfully.</p>
      }
      <div className="card-body mx-auto w-full">
        <form onSubmit={handleLogin} className="">
          <label className="label mb-1">Email</label>
          <label className="input validator w-full mb-6">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input ref={emailRef} type="email" name='email' placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <label className="label mb-1">Password</label>
          <label className="input validator w-full mb-2">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <button onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 -right-33 cursor-pointer btn btn-ghost btn-sm border-none opacity-60'>
                {
                  showPassword ? <FaEyeSlash /> : <FaEye />
                }
              </button>
            </div>
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
          </p>
          <div onClick={handleForgetPassword} className='mb-8'><a className="link link-hover">Forgot password?</a></div>

          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
            <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
            Login with Email
          </button>

          <div className='mt-6 text-center'>
            <p className='text-base'>
              New to the site? <Link to="/signup" className='font-semibold text-blue-400 hover:underline'>SignUp</Link>
            </p>
            <p className='text-base font-bold mt-4'>
              OR
            </p>
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full mt-4">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;