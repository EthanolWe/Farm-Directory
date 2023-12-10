import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FACT',
  description:
    'Need to come up with description for google scrapers to make it more searchable',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full top-0 left-0 bg-white shadow-xl flex justify-between items-center p-1">
          <div className="mx-2">
            <Link href={'/'}>
              <Image
                src={'/farmlogo.png'}
                height={128}
                width={128}
                alt="Fact Farm Directory"
              />
            </Link>
          </div>
          <div className="">
            <button className="text-black px-4 py-2  mr-2 border-2 border-transparent transition duration-300 hover:border-black">
              Add Your Farm
            </button>
            <button className="text-black px-4 py-2 mx-2 border-2 border-transparent transition duration-300 hover:border-black">
              Farmer Login
            </button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
