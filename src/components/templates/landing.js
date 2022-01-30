import React, { useState, useEffect,} from 'react'
import Header from './layouts/header'
import Footer from './layouts/footer'

export default function Landing() {
    const [sliderVal, setSliderVal] = useState(0)
    useEffect(() => {
        changeArrowWithLink()
        getAllTeamMembers()
    });

    var startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 1000, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe, isleftswipe){
        if (isrightswipe){
            let val = sliderVal
            val-=10
            
            sliderInput (val)
        }
        else if(isleftswipe){
            let val = sliderVal
            val+=10
            
            sliderInput (val)
        }
        else{
            console.log("didn't worked")
        }
    }
 
    function touchStart(e){
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        // e.preventDefault()
    }
 
    function touchMove(e){
        // e.preventDefault() // prevent scrolling when inside DIV
    }
 
    function touchEnd(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        var swipeleftBol = (elapsedTime <= allowedTime && dist*-1 >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        
        handleswipe(swiperightBol, swipeleftBol)
        // e.preventDefault()
    }


    function sliderInput (val) {
        val = parseInt(val)
        let max = parseInt(document.getElementById("rangeSlider").value)
        let min = 0
        
        if(val<min){
            val=min
        }
        if(val>max){
            val=max
        }

        setSliderVal(val)

        let teamContainer = document.querySelector(".team__list")
        let teamBlock = document.querySelectorAll(".team__list__block")[0]

        let width = teamBlock.offsetWidth

        teamContainer.scrollLeft = width*(val/10);
    };

    // useEffect(() => {
    //     console.log('Do something after counter has changed', sliderVal);
    // }, [sliderVal]);
    
    function fitSlider(val){
        val = parseInt(val)
        if(val%10 !== 0){
            if(val%10 <= 5){
                val = val-(val%10)
                // setSliderVal(val)
                
            }else{
                val = val+(val%10)
                // setSliderVal(val)
            }
            // sliderInput(val)
        }
    }


    let allTeamMembers = []
    let perBlock
    let totalBlock
    function getAllTeamMembers(){
        let teamMember = document.querySelectorAll(".team__member")

        teamMember.forEach(element => {
            allTeamMembers.push(element)
        });
        makeTeamBlock()
    }

    window.onresize = ()=>{
        makeTeamBlock()
    }
    function makeTeamBlock(){
        let teamContainer = document.querySelector(".team__list")
        teamContainer.innerHTML = ""
        if(window.screen.width>500){
            perBlock = 8
        }else{
            perBlock = 4
        }

        totalBlock = Math.ceil(allTeamMembers.length/perBlock)
        let blockNeed = totalBlock
        for(let i=0; i<blockNeed; i++){
            let block = document.createElement("div");
            block.classList.add("team__list__block")
            for(let j=0; j<perBlock && i*perBlock+j<allTeamMembers.length; j++){
                block.appendChild(allTeamMembers[i*perBlock+j])
            }
            teamContainer.appendChild(block)
        }

        // change slider step
        let slider = document.getElementById("rangeSlider")
        slider.max = (totalBlock-1)*10
        // slider.step = slider.max/totalBlock
    }

    function changeArrowWithLink(){
        let element = document.getElementById("typewriter")

        let all = [
            "Open a free bank account in minutes",
            "Deposit or Invest as little as $5 and start earning +18% APR, paid out daily",
            "Trade 1000s of cryptos and securities at one place",
            "Deposit, buy, and sell cryptos and securities with over 160 supported fiat currencies",
            "Free demo trading account with $10,000 to perfect your trading skills",
            "Make your money go further"
        ]

        let interval
        let index = 0
        typeChar()
        function typeChar(){
            let charIndex = 0
            let textTemp = ""
            let typeForward = true
            let wait = true
            interval = setInterval(function(){
                if(typeForward){
                    textTemp += all[index][charIndex]
                    element.innerText = textTemp

                    if(charIndex === all[index].length-1){
                        typeForward = false
                        setTimeout(function(){
                            wait = false
                        }, 3000)
                    }else{
                        charIndex++
                    }
                }else{
                    if(!wait){
                        textTemp = textTemp.slice(0, -1)
                        element.innerText = textTemp

                        if(textTemp.length===0){
                            wait = true
                            if(index === all.length-1){
                                index=0
                            }else{
                                index++;
                            }
                            clearInterval(interval)
                            typeChar()
                        }
                    }
                }
            },50)
        }
    }
    return(
        <div>
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <article className="first-screen">
                        <div className="center">
                            <h1 className="first-screen__title h1">One platform, all things money.</h1>
                            <div className="fade-in--200">
                                <p className="typewriterContainer" style={{minHeight:"56px"}}>
                                    <span className="first-screen__desc typewriter" id="typewriter">

                                    </span>
                                    <span className="typyingCursor"></span>
                                </p>
                            </div>
                            <div className="first-screen__btns fade-in--400">
                                <a href="./#demo" className="btn btn--grad btn--demo" rel="noopener nofollow">
                                    <span>Live Demo</span>
                                    {/* <img src="./assets/img/brandLogo/favicon_white.png" alt="" /> */}
                                </a>
                                <a href="https://doc.ever.re/whitepaper" target='_blank' className="btn btn--grad btn--demo" rel="noopener nofollow">
                                    <span style={{paddingLeft:0}}>Whitepaper</span>
                                    {/* <img src="./assets/img/brandLogo/favicon_white.png" alt="" /> */}
                                </a>
                            </div>
                            <div className="fade-in--400">
                                <p className="first-screen__intro_deck">
                                    Auditing by <img style={{marginLeft:"8px", marginRight:"8px"}} src="./assets/img/certik_logo.svg" height="20" alt="CERTIK"/> in progress
                                </p>
                            </div>
                        </div>
                        <div className="first-screen__scroll">
                            <div className="center">
                                <a href="#about">
                                    <svg width="16" height="23" viewBox="0 0 16 23">
                                        <path d="M7.3 22.7a1 1 0 001.4 0l6.37-6.36a1 1 0 00-1.41-1.41L8 20.59l-5.66-5.66a1 1 0 00-1.41 1.41l6.36 6.37zM7 0v22h2V0H7z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="first-screen__img">
                            {/* <picture>
                                <img src="./assets/img/app.png" alt="" loading="lazy" height="900" />
                            </picture>
                            <a target="_blank" href="#" className="btn btn--play" aria-label="Play video" rel="noopener nofollow" data-id="_Jond3Bb4us">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <path d="M53 87.43V49.15a3 3 0 014.48-2.61l38.28 21.7a3 3 0 01-.28 5.35L57.19 90.2A3 3 0 0153 87.42z">
                                    </path>
                                </svg>
                            </a> */}
                            <video playsinline autoPlay muted loop class="bannerImage" id="bannerImage">
                                <source src="./assets/img/landing-page-top-video-new.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </article>
                    <article className="about" id="about">
                        <div className="center">
                            <h2 className="hash">About</h2>
                            <p className="h1">Why EVER</p>
                            <ul className="about__list">
                                <li className="about__item fade-in--100">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M30.64 27.43h-3.96c2.65-2.96 5.56-4.02 9.46-4.02 6.83 0 12.37 5.4 12.37 12.05 0 6.66-5.54 12.06-12.37 12.06-6.83 0-12.37-5.4-12.37-12.06h-2.75c0 8.14 6.77 14.73 15.12 14.73s15.12-6.6 15.12-14.73-6.77-14.73-15.12-14.73c-4.41 0-7.92 1.22-11 4.36v-3.03H22.4v8.05h8.24v-2.68zm12.37 6.7h-5.5v-6.7h-2.74v9.37H43v-2.68z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Actively managed funds</h3>
                                    <p>Consistent portfolio rebalancing by experienced asset managers.</p>
                                </li>
                                <li className="about__item fade-in--200">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M25.22 23.01h21.14c1.3 0 2.35 1.29 2.35 2.87v20.1c0 1.58-1.05 2.87-2.35 2.87H25.22c-1.3 0-2.35-1.29-2.35-2.87v-20.1c0-1.58 1.06-2.87 2.35-2.87zm.24 14.21v9.04h20.66v-9.04h-5.8l-2.93-3.9-3.75 8.75-4.84-4.85h-3.34zm0-2.58h4.4l2.91 2.9 4-9.34 4.83 6.44h4.52V25.6H25.46v9.04z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Asset diversification</h3>
                                    <p>Underlying assets such as crypto, NFTs, stocks, forex, indices, etfs, bonds, and commodities.</p>
                                </li>
                                <li className="about__item fade-in--300">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M24.77 46.82c-1.3-1.3-1.68-3.3-1.27-5.92-2.15-1.57-3.3-3.24-3.3-5.1 0-1.85 1.15-3.52 3.3-5.09-.41-2.62-.04-4.61 1.27-5.92 1.31-1.31 3.3-1.69 5.93-1.28 1.56-2.14 3.24-3.29 5.1-3.29 1.84 0 3.52 1.15 5.08 3.3 2.62-.42 4.62-.04 5.93 1.27 1.31 1.3 1.69 3.3 1.27 5.92 2.15 1.57 3.3 3.24 3.3 5.1 0 1.85-1.15 3.52-3.3 5.09.42 2.62.04 4.61-1.27 5.92-1.3 1.31-3.3 1.69-5.93 1.28-1.56 2.14-3.24 3.29-5.09 3.29-1.85 0-3.53-1.15-5.1-3.3-2.61.42-4.6.04-5.92-1.27zm6.28-1.67c.57-.12 1.17.12 1.49.62 1.24 1.93 2.36 2.78 3.25 2.78.9 0 2.01-.85 3.26-2.78.32-.5.9-.74 1.48-.62 2.25.48 3.64.3 4.28-.33.63-.63.8-2.03.33-4.27-.12-.58.12-1.17.61-1.49 1.93-1.25 2.8-2.36 2.8-3.26 0-.9-.87-2-2.8-3.25-.49-.32-.73-.91-.61-1.49.48-2.24.3-3.64-.33-4.27-.64-.63-2.03-.81-4.28-.33a1.42 1.42 0 01-1.48-.62c-1.25-1.93-2.36-2.79-3.26-2.79-.9 0-2 .86-3.25 2.8-.32.49-.92.73-1.5.6-2.24-.47-3.63-.3-4.26.34-.64.63-.82 2.03-.34 4.27.13.58-.12 1.17-.61 1.49-1.93 1.25-2.79 2.36-2.79 3.25 0 .9.86 2.01 2.79 3.26.5.32.74.91.61 1.49-.48 2.24-.3 3.64.34 4.27.63.63 2.02.81 4.27.33zm9.4-14.6l-6.08 6.08-3.24-3.24-2 2 5.24 5.25 8.09-8.08-2-2z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Security & transparency</h3>
                                    <p>DAO governance based approval for portfolio assets whitelist.</p>
                                </li>
                                <li className="about__item fade-in--600">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path fillRule="evenodd" d="M37.37 46.89v-1.7a11.08 11.08 0 007.58-4.72c4.3-.59 6.67-4.31 6.67-9.41V26.3a3.17 3.17 0 00-3.16-3.17h-2a3.17 3.17 0 00-2.75-1.59H27.87c-1.17 0-2.2.64-2.74 1.59h-2a3.17 3.17 0 00-3.17 3.16v4.75c0 5.1 2.38 8.83 6.68 9.42a11.08 11.08 0 007.57 4.72v1.7h-1.59a3.17 3.17 0 00-3.16 3.16h12.66a3.17 3.17 0 00-3.16-3.16h-1.59zM23.12 26.3h1.59v7.92c0 .73.07 1.44.2 2.12-1.17-1.05-1.79-2.86-1.79-5.29V26.3zm23.75 0v7.92c0 .73-.06 1.44-.2 2.12 1.17-1.05 1.79-2.86 1.79-5.29V26.3h-1.59zm-19 7.92v-9.5h15.84v9.5a7.92 7.92 0 01-15.84 0z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Performance Based Rewards</h3>
                                    <p>Earn more from comprehensive and advance trading tools.</p>
                                </li>
                                <li className="about__item fade-in--500">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path fillRule="evenodd" d="M20.42 30.83v14.45c0 2.98 4.9 4.82 10.84 4.82 5.94 0 10.84-1.84 10.84-4.82V30.83c0-2.98-4.9-4.82-10.84-4.82-5.95 0-10.84 1.84-10.84 4.82zm19.27 7.22V34c-2 1.06-5.04 1.66-8.43 1.66-3.4 0-6.44-.6-8.43-1.66v4.06c0 1.01 3.73 2.41 8.43 2.41 4.7 0 8.43-1.4 8.43-2.4zm-16.86 3.16c2 1.07 5.04 1.66 8.43 1.66 3.39 0 6.43-.6 8.43-1.66v4.07c0 1-3.74 2.4-8.43 2.4-4.7 0-8.43-1.4-8.43-2.4v-4.07zm16.86-10.38c0-1-3.74-2.4-8.43-2.4-4.7 0-8.43 1.4-8.43 2.4s3.73 2.4 8.43 2.4c4.68 0 8.4-1.38 8.43-2.4z">
                                            </path>
                                            <path d="M34.59 25.45c0-2.28 3.74-3.69 8.28-3.69 4.55 0 8.3 1.4 8.3 3.69V36.5c0 2.2-3.52 3.6-7.87 3.68v-1.85c3.39-.08 6.02-1.1 6.02-1.83v-3.12c-1.44.77-3.6 1.22-6.02 1.27v-1.84c3.39-.08 6.02-1.1 6.02-1.84v-3.11c-1.44.77-3.6 1.22-6.03 1.27a3.98 3.98 0 00-.64-1.84h.22c3.6 0 6.45-1.07 6.45-1.84s-2.85-1.85-6.45-1.85c-3.59 0-6.44 1.08-6.44 1.85v.03H34.6v-.03z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Variety of Products and Services</h3>
                                    <p>Varying products and services in banking, investing, trading, insurance, and finance all in one hub.</p>
                                </li>
                                <li className="about__item fade-in--400">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M35.8 51.51c-8.5-3.78-12.76-7.56-12.76-11.33V26.01c0-1.08.42-1.34 1.57-2.04.35-.2.77-.46 1.26-.79.23-.15 5.05-2.83 9.92-2.83 4.24 0 7.8 1.41 9.92 2.83.5.33.9.58 1.26.8 1.15.7 1.57.95 1.57 2.03a979.95 979.95 0 010 14.17c0 3.78-4.25 7.56-12.75 11.33zm9.9-11.33l.01-1.76v-2.77a6314.8 6314.8 0 00.01-9.11l-.2-.12-1.38-.88a15.5 15.5 0 00-8.35-2.36c-3.06 0-7.04 1.49-8.34 2.36l-1.4.88-.18.1v13.66c0 2.14 3.16 5.06 9.92 8.22 6.76-3.16 9.92-6.08 9.92-8.22zm-5.24-9.5l-6.09 6.08-3.24-3.25-2 2 5.24 5.26 8.09-8.09-2-2z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Economics of Scale</h3>
                                    <p>Shared products and technology, which also enables continued investment in product innovation, creating a virtuous circle.</p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="products" id="products">
                        <div className="center" style={{width: '1280px'}}>
                            <h2 className="hash">Products</h2>
                            <p className="h1" style={{display: 'flex', alignItems: 'center', fontSize: '20px'}}>Powered by <img height={20} style={{display: 'inline', margin: '0px 12px'}} src="assets/img/brandLogo/ever_all_black.png" alt="Ever white logo" /></p>
                            {/* <p className='headline-2'>Auditing by CERTIK in progress</p> */}
                            <p className='mt-2'>The product releases of our products have been divided into Gamma, Beta, and Alpha. Gamma products are products in the final testing process and are schedule to be release with a month. Beta products and going through the final development process and Alpha products are late in the planning process.</p>
                        </div>
                    </article>
                    <aside className="try-demo" id="demo">
                        <div className="center">
                            <p class="h1" style={{color:"var(--primary)", textAlign:"center"}}>Demos</p>
                            <br/>
                            <br/>

                            {/* Gamma */}
                            <h2 style={{color:"var(--primary)"}}>Gamma</h2>
                            <br/>
                            <div className="try-demo__box">
                                <div className="try-demo__box__each">
                                    <h2>Classic</h2>
                                    <br/>
                                    <p>Instant buying and selling of over 9k+ cryptos on the world's #1 and largest Instant Exchanger</p>
                                    <br/>
                                    <a href="https://classic.ever.re/" target="_blank" className="try-demo__button">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>EverDEX</h2>
                                    <br/>
                                    <p>Swap, pool, and farm 12k+ tokens built on 25+ cross-chain networks on the world's largest and most liquid DEX.</p>
                                    <br/>
                                    <a href="#" target="_blank" className="try-demo__button dim">Re-testing</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Perpetual</h2>
                                    <br/>
                                    <p>One-off and recurrent trading of 7k+ cryptos with intuitive charts and risk scores of each crypto on the world's #1 retail crypto exchanger</p>
                                    <br/>
                                    <a href="https://perpetual.ever.re/" target="_blank" className="try-demo__button">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>P2P exchange</h2>
                                    <br/>
                                    <p>With 300+ payment methods supporting instant crypto trading with people who are ready to trade with you</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Re-testing</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>XPO</h2>
                                    <br/>
                                    <p>DeFi options trading of 1k+ cryptos with no fixed maturity and no exercise limitation. Deposit just $1 to get started</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Re-testing</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Underwriting</h2>
                                    <br/>
                                    <p>Advanced crypto launcher, token placing, direct listing (fair launch), and auction listing</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Re-testing</a>
                                </div>

                            </div>

                            <br/>
                            <br/>

                            {/* Beta */}
                            <h2 style={{color:"var(--primary)"}}>Beta</h2>
                            <br/>
                            <div className="try-demo__box">
                                <div className="try-demo__box__each">
                                    <h2>Vault</h2>
                                    <br/>
                                    <p>The world's first crypto "topup" scratchcard available in your local grocery stores, globally</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Learn more</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>EverWallet</h2>
                                    <br/>
                                    <p>Advanced multi cross-chain wallet available online (web), mobile, paper, desktop, and hardware</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>ScoreFi</h2>
                                    <br/>
                                    <p>Identity Passports and credit scoring for Metaverse and Web 3.0</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Check rating</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Escrow</h2>
                                    <br/>
                                    <p>Escrow gateway securing GameFi, Metaverse, Marketplaces and beyond</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Staking</h2>
                                    <br/>
                                    <p>Providing a decentralized crowd computing network CPU-based Dev(Ops) solutions</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start earning</a>
                                </div>
                                
                                <div className="try-demo__box__each">
                                    <h2>NFT</h2>
                                    <br/>
                                    <p>Mint, sell, rent, and buy NFTs from 12+  blockchains in one place</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>TaxPal</h2>
                                    <br/>
                                    <p>Certified tax and accounting for individuals and enterprises in the tokenized economy, globally</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Insurance</h2>
                                    <br/>
                                    <p>Insuring cryptoassets, crypto projects, Metaverse, and Web3.0</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Crowdfund</h2>
                                    <br/>
                                    <p>Retail and crowd funding of crypto, social, and educational projects done right</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Launch demo</a>
                                </div>
                                
                            </div>

                            {/* Alpha */}
                            <h2 style={{color:"var(--primary)", marginTop: "40px"}}>Alpha</h2>
                            <br/>
                            <div className="try-demo__box">
                            <div className="try-demo__box__each">
                                    <h2>CFD</h2>
                                    <br/>
                                    <p>Lowest forex CFD fees, commission-free stocks/ETFs and providing access to 21k+ financial markets including FX, indices, shares, commodities, and more. Trade, deposit, and withdraw only in cryptos</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Margin</h2>
                                    <br/>
                                    <p>Advanced crypto trading platform to increase your trading profits by leverage</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>SpreadBet</h2>
                                    <br/>
                                    <p>Start trading 34k+ markets tax free. Trade 1k+ cryptos, stocks, forex, indices, commodities, bonds and shares with the lowest spreads and without taking ownership of the underlying asset</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Binaries</h2>
                                    <br/>
                                    <p>Trade with as little as $1 USD on major currencies, cryptocurrencies, stocks and commodities. Each EVER contract traded costs $1 to enter and $1 to exit.</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Pro</h2>
                                    <br/>
                                    <p>Trade 4k+ cryptos in 7k+ markets on the world's largest high-frequency spot trading platform</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>DX</h2>
                                    <br/>
                                    <p>Trade 50k+ stocks and 120+ currency pairings with greater visibility of the market, speed of execution, and aggregates prices from multiple exchanges worldwide on one platform</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Derivatives</h2>
                                    <br/>
                                    <p>Options and futures trading of cryptos and securities</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>CDx</h2>
                                    <br/>
                                    <p>Trade 100+ commodities such as gold, crude oil in CFDs, futures, options, spreadbets, DMA, binaries, and spot pairs on the go. Trade, deposit, and withdraw only in cryptos</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                                <div className="try-demo__box__each">
                                    <h2>Prime</h2>
                                    <br/>
                                    <p>Secured, advanced, and flexible institutional trading of cryptos</p>
                                    <br/>
                                    <a href="#" className="try-demo__button dim">Start trading</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article className="roadmap" id="roadmap">
                        <div className="center">
                            <h2 className="hash">Roadmap</h2>
                            <p className="h1">Stages of the project</p>
                            <div className="roadmap__table">
                                <div className="roadmap__row roadmap__row--q1-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q1</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Assemble executives team and technical staff</span></div>
                                        <div className="roadmap__td"><span>Ever blockchain conception and development</span></div>
                                        <div className="roadmap__td"><span>Release EverDEX v1, Classic exchange v1 and Perpetual exchange v1</span></div>
                                        <div className="roadmap__td"><span>Token Generation Event (TGE)</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q2-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q2</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>List Eve token on EverDEX, PancakeSwap, Uniswap, and Gate.io</span></div>
                                        <div className="roadmap__td"><span>Release XPO exchange v1, P2P exchange v1, and EVER Underwriting products</span></div>
                                        <div className="roadmap__td"><span>Launch Ever blockchain and protocol</span></div>
                                        <div className="roadmap__td"><span>File banking, insurance, and brokerage certification applications, globally</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q3-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q3</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Fair launch utility coin, Ever, and stablecoin, eDollar</span></div>
                                        <div className="roadmap__td"><span>Release EverWallet, ScoreFi, Escrow, TaxPal, Crowdfund and Staking platforms</span></div>
                                        <div className="roadmap__td"><span>Initiate FINRA and SIPC membership and certifications</span></div>
                                        <div className="roadmap__td"><span>Release EVER crypto exchanges v1: Pro, Margin, Derivatives, Advanced, and Prime</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q4-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q4</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Release website platform version 2.0</span></div>
                                        <div className="roadmap__td"><span>Release EVER trading exchanges v1: CFD, SpreadBet, Binaries, DX, and CDx</span></div>
                                        <div className="roadmap__td"><span>Launch Ever mobile apps, Desktop apps, and Linux version</span></div>
                                        <div className="roadmap__td"><span>Initiate Money Transmitter licenses certifications</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q5-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2023</div>
                                        <div className="roadmap__quarter">+</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Expand Ever blockchain global reach and usage</span></div>
                                        <div className="roadmap__td"><span>Launch EVER Endowment Fund (EVER GRANT)</span></div>
                                        <div className="roadmap__td"><span>Open global offices and branches of EVER</span></div>
                                        <div className="roadmap__td"><span>Release EverPay and EverPOS</span></div>
                                        <div className="roadmap__td"><span>Release crypto and trading exchanges v2</span></div>
                                        <div className="roadmap__td"><span>File NASDAQ and public listings of EVER via SPACs</span></div>
                                        <div className="roadmap__td"><span>Launch corporate sponsorship of global sports events and teams</span></div>
                                        <div className="roadmap__td"><span>Continue banking, insurance, and brokerage certification applications, globally</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="token" id="token">
                        <div className="center">
                            <h2 className="hash">Token</h2>
                            <p className="h1">Token details</p>
                            {/* <img className="token__pic" src="./assets/img/brandLogo/faviconTransparent-normal.png" width="379" height="auto" loading="lazy" alt="" /> */}
                            <div className="token__tabs">
                                <button className="token__btn-tab button is-active" type="button">Metrics</button>
                                <button className="token__btn-tab button" type="button">Distribution</button>
                                <button className="token__btn-tab button" type="button">Schedule</button>
                                <button className="token__btn-tab button" type="button">Governance</button>
                            </div>
                            <div className="token__row">
                                <div className="token__col is-active">
                                    <img src="/assets/img/token/token1.svg" alt=""/>
                                </div>
                                <div className="token__col fade-in--100">
                                    <img src="/assets/img/token/token2.svg" alt=""/>
                                </div>
                                <div className="token__col fade-in--100">
                                    <img src="/assets/img/token/token4.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className="join-demo">
                        <div className="center">
                            <div className="join-demo__box">
                                <div className="join-demo__content">
                                    <p className="join-demo__text">Join EVER right now and start earning</p>
                                    <div className="join-demo__btn fade-in--100">
                                        <a href="./signup" className="btn btn--white" target="_blank" rel="noopener nofollow">Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article className="team" id="team">
                        <div className="center team__center">
                            <h2 className="hash">Team</h2>
                            <p className="h1">Team members</p>
                            <p style={{marginTop: "16px"}}>
                                EVER currently has in-house 23 technical staff and 2 project managers and we are presently interviewing and onboarding executives for our c-suit and top-level positions as well as more programmers/coders for the EVER protocol and framework. Soon, we will be having their profiles on this section.
                                <br/>
                                <br/>
                                There are still available positions in c-suit, top, and mid-level, engineering, programming, internships, customer services, etc.
                                <br/>
                                <br/>
                                Please visit our  <a href="https://careers.ever.re" target="_blank" className="referenceLink" style={{textDecoration: 'none', fontWeight:"bold"}}>Careers</a> page to learn more about our current available job offers.
                            </p>
                            <div className="teamFounderContainer">
                                <div className="founderImageContainer center-x-with-flex-column">
                                    <img src="/assets/img/founder.png" alt="Founder Image"/>
                                    <p className="founderName">Peter M. Plange, PhD, Esq.</p>
                                    <div className="founderTitle" style={{display: 'flex', alignItems: 'center'}}>
                                        <p>Founder</p>
                                        <a href="http://t.me/pieter_ever" target="_blank">
                                            <img style={{width: '24px', marginLeft: '16px'}} src="/assets/img/socialLogos/telegram.svg" alt="telegram" />
                                        </a>
                                        <a href="mailto:peter.plange@ever.re" target="_blank">
                                            <img style={{width: '30px', marginLeft: '16px'}} src="/assets/img/socialLogos/email.svg" alt="mail" />
                                        </a>
                                    </div>
                                </div>
                                <div className="founderContentContainer">
                                    <p>Peter Plange has been working in the banking industrial for the past 16 and half years. An alumna from both Oxford University and Harvard University, Peter started his banking career in 2005 at Standard Chartered as an analyst. He rose through the ranks to be the head of Research in Financial and Emerging Markets till he left Standard Chartered to up start EVER in 2021.</p>
                                    <p>Peter has been involved in crypto since 2017. He is experienced in several crypto businesses ranging from a crypto-focused startup fund to arbitrage among a few others.</p>
                                </div>
                            </div>
                            <div className="team__list hide" id="team__list" onTouchStart={(e)=>{touchStart(e)}} onTouchMove={(e)=>{touchMove(e)}} onTouchEnd={(e)=>{touchEnd(e)}}>

                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Founder</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Chief Executive Officer</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Chief Operating Officer & President</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">The Ever Foundation Council Member</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Risk</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Products</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Technology</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Growth</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Communications</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Compliance</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Investor Relations</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Vice President, Business Development</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>
                                <div className="team__member">
                                    <div className="team__member__image-container">
                                        <img className="team__member__image" src="./assets/img/team/demo.jpg"/>
                                    </div>
                                    <p className="team_member_name">Name</p>
                                    <p className="team_member_title">Technical Staff</p>
                                    <a className="team_member_url" href="#"></a>
                                </div>

                            </div>
                            <div className="team__scroll hide">
                                <div class="range-slider">
                                    <div class="range-slider__slider">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step=".1"
                                            value={sliderVal}
                                            className="slider"
                                            id="rangeSlider"
                                            onInput={(element)=>{sliderInput(element.target.value)}}
                                            onMouseUp={(element)=>{fitSlider(element.target.value)}}
                                            onTouchEnd={(element)=>{fitSlider(element.target.value)}}

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    {/* <aside className="cases" id="cases">
                        <div className="center">
                            <h2 className="hash">Investment Funds</h2>
                            <p className="h1">Backed by</p>
                            <div className="cases__img fade-in--100">
                                <picture>
                                    <img src="./assets/img/all.svg" width="1222" height="270" alt="" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </aside> */}
                    <aside className="mobile-app">
                        <div className="center">
                            <div className="mobile-app__box">
                                <div className="mobile-app__content">
                                    <h2 className="hash">Coming soon</h2>
                                    <p className="h2">Ever Mobile</p>
                                    <p className="mobile-app__text fade-in--100">The convenient way to bank, invest, trade, and earn on the go.</p>
                                </div>
                                <div className="mobile-app__img fade-in--right fade-in--500">
                                    {/* <video  height="527" playsinline autoPlay muted loop class="mobile-app__img-phone" id="bannerImage">
                                        <source src="./assets/img/landing-page-top-video.mp4" type="video/mp4" />
                                    </video> */}
                                    <img className="mobile-app__img-phone" src="./assets/img/mobileApp.png"/>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <aside className="subscribe">
                        <div className="center">
                            <div className="subscribe__box mc_embed_signup">
                                <form className="subscribe__form fade-in--right form validate" action="https://ever.us20.list-manage.com/subscribe/post?u=56934695d4f357d705d9e1283&amp;id=171eeb594f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"  rel="noopener noreferrer" noValidate autoComplete="off">
                                    {/*<input type="hidden" value="Subscribe" name="subject" />*/}
                                    <h3 className="subscribe__title h2">STAY UP TO DATE ON ALL THINGS, EVER</h3>
                                    <div className="mc_embed_signup_scroll subscribe__fieldset">
                                        <div className="mc-field-group" style={{height : "100%"}}>
                                            <input type="email" name="EMAIL" placeholder="E-mail" aria-label="enter email" required="required" className="required email input input--invalid" autoComplete="off" id="mce-EMAIL" />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                        </div>
                                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_56934695d4f357d705d9e1283_171eeb594f" tabIndex="-1" /></div>
                                        <div className="clear btn btn--black form__submit"><button className="btn btn--black form__submit" type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</button></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </aside>
                </main>
                <Footer/>
            </div>
            <div className="modal" id="modal">
                <div className="modal__box">
                    <div className="modal__item modal__item--video">
                        {/* <div id="modal-video"></div> */}
                        
                        <div className="">
                            <video controls className="" id="" width="300px">
                                <source src="assets/img/landing-page-top-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <aside className="modal__item modal__item--thank">
                        <h3 className="h2">Thank you!</h3>
                        <p>Your subscription has been successfully completed.</p><button type="button" className="modal__close modal__close-btn button" aria-label="Close"><svg width="22" height="22" viewBox="0 0 22 22">
                                <path stroke="#4F208A" strokeWidth="2" d="M21 21L1 1M1 21L21 1"></path>
                            </svg></button>
                    </aside>
                    <button type="button" className="modal__close modal__close-btn button" aria-label="Close">
                        <svg width="30" height="30" viewBox="0 0 30 30">
                            <path stroke="#848484" strokeWidth="2" d="M28.58 28.58L1 1M1 28.58L28.58 1"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}