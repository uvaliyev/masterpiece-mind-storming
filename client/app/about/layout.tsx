import { Inter } from 'next/font/google'

import Header from '../components/ui/headertwo'
import Footer from '../components/ui/footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

export const metadata = {
    title: 'Syllabus AI',
    description: 'Syllabus AI',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
                <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
                    <Header />
                    <div className='py-10 m-5'>

                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html >
    )
}
