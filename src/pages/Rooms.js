import React from 'react'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="SEARCH RESORTS" >
                <Link to="/" className="btn-primary">BACK TO HOME</Link>
            </Banner>
        </Hero>
        <Services ></Services>
        </>
    )
}

