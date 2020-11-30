import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import {Link } from 'react-router-dom'
export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Banner title="404 page not found" subtitle="not found">
                <Link className="btn-primary" to='/rooms'>Go  Back to home page</Link>
            </Banner>
        </Hero>
    )
}
