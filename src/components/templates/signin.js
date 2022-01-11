import React, { useState } from 'react'
import Header from './layouts/header2';
import Footer from './layouts/FooterNew'
import api from '../../config';

export default function Signin() {

    document.body.title = 'Sign in to your EVER account | EVER - one platform, all things money'

  

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



    let authentication = async () => {
        // if(emailVal=="demo" && passwordVal=="demo"){
            // setFormWarning(null)
            // login-check
        if(emailVal && passwordVal){

           const data ={
               email: emailVal,
               password : passwordVal
           } 

           fetch(api.url+`/api/users/login-check`, {
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
                // response.json().then((res)=>{
                //     console.log(res);
                // })
                console.log(response);
                if(response.status){

                    if(response.status){
                        setFormWarning(response.message + " Redirecting..." );
                        setEmailVal("");
                        setPasswordVal("");
                        window.location.href = "https://app.ever.re?auth="+response.token
                    }else{
                        setFormWarning(response.message);
                    }
                    

                }else{
                    setFormWarning("Email or Password does not match");
                }

            }).catch((error)=>{

                console.log(error);
                setFormWarning("Someting went wrong.")

            })

        }else{
            setFormWarning("Please fill both field!")
        }
       
    }

    document.querySelector("body").style.backgroundColor = "#02ac02"
    return(
        <div>
            <div className="wrapper">
                <Header/>
                <main className="main" style={{minHeight:"100vh"}}>
                    <section className="each-section first">
                        <div className="center center-content">
                            <div className="auth-form">
                                <h1 className="auth-form__title">Sign in to EVER</h1>
                                <div className="auth-form__body">
                                    <div className="auth-form__input-container">
                                        <input id="email" name="email" value={emailVal} type="email" placeholder="Email" require onInput={(e)=>{emailInput(e)}}/>
                                    </div>
                                    <div className="auth-form__input-container">
                                        <input id="password" name="password" value={passwordVal} type="password" placeholder="Password" require  onInput={(e)=>{passwordInput(e)}}/>
                                        <img className="auth-form__input__img showpass" onClick={() => passwordVisibilityToggle(true)} src="assets/img/eye.png"/>
                                        <img className="auth-form__input__img hidepass hide" onClick={() => passwordVisibilityToggle(false)} src="assets/img/hidden.png"/>
                                    </div>
                                    <p className="form-warning">{formWarning}</p>
                                    <div className="auth-form__body__footer">
                                        <div className="remember-login-container">
                                            <input type="checkbox" id="remember"/>
                                            <label htmlFor="remember">Remember me</label>
                                        </div>
                                        <button className="auth-form__submit-button" type="button" onClick={()=>{authentication()}}>SIGN IN</button>
                                    </div>
                                </div>
                                <div className="auth-form__footer">
                                    <a href="./forget-password">Forgot password?</a>
                                    <a href="./signup">Don't have an account?</a>
                                    <a href="#">Privacy Policy</a>
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