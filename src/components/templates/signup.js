import React, { useState } from 'react'

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
    let authentication = () => {
        if(firstName && lastName && emailVal && passwordVal){
            setFormWarning("Signup is under developmet!")
        }else{
            setFormWarning("Please all the required both field!")
        }
       
    }
    return(
        <div>
            <div className="wrapper">
                <header className="header" id="header_block">
                    {/* <div className="top_info_block" id="top_info_block"></div> */}
                    <div className="center" style={{paddingTop: ".5rem", paddingBottom: ".5rem" }}>
                        <div className="header__logo">
                            <a href="https://www.ever.re/" className="logo" title="Ever Corp">
                                <img className="header__logo_image" src="assets/img/brandLogo/everlogo.png" alt=""/>
                            </a>
                        </div>
                        <nav className="header__menu">
                            <ul className="menu">
                                <li className="menu__item"><a href="./#about" className="menu__link">About</a></li>
                                <li className="menu__item"><a href="./#roadmap" className="menu__link">Roadmap</a></li>
                                <li className="menu__item"><a href="./#token" className="menu__link">Token</a></li>
                                <li className="menu__item"><a href="./#team" className="menu__link">Team</a></li>
                                <li className="menu__item"><a href="./#cases" className="menu__link">Backed by</a></li>
                                <li className="menu__item"><a href="#" className="menu__link">Join our Whitelist</a></li>
                                <li className="menu__item"><a href="./signin" className="menu__link">Sign In</a></li>
                            </ul>
                        </nav>
                        <div className="header__social">

                        </div><button className="button btn-menu-toggle" type="button" aria-label="открыть меню"><span className="btn-menu-toggle__line btn-menu-toggle__line--top"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--center"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--bottom"></span></button>
                    </div>
                </header>
                <main class="main">
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
                                    <p>Already have a Coinbase account?</p>
                                    <a href="./signin">Log in</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
            </div>
            
        </div>
    )
}