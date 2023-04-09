import { Inter } from 'next/font/google'
import Head from 'next/head'
import Toggle from './components/Toggle'
import { ReactElement, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Todo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

    </div>
  )
}
