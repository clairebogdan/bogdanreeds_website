import React from 'react';
import '../../App.css'
import '../styles/FAQ.css'
import faq from '../assets/faq.jpg'

export default function FAQ() {
    return (
        <>
        <div className="img-container">
            <img src={faq} alt="reeds with FAQ title" width="100%" height="100%"></img>
        </div>

        <div className="faq-container">
            
            <div className='QA'>
                <div className="question">
                    How long will it take to get my reed?
                </div>

                <div className='answer'>
                    Ideally, it usually takes 1 week for you to receive your reed. This includes the 
                    4 days it takes to make a reed from start to finish, and shipping time.
                    However, it is advised that you plan for it to take about 2 weeks, 
                    especially if you are ordering 4 or more reeds. 
                    Since I work full-time as a 
                    software engineer, I can only make reeds in my spare time.
                </div>
            </div>


            <div className='QA'>
                <div className="question">
                    What do the different colors of thread mean?
                </div>

                <div className='answer'>
                    Nothing! It's just nice to have different colors to be able to tell 
                    the reeds apart from each other. Sometimes, if you order at just the right 
                    time, you can request a thread color for your reeds.
                </div>
            </div>


            <div className='QA'>
                <div className="question">
                    What if I break my reed?
                </div>

                <div className='answer'>
                    Once the reed is in your possession, it is your responsibility (no refund). 
                    If it arrived broken, I will send you another one free of charge. In my experience, 
                    none of my reeds have ever arrived broken.
                </div>
            </div>

            <div className='QA'>
                <div className="question">
                    Can I order a soft, medium, or hard reed?
                </div>

                <div className='answer'>
                    While many companies sell reeds according to these labels, I do not. This is because I make 
                    all my reeds to the same standard (except beginner reeds, which are typically made to be easier/
                    less resistant than other reeds). If I had to put a label on it, all my reeds are considered "medium" except 
                    beginner reeds, which I would consider "medium-soft". However, a better description of my reeds would be 
                    balanced, easy to play, not too resistant, and controlled.
                </div>
            </div>

            <div className='QA'>
                <div className="question">
                    How are Bogdan Reeds different than store-bought reeds?
                </div>
            
                <div className='answer'>
                    It is ALWAYS a good idea to buy reeds from a professional oboist rather than a music store. 
                    Most of the time, oboe reeds sold in music store (AKA store-bought reeds) are NOT made by a musician. Rather, 
                    they are made by a machine. This means that reeds are not tested for quality, and rarely, if ever, played on 
                    by an actual oboist. Reeds are expensive, and it is important that you get QUALITY reeds for your purchase -- 
                    reeds that have been made and tested by an actual oboist. If it is your first time playing on a handmade reed, like 
                    Bogdan Reeds, you will feel and hear a difference. Store-bought reeds tend to be loud, buzzy, out of tune, and 
                    either extremely easy to play, or extrememly resistant. 
                    Bogdan Reeds have a controlled sound, good tone, and are in tune. 
                    Your embouchure will get better and stronger playing on handmade reeds!
                </div>
            </div>

            <div className='QA'>
                <div className="question">
                    What is a "dead" reed?
                </div>
            
                <div className='answer'>
                    All reeds have a natural lifecycle. When you get a new reed, it will need to be broken in, just like a new 
                    pair of shoes. Over time, the reed will start to change. Soon, it may even become 
                    your favorite reed! However, reeds do not last forever. If you play everyday for at least an hour, your reed will 
                    likely "die" in about 2 months. A "dead" reed has the following qualities: the reed takes longer to soak than before, 
                    it is sharp in pitch, and it doesn't have a dark, deep tone anymore. You may find that playing low notes becomes harder 
                    to do. The reed just doesn't feel as vibrant anymore. This tells you it's time to get a new reed!
                </div>
            </div>

            <div className='QA'>
                <div className="question">
                    What do I do with my "dead" or broken reeds?
                </div>
                
                <div className='answer'>
                    Do not throw your reeds in the trash!!! The staples (the cork tubes) are resuable for oboe reed makers. 
                    Instead, fully break your reed and take the cane off the staple. 
                    If you can, take the thread off too. You should be left with just the staple at this point. You should give these 
                    staples to an oboist in your area that makes reeds, to your band director, or you can ship them back to me. 
                    If you ship them back to Bogdan Reeds, your next order will have free standard shipping!
                </div>
            </div>

            <div className='QA'>
                <div className="question">
                    What is the reed making process?
                </div>

                <div className='answer'>
                    Reeds take several days to make. While technically a reed can be made in one day, it is not a good 
                    idea. This is because reed cane has fibers that squish as you make the reed. If someone finishs a 
                    reed in one day, it is likely that the reed will sound <i>completely</i> different the next day, due to the 
                    fibers expanding back to their regular form. It is best to work on reeds bit by bit, allowing the cane 
                    fibers to restore themselves throughout the process. This is how I make reeds: <br/>
                    Day 1 - Tie on, remove bark, clip open, slip cane in place<br/>
                    Day 2 - Scrape, establish the general shape, get the reed to make a noise<br/>
                    Day 3 - Scrape, reed should easily crow, play test<br/>
                    Day 4 - Finishing, all final adjustments are made, frequent play testing, ready to ship!
                </div>
            </div>

        </div>
        </>
    );
}