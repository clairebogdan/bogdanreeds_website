import React from 'react';
import '../../App.css'
import '../styles/Order.css';
import OrderForm from './OrderForm';
import label from '../assets/bogdanreeds-label.png'

export default function Order() {
    return (
        <>
        <div className='label'>
            <img className='img' src={label} alt="label for bogdan reeds"/>
        </div>

        <div className="order-desc">
            <p>Start your Bogdan Reeds order by filling out the email form below!
                <br/><br/>
                Once I receive your email, I will let you know if I can complete your order request. 
                Your order will be completed once we correspond over email to exchange payment information.
                <br/><br/>
                Reeds are $25 each. Standard shipping is $5, and priority shipping is $8.
            </p>
        </div>

        <OrderForm/>
        </>
    );
}