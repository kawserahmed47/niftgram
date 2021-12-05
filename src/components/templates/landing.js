import React from 'react'

export default function Landing() {
    return(
        <div>
            <div className="wrapper">
                <header className="header" id="header_block">
                    <div className="center" style={{paddingTop: ".5rem", paddingBottom: ".5rem"}}>
                        <div className="header__logo">
                            <a href="https://www.ever.re/" className="logo" title="Ever Corp">
                                <img className="header__logo_image" src="assets/img/brandLogo/everlogo.png" alt=""/>
                            </a>
                        </div>
                        <nav className="header__menu">
                            <ul className="menu">
                                <li className="menu__item"><a href="#about" className="menu__link">About</a></li>
                                <li className="menu__item"><a href="#roadmap" className="menu__link">Roadmap</a></li>
                                <li className="menu__item"><a href="#token" className="menu__link">Token</a></li>
                                <li className="menu__item"><a href="#team" className="menu__link">Team</a></li>
                                <li className="menu__item"><a href="#cases" className="menu__link">Backed by</a></li>
                                <li className="menu__item"><a href="#" className="menu__link">Join our Whitelist</a></li>
                                <li className="menu__item"><a href="./signin" className="menu__link">Sign In</a></li>
                            </ul>
                        </nav>
                        <div className="header__social">

                        </div><button className="button btn-menu-toggle" type="button" aria-label="открыть меню"><span className="btn-menu-toggle__line btn-menu-toggle__line--top"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--center"></span> <span className="btn-menu-toggle__line btn-menu-toggle__line--bottom"></span></button>
                    </div>
                </header>
                <main className="main">
                    <article className="first-screen">
                        <div className="center">
                            <h1 className="first-screen__title h1">One hub, all things money.</h1>
                            <div className="fade-in--200">
                                <p className="first-screen__desc">The Tokenized ETF Management Platform:<br />experiment with
                                    aggregated assets to create a tokenized ETF,<br />or invest in proven portfolio formulas.</p>
                            </div>
                            <div className="first-screen__btns fade-in--400"><a href="#" target="_blank" className="btn btn--grad btn--demo" rel="noopener nofollow"><span>Live Demo
                                    </span><img src="./assets/img/coins.svg" alt="" /></a></div>
                            <div className="fade-in--400">
                                <p className="first-screen__intro_deck">Explore our <a href="#" target="_blank" className="first-screen__intro_deck a">intro deck</a> and <a href="#" target="_blank" className="first-screen__intro_deck a">whitepaper </a>to know more about the
                                    project!</p>
                                <p className="first-screen__intro_deck">Explore our <a href="#" target="_blank" className="first-screen__intro_deck a">audit</a> made by Hacken!</p>
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
                            <picture>
                                <img src="./assets/img/app.png" alt="" loading="lazy" height="900" />
                            </picture>
                            <a target="_blank" href="#" className="btn btn--play" aria-label="Play video" rel="noopener nofollow" data-id="_Jond3Bb4us">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <path d="M53 87.43V49.15a3 3 0 014.48-2.61l38.28 21.7a3 3 0 01-.28 5.35L57.19 90.2A3 3 0 0153 87.42z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article className="about" id="about">
                        <div className="center">
                            <h2 className="hash">About</h2>
                            <p className="h1">Why Ever.re</p>
                            <ul className="about__list">
                                <li className="about__item fade-in--100">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M30.64 27.43h-3.96c2.65-2.96 5.56-4.02 9.46-4.02 6.83 0 12.37 5.4 12.37 12.05 0 6.66-5.54 12.06-12.37 12.06-6.83 0-12.37-5.4-12.37-12.06h-2.75c0 8.14 6.77 14.73 15.12 14.73s15.12-6.6 15.12-14.73-6.77-14.73-15.12-14.73c-4.41 0-7.92 1.22-11 4.36v-3.03H22.4v8.05h8.24v-2.68zm12.37 6.7h-5.5v-6.7h-2.74v9.37H43v-2.68z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Actively managed&nbsp;funds</h3>
                                    <p>Consistent portfolio rebalancing by&nbsp;experienced asset managers.</p>
                                </li>
                                <li className="about__item fade-in--200">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M25.22 23.01h21.14c1.3 0 2.35 1.29 2.35 2.87v20.1c0 1.58-1.05 2.87-2.35 2.87H25.22c-1.3 0-2.35-1.29-2.35-2.87v-20.1c0-1.58 1.06-2.87 2.35-2.87zm.24 14.21v9.04h20.66v-9.04h-5.8l-2.93-3.9-3.75 8.75-4.84-4.85h-3.34zm0-2.58h4.4l2.91 2.9 4-9.34 4.83 6.44h4.52V25.6H25.46v9.04z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Asset and strategy diversification</h3>
                                    <p>Underlying assets such as crypto, NFTs,&nbsp;stocks, and commodities.</p>
                                </li>
                                <li className="about__item fade-in--300">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M24.77 46.82c-1.3-1.3-1.68-3.3-1.27-5.92-2.15-1.57-3.3-3.24-3.3-5.1 0-1.85 1.15-3.52 3.3-5.09-.41-2.62-.04-4.61 1.27-5.92 1.31-1.31 3.3-1.69 5.93-1.28 1.56-2.14 3.24-3.29 5.1-3.29 1.84 0 3.52 1.15 5.08 3.3 2.62-.42 4.62-.04 5.93 1.27 1.31 1.3 1.69 3.3 1.27 5.92 2.15 1.57 3.3 3.24 3.3 5.1 0 1.85-1.15 3.52-3.3 5.09.42 2.62.04 4.61-1.27 5.92-1.3 1.31-3.3 1.69-5.93 1.28-1.56 2.14-3.24 3.29-5.09 3.29-1.85 0-3.53-1.15-5.1-3.3-2.61.42-4.6.04-5.92-1.27zm6.28-1.67c.57-.12 1.17.12 1.49.62 1.24 1.93 2.36 2.78 3.25 2.78.9 0 2.01-.85 3.26-2.78.32-.5.9-.74 1.48-.62 2.25.48 3.64.3 4.28-.33.63-.63.8-2.03.33-4.27-.12-.58.12-1.17.61-1.49 1.93-1.25 2.8-2.36 2.8-3.26 0-.9-.87-2-2.8-3.25-.49-.32-.73-.91-.61-1.49.48-2.24.3-3.64-.33-4.27-.64-.63-2.03-.81-4.28-.33a1.42 1.42 0 01-1.48-.62c-1.25-1.93-2.36-2.79-3.26-2.79-.9 0-2 .86-3.25 2.8-.32.49-.92.73-1.5.6-2.24-.47-3.63-.3-4.26.34-.64.63-.82 2.03-.34 4.27.13.58-.12 1.17-.61 1.49-1.93 1.25-2.79 2.36-2.79 3.25 0 .9.86 2.01 2.79 3.26.5.32.74.91.61 1.49-.48 2.24-.3 3.64.34 4.27.63.63 2.02.81 4.27.33zm9.4-14.6l-6.08 6.08-3.24-3.24-2 2 5.24 5.25 8.09-8.08-2-2z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Security &amp;&nbsp;transparency</h3>
                                    <p>DAO governance based approval for&nbsp;portfolio assets whitelist.</p>
                                </li>
                                <li className="about__item fade-in--600">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path fillRule="evenodd" d="M37.37 46.89v-1.7a11.08 11.08 0 007.58-4.72c4.3-.59 6.67-4.31 6.67-9.41V26.3a3.17 3.17 0 00-3.16-3.17h-2a3.17 3.17 0 00-2.75-1.59H27.87c-1.17 0-2.2.64-2.74 1.59h-2a3.17 3.17 0 00-3.17 3.16v4.75c0 5.1 2.38 8.83 6.68 9.42a11.08 11.08 0 007.57 4.72v1.7h-1.59a3.17 3.17 0 00-3.16 3.16h12.66a3.17 3.17 0 00-3.16-3.16h-1.59zM23.12 26.3h1.59v7.92c0 .73.07 1.44.2 2.12-1.17-1.05-1.79-2.86-1.79-5.29V26.3zm23.75 0v7.92c0 .73-.06 1.44-.2 2.12 1.17-1.05 1.79-2.86 1.79-5.29V26.3h-1.59zm-19 7.92v-9.5h15.84v9.5a7.92 7.92 0 01-15.84 0z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Performance Based&nbsp;Rewards</h3>
                                    <p>Earn more on successful strategies with&nbsp;our progressive incentive system.</p>
                                </li>
                                <li className="about__item fade-in--500">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path fillRule="evenodd" d="M20.42 30.83v14.45c0 2.98 4.9 4.82 10.84 4.82 5.94 0 10.84-1.84 10.84-4.82V30.83c0-2.98-4.9-4.82-10.84-4.82-5.95 0-10.84 1.84-10.84 4.82zm19.27 7.22V34c-2 1.06-5.04 1.66-8.43 1.66-3.4 0-6.44-.6-8.43-1.66v4.06c0 1.01 3.73 2.41 8.43 2.41 4.7 0 8.43-1.4 8.43-2.4zm-16.86 3.16c2 1.07 5.04 1.66 8.43 1.66 3.39 0 6.43-.6 8.43-1.66v4.07c0 1-3.74 2.4-8.43 2.4-4.7 0-8.43-1.4-8.43-2.4v-4.07zm16.86-10.38c0-1-3.74-2.4-8.43-2.4-4.7 0-8.43 1.4-8.43 2.4s3.73 2.4 8.43 2.4c4.68 0 8.4-1.38 8.43-2.4z">
                                            </path>
                                            <path d="M34.59 25.45c0-2.28 3.74-3.69 8.28-3.69 4.55 0 8.3 1.4 8.3 3.69V36.5c0 2.2-3.52 3.6-7.87 3.68v-1.85c3.39-.08 6.02-1.1 6.02-1.83v-3.12c-1.44.77-3.6 1.22-6.02 1.27v-1.84c3.39-.08 6.02-1.1 6.02-1.84v-3.11c-1.44.77-3.6 1.22-6.03 1.27a3.98 3.98 0 00-.64-1.84h.22c3.6 0 6.45-1.07 6.45-1.84s-2.85-1.85-6.45-1.85c-3.59 0-6.44 1.08-6.44 1.85v.03H34.6v-.03z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Variety of Investment Tools</h3>
                                    <p>Rebalance portfolio using unique strategies with any possible asset.</p>
                                </li>
                                <li className="about__item fade-in--400">
                                    <div className="about__ico"><svg width="72" height="72" viewBox="0 0 72 72">
                                            <path d="M35.8 51.51c-8.5-3.78-12.76-7.56-12.76-11.33V26.01c0-1.08.42-1.34 1.57-2.04.35-.2.77-.46 1.26-.79.23-.15 5.05-2.83 9.92-2.83 4.24 0 7.8 1.41 9.92 2.83.5.33.9.58 1.26.8 1.15.7 1.57.95 1.57 2.03a979.95 979.95 0 010 14.17c0 3.78-4.25 7.56-12.75 11.33zm9.9-11.33l.01-1.76v-2.77a6314.8 6314.8 0 00.01-9.11l-.2-.12-1.38-.88a15.5 15.5 0 00-8.35-2.36c-3.06 0-7.04 1.49-8.34 2.36l-1.4.88-.18.1v13.66c0 2.14 3.16 5.06 9.92 8.22 6.76-3.16 9.92-6.08 9.92-8.22zm-5.24-9.5l-6.09 6.08-3.24-3.25-2 2 5.24 5.26 8.09-8.09-2-2z">
                                            </path>
                                        </svg></div>
                                    <h3 className="about__head">Strategy protection</h3>
                                    <p>No need to reveal the portfolio structure or investment strategies.</p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <aside className="try-demo">
                        <div className="center">
                            <div className="try-demo__box">
                                <div className="try-demo__content">
                                    <p className="h2">Try Ever.re demo version</p>
                                    <div className="try-demo__btn fade-in--100">
                                        <a href="#" className="btn btn--white" target="_blank" rel="noopener nofollow">Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="try-demo__img fade-in--right fade-in--500">
                                    <picture>
                                        <img src="./assets/img/img.png" alt="" loading="lazy" width="748" height="440" />
                                    </picture>
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
                                        <div className="roadmap__year">2021</div>
                                        <div className="roadmap__quarter">Q1</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Project<br />Project started</span></div>
                                        <div className="roadmap__td"><span>Concept<br />Concept clarified</span></div>
                                        <div className="roadmap__td"><span>Ever.re Functionality Defined</span></div>
                                        <div className="roadmap__td"><span>Team assembled</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q2-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2021</div>
                                        <div className="roadmap__quarter">Q2</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Architecture<br />&amp; UI Design</span></div>
                                        <div className="roadmap__td"><span>Legal and structure for token sale</span></div>
                                        <div className="roadmap__td"><span>Polygon network selected</span></div>
                                        <div className="roadmap__td"><span>MVP Development</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q3-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2021</div>
                                        <div className="roadmap__quarter">Q3</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>MVP release on Polygon</span></div>
                                        <div className="roadmap__td"><span>MVP Public Security Audit</span></div>
                                        <div className="roadmap__td"><span>New features development</span></div>
                                        <div className="roadmap__td"><span>Law opinion</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q4-2021">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2021</div>
                                        <div className="roadmap__quarter">Q4</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>New features development</span></div>
                                        <div className="roadmap__td"><span>Public Token sale</span></div>
                                        <div className="roadmap__td"><span>Sushi swap listing</span></div>
                                        <div className="roadmap__td"><span>App Development</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q1-2022">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q1</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Flexible portfolio structure and rebalancing
                                                release</span></div>
                                        <div className="roadmap__td"><span>Mobile App Development &amp; Deployment</span></div>
                                        <div className="roadmap__td"><span>DAO Governance</span></div>
                                        <div className="roadmap__td"><span>Cross-chain bridge</span></div>
                                    </div>
                                </div>
                                <div className="roadmap__row roadmap__row--q2-2022">
                                    <div className="roadmap__thead fade-in--left">
                                        <div className="roadmap__year">2022</div>
                                        <div className="roadmap__quarter">Q2</div>
                                    </div>
                                    <div className="roadmap__tbody fade-in--000">
                                        <div className="roadmap__td"><span>Gamification</span></div>
                                        <div className="roadmap__td"><span>AI Algo-Trading</span></div>
                                        <div className="roadmap__td"><span>Multi Node Ever.re protocol</span></div>
                                        <div className="roadmap__td"><span>Top crypto exchanges listing</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="token" id="token">
                        <div className="center">
                            <h2 className="hash">Token</h2>
                            <p className="h1">Token details</p><img className="token__pic" src="./assets/img/pic.svg" width="379" height="322" loading="lazy" alt="" />
                            <div className="token__tabs"><button className="token__btn-tab button is-active" type="button">Distribution</button> <button className="token__btn-tab button" type="button">Funds Raised</button></div>
                            <div className="token__row">
                                <div className="token__col is-active">
                                    <img src="assets/img/token-distribution.jpg" alt=""/>
                                </div>
                                <div className="token__col fade-in--100">
                                    <img style={{maxHeight: "400px" }} src="assets/img/token-metrics.jpg" alt=""/>
                                </div>
                                <div className="token__col fade-in--100">
                                    <img style={{maxHeight: "400px" }} src="assets/img/token-release.jpg" alt=""/>
                                </div>
                                <div className="token__col fade-in--100">
                                    <img style={{maxHeight: "400px" }} src="assets/img/community-led.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className="join-demo">
                        <div className="center">
                            <div className="join-demo__box">
                                <div className="join-demo__content">
                                    <p className="h2">Join Ever.re right now and see for yourself</p>
                                    <div className="join-demo__btn fade-in--100">
                                        <a href="#" className="btn btn--white" target="_blank" rel="noopener nofollow">Live Demo
                                        </a>
                                    </div>
                                </div>
                                <div className="join-demo__img fade-in--left fade-in--500">
                                    <picture>
                                        <img src="./assets/img/img(1).png" alt="" loading="lazy" width="572" height="488" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article className="team" id="team">
                        <div className="center team__center">
                            <h2 className="hash">Team</h2>
                            <p className="h1">Team members</p>
                            <ul className="team__list">
                                <li className="team__item fade-in--100">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/pieter_founder.jpg" alt="Pieter" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="https://t.me/pieter_ever" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Pieter
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Pieter</h3>
                                        <p className="team__status">Founder</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--200">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/ginni_ceo.jpg" alt="Ginni" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Ginni
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Ginni</h3>
                                        <p className="team__status">CEO</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--300">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/david_cio.jpg" alt="David" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="https://t.me/david_ever" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram David
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">David</h3>
                                        <p className="team__status">CIO</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--400">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/bill_cmo.jpg" alt="William" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="https://www.linkedin.com/in/michael-medrish-6a2ab749/" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram William
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">William</h3>
                                        <p className="team__status">CMO</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--400">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/safra_chief_economist.jpg" alt="Safra" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Safra
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Safra</h3>
                                        <p className="team__status">Chief Economist</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--400">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/chanchal_lead_developer.jpg" alt="Chanchal" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Chanchal
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Chanchal</h3>
                                        <p className="team__status">Lead Developer</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--400">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/alexander_lead_developer.jpg" alt="Alexander" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Alexander
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Alexander</h3>
                                        <p className="team__status">Lead Developer</p>
                                    </div>
                                </li>
                                <li className="team__item fade-in--400">
                                    <div className="team__head">
                                        <div className="team__photo">
                                            <picture>
                                                <img src="./assets/img/team/lisa_lead_designer.jpg" alt="Lisa" loading="lazy" width="200" />
                                            </picture>
                                        </div>
                                        <a href="#" target="_blank" rel="noopener nofollow" className="team__linkedin">
                                            Telegram Lisa
                                        </a>
                                    </div>
                                    <div className="team__body">
                                        <h3 className="team__name h3">Lisa</h3>
                                        <p className="team__status">Graphic Designer</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <aside className="cases" id="cases">
                        <div className="center">
                            <h2 className="hash">Investment Funds</h2>
                            <p className="h1">Backed by</p>
                            <div className="cases__img fade-in--100">
                                <picture>
                                    <img src="./assets/img/all.svg" width="1222" height="270" alt="" loading="lazy" />
                                </picture>
                            </div>
                        </div>
                    </aside>
                    <aside className="mobile-app">
                        <div className="center">
                            <div className="mobile-app__box">
                                <div className="mobile-app__content">
                                    <h2 className="hash">Coming soon</h2>
                                    <p className="h2">Ever.re Mobile App</p>
                                    <p className="mobile-app__text fade-in--100">Сonvenient platform is always with you.</p>
                                </div>
                                <div className="mobile-app__img fade-in--right fade-in--500">
                                    <picture>
                                        <img className="mobile-app__img-phone" src="./assets/img/app.png" alt="" loading="lazy" height="527" />
                                    </picture>
                                    <img className="mobile-app__img-purpur" src="./assets/img/coin-purpur.svg" alt="" loading="lazy" width="177" height="158" /> 
                                    <img className="mobile-app__img-gold" src="./assets/img/coin-gold.svg" alt="" loading="lazy" width="145" height="138" />
                                </div>
                            </div>
                        </div>
                    </aside>
                    <aside className="subscribe">
                        <div className="center">
                            <div className="subscribe__box">
                                <div className="subscribe__img fade-in--left"><img src="./assets/img/pic(1).svg" alt="" width="381" height="390" loading="eager" /></div>
                                <form className="subscribe__form fade-in--right form" action="https://laqiwf2orj.execute-api.eu-central-1.amazonaws.com/dev/subscribe" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" noValidate="novalidate" autoComplete="off" encType="text/plain"><input type="hidden" value="Subscribe" name="subject" />
                                    <h3 className="subscribe__title h2">Join our subscribers list to get the latest news, updates
                                        and announcements directly<br />in your inbox.</h3>
                                    <div className="subscribe__fieldset">
                                        <input type="email" name="email" placeholder="Enter your email" aria-label="enter email" required="required" className="input input--invalid" autoComplete="off" id="mce-EMAIL" />
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{display: "none" }}></div>
                                            <div className="response" id="mce-success-response" style={{display: "none" }}></div>
                                        </div>
                                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                                        <button className="btn btn--violet form__submit" type="submit" id="mc-embedded-subscribe">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </aside>
                </main>
                <footer className="footer">
                    <div className="center">
                        <div className="footer__logo">
                            <img className="header__logo_image" src="assets/img/brandLogo/everlogo.png" alt=""/>
                            <p className="footer__copyright">Copyright © 2021 Ever Corp. All Rights Reserved.</p>
                        </div>
                        <div className="footer__menu">
                            <ul className="menu">
                                <li className="menu__item"><a href="#about" className="menu__link">About</a></li>
                                <li className="menu__item"><a href="#roadmap" className="menu__link">Roadmap</a></li>
                                <li className="menu__item"><a href="#token" className="menu__link">Token</a></li>
                                <li className="menu__item"><a href="#team" className="menu__link">Team</a></li>
                                <li className="menu__item"><a href="#cases" className="menu__link">Backed by</a></li>
                            </ul>
                        </div>
                        <div className="footer__social">

                        </div>
                    </div>
                </footer>
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