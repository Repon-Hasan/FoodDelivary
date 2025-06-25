import React, { use, useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import { vlalueContext } from '../Layout/Homelayout';
import { toast } from 'react-toastify';


function Signup() {
	const {createUser,signIngoogle,updateUser,setUser,user}=useContext(vlalueContext);
	
	const navigate= useNavigate()
	
	const [showPassword, setShowPassword] = useState(false);

   const handleSignup=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    const name=e.target.name.value;
	const url=e.target.photo.value;
if (password.length < 6) {
  toast.warning("Password must be at least 6 characters long.");
  return;
}

if ( !/[a-z]/.test(password)) {
  
  toast.warning("Password must include at least one lowercase letter..");
  return;
}

if (!/[A-Z]/.test(password)) {
 toast.warning("Password must include at least one Uppercase letter..");
  return;
}

	createUser(email,password);
	updateUser({displayName:name,photoURL:url})
	.then(() => {
		setUser({...user,displayName:name,photoURL:url})
		navigate("/")
  toast.success("SignUp successful")
		
	  }).catch((error) => {
		
	  });
	 
   }

   const handleGoogle=()=>{
	signIngoogle();
   }


   
  return (
<div className="w-full md:mt-16 mt-4 mx-auto max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center">Signup to your account</h2>
	<p className="text-sm text-center dark:text-gray-600">Have a have account?
		 <Link to="/signin" className="focus:underline hover:underline text-blue-600">Sign in here</Link> 
	</p>
	<div className="my-6 space-y-4">
		<button onClick={handleSignup} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600" fdprocessedid="rrgfo">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<button onClick={handleGoogle}>Login with Google</button>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form noValidate="" onSubmit={handleSignup} action="" className="space-y-8">
		<div className="space-y-4">
		<div className="space-y-2">
				<label  className="block text-sm">Name:</label>
				<input type="text" name="name" required  placeholder='Enter your name' className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="an2nh" />
			</div>

		<div className="space-y-2">
				<label  className="block text-sm">PhotoUrl:</label>
				<input type="text" name="photo" required  placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="an2nh" />
			</div>



			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" required id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="an2nh" />
			</div>


			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
			
				</div>
				<input  type={showPassword ? "text" : "password"}  name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" fdprocessedid="60nyoc" />
			</div>
		</div>
		<button  type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="5wpisv">Sign up</button>
	</form>
</div>
  )
}

export default Signup
