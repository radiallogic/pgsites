import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 

import { signIn } from "@/auth"
 
const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 

const FacebookSignIn = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("facebook")
      }}
    >
      <button type="submit">Signin with Facebook</button>
    </form>
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