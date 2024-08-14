// Modified from app/layout.js - the root app layout
import './globals.css'
import NavBar from '@/components/NavBar'
import navList from '@/data/navList'
import Footer from '@/components/Footer'

// Exported metadata will appear in the <head> section
export const metadata = {
  title: 'Three Cheese Pizza',
  description: 'Mini project 3',
}

// All layouts support nesting via children prop
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}