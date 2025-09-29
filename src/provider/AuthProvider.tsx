// use these to wrap the authprovider for use in logout session. logout is our client side thats why we have to use client

"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function AuthProvider({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
