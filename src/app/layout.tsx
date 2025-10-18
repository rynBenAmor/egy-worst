import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Movie Explorer',
  description: 'Discover movies powered by The Movie Database (TMDb)',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6 w-full" style={{ maxWidth: "100%", overflowX: "clip" }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
