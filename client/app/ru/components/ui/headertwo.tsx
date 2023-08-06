'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '../utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        <Logo />
                    </div>

                    <b>Syllabus AI</b>
                    <ul className="flex grow justify-end flex-wrap items-center">
                        <li>
                            <Link href="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Қазақ тілінде🇰🇿</Link>
                        </li>
                        <li>
                            <Link href="/ru/about" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">О проекте</Link>
                        </li>

                    </ul>

                    {/* Desktop navigation */}

                </div>
            </div>
        </header>
    )
}
