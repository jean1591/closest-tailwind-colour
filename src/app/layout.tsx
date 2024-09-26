import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription = 'Generate this using ChatGPT'
const titleAndDefault = 'Generate this using ChatGPT'
const appUrl = 'https://my-app-name.jeanrobertou.com'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords: 'meal, planning, food, ai',
  metadataBase: new URL(appUrl),
  openGraph: {
    title: titleAndDefault,
    description: metaDescription,
    url: appUrl,
    siteName: titleAndDefault,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={classNames(
            inter.className,
            'bg-neutral-50 text-slate-900'
          )}
        >
          <Script
            defer
            src="https://analytics.rb2.fr/script.js"
            data-website-id="fd9f21d9-33a1-4b09-832f-d2ba687c4858"
          />
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
