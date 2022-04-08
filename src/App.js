import './App.css';
import app from './firebase.init'

import {  getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth=getAuth(app)


function App() { 

  const[user,setUser]=useState({});
  const provider=new GoogleAuthProvider();

  const handleGoogleAuthProvider=()=>{
signInWithPopup(auth,provider)
.then(result=>{
  const user=result.user;
  console.log(user);
  setUser(user);
})
.catch(error=>{
  console.log("error",error);
});
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
      <button onClick={handleGoogleAuthProvider} >google sing in</button>
      <button onClick={handleSignOut}>sign out</button>
      <h2>Your name:{user.displayName}</h2>
      <p>i know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
