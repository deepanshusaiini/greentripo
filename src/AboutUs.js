import React from 'react'
import NavBar from './NavBar'
import NavOne from './NavOne';
import AboutScreen from './AboutScreen';
import { useLocation } from 'react-router-dom'
import { MdAppBlocking } from 'react-icons/md';
import { routes } from './assets/constants/places';
import AboutUsParagraph from './AboutUsParagraph';

export default function AboutUs() {
    const location = useLocation();
    return (

        <div className="detail-conatiner">
            <div>
                <NavOne />
            </div>

            <div>
                <NavBar />
            </div>

            <div className='aboutdetail-screen'>
                <AboutScreen />
            </div>

            <div className=''>
                <AboutUsParagraph />
            </div>

        </div>
    )
}
