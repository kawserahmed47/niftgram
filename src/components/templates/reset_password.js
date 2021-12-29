import React, { useState } from 'react'
import Header from './layouts/header2';
import Footer from './layouts/FooterNew'
import axios from 'axios';
export default function Reset_password() {

    let forgetEmail = window.localStorage.getItem("forget_email");
    // Checking valid user
    if( forgetEmail.length == 0 || !forgetEmail ){
        window.location.href = "/signin"
    }



    const [passwordVal, setPasswordVal] = useState();
    const [confirmPasswordVal, setConfirmPasswordVal] = useState();
    const [formWarning, setFormWarning] = useState();



    let passwordInput = (e) => {
        let value = e.target.value
        setPasswordVal(value)
    }
    let confirmInput = (e) => {
        let value = e.target.value
        setConfirmPasswordVal(value)
    }


    
    let authentication = async () => {

        if( passwordVal && confirmPasswordVal ){

            const data = { 
                email: window.localStorage.getItem("forget_email"),
                token: window.localStorage.getItem("token"),
                password: passwordVal,
                confirmPassword: confirmPasswordVal
                
             }

            await axios.post('/api/users/reset-password', data).then(function (response) {
                console.log(response);
                setFormWarning(response.data.message);
                
                 
                if(response.data.status){
                    window.localStorage.setItem("forget_email", "");
                    window.localStorage.setItem("token", "");
                    window.location.href = "/signin"
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
                                <h1 class="auth-form__title">Reset Password</h1>
                                <div class="auth-form__body">
                                    <p class="auth-form__note">Required fields have an asterisk: *</p>
        
                                    <div class="auth-form__input-container">
                                        <label for="email">New Password*</label>
                                        <input id="email" name="password" type="password" placeholder="Password" require  onInput={(e)=>{passwordInput(e)}}/>
                                    </div>

                                    <div class="auth-form__input-container">
                                        <label for="email">Confirm*</label>
                                        <input id="email" name="confirm_password" type="password" placeholder="Confirm" require  onInput={(e)=>{confirmInput(e)}}/>
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
