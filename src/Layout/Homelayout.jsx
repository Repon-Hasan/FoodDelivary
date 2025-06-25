import React, { createContext, use, useEffect, useState } from 'react'
import Header from '../component/Header/Navbar'
import Navbar from '../component/Header/Navbar'
import { auth } from '../firebase'
import { Helmet } from 'react-helmet-async';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Outlet, useNavigate } from 'react-router'
import Footer from '../component/Footer/Footer';

const provider = new GoogleAuthProvider();

export const vlalueContext=createContext()
const a=10


function Homelayout() {

  const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(true);

  const createUser=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
  }

  const signIngoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
     //console.log(result)
  
  }).catch((error) => {
    //console.log(error)
  });
  }

  const handleLogin=(email,password)=>{

    signInWithEmailAndPassword(auth, email, password)
  
  .then((userCredential) => {
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorMessage = error.message;

  });

  }

  const signOutFromPage=()=>{signOut(auth).then(() => {
    //console.log("Signout successfully...")
   
 
  }).catch((error) => {
   // console.log(error)
  });
};

const updateUser=(upadateData)=>{
 return updateProfile(auth.currentUser,upadateData)

}
const handlePassword=(email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage)
  });
}
    const contextValue={
        createUser,a,
        signIngoogle,
        handleLogin,
        signOutFromPage,
        user,
        updateUser,
        setUser,
        loading,
       handlePassword
        
        
    }
      
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser); 
  setLoading(false)
   
  });

  return () => unsubscribe(); 
}, []);

    
  return (


    <div className='mt-0'>

<vlalueContext.Provider value={contextValue}>  

<Helmet>
        <title>Home | My App</title>
        <meta name="description" content="Welcome to the homepage of My App" />
      </Helmet>
      
<Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
</vlalueContext.Provider>
    </div>
  )
}

export default Homelayout
