'use client'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/ThemeRegistry/theme';
import Navbar from './components/Navbar';
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ThemeProvider theme={theme}>
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
