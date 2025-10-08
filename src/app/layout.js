import '../../src/styles/globals.css'

export const metadata = {
  title: (
    <>
      <img src="/public/images/logo.svg" alt="Sabilillah Foundation Logo" style={{ height: '30px', marginRight: '10px' }} />
      Sabilillah Foundation - Serving Humanity
    </>
  ),
  description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
  openGraph: {
    title: 'Sabilillah Foundation - Serving Humanity',
    description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
    url: 'https://www.sabilillahfoundation.org',
    image: "/public/images/logo.svg", // লোগোর পাথ এখানে দিন
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Sabilillah Foundation - A non-political social organization dedicated to serving humanity" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Sabilillah Foundation - Serving Humanity" />
        <meta property="og:description" content="Sabilillah Foundation - A non-political social organization dedicated to serving humanity" />
        <meta property="og:url" content="https://www.sabilillahfoundation.org" />
        <meta property="og:image" content="/public/images/logo.svg" />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  )
}
