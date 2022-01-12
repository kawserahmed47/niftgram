import React, { useState, useEffect } from 'react'

export default function Header() {

    function showHeaderMenu(){
        let menu = document.querySelector(".header__menu")
        if(menu.classList.contains("active")){
            menu.classList.remove("active")
        }else{
            menu.classList.add("active")
        }
    }
    return(
        <header className="header header2" id="header_block">
            <div className="center" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
                <div className="header__logo">
                    <a href="./" className="logo" title="Ever Corp">
                        <img className="header__logo_image desktop" src="assets/img/brandLogo/ever_all_white.png" alt=""/>
                        <img className="header__logo_image desktop hover" src="assets/img/brandLogo/ever_all_color.png" alt=""/>
                        <img className="header__logo_image mobile" src="assets/img/brandLogo/favicon_white.png" alt=""/>
                        <img className="header__logo_image mobile hover" src="assets/img/brandLogo/faviconTransparent.png" alt=""/>
                    </a>
                </div>
                <nav className="header__menu">
                    <ul className="menu">
                        <li className="menu__item">
                            <a className="menu__link">Products <b class="caret"></b></a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Banking</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Insurance</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Asset Management</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Trading</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Underwriting</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Cyptocurrency</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Protocol</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Ever Wallet</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a className="menu__link">Exchanges <b class="caret"></b></a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Demo</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">CFD</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">DX</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">SpreadBet</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Binaries</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Classic</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">P2P</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">EverDEX</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Perpetual</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Pro</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">XPO</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Advanced</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Margins</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Derivatives</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Prime</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">CDx</a></li>
                                </ul>
                            </div>    
                        </li>
                        <li className="menu__item">
                            <a className="menu__link">NFT<b class="caret"></b></a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Explore</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Create</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Sell</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">NFTures</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">NFTory</a></li>
                                </ul>
                            </div>    
                        </li>
                        <li className="menu__item">
                            <a className="menu__link">Prices <b class="caret"></b></a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Banking</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Crypto</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Trading</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Asset Management</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Underwriting</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a className="menu__link">Fees <b class="caret"></b></a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Banking</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Crypto</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Trading</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Asset Management</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Underwriting</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a className="menu__link" style={{display: "flex"}}>
                                <img src="assets/img/support-white.svg" width="30" alt="Support"/>
                                <b class="caret" style={{marginTop: "16px"}}></b>
                            </a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Live Chat</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Submit a request</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Bug Bounty</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item"><a href="./signin" className="menu__link">Sign In</a></li>
                        <li className="menu__item"><a href="./signup" className="menu__link">Sign Up</a></li>
                    </ul>
                </nav>
                <button className="button btn-menu-toggle" type="button" aria-label="открыть меню"  onClick={()=>{showHeaderMenu()}}><span className="btn-menu-toggle__line btn-menu-toggle__line--top"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--center"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--bottom"></span></button>
            </div>
        </header>
    )
}