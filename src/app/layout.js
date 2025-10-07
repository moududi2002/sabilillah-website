import '../../src/styles/globals.css'

export const metadata = {
  title: 'Sabilillah Foundation - Serving Humanity',
  description: 'Sabilillah Foundation - A non-political social organization dedicated to serving humanity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}