import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import './globals.css'
import Header from './(root)/(Header)/Header'

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
  const isDark = cookieStore.get('mode')?.value === 'true' ? true : false
  return (
    <html
      lang="ko"
      className={isDark ? 'dark' : ''}
    >
      <body>
        <Header isDark={isDark} />
        {children}
      </body>
    </html>
  )
}
