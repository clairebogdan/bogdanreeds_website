import React from 'react';
import '../../App.css'
import '../styles/Order.css';
import OrderForm from './OrderForm';
import label from '../assets/bogdanreeds-label.png'

export default function Order() {
    return (
        <>
        <div className='label'>
            <img className='img' src={label} alt="label for bogdan reeds" width="100%" height="100%"/>
        </div>

        <div className="order-desc">
            <p>Start your Bogdan Reeds order by filling out the email form below!
                <br/><br/>
                Once I receive your email, I will let you know if I can complete your order request. 
                Please note that I am a full-time software engineer and I make reeds in my spare time. 
                Your order request will be finalized once we correspond over email. 
                 
                <br/><br/>
                Oboe reeds are $25 each
                <br/><br/>
                Standard shipping - $5
                <br/>
                Priority shipping - $8
            </p>
        </div>

        <OrderForm/>
        </>
    );
}