import './App.css';
import app from './firebase.init'

import {  getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth=getAuth(app)


function App() { 

  const[user,setUser]=useState({});
  const googleProvider=new GoogleAuthProvider();
 const githubProvider= new GithubAuthProvider();
  const handleGoogleAuthProvider=()=>{
signInWithPopup(auth,googleProvider)
.then(result=>{
  const user=result.user;
  console.log(user);
  setUser(user);
})
.catch(error=>{
  console.log("error",error);
});
  }


  const handleGithubSignIn=()=>{


    signInWithPopup(auth,githubProvider)
    .then(result=>{
      const user=result.user;
      // console.log(user);/
      setUser(user);
    })
    .catch(error=>{
      console.error(error);
    })
  }

  const handleSignOut=()=>{
signOut(auth)
.then( ()=>{
  setUser({});
})
.catch(error =>{
  setUser({});
})
  }
  return (
    <div className="App">

{/* condition ?true : false */}

      {

        user.uid?      <button onClick={handleSignOut}>sign out</button>:

       <div> 
          <button onClick={handleGoogleAuthProvider} >google sing in</button>
          <button onClick={handleGithubSignIn} >github signin</button>
       </div>
      }


      <h2>Your name:{user.displayName}</h2>
      <p>i know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
