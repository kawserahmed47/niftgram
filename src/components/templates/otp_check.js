import React, { useState } from 'react'
import Header from './layouts/header2';
import Footer from './layouts/FooterNew'
import axios from 'axios';

export default function Otp_check() {

   let forgetEmail = window.localStorage.getItem("forget_email");
    // Checking valid user
    if( forgetEmail.length == 0 || !forgetEmail ){
        window.location.href = "/signin"
    }


    const [emailVal, setEmailVal] = useState();
    const [otpVal, setOtpVal] = useState();

    const [formWarning, setFormWarning] = useState();



    let otpInput = (e) => {
        let value = e.target.value
        setOtpVal(value)
    }


    
    let authentication = async () => {

        if( otpVal){

            const data = { 
                email: window.localStorage.getItem("forget_email"),
                token: otpVal
            }



            await axios.post('/api/users/check-otp', data).then(function (response) {
                console.log(response);
                setFormWarning(response.data.message);
                setEmailVal("");
                if(response.data.status){
                    window.localStorage.setItem("token", otpVal);
                    window.location.href = "/reset-password"
                }

              })
              .catch(function (error) {
                console.log(error);
                setFormWarning("Someting went wrong.")
              });

        }else{
            setFormWarning("Please all the required both field!")
        }
       
    }

    document.querySelector("body").style.backgroundColor = "#02ac02"



    return (
        <div>
            <div className="wrapper">
                <Header/>
                <main class="main" style={{minHeight:"100vh"}}>
                    <section class="each-section first">
                        <div class="center center-content">
                            <div class="auth-form">
                                <h1 class="auth-form__title">OTP Check</h1>
                                <div class="auth-form__body">
                                    <p class="auth-form__note">An OTP sent your email. Please enter it below.</p>
                                    <p class="auth-form__note">{window.localStorage.getItem("token")}</p>
        
                                    <div class="auth-form__input-container">
                                        <label for="email">OTP*</label>
                                        <input id="otp" name="otp" type="text" placeholder="OTP" require  onInput={(e)=>{otpInput(e)}}/>
                                    </div>


                                    <p className="form-warning">{formWarning}</p>

                                    <button class="auth-form__submit-button large" type="button" onClick={()=>{authentication()}}>Submit</button>
                                </div>
                                <div class="auth-form__footer signup-page">
                                    <p>Did you remember your password?</p>
                                    <a href="./signin">Log in</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
                
            </div>
            
        </div>
    )
}
