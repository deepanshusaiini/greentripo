import React from 'react'

export default function BestDealsScreen({ callbackfunction }) {

    const handleCheck = () => {
        callbackfunction()
    }

    return (
        <div className="bestDeals-screen">
            <h1>Best Deals</h1>
            {/* <button onClick={() => handleCheck()}>checking callback</button> */}
        </div>
    )
}
