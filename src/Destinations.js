import React from 'react'
import NavBar from './NavBar'
import { routes } from './assets/constants/places'
import NavOne from './NavOne'

export default function Destinations() {
    return (
        <div>
            <NavOne />
            <NavBar from={routes.Destinations} />
        </div>
    )
}
