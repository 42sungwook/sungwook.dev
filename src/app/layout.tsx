import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import Header from './(Root)/(Header)/Header'

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
  const mode = cookieStore.get('mode')?.value
  return (
    <html
      lang="ko"
      className={mode === 'true' ? 'dark' : ''}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
