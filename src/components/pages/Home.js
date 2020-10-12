import React from 'react';
import '../../App.css'
import '../styles/Home.css'
import OrderForm from './OrderForm';

export default function Home() {
    return (
        <>
        <div className='palms'>
            <div className='home-text-outer'>
                <div className='home-text-inner'>
                    <h1 className='welcome-text'>Bogdan Reeds</h1>
                </div>
            </div>
        </div>

        <div className="reviews">
            <div className="quote">
                "Hey these reeds are good"
                <br/>
                <span className='sig'>- Joe Bob, band director</span>
            </div>

            <div className="quote">
                "I love them"
                <br/>
                <span className='sig'>- Ann Duit, oboist</span>
            </div>
        </div>

        <OrderForm/>
        </>
    );
}