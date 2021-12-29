import React, { useState } from 'react'
import Header from './layouts/header2';
import Footer from './layouts/FooterNew';

import axios from 'axios';



export default function Signup() {


    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [emailVal, setEmailVal] = useState();
    const [passwordVal, setPasswordVal] = useState();
    const [formWarning, setFormWarning] = useState();
    
    let passwordVisibilityToggle = (showOrHide) => {
        let show = document.querySelector(".auth-form__input__img.showpass")
        let hide = document.querySelector(".auth-form__input__img.hidepass")
        let passwordInput = document.querySelector("#password")
        if(showOrHide){
            show.classList.add("hide")
            hide.classList.remove("hide")
            passwordInput.type = "text"
        }else{
            show.classList.remove("hide")
            hide.classList.add("hide")
            passwordInput.type = "password"
        }
    }
    let firstNameInput = (e) => {
        let value = e.target.value
        setFirstName(value)
    }
    let lastNameInput = (e) => {
        let value = e.target.value
        setLastName(value)
    }
    let emailInput = (e) => {
        let value = e.target.value
        setEmailVal(value)
    }
    let passwordInput = (e) => {
        let value = e.target.value
        setPasswordVal(value)
    }

    
    let authentication = async () => {
        //  e.preventDefault();
        if(firstName && lastName && emailVal && passwordVal){
            // setFormWarning("Signup is under developmet!")
            // const userData = await axios.get('api/users/get-all-users');
            
            const data = {
                first_name : firstName,
                last_name : lastName,
                email: emailVal,
                password : passwordVal
            }

            await axios.post('/api/users/create-user', data).then(function (response) {
                console.log(response);
                setFormWarning("Account Created Successfully.");
                setFirstName("");
                setLastName("");
                setEmailVal("");
                setPasswordVal("");
                window.location.href = "/signin"


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
    return(
        <div>
            <div className="wrapper">
                <Header/>
                <main class="main" style={{minHeight:"100vh"}}>
                    <section class="each-section first">
                        <div class="center center-content">
                            <div class="auth-form">
                                <h1 class="auth-form__title">Create your account</h1>
                                <div class="auth-form__body">
                                    <p class="auth-form__note">Required fields have an asterisk: *</p>
                                    <div class="auth-form__mutlitple-input-container">
                                        <div class="auth-form__input-container">
                                            <label for="firstName">First name*</label>
                                            <input id="firstName" name="firstName" type="text" placeholder="First name" require  onInput={(e)=>{firstNameInput(e)}}/>
                                        </div>
                                        <div class="auth-form__input-container">
                                            <label for="lastName">Last name*</label>
                                            <input id="lastName" name="lastName" type="text" placeholder="Last name" require  onInput={(e)=>{lastNameInput(e)}}/>
                                        </div>
                                    </div>
                                    <div class="auth-form__input-container">
                                        <label for="email">Email*</label>
                                        <input id="email" name="email" type="email" placeholder="Email" require  onInput={(e)=>{emailInput(e)}}/>
                                    </div>
                                    <div class="auth-form__input-container">
                                        <label for="password">Password*</label>
                                        <div class="auth-form__input-with-img">
                                            <input id="password" name="password" type="password" placeholder="Choose password" require  onInput={(e)=>{passwordInput(e)}}/>
                                            <img class="auth-form__input__img showpass" onClick={() => passwordVisibilityToggle(true)} src="assets/img/eye.png"/>
                                            <img class="auth-form__input__img hidepass hide" onClick={() => passwordVisibilityToggle(false)} src="assets/img/hidden.png"/>
                                        </div>
                                    </div>
                                    <p className="form-warning">{formWarning}</p>
                                    <div class="auth-form__body__footer">
                                        <div class="i-agree-container">
                                            <input type="checkbox" id="iAgree"/>
                                            <label for="iAgree">I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy.</label>
                                        </div>
                                    </div>
                                    <button class="auth-form__submit-button large" type="button" onClick={()=>{authentication()}}>Create account</button>
                                </div>
                                <div class="auth-form__footer signup-page">
                                    <p>Already have a EVER account?</p>
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