"use client"
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 

import { signIn, signOut, useSession } from "next-auth/react";
 
const GoogleSignIn = () => {
  const handle = async () => {
    await signIn("google")
  }

  return (
    <Button onClick={handle}>Signin with Google</Button>
  )
} 

const FacebookSignIn = () => {
  const handle = async () => {
    await signIn("facebook")
  }

  return (
    <Button onClick={handle}>Signin with facebook</Button>
  )
} 

export default function LoginPage() {
  return (
    <div className="col-start-2 row-start-2">
      <TextField required id="outlined-required" label="Login" />
      <TextField required id="outlined-required" label="Password" />

      <GoogleSignIn />
      <FacebookSignIn />
      
    </div>
  );
}