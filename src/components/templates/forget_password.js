import React, { useState } from 'react'
import Header from './layouts/header2';
import Footer from './layouts/FooterNew'

import api from '../../config';


export default function Forget_password() {


    const [emailVal, setEmailVal] = useState();
    const [formWarning, setFormWarning] = useState();



    let emailInput = (e) => {
        let value = e.target.value
        setEmailVal(value)
    }


    
    let authentication = async () => {

        if( emailVal){

            const data = { email: emailVal }



            fetch(api.url+`/api/users/send-otp`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                return response.json();
            }) 
            
            .then((response)=>{
                
                console.log(response);
                setFormWarning(response.message);
                setEmailVal("");
                
                 
                if(response.status){
                    window.localStorage.setItem("forget_email", response.email);
                    window.localStorage.setItem("token", response.token);
                    window.location.href = "/otp-check"
                }
             
    
            }).catch((error)=>{
    
                console.log(error);
                setFormWarning("Someting went wrong.")
    
            })


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
                                <h1 class="auth-form__title">Forget Password</h1>
                                <div class="auth-form__body">
                                    <p class="auth-form__note">Required fields have an asterisk: *</p>
        
                                    <div class="auth-form__input-container">
                                        <label for="email">Email*</label>
                                        <input id="email" name="email" type="email" placeholder="Email" require  onInput={(e)=>{emailInput(e)}}/>
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
