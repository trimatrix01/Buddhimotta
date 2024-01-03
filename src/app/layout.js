import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Componants/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Buddhimotta- Multiple Intelligence',
  description: 'Multiple Intelligence Test App in Bangla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
