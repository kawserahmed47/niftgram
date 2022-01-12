import React, { useState, useEffect } from 'react'

export default function Header() {

    useEffect(() => {
        changeArrowWithLink("menu__link_with_arrow")
        // changeArrowWithLink("menu__link_with_arrow2")
    });

    function changeArrowWithLink(id){
        let element = document.getElementById(id)
        
        let all = [
            {
                text: "Get started",
                link: "./signup"
            },
            {
                text: "Start trading",
                link: "./signup"
            },
            {
                text: "Start earning",
                link: "./signup"
            },
            {
                text: "Launch demos",
                link: "./signup"
            }
        ]

        let interval
        let index = 0
        typeChar()
        function typeChar(){
            element.href = all[index].link

            let charIndex = 0
            let textTemp = ""
            interval = setInterval(function(){
                textTemp += all[index].text[charIndex]
                element.innerText = textTemp
                if(charIndex === all[index].text.length-1){
                    if(index === all.length-1){
                        index=0
                    }else{
                        index++;
                    }
                    clearInterval(interval)
                    setTimeout(function(){
                        typeChar()
                    }, 3000)
                }
                charIndex++

            },50)
        }
    }
    
    function showHeaderMenu(){
        let menu = document.querySelector(".header__menu.mobile")
        if(menu.classList.contains("active")){
            menu.classList.remove("active")
        }else{
            menu.classList.add("active")
        }
    }


    return(
        <header className="header" id="header_block">
            <div className="center" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
                <div className="header__logo">
                    <a href="./" className="logo" title="Ever Corp">
                        <img className="header__logo_image desktop" src="assets/img/brandLogo/ever_all_black.png" alt=""/>
                        <img className="header__logo_image desktop hover" src="assets/img/brandLogo/ever_all_color.png" alt=""/>
                        <img className="header__logo_image mobile" src="assets/img/brandLogo/favicon_all_black.png" alt=""/>
                        <img className="header__logo_image mobile hover" src="assets/img/brandLogo/faviconTransparent.png" alt=""/>
                    </a>
                </div>
                {/* <li className="menu__item menu__item_with_arrow getStartedBtn2">
                    <a href="#" className="menu__link menu__link_with_arrow" id="menu__link_with_arrow2">Get started</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="9" viewBox="0 0 50 9" fill="none" class="css-yb3uov menu__item_arrow" style={{color:"yellow"}} arrowWidth="15"><path fillRule="evenodd" clipRule="evenodd" d="M46 0C47.5 4 50 4 50 4V5C50 5 47.5 5 46 9H45C45 8.27907 46.0395 6.2588 47.369 5H0V4H47.369C46.0395 2.7412 45 0.720928 45 0H46Z" fill="white"></path></svg>
                </li> */}
                <nav className="header__menu desktop">
                    <ul className="menu">
                        <li className="menu__item"><a href="./#about" className="menu__link">About</a></li>
                        <li className="menu__item"><a href="https://careers.ever.re" className="menu__link" target="_blank">Careers <sup style={{fontStyle: "italic", color:'black'}}>We're Hiring</sup> </a></li>
                        <li className="menu__item"><a href="./#demo" className="menu__link">Products</a></li>
                        <li className="menu__item"><a href="./#roadmap" className="menu__link">Roadmap</a></li>
                        <li className="menu__item"><a href="./#token" className="menu__link">Token</a></li>
                        <li className="menu__item"><a href="./#team" className="menu__link">Team</a></li>
                        <li className="menu__item"><a href="https://www.ever.re/get_listed" className="menu__link">List Token <sup style={{fontStyle: "italic", color:'black'}}>FREE</sup></a></li>
                    </ul>
                </nav>
                <nav className="header__menu desktop">
                    <ul className="menu">
                        <li className="menu__item"><a href="./signin" className="menu__link">Sign In</a></li>
                        <li className="menu__item menu__item_with_arrow getStartedBtn">
                            <a href="./signup" className="menu__link menu__link_with_arrow" id="menu__link_with_arrow">Get started</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="9" viewBox="0 0 50 9" fill="none" class="css-yb3uov menu__item_arrow" style={{color:"yellow"}} arrowWidth="15"><path fillRule="evenodd" clipRule="evenodd" d="M46 0C47.5 4 50 4 50 4V5C50 5 47.5 5 46 9H45C45 8.27907 46.0395 6.2588 47.369 5H0V4H47.369C46.0395 2.7412 45 0.720928 45 0H46Z" fill="#000"></path></svg>
                        </li>
                    </ul>
                </nav>

                <nav className="header__menu mobile">
                    <ul className="menu">
                        <li className="menu__item"><a href="./#about" className="menu__link">About</a></li>
                        <li className="menu__item"><a href="./#demo" className="menu__link">Products</a></li>
                        <li className="menu__item"><a href="./#roadmap" className="menu__link">Roadmap</a></li>
                        <li className="menu__item"><a href="./#token" className="menu__link">Token</a></li>
                        <li className="menu__item"><a href="./#token" className="menu__link">Team</a></li>
                        <div className="menu__item_signAndGetStart">
                            <li className="menu__item fill"><a href="./signup" className="menu__link">Get Started</a></li>
                            <li className="menu__item"><a href="./signin" className="menu__link">Sgn In</a></li>
                        </div>
                        <ul class="social">
                            <li class="social__item">
                                <a href="https://t.me/ever_newsroom" target="_blank" class="social__link">
                                    <svg fill="#4a90e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"></path></svg>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="https://twitter.com/ever_newsroom" target="_blank" class="social__link">
                                    <svg fill="#4a90e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg>
                                </a>
                            </li>
                            <li class="social__item">
                                <a href="https://eblog.medium.com" target="_blank" class="social__link">
                                    <svg fill="#4a90e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M22.542,21h-5.931 v-0.333L18,19.445V12.47L14.589,21h-0.533l-3.806-8.597v6.087l1.74,2.177V21H7.458v-0.333l1.799-2.177v-7.242L7.658,9.249 c0,0,0-0.289,0-0.244h4.376l3.399,7.353l2.932-7.353h4.154v0.244L21,10.526v8.919l1.542,1.222V21z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </nav>

                <button className="button btn-menu-toggle" type="button" onClick={()=>{showHeaderMenu()}}>
                    <span className="btn-menu-toggle__line btn-menu-toggle__line--top"></span>
                    <span className="btn-menu-toggle__line btn-menu-toggle__line--center"></span>
                    <span className="btn-menu-toggle__line btn-menu-toggle__line--bottom"></span>
                </button>
            </div>
        </header>
    )
}