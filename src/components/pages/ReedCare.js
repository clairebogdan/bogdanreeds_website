import React from 'react';
import '../../App.css'
import '../styles/ReedCare.css'

export default function ReedCare() {
    return (
        <>
        <div className='reed-care-box'>
            <h1 className="topic">General Tips</h1>
            <ul>
                <li>hi</li>
            </ul>
        </div>

        <div className='reed-care-box'>
            <h1 className="topic">Help</h1>
            <div className="arrow-grid">
                <div className='grid-item'>
                    <div className="if">If...</div>
                    <div className='arrow'><i class="fas fa-long-arrow-alt-right"></i></div>
                    <div className='then'>Then...</div>
                </div>
            </div>
        </div>
        </>
    );
}