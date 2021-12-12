import React, { useState, useEffect } from 'react'

export default function Header() {
    return(
        <header className="header" id="header_block">
            <div className="center" style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
                <div className="header__logo">
                    <a href="https://www.ever.re/" className="logo" title="Ever Corp">
                        <img className="header__logo_image" src="assets/img/brandLogo/ever_all_black.png" alt=""/>
                    </a>
                </div>
                <nav className="header__menu">
                    <ul className="menu">
                        <li className="menu__item">
                            <a href="#" className="menu__link">Products</a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Banking</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Investing</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Trading</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Offerings</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Cryptos</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">NFTs</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Ever Wallet</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Exchage</a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Demo</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">CFD</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Classic</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">P2P</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Perpetual</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Pro</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Advanced</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Margins</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Derivatives</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Prime</a></li>
                                </ul>
                            </div>    
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">Prices</a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Banking</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Crypto</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Trading</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Investing</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Offerings</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                <img src="assets/img/support.svg" width="30" alt="Support"/>
                            </a>
                            <div className="menu__hidden_items">
                                <ul className="menu">
                                    <li className="menu__item"><a href="#" className="menu__link">Live Chat</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Submit a request</a></li>
                                    <li className="menu__item"><a href="#" className="menu__link">Bug Bounty</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu__item"><a href="./signin" className="menu__link buttonT1">Sign In</a></li>
                        <li className="menu__item"><a href="./signup" className="menu__link buttonT1">Sign Up</a></li>
                    </ul>
                </nav>
                <button className="button btn-menu-toggle" type="button" aria-label="открыть меню"><span className="btn-menu-toggle__line btn-menu-toggle__line--top"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--center"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--bottom"></span></button>
            </div>
        </header>
    )
}