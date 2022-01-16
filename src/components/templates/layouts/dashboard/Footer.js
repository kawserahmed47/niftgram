import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>

<section className="eachSection footerSection center-x">
    <div className="customContainer">
        <div className="footerContainer center-x-with-flex-column">
            <div className="newsLetterContainer center-x">
                <div className="newsLetterContentContainer">
                    <p className="newsletterTitle">Join our newsletter!</p>
                    <div className="newsLetterInputContainer">
                       
                        <div id="mc_embed_signup" style={{height:"100%"}}>
                            <form action="https://ever.us20.list-manage.com/subscribe/post?u=56934695d4f357d705d9e1283&amp;id=171eeb594f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"  rel="noopener noreferrer" noValidate style={{height : "100%"}}>
                                <div id="mc_embed_signup_scroll" style={{height : "100%"}}>
                                    <div className="mc-field-group" style={{height : "100%"}}>
                                        <input type="email" name="EMAIL" className="newsLetterInput required email" id="mce-EMAIL" placeholder="Enter your email"/>
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                        <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                    </div>   
                                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_56934695d4f357d705d9e1283_171eeb594f" tabIndex="-1" /></div>
                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="newsLetterSubscribeBtn commonButton button"/></div>
                                </div>
                            </form>
                        </div>
                        

                    </div>
                    <p className="newsletterSummary">Subscribe to our weekly alerts, products updates, development updates, promos, education, and events.</p>
                </div>
                <div className="newsLetterConfirmationPopUp">
                    <p className="newsLetterConfirmationText">Thank you for subscribing to ever.re Newsletter</p>
                </div>


                
            </div>
            <div className="socialMediaAndApp d-flex">
                <div className="socialMediaButtonContainer d-flex">
                    <p className="footerItemTitle">Join our community:</p>
                    <div className="telegramContainer">
                        <button className="socialMediaButton center">
                            <a href="https://t.me/woldescoin" target="_blank"  rel="noopener noreferrer" className="center">
                                <img alt="Img" src="images/navLogo/telegram.svg" />
                            </a>
                        </button>
                        <div className="telegramContainerOuter">
                            <div className="telegramAccountContainer">
                                <a href="https://t.me/ever_newsroom" target="_blank"  rel="noopener noreferrer" className="telegramAccountEachLanguage">Newsroom</a>
                                <a href="https://t.me/evertokens" target="_blank"  rel="noopener noreferrer" className="telegramAccountEachLanguage">Global</a>
                                <a href="#" className="telegramAccountEachLanguage">Basha Indonesia</a>
                                <a href="#" className="telegramAccountEachLanguage">中文</a>
                                <a href="#" className="telegramAccountEachLanguage">Tiếng Việt</a>
                                <a href="#" className="telegramAccountEachLanguage">Italiano</a>
                                <a href="#" className="telegramAccountEachLanguage">русский</a>
                                <a href="#" className="telegramAccountEachLanguage">Türkiye</a>
                                <a href="#" className="telegramAccountEachLanguage">Português</a>
                                <a href="#" className="telegramAccountEachLanguage">Español</a>
                                <a href="#" className="telegramAccountEachLanguage">日本語</a>
                                <a href="#" className="telegramAccountEachLanguage">Français</a>
                                <a href="#" className="telegramAccountEachLanguage">Announcements</a>
                                <a href="#" className="telegramAccountEachLanguage">ever.re Channel</a>
                                
                            </div>
                        </div>
                    </div>
                    <button className="socialMediaButton center">
                        <a href="#" target="_blank"  rel="noopener noreferrer" className="center">
                            <img alt="Img" src="images/navLogo/twitter.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/reddit.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton github center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/github.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton medium center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/medium.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/youtube.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/linkedin.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/facebook.svg"/>
                        </a>
                    </button>
                    <button className="socialMediaButton center">
                        <a href="#" className="center">
                            <img alt="Img" src="images/navLogo/instagram.svg"/>
                        </a>
                    </button>
                </div>
                <div className="appButtonContainer d-flex">
                    <p className="footerItemTitle">Download our apps:</p>
                    <a className="appButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/google-play.svg"/>
                        </button>
                    </a>
                    <a className="appButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" className="appButtonDynamicLogo" src="images/apple-logo.svg"/>
                        </button>
                    </a>
                    <a className="appButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/windows.svg"/>
                        </button>
                    </a>
                    <a className="appButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" className="appButtonDynamicLogo" src="images/mac.svg"/>
                        </button>
                    </a>
                    <a className="appButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/api.svg"/>
                        </button>
                    </a>
                </div>
            </div>
            <div className="gamblingButtonContainer d-flex">
                <div className="gamblingButtonAll d-flex">
                    <a className="gamblingButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/gambling/GT.svg"/>
                        </button>
                    </a>
                    <a className="gamblingButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/gambling/InternationalBettingIntegrity.svg"/>
                        </button>
                    </a>
                    <a className="gamblingButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/gambling/Gibraltar.svg"/>
                        </button>
                    </a>
                    <a className="gamblingButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/gambling/eCogra.svg"/>
                        </button>
                    </a>
                    <a className="gamblingButtonEach" href="#">
                        <button className="commonButton center">
                            <img alt="Img" src="images/gambling/18.svg"/>
                        </button>
                    </a>
                    <div className="stopsButtonContainer d-flex">
                        <a className="stopsButtonEach" href="#">
                            <button className="commonButton center">
                                <img alt="Img" src="images/stopsImage.jpg"/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="footerContactContainer d-flex">
                    
                    <div className="center-y" style={{marginBottom: "12px"}}>
                        <p className="footerItemTitle text-center">Contact Ever: </p>
                        <a className="footerContactEachButton" href="https://t.me/evertokens" target="_blank"  rel="noopener noreferrer">
                            <button className="commonButton center">
                                <img alt="Img" src="images/navLogo/telegram.svg"/>
                            </button>
                        </a>
                        <a className="footerContactEachButton" href="mailto:support@ever.re" target="_blank"  rel="noopener noreferrer">
                            <button className="commonButton center">
                                <img alt="Img" src="images/email.svg"/>
                            </button>
                        </a>
                      
                        
                    </div>
                    
                    <div className="center-y" style={{flexWrap: "wrap"}}>
                        <img alt="Img" className="footerPaymentImage EVER day" src="images/brandLogo/favicon.png"/>
                        <img alt="Img" className="footerPaymentImage EVER dark" src="images/brandLogo/favicon_white.png"/>
                        <img alt="Img" className="footerPaymentImage invertOnDark" src="images/visa.svg"/>
                        <img alt="Img" className="footerPaymentImage" src="images/masterCard.svg"/>
                        <img alt="Img" className="footerPaymentImage invertOnDark" src="images/applePay.svg"/>
                        <img alt="Img" className="footerPaymentImage" src="images/googlePay.svg"/>
                        <img alt="Img" className="footerPaymentImage" src="images/paypal.svg"/>
                        <img alt="Img" className="footerPaymentImage" src="images/sslSecure.png"/>
                    </div>
     
                </div>
            </div>
            

            <p style={{marginTop: "24px"}}>Copyright © 2022 EVER Corp. All Rights Reserved.</p>
            
        </div>
    </div>
</section>
            
        </div>
    )
}
