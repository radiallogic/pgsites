"use client" 

import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";
import useSiteOption, {Option} from "./hooks/useSitesOptions"

import SitesDisplay from "./components/SitesDisplay";

export default async function Home() {
  // const [generateButton, setGenerateButton] = useState(false);  
  const [sites, setSites] =  useState({});

  const options = await useSiteOption();


  async function search (
    event: React.SyntheticEvent,
    option: any
  ){
    const response = await fetch('api\sites?search=' + option.value)

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    const json = await response.json()
    console.log(json);
    
    setSites(json)
  }

  return (
<>
        <div className="col-start-2 row-start-2">

          <Autocomplete
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="outlined" label="Search Sites" />}
            onChange={ search }
          />
          <Button variant="outlined">Search</Button>
        </div>


        <div className="col-start-2 row-start-3">
          {/* <SitesDisplay sites={sites} /> */}
        </div>
</>
  );
}
