import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gather - Your Events Home',
  description: 'Discover events near you with Gather.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={grotesk.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
