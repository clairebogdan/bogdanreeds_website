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
                <p>Bogdan Reeds was established in 2017 under its original name, Oboe Reeds 
                    by Claire Bogdan. In June 2019, the name was changed to Bogdan Reeds. Bogdan Reeds 
                    is owned and operated by Claire Bogdan. Claire Bogdan is a full-time software engineer 
                    in Columbus, Ohio, but is also a professionally trained oboist and former middle school 
                    band director. 
                    <br/><br/>
                    Claire learned how to make oboe reeds when she was 12 years old. Over several years, she 
                    perfected her craft of making reeds. Claire studied oboe with Dr. Rebecca Nagel at the 
                    Univeristy of South Carolina, where she obtained her Bachelor of Music Education degree 
                    and her Performance Certificate in Oboe. While at UofSC, 
                    Claire was the principal oboist of the Wind Ensemble. Claire also performed 
                    with the UofSC Symphony Orchestra and various chamber ensembles.
                    <br/><br/>
                    In 2016, Claire began selling reeds to her friends that needed oboe reeds for their 
                    college classes. In 2017, under the original name Oboe Reeds by Claire Bogdan, Claire 
                    expanded her customer network by selling reeds to local middle and high schools. Word 
                    started to spread, and people outside of her network started contacting her for reeds. 
                    <br/><br/>
                    While Claire was a middle school band director from 2017-2019, she continued to make and sell 
                    her reeds in her spare time. In June 2019, Claire left teaching to 
                    pursue a degree in Computer Science. During this time, Claire worked as a freelance oboist -- 
                    she taught 12 private students, performed with the Charleston Wind Symphony, and changed the name 
                    of her reed business to Bogdan Reeds. Bogdan Reeds started to have even more reach, selling to 
                    oboists all over the country! 
                    <br/><br/>
                    As of October 2020, Claire is a full-time software engineer in Columbus, Ohio. Just as she did when 
                    she was a teacher, she continues to make and sell her reeds in her spare time. While she cannot 
                    make reeds in as large quantities as she used to when she was freelancing, Claire continues to meet her 
                    customers' needs.  
                </p>

            
        </div>
        
        <div className='about-grid'>
            <div className="about-grid-item">
            <h1>Specs</h1> <br/>
            <p>
                <strong>Cane:</strong>
                <br/>
                - Rigotti
                <br/>
                - 10-10.5mm
                <br/>
                - Caleb -1
                <br/><br/>

                <strong>Staples:</strong>
                <br/>
                - Stevens, Forrests, or Chiarugi
                <br/>
                - Brass
                <br/>
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