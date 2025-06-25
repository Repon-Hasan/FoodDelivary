import React, { useContext, useState } from 'react'
import { vlalueContext } from '../Layout/Homelayout'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




function Signin() {

const provider = new GoogleAuthProvider();
	const [email, setEmail] = useState(" ");
	
	const {	handleLogin,signIngoogle}= useContext(vlalueContext);
	
	const location=useLocation();
	const navigate= useNavigate();
	
	const handleForgotPassword = () => {
		
	
		localStorage.setItem('resetEmail', email);
		navigate('/forgetPassword');
	
	  };
	  
    console.log("Location:", location)

	const From1 = location.state?.from || "/";

	
	const Login=(e)=>{
	    e.preventDefault();
		const email=e.target.email.value;
		const password=e.target.password.value;
		//console.log(email,password);
	   handleLogin(email,password)
	   navigate(From1)
	     toast.success("Signin successful")
	}
	
  const handleGoogle =() => {
	signInWithPopup(auth, provider)
  alert('hello')
  };
	 
  return (
	
    <div className="w-full max-w-md md:mt-16 mt-4 mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center dark:text-gray-600">Dont have account?
		<Link to="/signup" rel="noopener noreferrer" className="focus:underline hover:underline text-green-600">Sign up here</Link>
	</p>
	<div className="my-6 space-y-4">
		<button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600" fdprocessedid="p6uhe4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		<span >Login with Google</span>
		</button>
			
	
	</div>
	<div className="flex items-center w-full my-4">
	
	</div>

	<form  onSubmit={Login} action="" className="space-y-8">
		<div className="space-y-4">
			
			<div className="space-y-2">
				<label htmlFor="email"    className="block text-sm">Email address</label>

				<input type="email" name="email"  value={email}
                 onChange={(e) => setEmail(e.target.value)} placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="odklv" />

			</div>

			<div className="space-y-2">
				<div className="flex justify-between ">
					<label htmlFor="password" className="text-sm">Password</label>
					<Link onClick={handleForgotPassword}  className="text-xs hover:underline dark:text-gray-600">Forgot password?</Link>
				</div>
				<input type="password " name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="jbfjsc" />
			</div>
		</div>
		<button  type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="59kpzn">Sign in</button>
	</form>
</div>
  )
}

export default Signin
