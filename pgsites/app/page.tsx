"use client" 

import React, { useState, useMemo, useEffect, use } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Autocomplete } from "@mui/material";
import useSiteOptions from "./hooks/useSitesOptions"

import SitesDisplay from "./components/SitesDisplay";

export default function Page() {
  const [sites, setSites] = useState({});

  const options = useSiteOptions();

  function search (
    event: React.SyntheticEvent,
    option: any
  ){

    fetch('api/sites?search=' + option.value)
      .then((res) => res.json())
      .then((data) => {
        setSites(data)
      }
    )
  }

  return (
<>

        <div className="col-start-2 row-start-2">

          {JSON.stringify(options) }

          <Autocomplete
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="outlined" label="Search Sites" />}
            onChange={ search }
          />
          
        </div>

        <div className="col-start-2 row-start-3">
          {/* <SitesDisplay sites={sites} /> */}
        </div>
</>
  );
}
