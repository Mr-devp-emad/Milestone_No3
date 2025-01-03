"use client"

import React,{ReactNode} from 'react'

const RootLayout = ({children}:{children: ReactNode}) => {
  return (
    <main className='bg-white'>
      {children}
    </main>
  )
}

export default RootLayout
