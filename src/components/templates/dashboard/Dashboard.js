
import React, { Component } from 'react'

import Header from '../layouts/dashboard/Header'
import Sidebar from '../layouts/dashboard/Sidebar'

import Ticker  from './Ticker'
import About  from './About'
import Community from './Community'
import Ecosystem from './Ecosystem'
import Faq from './Faq'
import Products from './Products'
import Products1 from './Products1'
import Products2 from './Products2'
import Roadmap from './Roadmap'
import Wolnomics1 from './Wolnomics1'
import Wolnomics2 from './Wolnomics2'
import Wolnomics3 from './Wolnomics3'

// import api from '../config'
// import loadjs from 'loadjs'

import style from '../../../assets/css/dashboard/style.scss'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isAuth: true,
        };
      }

    componentDidMount() {
        // document.title = "new title"
        document.querySelector("body").classList.add("pageWithSideBar")
        document.querySelector("body").classList.add("dashboard")
    };
    // authentication();

    componentWillMount(){
        // this.authentication();
    }
   
    // authentication = async () => {
    //     let token = new URLSearchParams(window.location.search).get("auth") ??  window.localStorage.getItem("token") ;
    //     let data = {
    //         token  : token

    //     }

    //     if(token){
        
    //         fetch(api.url+`/api/users/auth`, {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //         .then((response) => {
    //             return response.json();
    //         }) 
            
    //         .then((response)=>{

    //             console.log(response);
                    
    //             if(response.status){
    //                 window.localStorage.setItem("token", token);
    //                 this.setState({ isAuth: true });

    //             }else{
    //                 window.localStorage.removeItem("token");
    //                 window.location.href = "https://ever.re/signin"
    //             }


    //         }).catch((error)=>{

    //             console.log(error);
    //             window.localStorage.removeItem("token");
    //             window.location.href = "https://ever.re/signin"

    //         })

    //     }else{
    //         window.localStorage.removeItem("token");
    //         window.location.href = "https://ever.re/signin"
    //     }
        
       
    // }
    render() {

        if(!this.state.isAuth){
            return <div></div>
        }
        const likeBtnClick = (e) => {
            if(e.target.classList.contains('liked')){
                e.target.innerHTML = '&#9825;'
                e.target.classList.remove('liked')
            } else {
                e.target.innerHTML = '&#9829';
                e.target.classList.add('liked')
            }
            
        }

        return (

			<div>
				<div className={style.mainContainer}>
                    <Header showConnect={false}/>
                    <div className={style.mainBodyContainer}>
                         <Sidebar/>
                         <div className={style.mainBody}>
                            <div className={style.mask}></div>
                            <div className="mainBodyContainer">
                                <Ticker/>
                                <section className="eachSection bannerSection d-flex" id="body_home">
                                    <div className="bannerSectionEach bannerSectionLeft d-flex" style={{minHeight: "304px", maxHeight:"500px"}}>
                                        <video playsInline  autoPlay muted loop className="bannerImage" id="bannerImage">
                                            <source src="images/bannerVideo.mp4" type="video/mp4"/>
                                        </video>
                                        {/* <div className="bannerSectionMask center-x-with-flex-column">
                                            <div className="customContainer center-y-with-flex-column" style={{height: "100%"}}>
                                                <h1 className="bannerTitle">One hub, all things money</h1>
                                                <h3 className="bannerSubTitle" style={{maxWidth: "432px"}}>Trade 1000s of cryptos and securities at one place, open a free bank account in minutes, bet on live sports on the go, play and stream live games, mint and sell NFTs,... make your money go further.</h3>
                                                <div className="bannerSectionButtonContainer d-flex">
                                            
                                                    <button className="bannerSectionEachButton bannerButtonHowToBuy transparent center">
                                                        <Link to="https://cointool.app/PreSaleList/bsc">Join PreSale</Link>
                                                    </button>
                                                    <button className="bannerSectionEachButton bannerButtonJoinPreSaleWolpaper center">
                                                        <Link to="#" >Whitepaper v1</Link>
                                                    </button>
                                                    <button className="bannerSectionEachButton bannerButtonAudit transparent center">
                                                        <Link to="#">Audit Report</Link>
                                                    </button>
                                                
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </section>
                                <section className="eachSection commonSection center-x">
                                    <div className="customContainer">
                                        <p>Welcome Robert  Austen</p>
                                    </div>
                                </section>

                                <section className="eachSection commonSection center-x">
                                    <div className="customContainer" style={{marginTop: "0"}}>
                                        <p>Recent activity</p>
                                        <p>You last have visited <a href="/" className="defaultLink">Dashboard</a> page</p>
                                    </div>
                                </section>

                                <section className="eachSection commonSection center-x">
                                    <div className="customContainer">
                                        <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                            <h1 className="sectionTitle">My Portfolio</h1>
                                            <p className="sectionTitleSubTitle"></p>
                                        </div>
                                        <div style={{marginTop: "16px"}}>
                                            <p className="commonSectionBodyEachElementTitle" style={{marginBottom: "8px"}}>Vault</p>
                                            <div className="d-flex flex-wrap">
                                                <p style={{marginRight: "16px"}}>Standard Account: $405.38</p>
                                                <p>Business Account: $2,746.92</p>
                                            </div>
                                        </div>
                                        <div style={{marginTop: "16px"}}>
                                            <p className="commonSectionBodyEachElementTitle" style={{marginBottom: "8px"}}>Fiat</p>
                                            <div className="d-flex flex-wrap">
                                                <p style={{marginRight: "16px"}}>$1,400.35</p>
                                                <p style={{marginRight: "16px"}}>£379.74</p>
                                                <p style={{marginRight: "16px"}}>€50.30</p>
                                                <p style={{marginRight: "16px"}}>¥59,000.06</p>
                                            </div>
                                        </div>
                                        <div style={{marginTop: "16px"}}>
                                            <p className="commonSectionBodyEachElementTitle" style={{marginBottom: "8px"}}>Cryptos</p>
                                            <div className="">
                                                <p style={{marginBottom: "8px"}}>USD: $18,369.34</p>
                                                <p style={{marginBottom: "8px"}}>Eve: $12,460.77</p>
                                                <p style={{marginBottom: "8px"}}>Bitcoin: $7,010.42</p>
                                                <p style={{marginBottom: "8px"}}>Ethereum: $3,050.33</p>
                                                <p style={{marginBottom: "8px"}}>Shiba Insu: $200.06</p>
                                                <p style={{marginBottom: "8px"}}>Solana: $100.18</p>
                                                <a href="#" className="defaultLink" style={{marginBottom: "8px"}}>More</a>
                                            </div>
                                        </div>
                                        <div style={{marginTop: "16px"}}>
                                            <p className="commonSectionBodyEachElementTitle" style={{marginBottom: "8px"}}>Securities</p>
                                            <p style={{marginBottom: "8px"}}>Stocks</p>
                                            <div className="d-flex flex-wrap">
                                                <p style={{marginRight: "16px"}}>Apple: $5,000.00</p>
                                                <p style={{marginRight: "16px"}}>Amazon: $1,700.00</p>
                                                <p style={{marginRight: "16px"}}>Microsoft: $320.00</p>
                                                <a href="#" className="defaultLink" style={{marginRight: "16px"}}>More</a>
                                            </div>
                                            <p style={{marginBottom: "8px", marginTop: "16px"}}>Commodities</p>
                                            <div className="d-flex flex-wrap">
                                                <p style={{marginRight: "16px"}}>Gold: $3,300.02</p>
                                                <p style={{marginRight: "16px"}}>Crude Oil: $2,700.17</p>
                                                <p style={{marginRight: "16px"}}>Coffee: $1,690.22</p>
                                                <p style={{marginRight: "16px"}}>Natural Gas: $470.48</p>
                                                <a href="#" className="defaultLink" style={{marginBottom: "8px"}}>More</a>
                                            </div>
                                            <p style={{marginBottom: "8px", marginTop: "16px"}}>Fund</p>
                                            <div className="d-flex flex-wrap">
                                                <p style={{marginRight: "16px"}}>Mutual Fund: $1,934.59</p>
                                                <p style={{marginRight: "16px"}}>REIT: $1,485.23</p>
                                                <p style={{marginRight: "16px"}}>Crypto EFT: $1,154.36</p>
                                                <a href="#" className="defaultLink" style={{marginBottom: "8px"}}>More</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection watchList  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">My Watchlist</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                                <tr>
                                                                    <th width="20%" align="left" valign="bottom">Name</th>
                                                                    <th width="20%" align="center" valign="bottom">Price</th>
                                                                    <th width="20%" align="center" valign="bottom">Change</th>
                                                                    <th width="20%" align="center" valign="bottom">Watch</th>
                                                                    <th width="20%" align="center" valign="bottom"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" valign="middle">Bitcoin</td>
                                                                    <td align="center" valign="middle">$50,910.81</td>
                                                                    <td align="center" valign="middle" className="default">1.16%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Apple</td>
                                                                    <td align="center" valign="middle">$176.28	</td>
                                                                    <td align="center" valign="middle" className="default">0.36%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Microsoft</td>
                                                                    <td align="center" valign="middle">$334.69</td>
                                                                    <td align="center" valign="middle" className="default">0.45%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Cisco</td>
                                                                    <td align="center" valign="middle">$62.28</td>
                                                                    <td align="center" valign="middle" className="default">0.36%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Solana</td>
                                                                    <td align="center" valign="middle">$200.06</td>
                                                                    <td align="center" valign="middle" className="default">2.79%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Gold</td>
                                                                    <td align="center" valign="middle">$1,808.39</td>
                                                                    <td align="center" className="special" valign="middle">0.44%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Coffee</td>
                                                                    <td align="center" valign="middle">$231.20</td>
                                                                    <td align="center" className="special" valign="middle">1.01%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Oat</td>
                                                                    <td align="center" valign="middle">$707.00</td>
                                                                    <td align="center" valign="middle" className="default">1.95%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Rice</td>
                                                                    <td align="center" valign="middle">$14.05</td>
                                                                    <td align="center" valign="middle" className="default">0.97%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Wool</td>
                                                                    <td align="center" valign="middle">$1,358.00</td>
                                                                    <td align="center" valign="middle" className="default">0%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">GBPUS</td>
                                                                    <td align="center" valign="middle">1.3409</td>
                                                                    <td align="center" valign="middle" className="default">0.1763%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">EURUS</td>
                                                                    <td align="center" valign="middle">1.1319</td>
                                                                    <td align="center" valign="middle" className="default">0.0168%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">GBPJPY</td>
                                                                    <td align="center" valign="middle">153.3700</td>
                                                                    <td align="center" valign="middle" className="default">0.1377%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">FTSE</td>
                                                                    <td align="center" valign="middle">$7,372.10</td>
                                                                    <td align="center" className="special" valign="middle">0.02%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Dow</td>
                                                                    <td align="center" valign="middle">$35,980.56</td>
                                                                    <td align="center" valign="middle" className="default">0.55%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">S&P</td>
                                                                    <td align="center" valign="middle">$4,725.78</td>
                                                                    <td align="center" valign="middle" className="default">0.62%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Nasdaq</td>
                                                                    <td align="center" valign="middle">$15,653.40</td>
                                                                    <td align="center" valign="middle" className="default">0.85%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>

                                                                {/*hidden*/}
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">US 30</td>
                                                                    <td align="center" valign="middle">$35,964.30</td>
                                                                    <td align="center" valign="middle" className="default">0.04%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">DAX</td>
                                                                    <td align="center" valign="middle">$15,725.01</td>
                                                                    <td align="center" className="special" valign="middle">0.06%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">U.S 10Y</td>
                                                                    <td align="center" valign="middle">$1.482</td>
                                                                    <td align="center" className="special" valign="middle">0.71%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">U.S 2Y</td>
                                                                    <td align="center" valign="middle">$0.6963</td>
                                                                    <td align="center" valign="middle" className="default">1.21%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">UK Gilt</td>
                                                                    <td align="center" valign="middle">$125.42</td>
                                                                    <td align="center" className="special" valign="middle">0.70%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">Brazil 10Y</td>
                                                                    <td align="center" valign="middle">$10.241</td>
                                                                    <td align="center" className="special" valign="middle">0.48%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">ProShares</td>
                                                                    <td align="center" valign="middle">$5.98</td>
                                                                    <td align="center" className="special" valign="middle">2.29%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>
                                                                <tr className="hiddenWatchList hide">
                                                                    <td align="left" valign="middle">iShares Gold</td>
                                                                    <td align="center" valign="middle">$34.41</td>
                                                                    <td align="center" valign="middle" className="default">0.23%</td>
                                                                    <td align="center" valign="middle" className="likeBtn" style={{color:"var(--siteColor2)"}}  onClick={(e) => likeBtnClick(e)}>&#9825;</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>Buy</a>
                                                                    </td>
                                                                </tr>

                                                                <button className="commonButton" style={{margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}} onClick={(e)=>{e.target.classList.add('hide'); let el = document.querySelectorAll(".hiddenWatchList"); for(let i=0; i<el.length; i++){el[i].classList.remove("hide")}}}>More</button>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection markets  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">Markets</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                                <tr>
                                                                    <th width="20%" align="left" valign="bottom">Name</th>
                                                                    <th width="20%" align="center" valign="bottom">Price</th>
                                                                    <th width="20%" align="center" valign="bottom">24hr Change</th>
                                                                    <th width="20%" align="center" valign="bottom">% Change</th>
                                                                    <th width="20%" align="center" valign="bottom"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" valign="middle">Bitcoin BTC</td>
                                                                    <td align="center" valign="middle">$48,054.91</td>
                                                                    <td align="center" valign="middle">$976.54</td>
                                                                    <td align="center" valign="middle" className="default">2.08%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Ether ETH</td>
                                                                    <td align="center" valign="middle">$4,038.87</td>
                                                                    <td align="center" valign="middle">$45.29</td>
                                                                    <td align="center" valign="middle" className="default">0.77%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Shiba Inu SHIB</td>
                                                                    <td align="center" valign="middle">$0.00002853</td>
                                                                    <td align="center" valign="middle">$0.000000993</td>
                                                                    <td align="center" valign="middle" className="default">3.61%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Dogecoin DOGE</td>
                                                                    <td align="center" valign="middle">$0.14195</td>
                                                                    <td align="center" valign="middle">$0.00231</td>
                                                                    <td align="center" valign="middle" className="default">1.66%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">Terra LUNA</td>
                                                                    <td align="center" valign="middle">$94.29</td>
                                                                    <td align="center" valign="middle">$1.98</td>
                                                                    <td align="center" valign="middle" className="default">2.74%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>

                                                                <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection stocks  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">Stocks</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"700px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                            <tr>
                                                                <th width="10%" align="left" valign="bottom">Symbol</th>
                                                                <th width="10%" align="center" valign="bottom">Name</th>
                                                                <th width="10%" align="center" valign="bottom">Price (Intraday)</th>
                                                                <th width="10%" align="center" valign="bottom">Change</th>
                                                                <th width="10%" align="center" valign="bottom">% Change</th>
                                                                <th width="10%" align="center" valign="bottom">Volume</th>
                                                                <th width="10%" align="center" valign="bottom">Avg Vol (3 month)</th>
                                                                <th width="10%" align="center" valign="bottom">Market Cap</th>
                                                                <th width="10%" align="center" valign="bottom">PE Ratio</th>
                                                                <th width="10%" align="center" valign="bottom"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td align="left" valign="middle">AAPL</td>
                                                                <td align="center" valign="middle">Apple Inc.</td>
                                                                <td align="center" valign="middle">176.28</td>
                                                                <td align="center" valign="middle" className="default">0.64</td>
                                                                <td align="center" valign="middle" className="default">0.36%</td>
                                                                <td align="center" valign="middle">68.357M</td>
                                                                <td align="center" valign="middle">90.844M</td>
                                                                <td align="center" valign="middle">2.892T</td>
                                                                <td align="center" valign="middle">31.42</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">NKLA</td>
                                                                <td align="center" valign="middle">Nikola Corporation</td>
                                                                <td align="center" valign="middle">11.09</td>
                                                                <td align="center" valign="middle" className="default">1.69</td>
                                                                <td align="center" valign="middle" className="default">17.98%</td>
                                                                <td align="center" valign="middle">65.144M</td>
                                                                <td align="center" valign="middle">11.798M</td>
                                                                <td align="center" valign="middle">4.512B</td>
                                                                <td align="center" valign="middle">N/A</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">F</td>
                                                                <td align="center" valign="middle">Ford Motor Company</td>
                                                                <td align="center" valign="middle">20.25</td>
                                                                <td align="center" valign="middle" className="default">0.11</td>
                                                                <td align="center" valign="middle" className="default">0.55%</td>
                                                                <td align="center" valign="middle">50.61M</td>
                                                                <td align="center" valign="middle">93.366M</td>
                                                                <td align="center" valign="middle">80.924B</td>
                                                                <td align="center" valign="middle">28.40</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">AMD</td>
                                                                <td align="center" valign="middle">Advanced Micro Devices, Inc.</td>
                                                                <td align="center" valign="middle">146.14</td>
                                                                <td align="center" valign="middle" className="default">2.26</td>
                                                                <td align="center" valign="middle" className="default">1.57%</td>
                                                                <td align="center" valign="middle">48.654M</td>
                                                                <td align="center" valign="middle">54.939M</td>
                                                                <td align="center" valign="middle">176.48B</td>
                                                                <td align="center" valign="middle">45.08</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">T</td>
                                                                <td align="center" valign="middle">AT&T Inc.</td>
                                                                <td align="center" valign="middle">24.87</td>
                                                                <td align="center" valign="middle" className="default">0.09</td>
                                                                <td align="center" valign="middle" className="default">0.36%</td>
                                                                <td align="center" valign="middle">43.314M</td>
                                                                <td align="center" valign="middle">52.564M</td>
                                                                <td align="center" valign="middle">177.597B</td>
                                                                <td align="center" valign="middle">192.79</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">PFE</td>
                                                                <td align="center" valign="middle">Pfizer Inc.</td>
                                                                <td align="center" valign="middle">58.71</td>
                                                                <td align="center" valign="middle" className="special">0.84</td>
                                                                <td align="center" valign="middle" className="special">1.41%</td>
                                                                <td align="center" valign="middle">39.203M</td>
                                                                <td align="center" valign="middle">39.831M</td>
                                                                <td align="center" valign="middle">329.532B	</td>
                                                                <td align="center" valign="middle">16.77</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">CCL</td>
                                                                <td align="center" valign="middle">Carnival Corporation & plc</td>
                                                                <td align="center" valign="middle">21.20</td>
                                                                <td align="center" valign="middle" className="special">0.05</td>
                                                                <td align="center" valign="middle" className="special">0.24%</td>
                                                                <td align="center" valign="middle">39.191M</td>
                                                                <td align="center" valign="middle">38.691M</td>
                                                                <td align="center" valign="middle">24.714B</td>
                                                                <td align="center" valign="middle">N/A</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">NIO</td>
                                                                <td align="center" valign="middle">NIO Inc.</td>
                                                                <td align="center" valign="middle">30.52</td>
                                                                <td align="center" valign="middle" className="default">0.67</td>
                                                                <td align="center" valign="middle" className="default">2.24%</td>
                                                                <td align="center" valign="middle">38.38M</td>
                                                                <td align="center" valign="middle">43.241M</td>
                                                                <td align="center" valign="middle">48.544B</td>
                                                                <td align="center" valign="middle">N/A</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">AMC</td>
                                                                <td align="center" valign="middle">AMC Entertainment Holdings, Inc.</td>
                                                                <td align="center" valign="middle">28.52</td>
                                                                <td align="center" valign="middle" className="special">0.16</td>
                                                                <td align="center" valign="middle" className="special">0.56%</td>
                                                                <td align="center" valign="middle">37.006M</td>
                                                                <td align="center" valign="middle">44.637M</td>
                                                                <td align="center" valign="middle">14.64B</td>
                                                                <td align="center" valign="middle">N/A</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">MU</td>
                                                                <td align="center" valign="middle">Micron Technology, Inc.</td>
                                                                <td align="center" valign="middle">94.42</td>
                                                                <td align="center" valign="middle" className="default">4.08</td>
                                                                <td align="center" valign="middle" className="default">4.52%</td>
                                                                <td align="center" valign="middle">36.345M</td>
                                                                <td align="center" valign="middle">19.339M</td>
                                                                <td align="center" valign="middle">105.766B</td>
                                                                <td align="center" valign="middle">14.61</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>

                                                            <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection etfs  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">ETFS</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                            <tr>
                                                                <th width="11.11%" align="left" valign="bottom">Symbol</th>
                                                                <th width="11.11%" align="center" valign="bottom">Name</th>
                                                                <th width="11.11%" align="center" valign="bottom">Price (Intraday)</th>
                                                                <th width="11.11%" align="center" valign="bottom">Change</th>
                                                                <th width="11.11%" align="center" valign="bottom">% Change</th>
                                                                <th width="11.11%" align="center" valign="bottom">Volume</th>
                                                                <th width="11.11%" align="center" valign="bottom">50 Day Average</th>
                                                                <th width="11.11%" align="center" valign="bottom">200 Day Average</th>
                                                                <th width="11.11%" align="center" valign="bottom"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td align="left" valign="middle">DWCR</td>
                                                                <td align="center" valign="middle">Arrow DWA</td>
                                                                <td align="center" valign="middle">36.55</td>
                                                                <td align="center" valign="middle" className="default">0.28</td>
                                                                <td align="center" valign="middle" className="default">0.78%</td>
                                                                <td align="center" valign="middle">1,248</td>
                                                                <td align="center" valign="middle">36.61</td>
                                                                <td align="center" valign="middle">35.68</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">QQQ</td>
                                                                <td align="center" valign="middle">Invesco QQQ Trust</td>
                                                                <td align="center" valign="middle">396.92</td>
                                                                <td align="center" valign="middle" className="default">2.97</td>
                                                                <td align="center" valign="middle" className="default">0.75%</td>
                                                                <td align="center" valign="middle">29.599M</td>
                                                                <td align="center" valign="middle">389.47</td>
                                                                <td align="center" valign="middle">359.41</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>

                                                            <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection futures  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">Futures</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                            <tr>
                                                                <th width="11.11%" align="left" valign="bottom">Symbol</th>
                                                                <th width="11.11%" align="center" valign="bottom">Name</th>
                                                                <th width="11.11%" align="center" valign="bottom">Last Price</th>
                                                                <th width="11.11%" align="center" valign="bottom">Market Time</th>
                                                                <th width="11.11%" align="center" valign="bottom">Change</th>
                                                                <th width="11.11%" align="center" valign="bottom">% Change</th>
                                                                <th width="11.11%" align="center" valign="bottom">Volume</th>
                                                                <th width="11.11%" align="center" valign="bottom"></th>
                                                                <th width="11.11%" align="center" valign="bottom"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td align="left" valign="middle">ES=F</td>
                                                                <td align="center" valign="middle">S&P Futures</td>
                                                                <td align="center" valign="middle">4,720.50	</td>
                                                                <td align="center" valign="middle">2:16AM EST</td>
                                                                <td align="center" valign="middle" className="default">4.75</td>
                                                                <td align="center" valign="middle" className="default">0.10%</td>
                                                                <td align="center" valign="middle">36,472</td>
                                                                <td align="center" valign="middle">2.199M</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">YM=F</td>
                                                                <td align="center" valign="middle">Dow Futures</td>
                                                                <td align="center" valign="middle">35,816.00</td>
                                                                <td align="center" valign="middle">2:16AM EST</td>
                                                                <td align="center" valign="middle" className="special">16.00</td>
                                                                <td align="center" valign="middle" className="special">0.04%</td>
                                                                <td align="center" valign="middle">7,840</td>
                                                                <td align="center" valign="middle">92,773</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">NQ=F</td>
                                                                <td align="center" valign="middle">Nasdaq Futures</td>
                                                                <td align="center" valign="middle">16,332.50</td>
                                                                <td align="center" valign="middle">2:16AM EST</td>
                                                                <td align="center" valign="middle" className="default">33.50</td>
                                                                <td align="center" valign="middle" className="default">0.21%</td>
                                                                <td align="center" valign="middle">24,858</td>
                                                                <td align="center" valign="middle">205,071</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">RTY=F</td>
                                                                <td align="center" valign="middle">Russell 2000 Futures</td>
                                                                <td align="center" valign="middle">2,235.00	</td>
                                                                <td align="center" valign="middle">2:16AM EST</td>
                                                                <td align="center" valign="middle" className="special">1.90</td>
                                                                <td align="center" valign="middle" className="special">0.08%</td>
                                                                <td align="center" valign="middle">4,591</td>
                                                                <td align="center" valign="middle">460,878</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">ZB=F</td>
                                                                <td align="center" valign="middle">U.S. Treasury Bond Futures,Mar-2022</td>
                                                                <td align="center" valign="middle">160.8125</td>
                                                                <td align="center" valign="middle">2:15AM EST</td>
                                                                <td align="center" valign="middle" className="default">0.3438</td>
                                                                <td align="center" valign="middle" className="default">0.21%</td>
                                                                <td align="center" valign="middle">11,727</td>
                                                                <td align="center" valign="middle">1.208M</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">ZN=F</td>
                                                                <td align="center" valign="middle">10-Year T-Note Futures,Mar-2022</td>
                                                                <td align="center" valign="middle">130.578125</td>
                                                                <td align="center" valign="middle">2:15AM EST</td>
                                                                <td align="center" valign="middle" className="default">0.031250</td>
                                                                <td align="center" valign="middle" className="default">+0.02%</td>
                                                                <td align="center" valign="middle">32,061</td>
                                                                <td align="center" valign="middle">3.771M</td>
                                                                <td align="right" valign="middle" className="center">
                                                                    <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                </td>
                                                            </tr>

                                                            <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection currencies  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">Currencies</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                            <tr>
                                                                <th width="16.66%" align="left" valign="bottom">Symbol</th>
                                                                <th width="16.66%" align="center" valign="bottom">Name</th>
                                                                <th width="16.66%" align="center" valign="bottom">Last Price</th>
                                                                <th width="16.66%" align="center" valign="bottom">Change</th>
                                                                <th width="16.66%" align="center" valign="bottom">% Change</th>
                                                                <th width="16.66%" align="center" valign="bottom"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" valign="middle">EURUSD=X</td>
                                                                    <td align="left" valign="middle">EUR/USD</td>
                                                                    <td align="left" valign="middle">1.1326</td>
                                                                    <td align="left" valign="middle" className="default">0.0017</td>
                                                                    <td align="left" valign="middle" className="default">0.15%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">JPY=X</td>
                                                                    <td align="left" valign="middle">USD/JPY</td>
                                                                    <td align="left" valign="middle">114.4830</td>
                                                                    <td align="left" valign="middle" className="default">0.0730</td>
                                                                    <td align="left" valign="middle" className="default">0.06%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">GBPUSD=X</td>
                                                                    <td align="left" valign="middle">GBP/USD</td>
                                                                    <td align="left" valign="middle">1.3395</td>
                                                                    <td align="left" valign="middle" className="special">0.0008</td>
                                                                    <td align="left" valign="middle" className="special">0.06%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">AUDUSD=X	</td>
                                                                    <td align="left" valign="middle">AUD/USD</td>
                                                                    <td align="left" valign="middle">0.7224</td>
                                                                    <td align="left" valign="middle" className="special">0.0004</td>
                                                                    <td align="left" valign="middle" className="special">0.05%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">NZDUSD=X</td>
                                                                    <td align="left" valign="middle">NZD/USD</td>
                                                                    <td align="left" valign="middle">0.6812</td>
                                                                    <td align="left" valign="middle" className="special">0.0007</td>
                                                                    <td align="left" valign="middle" className="special">0.10%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">EURJPY=X	</td>
                                                                    <td align="left" valign="middle">EUR/JPY</td>
                                                                    <td align="left" valign="middle">129.6020</td>
                                                                    <td align="left" valign="middle" className="default">0.0870</td>
                                                                    <td align="left" valign="middle" className="default">0.07%</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>

                                                                <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection commonSection commodities  center-x">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                                <h1 className="sectionTitle">Commodities</h1>
                                                <p className="sectionTitleSubTitle">Pricing data is updated frequently. Currency in USD</p>
                                            </div>
                                            <div className="contractContainer">


                                                <div className="tableWithTitle">
                                                    <h3 className="sectionTitle"></h3>
                                                    <div className="eachTableContainer">
                                                        <table className="customTable noBold"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0"}}>
                                                            <thead>
                                                            <tr>
                                                                <th width="14.28%" align="left" valign="bottom">INDEX</th>
                                                                <th width="14.28%" align="center" valign="bottom">UNITS</th>
                                                                <th width="14.28%" align="center" valign="bottom">PRICE</th>
                                                                <th width="14.28%" align="center" valign="bottom">CHANGE</th>
                                                                <th width="14.28%" align="center" valign="bottom">%CHANGE</th>
                                                                <th width="14.28%" align="center" valign="bottom">CONTRACT	TIME (EST)</th>
                                                                <th width="14.28%" align="center" valign="bottom"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td align="left" valign="middle">CL1:COM<br/>WTI Crude Oil (Nymex)</td>
                                                                    <td align="left" valign="middle">USD/bbl.</td>
                                                                    <td align="left" valign="middle">72.80</td>
                                                                    <td align="left" valign="middle" className="special">0.99</td>
                                                                    <td align="left" valign="middle" className="special">1.34%</td>
                                                                    <td align="left" valign="middle">Feb 2022 2:20 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">CO1:COM<br/>Brent Crude (ICE)</td>
                                                                    <td align="left" valign="middle">USD/bbl.</td>
                                                                    <td align="left" valign="middle">75.91</td>
                                                                    <td align="left" valign="middle" className="special">0.23</td>
                                                                    <td align="left" valign="middle" className="special">0.30%</td>
                                                                    <td align="left" valign="middle">Feb 2022 2:20 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">XB1:COM<br/>RBOB Gasoline (Nymex)</td>
                                                                    <td align="left" valign="middle">USd/gal.</td>
                                                                    <td align="left" valign="middle">218.96</td>
                                                                    <td align="left" valign="middle" className="special">1.65</td>
                                                                    <td align="left" valign="middle" className="special">0.75%</td>
                                                                    <td align="left" valign="middle">Jan 2022	2:00 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">NG1:COM<br/>Natural Gas (Nymex)</td>
                                                                    <td align="left" valign="middle">USD/MMBtu</td>
                                                                    <td align="left" valign="middle">3.79</td>
                                                                    <td align="left" valign="middle" className="default">0.06</td>
                                                                    <td align="left" valign="middle" className="default">1.63%</td>
                                                                    <td align="left" valign="middle">Jan 2022	2:20 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">HO1:COM<br/>Heating Oil (Nymex)</td>
                                                                    <td align="left" valign="middle">USd/gal.</td>
                                                                    <td align="left" valign="middle">229.82</td>
                                                                    <td align="left" valign="middle" className="special">3.32</td>
                                                                    <td align="left" valign="middle" className="special">1.42%</td>
                                                                    <td align="left" valign="middle">Jan 2022	2:18 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">GC1:COM<br/>Gold (Comex)</td>
                                                                    <td align="left" valign="middle">USD/t oz.</td>
                                                                    <td align="left" valign="middle">1,810.00</td>
                                                                    <td align="left" valign="middle" className="special">1.70</td>
                                                                    <td align="left" valign="middle" className="special">0.09%</td>
                                                                    <td align="left" valign="middle">Feb 2022	2:21 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">XAUUSD:CUR<br/>Gold Spot</td>
                                                                    <td align="left" valign="middle">USD/t oz.</td>
                                                                    <td align="left" valign="middle">1,808.25</td>
                                                                    <td align="left" valign="middle" className="special">2.01</td>
                                                                    <td align="left" valign="middle" className="special">0.11%</td>
                                                                    <td align="left" valign="middle">N/A 2:31 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">SI1:COM<br/>Silver (Comex)</td>
                                                                    <td align="left" valign="middle">USD/t oz.</td>
                                                                    <td align="left" valign="middle">22.78</td>
                                                                    <td align="left" valign="middle" className="special">0.16</td>
                                                                    <td align="left" valign="middle" className="special">0.72%</td>
                                                                    <td align="left" valign="middle">Mar 2022	2:20 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">HG1:COM<br/>Copper (Comex)</td>
                                                                    <td align="left" valign="middle">USd/lb.</td>
                                                                    <td align="left" valign="middle">434.75</td>
                                                                    <td align="left" valign="middle" className="special">4.50</td>
                                                                    <td align="left" valign="middle" className="special">1.02%</td>
                                                                    <td align="left" valign="middle">Mar 2022	2:21 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">XPTUSD:CUR<br/>Platinum Spot</td>
                                                                    <td align="left" valign="middle">USD/t oz.</td>
                                                                    <td align="left" valign="middle">960.74</td>
                                                                    <td align="left" valign="middle" className="special">15.77</td>
                                                                    <td align="left" valign="middle" className="special">1.61%</td>
                                                                    <td align="left" valign="middle">N/A 2:30 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">C 1:COM<br/>Corn (CBOT)</td>
                                                                    <td align="left" valign="middle">USd/bu.</td>
                                                                    <td align="left" valign="middle">608.25</td>
                                                                    <td align="left" valign="middle" className="default">2.50</td>
                                                                    <td align="left" valign="middle" className="default">0.41%</td>
                                                                    <td align="left" valign="middle">Mar 2022	2:26 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">W 1:COM<br/>Wheat (CBOT)</td>
                                                                    <td align="left" valign="middle">USd/bu.</td>
                                                                    <td align="left" valign="middle">812.00</td>
                                                                    <td align="left" valign="middle" className="default">2.75</td>
                                                                    <td align="left" valign="middle" className="default">0.34%</td>
                                                                    <td align="left" valign="middle">Mar 2022	2:26 AM</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">CC1:COM<br/>Cocoa (ICE)</td>
                                                                    <td align="left" valign="middle">USD/MT</td>
                                                                    <td align="left" valign="middle">2,473.00</td>
                                                                    <td align="left" valign="middle" className="default">7.00</td>
                                                                    <td align="left" valign="middle" className="default">0.28%</td>
                                                                    <td align="left" valign="middle">Mar 2022	12/23/2021</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">CT1:COM<br/>Cotton #2 (ICE)</td>
                                                                    <td align="left" valign="middle">USd/lb.</td>
                                                                    <td align="left" valign="middle">109.12</td>
                                                                    <td align="left" valign="middle" className="default">0.29</td>
                                                                    <td align="left" valign="middle" className="default">0.27%</td>
                                                                    <td align="left" valign="middle">Mar 2022	12/23/2021</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td align="left" valign="middle">LC1:COM<br/>Live Cattle (CME)</td>
                                                                    <td align="left" valign="middle">USd/lb.</td>
                                                                    <td align="left" valign="middle">139.63</td>
                                                                    <td align="left" valign="middle" className="default">2.25</td>
                                                                    <td align="left" valign="middle" className="default">1.64%</td>
                                                                    <td align="left" valign="middle">Feb 2022	12/23/2021</td>
                                                                    <td align="right" valign="middle" className="center">
                                                                        <a href="#" className="rowButton buyBtn" style={{backgroundColor:"white"}}>View</a>
                                                                    </td>
                                                                </tr>

                                                                <a href="#" className="commonButton" style={{display:"block", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>More</a>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="commonButton" style={{display:"block", height:"fit-content", width:"fit-content", textDecoration:"none", margin:"8px", padding:"4px 8px", backgroundColor: "var(--siteButtonBackground)", borderRadius: "4px", color: "white"}}>View all Markets</a>

                                        </div>
                                    </div>
                                </section>

                                <section className="commonSection eachSection center-x" id="">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer center-x-with-flex-column">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "16px"}}>
                                                <h1 className="sectionTitle">News</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="sectionBody center-x-with-flex-column">
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Crypto</a>
                                                        <h3>Bitcoin Slides Below $50,000, Continuing a Choppy, Down December</h3>
                                                        <h4>Some analysts view it as a key pivot for assessing Bitcoin's 2022 outlook</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Crypto</a>
                                                        <h3>CoinList CEO on Bitcoin's Wild Swings, Blockchain Tech</h3>
                                                        <h4>CoinList CEO Graham Jenkin discusses the outlook for cryptocurrencies and blockchain technology in 2022 on "What'd You Miss?"</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Markets</a>
                                                        <h3>U.S. Stocks Rise as Reopening Trade Gains Traction: Markets Wrap</h3>
                                                        <h4>Follow the latest developments in global markets.</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Markets</a>
                                                        <h3>Wall Street Week: Looking Back at a Wild 2021</h3>
                                                        <h4>On this special edition of Wall Street Week, we bring back some of our keenest insights from the year on inflation, cryptocurrency, China, the markets and more.</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Investing</a>
                                                        <h3>Investing in Emerging Markets</h3>
                                                        <h4>Many investors are looking overseas to find bargains to bolster their portfolios. Matt Miller and Paul Sweeney talked about opportunities in emerging markets with Oscar Decotelli, DXA Invest CEO</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                                <div className="eachNews center-y">
                                                    <div className="newsImageContainer">
                                                        <img className="newsImage" src="/images/privateSaleAnnounceImage.png" />
                                                    </div>
                                                    <div className="newsBody">
                                                        <a href="#" style={{color: "var(--siteColor2)", textDecoration: "none"}}>Investing</a>
                                                        <h3>A Wild, Emotional Year Has Changed Investing—Maybe Forever</h3>
                                                        <h4>Everyone seemed to become a trader, taking chances on outlandish ideas as excitement and fascination mixed with fear and greed.</h4>
                                                        <a href="#" style={{color: "var(--siteColor2)"}}>Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="commonSection eachSection center-x" id="">
                                    <div className="eachSectionMask center-x">
                                        <div className="customContainer center-x-with-flex-column">
                                            <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "16px"}}>
                                                <h1 className="sectionTitle">Promos & Giveaways</h1>
                                                <p className="sectionTitleSubTitle"></p>
                                            </div>
                                            <div className="sectionBody center-x-with-flex-column">
                                                <div className="promoContainer d-flex">
                                                    <div className="promoLogoContainer">
                                                        <img className="promoLogo" src="/images/privateSaleAnnounceImage.png"/>
                                                    </div>
                                                    <div className="promoBody">
                                                        <h4 style={{color: "var(--siteColor2)"}}>Get $25 in free crypto or EVER gift card</h4>
                                                        <h3>Give a friend the gift of free crypto or EVER gift card</h3>
                                                        <p>Invite a friend to EVER and you’ll both receive $25 in free Bitcoin or EVER gift card when they buy or sell their first $100 on EVER!</p>
                                                        <div className="d-flex" style={{margin: "16px 0"}}>
                                                            <input className="promoInput" type="email" placeholder="Enter Email address"/>
                                                            <button className="promoButton commonButton center" style={{backgroundColor: "var(--siteButtonBackground)", padding: "0 8px", borderRadius: "4px", height:"40px", color:"white"}}>Send invite</button>
                                                        </div>
                                                        <div className="d-flex">
                                                            <button className="copyPromoButton commonButton center" style={{border:"1px solid var(--colorLightGray)", padding: "0 8px", borderRadius: "4px", height:"40px", marginRight: "16px"}}>Copy link</button>
                                                            <button className="sharePromoButton commonButton center" style={{border:"1px solid var(--colorLightGray)", padding: "0 8px", borderRadius: "4px", height:"40px"}}>Share</button>
                                                        </div>
                                                        <p style={{marginTop: "16px"}}>Only certain users can accept your invitation. <a href="#" style={{color: "var(--siteColor2)"}}>View Terms</a>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="eachSection center" id="footer" style={{marginTop: "40px"}}>
                                    <p>© 2022</p>
                                    <img className="footerCRLogo day" height={24} src="/images/brandLogo/ever_all_color.png"/>
                                    <img className="footerCRLogo dark" height={24} src="/images/brandLogo/ever_all_white.png"/>
                                </section>
                            </div>
                         </div>
                    </div>
                    <button className="backToTopButton commonButton center">
                        <img alt="Img" src="images/arrow-up.svg"/>
                    </button>
                </div>
			</div>
        )
    }
}
