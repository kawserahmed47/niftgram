import React,{ useState } from 'react'
// import Connect from '../Connect'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import '../../asset/css/connect_modal.css'

export default function Header(data) {
    const [showConnectModal, setShowConnectModal] = useState('')
    const [showWelcomeModal, setShowWelcomeModal] = useState('')
    const [showMoreWallet, setShowMoreWallet] = useState(false)
    const [showSearchField, setShowSearchField] = useState(false)
    const toggleWelcomeModal = ()=>{
        if(showWelcomeModal === '')
            setShowWelcomeModal('active')
        else{
            setShowWelcomeModal('')
        }
    }
    const toggleConnectModal = () => {
        if (showConnectModal === '')
            setShowConnectModal('active');
        else{
            setShowConnectModal('');
            setShowMoreWallet(false)
            setShowSearchField(false)
        }
    }
    const closeWelcomeShowWallet = ()=>{
        setShowWelcomeModal('')
        setShowConnectModal('active');
    }
    const expandWallet = ()=> setShowMoreWallet(true)
    let button = null
    if (data.showConnect) {
        button = <button className="headerConnectButton" onClick={toggleWelcomeModal}>Connect</button>
    }
    return (
        <>
        <div>
            <header className="headerContainer">
                <div className="headerEach center-y">
                    <button className="leftSidebarToggleButton active">
                        <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="leftSidebarToggleButtonLogo"><path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
                    </button>
                    <a href="/" className="headerBrandLogoContainer center-y">
                        <img alt="Img" className="headerBrandLogo day hide" src="/images/brandLogo/favicon_all_black.png" />
                        <img alt="Img" className="headerBrandLogo hover hide" src="/images/brandLogo/faviconTransparent.png" />
                        <img alt="Img" className="headerBrandLogo dark hide" src="/images/brandLogo/favicon_white.png" />

                        <img alt="Img" className="headerBrandLogo mobile_day hide" src="/images/brandLogo/everlogo_mobile.png" />
                        <img alt="Img" className="headerBrandLogo mobile_hover hide" src="/images/brandLogo/everlogo_mobile.png" />
                        <img alt="Img" className="headerBrandLogo mobile_dark hide" src="/images/brandLogo/everlogo_mobile_white.png" />
                    </a>
                </div>
                {/* <div className="headerNav headerEach center-y">
                    
                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>My Portfolio</span>
                        </a>
                    </div>
                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>Markets</span>
                        </a>
                    </div>
                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>Leaderboard</span>
                        </a>
                    </div>
                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>Governance</span>
                        </a>
                    </div>
                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>Prime</span>
                        </a>
                    </div>

                    <div className="headerButtonContainer">
                        <a href="#" className="headerButton commonButton">
                            <span>More</span>
                        </a>
                        <div className="headerButtonMenuContainer">
                            <div className="headerButtonMenu">
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">About</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Docs</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Community</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Legal</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Developers</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Status</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Request Features</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Help</a>
                            </div>
                        </div>
                    </div>
                
                </div> */}
                <div className="headerEach center-y">
                    <div className="headerButtonContainer supportButton">
                        <button className="headerButton commonButton">
                            <img alt="Img" src="/images/support.svg" />
                        </button>

                        <div className="headerButtonMenuContainer">
                            <div className="headerButtonMenu">
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Live Chat</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Submit a request</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Bug Bounty</a>
                            </div>
                        </div>
                    </div>
                    {
                        button
                    }
                    <div className="headerButtonContainer notiButton">
                        <button className="headerButton commonButton">
                            <img alt="Img" src="/images/bell.png" />
                        </button>
                    </div>
                    <div className="headerButtonContainer accountButton">
                        <button className="headerButton commonButton">
                            <img alt="Img" className="noInvert" src="/images/profilePicLogo.svg" />
                        </button>

                        <div className="headerButtonMenuContainer">
                            <div className="headerButtonMenu">
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Settings</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Balance</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">FAQ</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Legal</a>
                                <a href="#" className="headerButtonMenuEachLink commonButton center-y">Log out</a>
                            </div>
                        </div>
                    </div>

                    <div className="headerButtonContainer dotButton">
                        <button className="headerButton more commonButton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="headerButtonMenuContainer">
                            <div className="headerButtonMenu">
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">About</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Leaderboard</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Promo</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Blog</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Careers</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Events</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Newsletter</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Legal & Privacy</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">API</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">GitHub</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Affiliate Program</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Refer a friend $25</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Governance</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Technical Issues</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Complaints Procedure</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Request Features</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Security</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Doc</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Help Center</a>
                                <a href="#" className="headerButtonMenuEachLink externalLink commonButton center-y">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="headerButtonContainer appButton">
                        <button className="headerButton commonButton">
                            <img alt="Img" src="/images/app.svg"/>
                        </button>
                        
                        <div className="headerButtonMenuContainer">
                            <div className="headerButtonAppMenu d-flex">
                                <div className="appMenuEach">
                                    <p className="appMenuEachTitle">Mobile</p>
                                    <div className="appBadges">
                                        <a href="#" className="appBadgesLink d-flex">
                                            <button className="headerButton commonButton center">
                                                <img alt="Img" src="/images/apple-app-store-badge.svg"/>
                                            </button>
                                        </a>
                                        <a href="#" className="appBadgesLink d-flex">
                                            <button className="headerButton commonButton center">
                                                <img alt="Img" src="/images/google-play-badge.png"/>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="appMenuEach desktop">
                                    <p className="appMenuEachTitle">Desktop</p>
                                    <div className="appBadges">
                                        <a href="#" className="appBadgesLink d-flex">
                                            <button className="headerButton commonButton center">
                                                Windows
                                            </button>
                                        </a>
                                        <a href="#" className="appBadgesLink d-flex">
                                            <button className="headerButton commonButton center">
                                                Mac
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <a href="#" className="d-flex signInUpLink">
                        <button className="commonButton">Sign in</button>
                    </a> */}

                </div>
            </header>
        </div>
        <div className={"connect-modal-wraper " + showWelcomeModal}>
            <div className="connect-modal-content">
                <div className='connect-modal-header'>
                    <h4 className='connect-modal-title'>Welcome! Start trading on the world's most powerful local exchange.</h4>
                    <button className='connect-modal-close-btn' onClick={toggleWelcomeModal}><img src="images/wallet/close.svg" alt="" width={16}/></button>
                </div>
                <div className='connect-modal-body'>
                    <div className="modal-topics">
                        <div className='single-topic'>
                            <img src="images/wallet/connect_wallet.png" alt="eVoucher" className="topic-image"/>
                            <h5 className='topic-title'>Liquid</h5>
                            <p className='topic-sub-title'>World-class liquidity with 7k+ tokens</p>
                        </div>
                        <div className='single-topic'>
                            <img src="images/wallet/connect_wallet.png" alt="eVoucher" className="topic-image"/>
                            <h5 className='topic-title'>Advanced</h5>
                            <p className='topic-sub-title'>Trade with leverage and manage risk using advanced tools and terminals</p>
                        </div>
                        <div className='single-topic'>
                            <img src="images/wallet/connect_wallet.png" alt="eVoucher" className="topic-image"/>
                            <h5 className='topic-title'>Trustless</h5>
                            <p className='topic-sub-title'>Built with open-source and audited smart contracts on ETH, BSC and over 20 other networks</p>
                        </div>
                    </div>
                </div>
                <div className='connect-modal-footer'>
                    <button className='modal-footer-btn' onClick={closeWelcomeShowWallet}>Get Started</button>
                </div>
            </div>
        </div>
        <div className={"connect-modal-wraper " + showConnectModal}>
            <div className="connect-modal-content">
                <div className='connect-modal-header'>
                    {showSearchField ? (
                        <input className="modal-search-field" type="text" name="searchInput" id="searchInput" placeholder="Search for wallet"/>
                    ): (
                        <h4 className='connect-modal-title'>Connect Wallet</h4>
                    )}
                    <button className="searchButton center" onClick={() => setShowSearchField(!showSearchField)}>
                        {showSearchField ? (
                            <img src="images/wallet/close.svg" alt="" width={24}/>
                        ):(
                            <img alt="Img" src="/images/searchLogo.svg" />
                        )}
                    </button>
                    <button className='connect-modal-close-btn' onClick={toggleConnectModal}><img src="images/wallet/close.svg" alt="" width={16}/></button>
                </div>
                <div className='connect-modal-body'>
                    <p className='modal-sub-title'>By connecting a wallet, you agree to Ever’s <a href="#">Terms of Service</a> and acknowledge that you have read and understand the Ever <a href="#">Disclaimer</a>.</p>
                    <div className="modal-wallets">
                        <a href='#' className='single-wallet'>
                            <img src="images/brandLogo/ever_all_color.png" alt="eVoucher" className="wallet-image" />
                            <p>eVoucher</p>
                        </a>
                        <a href='#' className='single-wallet'>
                            <img src="images/brandLogo/ever_all_color.png" alt="EverWallet" className="wallet-image" />
                            <p>EverWallet</p>
                        </a>
                        {/* <Connect className="headerConnectButton">
                        <a href='#' className='single-wallet'>
                            <img src="images/wallet/metamask.png" alt="metamask" className="wallet-image" />
                            <p>Metamask</p>
                        </a>
                        </Connect> */}
                        <a href='#' className='single-wallet'>
                            <img src="images/wallet/connect_wallet.png" alt="WalletConnect" className="wallet-image" />
                            <p>WalletConnect</p>
                        </a>
                        <a href='#' className='single-wallet'>
                            <img src="images/wallet/trustwallet.png" alt="TrustWallet" className="wallet-image" />
                            <p>TrustWallet</p>
                        </a>
                        <a href='#' className='single-wallet'>
                            <img src="images/wallet/coinbase.png" alt="TrustWallet" className="wallet-image" />
                            <p>CoinBase</p>
                        </a>
                        <a href='#' className='single-wallet'>
                            <img src="images/wallet/fortmatic.png" alt="coinbase" className="wallet-image" />
                            <p>Fortmatic</p>
                        </a>
                        {!showMoreWallet ? (
                            <>
                                <a href='#' className='single-wallet' onClick={expandWallet}>
                                    <img src="images/wallet/more_icon.svg" alt="coinbase" className="wallet-image" />
                                    <p>More</p>
                                </a>
                            </>
                        ): <>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/mathwallet.png" alt="MathWallet" className="wallet-image" />
                                <p>MathWallet</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/tokenpocket.png" alt="TokenPocket " className="wallet-image" />
                                <p>TokenPocket</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/binancechain.png" alt="Binance Chain" className="wallet-image" />
                                <p>Binance Chain</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/safepal.png" alt="SafePal" className="wallet-image" />
                                <p>SafePal</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/coin98.png" alt="Coin98" className="wallet-image" />
                                <p>Coin98</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/lattice.png" alt="Lattice" className="wallet-image" />
                                <p>Lattice</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/torus.png" alt="Torus" className="wallet-image" />
                                <p>Torus</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/rainbowwallet.png" alt="Rainbow Walle" className="wallet-image" />
                                <p>Rainbow Wallet</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/ledger.png" alt="Ledger" className="wallet-image" />
                                <p>Ledger</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/rabby.png" alt="Rabby" className="wallet-image" />
                                <p>Rabby</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/phantom.png" alt="Phantom" className="wallet-image" />
                                <p>Phantom</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/solflareextension.png" alt="Solflare Extension" className="wallet-image" />
                                <p>Solflare Extension</p>
                            </a>
                            <a href='#' className='single-wallet'>
                                <img src="images/wallet/solletweb.png" alt="Sollet Web" className="wallet-image" />
                                <p>Sollet Web</p>
                            </a>
                        </>}
                    </div>
                </div>
                <div className='connect-modal-footer'>
                    <p className='modal-footer-text'>Haven't got a crypto wallet yet? Learn more about setting up and connecting to a <a href="#">wallet</a>.</p>
                    <a href='#' className='modal-footer-btn'>How this app uses APIs</a>
                </div>
            </div>
        </div>
        </>
    )
}
