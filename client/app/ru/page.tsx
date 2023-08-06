export const metadata = {
    title: 'Syllabus AI: Главная',
    description: 'Page description',
}

import Hero from './components/hero'
import Features from './components/features'
import FeaturesBlocks from './components/features-blocks'
import Testimonials from './components/testimonials'
import Header from './components/ui/header'
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
        </>
    )
}
