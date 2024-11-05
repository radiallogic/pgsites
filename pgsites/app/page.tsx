"use client" 

import React, { useState } from "react";
import { WindRose } from "./components/WindRose"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default async function Home() {
  const [generateButton, setGenerateButton] = useState(false);

  return (
    <>

<Button variant="outlined">Login</Button><Button variant="outlined">Register</Button>

    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <Button variant="outlined">Search</Button>



        {/* <List /> */}

    </>
  );
}
