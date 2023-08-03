export const metadata = {
    title: 'ШШС: Главная',
    description: 'Page description',
}

import Hero from '../components/hero'
import { Analytics } from '@vercel/analytics/react';
import Features from '../components/features'
import FeaturesBlocks from '../components/features-blocks'
import Testimonials from '../components/testimonials'

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
            <Analytics />
        </>
    )
}
