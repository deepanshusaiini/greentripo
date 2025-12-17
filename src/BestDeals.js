import { useState } from 'react';
import NavOne from './NavOne';
import NavBar from './NavBar';
import ContactScreen from './ContactScreen';
import { useLocation } from 'react-router-dom';
import { routes } from './assets/constants/places';
import { trips } from './assets/constants/places';
import BestDealsScreen from './BestDealsScreen';
import BestDealsDestinations from './BestDealsDestinations';
import ContactLocation from './ContactLocation';
import ContactDetail from './ContactDetail';
import ContactPara from './ContactPara';

export default function BestDeals() {
    const location = useLocation();

    const onClick = (data) => { //callback function
        console.log('function is sending', data)
    }

    const onSend = () => {
        console.log('deepanshu')
    }


    const handleAlert = () => {
        alert('Checking the Commit')
    }
    return (
        <div className='bestdeal-container'>

            <div >
                <NavOne by={handleAlert()} />
            </div>

            <div>
                <NavBar from={routes.BestDeals} />
            </div>

            <div>
                <BestDealsScreen callbackfunction={onSend} />
            </div>

            <div>
                <BestDealsDestinations callback={onClick} />
            </div>

            <div>
                <ContactLocation />
            </div>

            <div>
                <ContactDetail />
            </div>

            <div>
                <ContactPara />
            </div>
        </div>
    )
}
