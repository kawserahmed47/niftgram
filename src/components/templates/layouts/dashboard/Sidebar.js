import React from 'react'


export default function sidebar() {

    let currencies = [
        "USD",
        "EUR",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SPL",
        "SRD",
        "STN",
        "SVC",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
        "ZWD"
    ]

    return (
<div>
    <div className="leftSideBar">
        <div className="searchBarContainer center-y">
            <div className="searchInputContainer center-y">
                <input className="searchInput" type="text" name="searchInput" id="searchInput" placeholder="Search for cryptos, stocks, games, etc…."/>
                <button className="searchButton center">
                    <img alt="Img" src="/images/searchLogo.svg"/>
                </button>
            </div>
        </div>
        <div className="leftSideBarBody">
            <div className="leftSideBarEachNavSection leftSideBarMainNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu center-y" id="nav_home">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/home.svg"/>
                        <p className="leftSideBarNavTitle">Home</p>
                    </div>
                </div>
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu center-y" id="nav_ecosystem">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ecosystem.svg"/>
                        <p className="leftSideBarNavTitle">Ecosystem </p>
                    </div>
                </div>
    
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu center-y" id="nav_products">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/products.svg"/>
                        <p className="leftSideBarNavTitle">Products</p>
                    </div>
                </div>
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu center-y" id="nav_roadmap">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/roadmap.svg"/>
                        <p className="leftSideBarNavTitle">Roadmap</p>
                    </div>
                </div>
            
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu center-y" id="nav_community">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/community.svg"/>
                        <p className="leftSideBarNavTitle">Community</p>
                    </div>
                </div>
            
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/onlineBanking.svg"/>
                        <p className="leftSideBarNavTitle">Banking</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/currentAccounts.svg"/>
                                <p className="leftSideBarNavTitle">Current accounts</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu hasSubMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/personalAccount.svg"/>
                                        <p className="leftSideBarNavTitle">Personal account</p>
                                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                                    </div>
                                    <div className="leftSideBarEachNav3rdSubMenu">
                                        <div className="leftSideBarEachNav">
                                            <div className="eachNavMenu center-y">
                                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/standard.svg"/>
                                                <p className="leftSideBarNavTitle">Standard</p>
                                            </div>
                                        </div>
                                        <div className="leftSideBarEachNav">
                                            <div className="eachNavMenu center-y">
                                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/premium.svg"/>
                                                <p className="leftSideBarNavTitle">Premium</p>
                                            </div>
                                        </div>
                                        <div className="leftSideBarEachNav">
                                            <div className="eachNavMenu center-y">
                                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/platinum.svg"/>
                                                <p className="leftSideBarNavTitle">Platinum</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/businessAccount.svg"/>
                                        <p className="leftSideBarNavTitle">Business account</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/debit&CreditCards.svg"/>
                                <p className="leftSideBarNavTitle">Cards</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/debit&CreditCards.svg"/>
                                        <p className="leftSideBarNavTitle">Debit Card</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/debit&CreditCards.svg"/>
                                        <p className="leftSideBarNavTitle">Credit Card</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/bankwire.svg"/>
                                <p className="leftSideBarNavTitle">Bankwire</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/moneyTransfer.svg"/>
                                <p className="leftSideBarNavTitle">Money Transfer</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/insurance.svg"/>
                                <p className="leftSideBarNavTitle">HirePlus</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/spread.svg"/>
                                <p className="leftSideBarNavTitle">Spread</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/pay.svg"/>
                                <p className="leftSideBarNavTitle">Ever Pay</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/logo.svg"/>
                                <p className="leftSideBarNavTitle">POS</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/logo.svg"/>
                                <p className="leftSideBarNavTitle">ScoreFi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-insurance-home-security-itim2101-fill-itim2101.png"/>
                        <p className="leftSideBarNavTitle">Insurance</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/material/64/000000/lifecycle.png"/>
                                <p className="leftSideBarNavTitle">Life</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-health-medical-kiranshastry-solid-kiranshastry.png"/>
                                <p className="leftSideBarNavTitle">Health</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-disability-museum-photo3ideastudio-solid-photo3ideastudio.png"/>
                                <p className="leftSideBarNavTitle">Long-Term Disability</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/ios-filled/50/000000/person-at-home.png"/>
                                <p className="leftSideBarNavTitle">Homeowner's</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-others-phat-plus/64/000000/external-annuities-global-crisis-outline-others-phat-plus.png"/>
                                <p className="leftSideBarNavTitle">Annuities</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-auto-photography-dreamstale-lineal-dreamstale.png"/>
                                <p className="leftSideBarNavTitle">Auto</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">Cryptos</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/dotty/80/000000/pets.png"/>
                                <p className="leftSideBarNavTitle">Pets</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/ios-filled/50/000000/smartphone-tablet.png"/>
                                <p className="leftSideBarNavTitle">Gadgets</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-insurance-finance-kiranshastry-solid-kiranshastry-1.png"/>
                                <p className="leftSideBarNavTitle">Reinsurance</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/funds.svg"/>
                        <p className="leftSideBarNavTitle">Asset Management</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/mutualFund.svg"/>
                                <p className="leftSideBarNavTitle">Mutual Funds</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/mutualFund.svg"/>
                                <p className="leftSideBarNavTitle">TaxPal</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/mutualFund.svg"/>
                                <p className="leftSideBarNavTitle">Crowdfund</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/stocks.svg"/>
                                <p className="leftSideBarNavTitle">Stocks</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/commodities.svg"/>
                                <p className="leftSideBarNavTitle">Commodities</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/forex.svg"/>
                                <p className="leftSideBarNavTitle">Forex</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/bonds.svg"/>
                                <p className="leftSideBarNavTitle">Bonds & CDs</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/options&Futures.svg"/>
                                <p className="leftSideBarNavTitle">Options & Futures</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/hedgeFund.svg"/>
                                <p className="leftSideBarNavTitle">Hedge Funds</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/creditETF.svg"/>
                                <p className="leftSideBarNavTitle">ETFs</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/creditETF.svg"/>
                                <p className="leftSideBarNavTitle">Sustainable investing</p>
                            </div>
                        </div>

                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/retirement.svg"/>
                                <p className="leftSideBarNavTitle">Retirement & IRAs</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/sectorInvestment.svg"/>
                                <p className="leftSideBarNavTitle">Sector Investing</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/cashManagement.svg"/>
                                <p className="leftSideBarNavTitle">Cash Management</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/managedAccounts.svg"/>
                                <p className="leftSideBarNavTitle">Managed Accounts</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/collegeSavings.svg"/>
                                <p className="leftSideBarNavTitle">College Savings</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/healthSavings.svg"/>
                                <p className="leftSideBarNavTitle">Health Savings Account</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/charitableGiving.svg"/>
                                <p className="leftSideBarNavTitle">Charitable Giving</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/charitableGiving.svg"/>
                                <p className="leftSideBarNavTitle">Coinset</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                        <p className="leftSideBarNavTitle">Underwriting</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" style={{objectFit:"cover"}} src="/images/navLogo/launch.png"/>
                                <p className="leftSideBarNavTitle">Launchpad</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <a href="/p2p" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">ILO</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <a href="/p2p" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">IDO</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <a href="/p2p" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">IEO</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/directListing.png"/>
                                <p className="leftSideBarNavTitle">Direct listing</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">Fair Launch</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">Offer Listing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/auctionedListing.png"/>
                                <p className="leftSideBarNavTitle">Auctioned Listing</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/sharePlacing.png"/>
                                <p className="leftSideBarNavTitle">Token Placing</p>
                            </div>
                        </div>
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                <p className="leftSideBarNavTitle">eVault</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">Vesting</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">Token Lock</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/offerings.png"/>
                                        <p className="leftSideBarNavTitle">LP Lock</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/markets.svg"/>
                        <p className="leftSideBarNavTitle">Trade</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/binary.svg"/>
                                <p className="leftSideBarNavTitle">CFD</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/copytrading.svg"/>
                                <p className="leftSideBarNavTitle">Dx</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/copytrading.svg"/>
                                <p className="leftSideBarNavTitle">Binaries</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/copytrading.svg"/>
                                <p className="leftSideBarNavTitle">CDx</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/copytrading.svg"/>
                                <p className="leftSideBarNavTitle">SpreadBet</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/copytrading.svg"/>
                                <p className="leftSideBarNavTitle">Securities Financing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/sport.svg"/>
                        <p className="leftSideBarNavTitle">Sports</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <span className="icon-in-play" aria-hidden="true"></span>
                                <p className="leftSideBarNavTitle">In-Play</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <span className="icon-most-popular-bets2"></span>
                                <p className="leftSideBarNavTitle">Top bets</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <span className="icon-results"></span>
                                <p className="leftSideBarNavTitle">Results</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/scores&Results.svg"/>
                                <p className="leftSideBarNavTitle">Scores & Results</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/liveScores.svg"/>
                                        <p className="leftSideBarNavTitle">Live Scores</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/results.svg"/>
                                        <p className="leftSideBarNavTitle">Results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <span className="odds-settings__fraction-icon icon-fraction"></span>
                                <p className="leftSideBarNavTitle">Odds Display</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/fractional.svg"/>
                                        <p className="leftSideBarNavTitle">Fractional</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/decimal.svg"/>
                                        <p className="leftSideBarNavTitle">Decimal</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/american.svg"/>
                                        <p className="leftSideBarNavTitle">American</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/fractional.svg"/>
                                        <p className="leftSideBarNavTitle">America/Fractional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/rules.svg"/>
                                <p className="leftSideBarNavTitle">Rules</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/allSports.svg"/>
                                <p className="leftSideBarNavTitle">All sports</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-american-football"></span>
                                        <p className="leftSideBarNavTitle">American football</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-australian-rules"></span>
                                        <p className="leftSideBarNavTitle">Australian Rules</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-baseball"></span>
                                        <p className="leftSideBarNavTitle">Baseball</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-basketball"></span>
                                        <p className="leftSideBarNavTitle">Basketball</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-boxing"></span>
                                        <p className="leftSideBarNavTitle">Boxing</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-cricket"></span>
                                        <p className="leftSideBarNavTitle">Cricket</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-cycling"></span>
                                        <p className="leftSideBarNavTitle">Cycling</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-darts"></span>
                                        <p className="leftSideBarNavTitle">Darts</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-e-sports"></span>
                                        <p className="leftSideBarNavTitle">E-Sports</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-e-sports"></span>
                                        <p className="leftSideBarNavTitle">Football</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-gaa-football"></span>
                                        <p className="leftSideBarNavTitle">GAA Football</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-gaa-hurling"></span>
                                        <p className="leftSideBarNavTitle">GAA Hurling</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-golf"></span>
                                        <p className="leftSideBarNavTitle">Golf</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-greyhounds"></span>
                                        <p className="leftSideBarNavTitle">Greyhounds</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-handball"></span>
                                        <p className="leftSideBarNavTitle">Handball</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-hockey"></span>
                                        <p className="leftSideBarNavTitle">Hockey</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-horse-racing"></span>
                                        <p className="leftSideBarNavTitle">Horse Racing</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-ice-hockey"></span>
                                        <p className="leftSideBarNavTitle">Ice Hockey</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-lacrosse"></span>
                                        <p className="leftSideBarNavTitle">Lacrosse</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-motor-racing"></span>
                                        <p className="leftSideBarNavTitle">Motor Racing</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-motorbikes"></span>
                                        <p className="leftSideBarNavTitle">Motorbikes</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-netball"></span>
                                        <p className="leftSideBarNavTitle">Netball</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-olympics"></span>
                                        <p className="leftSideBarNavTitle">Olympics</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-politics"></span>
                                        <p className="leftSideBarNavTitle">Politics</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-pool"></span>
                                        <p className="leftSideBarNavTitle">Pool</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-rugby-league"></span>
                                        <p className="leftSideBarNavTitle">Rugby League</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-rugby-union"></span>
                                        <p className="leftSideBarNavTitle">Rugby Union</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-snooker"></span>
                                        <p className="leftSideBarNavTitle">Snooker</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-table-tennis"></span>
                                        <p className="leftSideBarNavTitle">Table Tennis</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-tennis"></span>
                                        <p className="leftSideBarNavTitle">Tennis</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-tv-specials"></span>
                                        <p className="leftSideBarNavTitle">TV/Specials</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-ufc"></span>
                                        <p className="leftSideBarNavTitle">UFC</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-virtual-world"></span>
                                        <p className="leftSideBarNavTitle">Virtual World</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-volleyball"></span>
                                        <p className="leftSideBarNavTitle">Volleyball</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <span className="icon-water-polo"></span>
                                        <p className="leftSideBarNavTitle">Water Polo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/casino.svg"/>
                                <p className="leftSideBarNavTitle">1-on-1</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/casino.svg"/>
                                <p className="leftSideBarNavTitle">CopyBet</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/sport.svg"/>
                                <p className="leftSideBarNavTitle">Daily Fantasy Sports</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/eSportTournament.svg"/>
                                <p className="leftSideBarNavTitle">eSports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/stake.svg"/>
                        <p className="leftSideBarNavTitle">Stake</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/lottery.svg"/>
                                <p className="leftSideBarNavTitle">Lotto</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/casino.svg"/>
                                <p className="leftSideBarNavTitle">Casino </p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/liveCasino.svg"/>
                                <p className="leftSideBarNavTitle">Live Casino</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/slots.svg"/>
                                <p className="leftSideBarNavTitle">Slots</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/jackpot.svg"/>
                                <p className="leftSideBarNavTitle">Jackpots</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/kano.svg"/>
                                <p className="leftSideBarNavTitle">Kano</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/reelThrill.svg"/>
                                <p className="leftSideBarNavTitle">Reel Thrill</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/roulette.svg"/>
                                <p className="leftSideBarNavTitle">Roulette</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/blackjack.svg"/>
                                <p className="leftSideBarNavTitle">Blackjack</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/poker.svg"/>
                                <p className="leftSideBarNavTitle">Poker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/games.svg"/>
                        <p className="leftSideBarNavTitle">Games</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/games.svg"/>
                                <p className="leftSideBarNavTitle">PreDark</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/games.svg"/>
                                <p className="leftSideBarNavTitle">OneCity </p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/games.svg"/>
                                <p className="leftSideBarNavTitle">MoonRail</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/liveGameStreaming.svg"/>
                                <p className="leftSideBarNavTitle">Stream Live Games</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/plus.svg"/>
                        <p className="leftSideBarNavTitle">ePlus</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/news.svg"/>
                                <p className="leftSideBarNavTitle">eNews</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/forum.svg"/>
                                <p className="leftSideBarNavTitle">eForum</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/review.png"/>
                                <p className="leftSideBarNavTitle">eReviews</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/visual.png"/>
                                <p className="leftSideBarNavTitle">eVisuals</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/eMagazine.svg"/>
                                <p className="leftSideBarNavTitle">eMagazine </p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ever.reTV.svg"/>
                                <p className="leftSideBarNavTitle">eTV</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ever.reRadio.svg"/>
                                <p className="leftSideBarNavTitle">eRadio</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ever.rePodcasts.svg"/>
                                <p className="leftSideBarNavTitle">ePodcast</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ever.reLive.svg"/>
                                <p className="leftSideBarNavTitle">eLive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                        <p className="leftSideBarNavTitle">Cyptocurrency</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/exchange.svg"/>
                                <p className="leftSideBarNavTitle">Exchanges</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <a href="/classic" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/standard.svg"/>
                                        <p className="leftSideBarNavTitle">Classic</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <a href="/perpetual" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/perpetual.png"/>
                                        <p className="leftSideBarNavTitle">Perpetual</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ePro.svg"/>
                                        <p className="leftSideBarNavTitle">Pro</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ePro.svg"/>
                                        <p className="leftSideBarNavTitle">XPO</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/margin.svg"/>
                                        <p className="leftSideBarNavTitle">Margins</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <a href="/p2p" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/p2p.svg"/>
                                        <p className="leftSideBarNavTitle">P2P</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/derivatives.svg"/>
                                        <p className="leftSideBarNavTitle">Derivatives</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/advanced.svg"/>
                                        <p className="leftSideBarNavTitle">Advanced</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/pro.svg"/>
                                        <p className="leftSideBarNavTitle">Prime</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <a href='/dex' className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/lliquidity.svg"/>
                                <p className="leftSideBarNavTitle">EverDEX</p>
                            </a>
                        </div>
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/wallet.svg"/>
                                <p className="leftSideBarNavTitle">Wallet</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/pay.svg"/>
                                        <p className="leftSideBarNavTitle">Pay</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/send.svg"/>
                                        <p className="leftSideBarNavTitle">Send</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/receive.svg"/>
                                        <p className="leftSideBarNavTitle">Receive</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/convert.svg"/>
                                        <p className="leftSideBarNavTitle">Convert</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/eConvert.svg"/>
                                        <p className="leftSideBarNavTitle">eConvert</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/bridge.png"/>
                                        <p className="leftSideBarNavTitle">eBridge</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/debit&CreditCards.svg"/>
                                <p className="leftSideBarNavTitle">Crypto card</p>
                            </div>
                        </div>
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/logo.svg"/>
                                <p className="leftSideBarNavTitle">eCrap</p>
                            </div>
                        </div> */}
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu hasSubMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/exchange.svg"/>
                                <p className="leftSideBarNavTitle">Custody</p>
                                <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                            </div>
                            <div className="leftSideBarEachNav2ndSubMenu">
                                <div className="leftSideBarEachNav">
                                    <a href="/classic" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/standard.svg"/>
                                        <p className="leftSideBarNavTitle">Token Lock</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <a href="/perpetual" className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/perpetual.png"/>
                                        <p className="leftSideBarNavTitle">LP Lock</p>
                                    </a>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ePro.svg"/>
                                        <p className="leftSideBarNavTitle">Vesting</p>
                                    </div>
                                </div>
                                <div className="leftSideBarEachNav">
                                    <div className="eachNavMenu center-y">
                                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/ePro.svg"/>
                                        <p className="leftSideBarNavTitle">Escrow</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/predictions.svg"/>
                                <p className="leftSideBarNavTitle">Leading</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/loan.svg"/>
                                <p className="leftSideBarNavTitle">Loans</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/loan.svg"/>
                                <p className="leftSideBarNavTitle">Staking</p>
                            </div>
                        </div>
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/etfs.svg"/>
                                <p className="leftSideBarNavTitle">Crypto ETF</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/predictions.svg"/>
                                <p className="leftSideBarNavTitle">Prediction</p>
                            </div>
                        </div> */}
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/collectibles.svg"/>
                                <p className="leftSideBarNavTitle">NTF Marketplace</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                        <p className="leftSideBarNavTitle">Protocol</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        {/* <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">EVE (EVE)</p>
                            </div>
                        </div> */}
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">Ever {/*(EVA)*/}</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">eDollar {/*(eUSD)*/}</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                        <p className="leftSideBarNavTitle">NFTs</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">All NFTs</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">Create</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">Sell</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">NFTures</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/crypto.svg"/>
                                <p className="leftSideBarNavTitle">NFTory</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="leftSideBarEachNavSection">
                <div className="leftSideBarEachNav">
                    <div className="eachNavMenu hasSubMenu center-y">
                        <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/more.svg"/>
                        <p className="leftSideBarNavTitle">More</p>
                        <img alt="Img" className="leftSideBarNavExpandLogo" src="/images/expandLogo.svg"/>
                    </div>
                    <div className="leftSideBarEachNavSubMenu">
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/myProfile.svg"/>
                                <p className="leftSideBarNavTitle">My Profile</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/leaderboard.svg"/>
                                <p className="leftSideBarNavTitle">Leaderboard</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/promo.svg"/>
                                <p className="leftSideBarNavTitle">Promo</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/blog.svg"/>
                                <p className="leftSideBarNavTitle">Blog</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/careers.svg"/>
                                <p className="leftSideBarNavTitle">Careers</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/github.svg"/>
                                <p className="leftSideBarNavTitle">GitHub</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/voting.svg"/>
                                <p className="leftSideBarNavTitle">Voting</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/team.svg"/>
                                <p className="leftSideBarNavTitle">Team</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/events.svg"/>
                                <p className="leftSideBarNavTitle">Events</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/newsletter.svg"/>
                                <p className="leftSideBarNavTitle">Newsletter</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/featuredVideos.svg"/>
                                <p className="leftSideBarNavTitle">Featured Videos</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/stories.svg"/>
                                <p className="leftSideBarNavTitle">Featured Stories</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/terms.svg"/>
                                <p className="leftSideBarNavTitle">Terms</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/privacy.svg"/>
                                <p className="leftSideBarNavTitle">Privacy</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/api.svg"/>
                                <p className="leftSideBarNavTitle">API</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/affiliateProgram.svg"/>
                                <p className="leftSideBarNavTitle">Affiliate Program</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/responsibleGambling.svg"/>
                                <p className="leftSideBarNavTitle">Responsible Gambling</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/technicalIssues.svg"/>
                                <p className="leftSideBarNavTitle">Technical Issues</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/fairPayouts.svg"/>
                                <p className="leftSideBarNavTitle">Fair Payouts</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/complaintsProcedure.svg"/>
                                <p className="leftSideBarNavTitle">Complaints Procedure</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/security.svg"/>
                                <p className="leftSideBarNavTitle">Security</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/contact.svg"/>
                                <p className="leftSideBarNavTitle">Contact</p>
                            </div>
                        </div>
                        <div className="leftSideBarEachNav">
                            <div className="eachNavMenu center-y">
                                <img alt="Img" className="leftSideBarNavLogo" src="/images/navLogo/support.svg"/>
                                <p className="leftSideBarNavTitle">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
        <div className="leftSideBarFooter">
            <p className="version">v1.1</p>
            <div className="leftSideBarFooterTop">
                <div className="footerCurrencyContainer center-y">
                    <div className="currencyBalanceContainer center-y">
                        {/* <img alt="Img" className="currencyBalanceLogo day" src="/images/brandLogo/favicon_all_black.png"/>
                        <img alt="Img" className="currencyBalanceLogo dark" src="/images/brandLogo/favicon_white.png"/> */}
                        <p className="currencyBalance">$93,739.90</p>
                    </div>
                    <div className="currencyChangeContainer wallet center-y">
                        <button className="currencyChangeButton commonButton center" style={{maxWidth: "120px"}}>
                            {/* <img alt="Img" src="/images/ethereum.svg"/> */}
                            <span style={{marginLeft:"8px"}}>Wallet</span>
                            <img alt="Img" src="/images/arrow-down.svg"/>
                        </button>
                        <div className="allCurrencyContainerOuter">
                            <div className="allCurrencyContainer">
                                <button className="eachCurrency commonButton center-y">
                                    <span>Buy</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Sell</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Send</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Receive</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Convert</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Bridge</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>DApps</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>Stake</span>
                                </button>
                                <button className="eachCurrency commonButton center-y">
                                    <span>My NFTs</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leftSideBarFooterTopSettings d-flex">
                    <div className="leftSideBarFooterTopEach d-flex">
                        <div className="displayModeChangeContainer center">
                            <button className="displayModeChangeButton light center">
                                <img alt="Img" src="/images/navLogo/sun.png"/>
                                <span style={{margin: "0 8px",color: "var(--colorGray)"}}>/</span>
                                <img alt="Img" src="/images/navLogo/moon.svg"/>
                            </button>
                        </div>
                    </div>
                    <div className="leftSideBarFooterTopEach d-flex"  style={{marginRight: "16px"}}>
                        <div className="languageChangeContainer center">
                            <div id="google_translate_element"></div>
                            <button className="languageChangeButton center">
                                <img alt="Img" src="/images/navLogo/language.svg"/>
                                <p id="languageChangeButtonTitle" style={{marginLeft: "8px"}}>EN</p>
                            </button>
                        
                        </div>
                    </div>
                    <div className="currencyChangeContainer currency center-y">
                        <button className="currencyChangeButton commonButton center" style={{maxWidth: "120px"}}>
                            {/* <img alt="Img" src="/images/ethereum.svg"/> */}
                            <span style={{marginLeft:"8px"}}>USD</span>
                            <img alt="Img" src="/images/arrow-down.svg"/>
                        </button>
                        <div className="allCurrencyContainerOuter">
                            <div className="allCurrencyContainer">
                                {
                                    currencies.map(function(item, i){
                                        return <button className="eachCurrency commonButton center-y">
                                                    <span>{item}</span>
                                                </button>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="settingsContainer center">
                <img alt="Img" src="/images/navLogo/settings.svg"/>
            </button>
        </div>
    </div>
</div>
    )
}
