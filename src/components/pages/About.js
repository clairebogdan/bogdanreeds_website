import React from 'react';
import '../../App.css'
import '../styles/About.css'
import me from '../assets/me-with-oboe.jpg'
import thread from '../assets/thread-and-reed.jpg'

export default function About() {
    return (
        <>
            <div className="img-container">
                <img src={me} alt="claire bogdan with oboe next to river" width="90%" height="90%"></img>
            </div>

            <div className='about-container'>
                <p>Bogdan Reeds was established in 2017 and is owned and operated by Claire Bogdan.
                    Claire Bogdan is a software engineer in Summerville, SC,
                    but is also a professionally trained oboist and former middle school
                    band director.
                    <br /><br />
                    Claire began learning to make oboe reeds in 2007. Over several years, she
                    perfected her craft of making reeds. While attending the Univeristy of South Carolina (UofSC),
                    Claire started making and playing on her own reeds. Shortly after, she began selling
                    reeds to her college friends that needed reeds for their classes. This side business
                    continued to grow as local middle and high school band directors started to request reeds from
                    Claire. After graduating in 2017, with a Bachelor's in Music Education and a Performance Certificate
                    in Oboe, Claire made "Bogdan Reeds" official.
                    <br /><br />
                    While Claire's career journey has shifted from middle school band director --> freelance oboist / private lesson 
                    teacher --> software engineer, Bogdan Reeds has continued to trive as her side business. Claire also continues to play
                    oboe in the Charleston Wind Symphony!
                </p>


            </div>

            <div className='about-grid'>
                <div className="about-grid-item">
                    <h1>Specs</h1> <br />
                    <p>
                        <strong>Cane:</strong>
                        <br />
                        - Rigotti
                        <br />
                        - 10-10.5mm
                        <br />
                        - Caleb -1
                        <br /><br />

                        <strong>Staples:</strong>
                        <br />
                        - Stevens, Forrests, or Chiarugi
                        <br />
                        - Brass
                        <br />
                        - 47mm
                    </p>
                </div>
                <div className='about-grid-pic'>
                    <img className="picture" src={thread} alt="oboe reed and thread" width="400px" height="400px"></img>
                </div>
            </div>
        </>
    );
}