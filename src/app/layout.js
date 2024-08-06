// Modified from app/layout.js - the root app layout
import NavBar from '../components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google' // supports google fonts

const inter = Inter({ subsets: ['latin'] })

// Exported metadata will appear in the <head> section
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// All layouts support nesting via children prop
export default function RootLayout({ children }) {
  // Root layout must render the <html> and <body> elements
  return (
    <html lang="en">
      <body className={inter.className}><NavBar />{children}</body>
    </html>
  )
}