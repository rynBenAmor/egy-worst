'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-red-500 tracking-tight">
          🎥 Movie Explorer
        </Link>

        <nav className="space-x-4">
          <Link href="/" className="hover:text-red-400 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
