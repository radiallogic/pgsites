"use client" 

import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default async function Home() {
  const [generateButton, setGenerateButton] = useState(false);

  return (
<>
        <div className="col-start-2 row-start-2">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Search Sites"
          />
          <Button variant="outlined">Search</Button>
        </div>


        <div className="col-start-2 row-start-3">
          {/* <List /> */}
        </div>
</>
  );
}
