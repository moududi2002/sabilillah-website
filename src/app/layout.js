import '../../src/styles/globals.css'
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata = {
  title: 'Sabilillah Foundation - Serving Humanity',
  description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
  openGraph: {
    title: 'Sabilillah Foundation - Serving Humanity',
    description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
    url: 'https://www.sabilillahfoundation.org',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Sabilillah Foundation',
      },
    ],
    type: 'website',
    siteName: 'Sabilillah Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabilillah Foundation - Serving Humanity',
    description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}