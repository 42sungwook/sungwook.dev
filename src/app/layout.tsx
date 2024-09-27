import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SUNGWOOK.DEV',
  description: 'Portfolio of Sungwook Kim'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
