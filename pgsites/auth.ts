import NextAuth from "next-auth"

import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: { params: { prompt: 'consent' } }
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
      authorization: { params: { prompt: 'consent' } }
    })

  ],
})