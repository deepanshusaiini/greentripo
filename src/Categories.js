import React from 'react'

export default function Categories() {
    return (
        <div>
            <div className='categoryinside'>
                <div className='categoryinsideitem'>

                    <h1 className="category-text">
                        <span className="slash">//</span> <span className="word">Categories</span>
                    </h1>

                    <div className="tour-line">
                        <span className="title">Cultural Heritage Tours</span>
                        <span className="number">18</span>
                    </div>

                    <hr className='dot-line' />
                    <div className="tour-line">
                        <span className="title">Islamic History</span>
                        <span className="number">7</span>
                    </div>

                    <hr className='dot-line' />
                    <div className="tour-line">
                        <span className="title">Architecture Tours</span>
                        <span className="number">11</span>
                    </div>

                    <hr className='dot-line' />
                    <div className="tour-line">
                        <span className="title">UNESCO World Heritage </span>
                        <span className="number">9</span>
                    </div>

                    <hr className='dot-line' />
                    <div className="tour-line">
                        <span className="title">Spain Tours  </span>
                        <span className="number">25</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
