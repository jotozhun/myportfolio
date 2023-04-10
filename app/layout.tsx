import Footer from './components/Footer'
import Navbar from './components/NavBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-200'>
        <Navbar/>
        <div className='mt-6 mx-4 sm:mx-14 flex flex-col justify-between'>
          <div className='max-w-screen-xl
                          lg:self-center'>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
