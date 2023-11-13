import React from 'react';
import '../../App.css'
import '../styles/Order.css';
import label from '../assets/bogdanreeds-label.png'

export default function Order() {
    return (
        <>
            <div className='label'>
                <img className='img' src={label} alt="label for bogdan reeds" width="100%" height="100%" />
            </div>

            <div className="order-desc">
                <p className="center">To order Bogdan Reeds, please copy the text below, enter your information, and send it to <b>bogdanreeds@gmail.com</b></p>
                <br /> <br />
                <div className="div-with-copy-text">
                    <p id="textToCopy" className="text-to-copy">
                        Full Name: your_name
                        <br /><br />
                        Full Shipping Address: your_address
                        <br /><br />
                        Number of reeds ($28/each): your_number_of_reeds
                        <br /><br />
                        Shipping Method (pick one): [USPS/$5] [Pickup at Claire's house in Summerville, SC / FREE]
                        <br /><br />
                        Payment Method (pick one): [Venmo @clairembog] [CashApp $clairembog] [Cash] [Check]
                        <br /><br />
                        How long you have been playing oboe: your_experience_level
                        <br /><br />
                        Anything else?: your_message
                    </p>
                </div>
                <br /> <br />

                <p className="center">
                    Once I receive your email, I will let you know if I can complete your order request.
                    Please note that I am a full-time software engineer and I make reeds in my spare time.
                    Your order request will be finalized once we correspond over email.
                </p>
                <br />
            </div>


        </>
    );
}