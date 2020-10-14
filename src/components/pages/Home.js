import React from 'react';
import '../../App.css'
import '../styles/Home.css'
import OrderForm from './OrderForm';

export default function Home() {
    return (
        <>
        <div className='palms'></div>

        <div className="review">
            <div className="quote">
                "Hey these reeds are good"
                <br/>
                <span className='sig'>- Burke Mounts, oboist</span>
            </div>
        </div>

        <div className="review">
            <div className="quote">
                "I love them"
                <br/>
                <span className='sig'>- Ava Terzulli, high school oboist</span>
            </div>
        </div>

        <div className="review">
            <div className="quote">
                "Great reeds everytime!"
                <br/>
                <span className='sig'>- Meredith Melven, middle school band director</span>
            </div>
        </div>

        <OrderForm/>
        </>
    );
}