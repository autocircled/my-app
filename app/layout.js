import { Inter } from 'next/font/google'
import Header from './ui/header/header'
import Footer from './ui/footer/footer'
import './globals.css'
import CtxAndProvider from './ctxAndProvider/ctxAndProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Genuine License',
  description: 'Tic Production',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/public/assets/images/Genuine_License-Icon.svg" /> */}
        {/* <link rel="icon" href="../public/astronaut.png" /> */}

      </head>
      <body suppressHydrationWarning={true}>
        <CtxAndProvider>
          <Header />
          <div className={inter.className}>{children}</div>
          <Footer />
        </CtxAndProvider>
      </body>
    </html>
  )
}
