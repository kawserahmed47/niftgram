import React, { useState } from 'react'

export default function Signin() {

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
    let emailInput = (e) => {
        let value = e.target.value
        setEmailVal(value)
    }
    let passwordInput = (e) => {
        let value = e.target.value
        setPasswordVal(value)
    }
    let authentication = () => {
        if(emailVal=="demo" && passwordVal=="demo"){
            setFormWarning(null)
            window.location.href = "https://app.ever.re"
        }else{
            setFormWarning("Please fill both field!")
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
                <main className="main">
                    <section className="each-section first">
                        <div className="center center-content">
                            <div className="auth-form">
                                <h1 className="auth-form__title">Sign in to Ever.re</h1>
                                <div className="auth-form__body">
                                    <div className="auth-form__input-container">
                                        <input id="email" name="email" type="email" placeholder="Email" require onInput={(e)=>{emailInput(e)}}/>
                                    </div>
                                    <div className="auth-form__input-container">
                                        <input id="password" name="password" type="password" placeholder="Password" require  onInput={(e)=>{passwordInput(e)}}/>
                                        <img className="auth-form__input__img showpass" onClick={() => passwordVisibilityToggle(true)} src="assets/img/eye.png"/>
                                        <img className="auth-form__input__img hidepass hide" onClick={() => passwordVisibilityToggle(false)} src="assets/img/hidden.png"/>
                                    </div>
                                    <p className="form-warning">{formWarning}</p>
                                    <div className="auth-form__body__footer">
                                        <div className="remember-login-container">
                                            <input type="checkbox" id="remember"/>
                                            <label htmlFor="remember">Keep me signed in on this computer</label>
                                        </div>
                                        <button className="auth-form__submit-button" type="button" onClick={()=>{authentication()}}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="auth-form__footer">
                                    <a href="#">Forgot password?</a>
                                    <a href="./signup">Don't have an account?</a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
            </div>
            
        </div>
    )
}