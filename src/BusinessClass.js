import React from 'react'
import NavBar from './NavBar'
import { routes } from './assets/constants/places'
export default function BusinessClass() {
    return (
        <div>
            <NavBar from={routes.BusinessClass} />
        </div>
    )
}
