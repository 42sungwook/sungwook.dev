import type { Metadata } from 'next'
import { cookies } from 'next/headers'
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
  const cookieStore = cookies()
  const mode = cookieStore.get('mode')

  return (
    <html
      lang="ko"
      className={mode ? 'dark' : ''}
    >
      <body>{children}</body>
    </html>
  )
}
