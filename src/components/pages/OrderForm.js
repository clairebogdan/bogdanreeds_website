import React from 'react';
import emailjs from 'emailjs-com';
// import ReCaptchaV2 from 'react-google-recaptcha';
// import randomstring from 'randomstring';

import '../styles/OrderForm.css'

export default function OrderForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('bogdanreeds', 'bogdanreeds', e.target, 'user_jS6RUTjj8a1tc2Yozo8kf')
            .then((result) => {
                alert("Your order inquiry was sent to Bogdan Reeds!");
                console.log(result.text);
            }, (error) => {
                alert("Error: " + error.text);
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='order-container'>
            <div className='notification'>
                <h3 className='annoucement-text'>
                    Reed price has changed for new customers ($30/ea). 
                    
                    Existing customers are not affected -- if you have ordered from Bogdan Reeds during or before April 2023, you are 
                    eligible for the Loyalty Discount ($25/ea)! The Loyalty Discount will end May 2024.
                </h3>
            </div>
            {/* DON'T FORGET TO CHANGE THE SEND BUTTON!!! */}
            {/* <div className='notification'>
                <h3 className='alert-text'>
                    OUT OF STOCK - Come back May 1st!
                </h3>
            </div> */}
            <h1 className="order-header">Order Request</h1>
            <form onSubmit={sendEmail}>
                <div className='order-form'>

                    <label>Full Name: </label>
                    <input required type="text" className="text-input" name="from_name" />

                    <label>Email: </label>
                    <input required type="email" className="text-input" name="from_email" />

                    <label>Street Address 1: </label>
                    <input required type="text" className="text-input" name="address1" />

                    <label>Street Address 2: </label>
                    <input type="text" className="text-input" placeholder="optional" name="address2" />

                    <label>City: </label>
                    <input required type="text" className="text-input" name="city" />

                    <label>State: </label>
                    <select required className="dropdown" name="state">
                        <option selected disabled="true"></option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>

                    <label>Zip: </label>
                    <input required type="text" className="text-input" name="zip" />

                    <label>Number of reeds: </label>
                    <input required type="number" className="number-input" name="quantity" />

                    <label>Loyalty Discount? (Customer as of April 2023 or earlier): </label>
                    <select required className="dropdown" name="existing">
                        <option selected disabled="true"></option>
                        <option value="Yes">Yes ($25/ea)</option>
                        <option value="No">No ($30/ea)</option>
                    </select>

                    <label>Shipping method: </label>
                    <select required className="dropdown" name="shipping">
                        <option selected disabled="true"></option>
                        <option value="Local">$FREE Local Pickup at Claire's House (Summerville)</option>
                        <option value="Standard">$5 Standard</option>
                        <option value="Priority">$8 Priority</option>
                    </select>

                    <label>Payment method: </label>
                    <select required className="dropdown" name="payment">
                        <option selected disabled="true"></option>
                        <option value="Venmo">Venmo</option>
                        <option value="Cash App">Cash App</option>
                        <option value="Apple Pay">Apple Pay</option>
                        <option value="Check">Check</option>
                        <option value="Cash">Cash</option>
                    </select>

                    <label>Oboe experience: </label>
                    <select required className="dropdown" name="years">
                        <option selected disabled="true"></option>
                        <option value="True Beginner">Beginner (under 1 year)</option>
                        <option value="Intermediate">Intermediate (1 or 2 years)</option>
                        <option value="Advanced">Advanced (3 or 4 years)</option>
                        <option value="Advanced Plus">Advanced Plus (over 4 years)</option>
                    </select>

                    <label>Message: </label>
                    <textarea className="textarea-input" id="" cols="30" rows="8" placeholder="Feel free to write about your oboe experience, how you like your reeds, etc." name="message"></textarea>
                </div>
                {/* Remember to remove 'disabled' when needed! */}
                <input disabled id="sendButton" type="submit" className="btn" value="Send"></input>
            </form>
        </div>
    );

}