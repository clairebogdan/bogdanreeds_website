import React from 'react';
import '../../App.css'
import '../styles/Gallery.css'
import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'

export default function Gallery() {
    return (
        <>
        <div className="gallery-grid">
            <div className='gallery-img'>
                <img src={gallery5} alt="reeds" width="100%" height="100%"/>
            </div>

            <div className='gallery-img'>
                <img src={gallery2} alt="reeds" width="100%" height="100%"/>
            </div>

            <div className='gallery-img'>
                <img src={gallery3} alt="reeds" width="100%" height="100%"/>
            </div>

            <div className='gallery-img'>
                <img src={gallery4} alt="reeds" width="100%" height="100%"/>
            </div>

            <div className='gallery-img'>
                <img src={gallery1} alt="reeds" width="100%" height="100%"/>
            </div>
            
        </div>
        </>
    );
}