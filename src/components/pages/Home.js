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
                "Great quality oboe reeds, could definitely use these professionally. They've 
                got rich tone, great response, and excellent durability. More than met my needs as an oboe 
                performance major."
                <br/>
                <span className='sig'>- Burke Mounts, oboist</span>
            </div>
        </div>

        <OrderForm/>
        </>
    );
}