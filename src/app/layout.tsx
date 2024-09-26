import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Instantly convert HEX colours to the nearest Tailwind CSS colour classes with our fast and easy-to-use converter. Save time in your web design projects by finding the exact Tailwind colour match, from red-50 to blue-950, in a few clicks'
const titleAndDefault =
  'HEX to Tailwind Colour Converter - Find Closest Tailwind Colors'
const appUrl = 'https://closest-tailwind-colour.rb2.fr'

export const metadata: Metadata = {
  title: {
    template: titleAndDefault,
    default: titleAndDefault,
  },
  description: metaDescription,
  keywords:
    'Tailwind color converter, HEX to Tailwind, Tailwind CSS color classes, find Tailwind colors, web design tools, closest Tailwind color, color converter app, tailwind color match, CSS color converter',
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
