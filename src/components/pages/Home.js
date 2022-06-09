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
                    <br />
                    <span className='sig'>- Burke Mounts, oboe performance major</span>
                </div>
            </div>

            <div className="review">
                <div className="quote">
                    "Her reeds are so much better quality and there is a noticeable difference
                    between Bogdan Reeds and the ones you get from Amazon. The sound quality is
                    so much better, and it makes you sound like a professional oboist. My tone would
                    definitely not be where it is right now without her reeds. They are
                    non-resistant, pretty, and overall my first choice"
                    <br />
                    <span className='sig'>- Ava T., high school oboist</span>
                </div>
            </div>

            {/* <div className='notification'>
                <h3 className='alert-text'>Not taking orders right now due to moving (April 4 - May 20). Will start back up
                    After May 20! Email me directly in case of a reed emergency :)
                </h3>
            </div> */}

            <OrderForm />
        </>
    );
}