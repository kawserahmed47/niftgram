import React, { useEffect } from 'react'

import '../../assets/css/GetListed.scss'

export default function GetListed() {
    document.body.title = 'List token on EVER | EVER - one platform, all things money'
    document.body.id = 'getListed'
    let intro = document.getElementById('intro')

    function getViewportSize(){
        var e = window;
        var a = 'inner';
        if (!('innerWidth' in window)){
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
    }

    function next(){
        let currentPos = window.pageYOffset;
        let vh = getViewportSize().height
        let abPos = currentPos - (currentPos % vh)
        let goToPos = vh + abPos
        window.scrollTo(0, goToPos)
        console.log(currentPos)
    }

    function previous(){
        let currentPos = window.pageYOffset;
        let vh = getViewportSize().height
        let abPos = currentPos + (currentPos % vh)
        let goToPos = abPos - vh
        window.scrollTo(0, goToPos)
        console.log(currentPos)
    }

    useEffect(()=>{
        window.addEventListener('keyup', (e)=>{
            if (e == 'Enter') {
                next()
            }
        })
    }, [])


    return (
        <div id="getListed">
            <section className="getListedIntro center" id="intro">
                <div className="introContent">
                    <div className="introHead">
                        <img className="introHeadImg" src="/assets/img/brandLogo/ever_all_color.png" alt="Ever Logo" />
                    </div>
                    <p className="introSubHead">
                        Asset Listing Request Form
                    </p>
                    <p className="introPara">Thanks for helping us be the first to list assets!</p>
                    <br />
                    <br />
                    <p className="introPara">
                    Please carefully read all instructions before submitting the form. Invalid submissions will be ignored.
                    </p>
                    <br />
                    <br />
                    <p className="introPara">Multiple submissions of the same asset will move it to the back of the queue and will take longer to list. Do not submit this multiple times or ask others to do so!</p>

                    <div className="startBtn">
                        <button className="listedBtn" onClick={() => next()}>Start</button>
                        <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                    </div>
                    <div className="timer">
                    
                    </div>
                </div>
            </section>
            <div className="formSection center">
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">1. &#8594; What is your first and last name? *</label>
                        <input className="formInput" type="text" placeholder="Type your answer here..." required />
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                    <div className="bottomArrow">
                        <div className="arrows">
                            <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/02ac02/external-down-arrows-those-icons-fill-those-icons-7.png" onClick={() => next()}/>
                            <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/02ac02/external-up-arrows-those-icons-fill-those-icons-6.png" onClick={() => previous()}/>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">2. &#8594; What is your role or relationship to the asset? *</label>
                        <ul className="assetInputList">
                            <li>
                                <input type="radio" name="assets" id="ans1" class="answer" />
                                <label for="ans1" id="option1">Owner / Founder</label>
                            </li>
                            <li>
                                <input type="radio" name="assets" id="ans1" class="answer" />
                                <label for="ans1" id="option2">Team member</label>
                            </li>
                            <li>
                                <input type="radio" name="assets" id="ans1" class="answer" />
                                <label for="ans1" id="option3">Public Investor</label>
                            </li>
                            <li>
                                <input type="radio" name="assets" id="ans1" class="answer" />
                                <label for="ans1" id="option4">Interested Party</label>
                            </li>
                        </ul>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">3. &#8594; What is your email address? *</label>
                        <div className="warnText">
                            <p>A valid email address is required in order for us to follow up with you about the listing. Submissions with invalid email addresses will be discarded.</p>
                            <br />
                            <p>Email addresses from Gmail, Yahoo, Hotmail, Protonmail, or other free email services will require additional verification or citations for the information you provide in this form.</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="name@example.com" required />
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">4. &#8594; URL on EVER</label>
                        <div className="warnText">
                            <p>If you are requesting an update to an existing listing, please submit the URL to the asset on EVER here, otherwise leave this blank.</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="https://" />
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">5. &#8594; Link to your asset's largest market</label>
                        <div className="warnText">
                            <p>For example a tradingview page on Binance, a Uniswap Info Token page, a BSCScan address for Pancakeswap LP Token, or any other website for an active market.</p>
                            <br />
                            <p>This field is optional but providing it allows us to price your asset much faster.</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="https://" />
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">6. &#8594; Asset Name *</label>
                        <input className="formInput" type="text" placeholder="Type your answer here..." required/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">7. &#8594; Asset Description *</label>
                        <div className="warnText">
                            <p>Plain text. The longer the better.</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="Type your answer here..." required/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">8. &#8594; Asset Website *</label>
                        <input className="formInput" type="text" placeholder="https://" required/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>

                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">9. &#8594; On which Blockchain does your asset operate? *</label>
                        <p>Options will be here</p>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">10. &#8594; Asset Contract Address</label>
                        <div className="warnText">
                            <p>(if applicable)</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="Type your answer here..."/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">&#10077; The following metadata fields are optional, but the more information you provide the better.</label>
                        
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">11. &#8594; URL to Asset Logo</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">12. &#8594; Block Explorer URL</label>
                        <div className="warnText">
                            <p>For example, a link to your asset on bscscan or etherscan or another block explorer</p>
                            <br />
                            <br />
                        </div>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">13. &#8594; Blog URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">14. &#8594; BitcoinTalk URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">15. &#8594; Discord URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">16. &#8594; Facebook URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">17. &#8594; Github URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">18. &#8594; LinkedIn URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">19. &#8594; Medium URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">20. &#8594; Reddit URL</label>
                        <input type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">21. &#8594; Telegram URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">22. &#8594; Twitter URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">23. &#8594; Whitepaper URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">24. &#8594; Youtube URL</label>
                        <input className="formInput" type="text" placeholder="https://"/>
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Ok <span>&#10003;</span></button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
                <section className="individualForm">
                    <div className="mainInput">
                        <label className="inputLabel">&#10077; Your response is about to be submitted. This is your last chance to go back and amend any fields.</label>
                        
                        <div className="nextBtn">
                            <button className="listedBtn" onClick={() => next()}>Submit</button>
                            <p className="helperText">press <span>Enter</span> <span className="enter">&#8629;</span></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}