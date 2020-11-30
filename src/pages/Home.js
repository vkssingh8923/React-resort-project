import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link } from 'react-router-dom'
export const Home = () => {
    return (
    <>
    
        <Hero hero="defaultHero">
            <Banner title="luxirious rooms" subtitle="delux rooms starting at jusr rs 2000 enjoy yo;ur beautifuil life with your loved ones">
                <Link to='/rooms' className="btn-primary">
                    Our rooms
                </Link>
            </Banner>
        </Hero>
        
    </>
    )
}
Hero.defaultProps={
    hero:"defaultHero"
}
