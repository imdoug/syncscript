import './globals.css'
import React from 'react'

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'SyncScript',
  description: 'Your go-to collaborative editor '

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen d font-sans antialiased",
          fontSans.variable
        )}
      >
      {children}
      </body>
    </html>
  )
}
