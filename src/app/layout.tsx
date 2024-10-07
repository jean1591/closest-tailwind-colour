import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Convert HEX colours to Tailwind CSS classes instantly. Speed up your design process by finding the closest Tailwind colour match quickly and easily.'
const titleAndDefault =
  'HEX to Tailwind Colour Converter - Find Closest Tailwind colours'
const appUrl = 'https://closest-tailwind-colour.rb2.fr'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords:
    'Tailwind colour converter, HEX to Tailwind, Tailwind CSS colour classes, find Tailwind colours, web design tools, closest Tailwind colour, colour converter app, tailwind colour match, CSS colour converter',
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
            data-website-id="9fde4c94-d0c2-4600-92d4-9849565123d8"
          />
          <Toaster position="bottom-right" reverseOrder={true} />
          {children}
        </body>
      </html>
    </StoreProvider>
  )
}
