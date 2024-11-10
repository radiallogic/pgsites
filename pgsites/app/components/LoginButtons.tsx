import Button from '@mui/material/Button';
import Link from 'next/link'

import { useSession, signOut } from "next-auth/react"

export default function LoginButtons(){

    const { data: session } = useSession()
    
    return(
        <>
    {session && (
        <>
          Signed in as {session.user!.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) || (
        <>  
          <Link href="\login"> <Button variant="outlined">Login</Button></Link>
          
          {/* <Link href="\register"> <Button variant="outlined">Register</Button></Link>  */}
        </>
      ) }
      
      </>

    )
}