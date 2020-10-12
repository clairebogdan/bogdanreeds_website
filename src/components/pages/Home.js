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

        <OrderForm/>
        </>
    );
}