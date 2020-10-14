import React from 'react';
import '../../App.css'
import '../styles/ReedCare.css'
import reeds from '../assets/blue-reeds.jpg'

export default function ReedCare() {
    return (
        <>

        <div className="img-container">
            <img src={reeds} alt="several reeds"></img>
        </div>
        <div className='reed-care-box'>
            <h1 className="topic">General Tips</h1><br/>
            <ul>
                <li>Every reed is different! Some reeds are great for high notes, some are great for low notes, 
                    and some are great in all registers. Use this to your advantage! For example, if you have a piece with lots 
                    of low notes, play on the reed that sounds great in the low range.
                </li>
                <br/>
                <li>New reed? Remember, just like a new pair of shoes, it will need to be 
                    broken in. Just as you would wear the shoes to break them in, play the reed 
                    to break it in.
                </li>
                <br/>
                <li>Old reed not sounding too great? It has probably run its course, and is now a "dead" reed. Time for a new one!
                </li>
                <br/>
                <li>Soaking the reed in cold water can cause opening of the reed, 
                    and warm water can cause a larger opening of the reed. You usually can't go wrong 
                    with soaking in lukewarm water.</li>
                    <br/>
                <li>Make sure the crossover side of the reed faces you when you play.
                    The crossover is where the thread crosses over other strands of thread.
                </li>
                <br/>
                <li>Reeds can change with the weather, but not always (cold or dry = closed reed, hot or humid = open reed)</li>
                <br/>
                <li>If the reed thread starts to unravel, try to save it! Do not let it unravel. 
                    Use super glue to put it back in place. 
                    To prevent any unraveling (just in case), apply clear nail polish to the thread.</li>
                <br/>
                <li><strong>Oboe reeds are extremely fragile and easily break. Be very careful with your reeds at all times! 
                    This is your responsibility!</strong></li>
            </ul>
        </div>

        <div className='do-dont-grid'>
            <div className="do">
                <h1><center>DO</center></h1><br/>
                    <i class="fas fa-check"/> Store your reeds in a real reed case.
                    <br/><br/>
                    <i class="fas fa-check"/> Soak your reed in water for 20 seconds.
                    <br/><br/>
                    <i class="fas fa-check"/> Have more than one reed at all times
                    <br/><br/>
                    <i class="fas fa-check"/> Rotate playing on your reeds.
                    <br/><br/>
                    <i class="fas fa-check"/> Be extremely careful with your reeds.
            </div>
            <div className="dont">
                <h1><center>DON'T</center></h1><br/>
                    <i class="fas fa-times-circle"/> Store your reeds in the plastic container it came in. This will cause mold!
                    <br/><br/>
                    <i class="fas fa-times-circle"/> Soak your reed in your mouth. This will cause the reed to deteriorate over time.
                    <br/><br/>
                    <i class="fas fa-times-circle"/> Have only one reed. What if that reed breaks? 
                    <br/><br/>
                    <i class="fas fa-times-circle"/> Play on only one reed everyday. This will cause that reed to die quicker. Rotating reeds 
                    everyday extends their lives.
                    <br/><br/>
                    <i class="fas fa-times-circle"/> Be careless with you reed, and letting other people play your reed. Unless you <i>really </i> 
                    trust this person, no one should ever handle your oboe reeds besides you!
            </div>
        </div>
        </>
    );
}