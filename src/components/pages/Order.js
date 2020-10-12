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
            <p>The order inquiry form below will email me all the necessary information that I will 
                need for your order. This form does NOT make your order official. Rather, it begins 
                our conversation and speeds up the process. 
                <br/><br/>
                Reeds are $25 each. Standard shipping is $5, and priority shipping is $8.
            </p>
        </div>

        <OrderForm/>
        </>
    );
}