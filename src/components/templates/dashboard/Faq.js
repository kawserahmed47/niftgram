import React from 'react'
import { Link } from 'react-router-dom';

export default function Faq() {
    return (
        <div>
            <section className="eachSection commonSection center-x-with-flex-column faqSection" id="body_faqs">
                        <div className="eachSectionMask center-x-with-flex-column">
                            <div className="customContainer">
                                <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                    <h1 className="sectionTitle" style={{width: "100%"}}>Frequently Asked Questions (FAQs)</h1>
                                </div>
                                <p style={{marginBottom: "56px"}}>We have gathered some of the frequently asked questions that most of you have been asking us and provided answers. If you have questions that have not been answered or you need more clarification in any area including our products, services, company, website, PreSale, etc, please do not hesitate to contact us.</p>
                            </div>
                     
                            <div className="customContainer">
                                <div className="faqBody d-flex" id="faqBody">
                                    <div className="faqCategoryContainer">
                                        <div className="eachCategory active" data-to="faqGeneral">
                                            <Link  to="#">General</Link>
                                        </div>
                                        <div className="eachCategory" data-to="faqAccount">
                                            <Link  to="#">Account</Link>
                                        </div>
                                        <div className="eachCategory hide" data-to="faqFinance">
                                            <Link  to="#">Finance</Link>
                                        </div>
                                        <div className="eachCategory" data-to="faqProducts">
                                            <Link  to="#">Products</Link>
                                        </div>
                                        <div className="eachCategory hide" data-to="faqSecurity">
                                            <Link  to="#">Security</Link>
                                        </div>
                                        <div className="eachCategory" data-to="faqPreSale">
                                            <Link  to="#">PreSale</Link>
                                        </div>
                                    </div>
                                    <div className="faqQAndAContainer">
                                        <div className="eachCategoryQuestions">
                                            <p className="eachCategoryTitle" id="faqGeneral">General</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is Ever?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER is a US multinational fintech, video games, online gambling and brokerage company based in New York, NY. EVER provides the platform for users to do open banking, online direct-access to trading in stocks, cryptos, commodities, etc, bet live sports, play video games, and staking. 
                                                            <br />
                                                            <br />
                                                            Our aim is to recreate traditional financial systems, such as banks and exchanges, with cryptocurrency using the blockchain technology.
                                                            <br />
                                                            <br />
                                                            EVER token is a new utility token cryptocurrency that offers a unique financial ecosystem is built on the Binance Smart Chain (BEP20). $EVA is the symbol for EVER coin.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Is EVER token a Defi token?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Yes. EVER token is developed on the Binance Smart Chain (BEP20). One of our core aim is to globally recreate traditional financial systems, such as banks and exchanges, with cryptocurrency using the blockchain technology.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is a cryptocurrency?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            This digital currency is secured by blockchain technology instead of traditional (fiat) currencies secured by a government organization.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is Fintech?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Fintech is the combination of financial technology and refers to digital financial services and solutions for a wide array of business services.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Is EVER global?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Yes. We have three global HQs. Our North America HQ is in Midtown, Manhattan, NY, our EMEA (Europe Middle East and Africa) HQ is in Covent Garden, London, and our Asia-Pacific HQ is in Singapore, Singapore. We cater for a global audience and all our services can be used by anyone anywhere in the world.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">How do I buy EVER coin?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            You can buy $EVA in any of our four sale events: Private Sale, PreSale, Token Sale or Retail Sale. You can also buy our scratchcards (EVER Crabs) from your local grocery stores from December. In January, you can buy EVER token on Ever. Further instructions will be provided after our Retall sale listing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions">
                                            <p className="eachCategoryTitle" id="faqAccount">Account</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What if I sent my $EVA to the wrong address? Can you get it back for me? </p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Unfortunately, no. EVER is a decentralized token which means no one has control over the transactions other than the blockchain technology.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Can you reset my two-factor authentication?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            If your credentials relate to one of our platforms (gaming, media, financial services, etc.) then yes. Otherwise, you will need to contact the organization that you use for other services.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What if I lose my wallet/private key?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Check for your backup information, thumb drives, or old systems for copies of your key. If you cannot find them there, then we apologize, but there is no way for us to help. We strongly encourage you to regularly backup your important keys.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Where can I hold $EVA?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            You can hold EVER token in EVER Wallet or other wallets. 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions hide">
                                            <p className="eachCategoryTitle" id="faqFinance">Finance</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What cryptos and securities is EVER tradable with?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Users will be able to trade over 5000 cryptos, over 5000 stocks, over 100 commodities, and over 100 forex currency pairings with ZERO trading fees.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Is EVER safe?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Yes. We are certified by many security commissions and government agencies around the world. Because of the range of products and services that we provide, we have to secure approval and certification from government and federal agencies so that we can better protect you. We are a going concern and we intent to be in business for the long haul so we follow the law to the latter.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is the EVER a decentralized exchange?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            We have a number of exchanges. We have five centralized and decentralized exchanges for cryptos. Traders can trade on our standard exchange, pro exchange, derivative (futures and options) exchange, peer to peer exchange, and Defi exchange. We have a centralized exchanges for each of the following: stocks, commodities, forex, and ETFs.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">How many trades can I make?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            All EVER traders are able to make unlimited trades, purchases, sales, and exchanges of stocks, cryptocurrencies, and commodities without worrying about commission fees – a first in the industry.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What kind of fees can I expect?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            In lieu of commissions, EVER will charge users a flat fee when they withdraw funds from their ecosystem. There are no fees to deposit, sell, buy, convert, swap, and transfer securities and cryptos within the EVER platform.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions hide">
                                            <p className="eachCategoryTitle" id="faqEcosystem">Ecosystem</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What kind of charity will you be donating to?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            We have a list of approved and reputable charities to which we will be sending contributions on our site, including AHA, World Animal Protection, Cancer Research, Mental Health, and Lupus Research.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">How do I participate in the games and casino?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            The only usable token in our ecosystem is EVER coin. Therefore, you will have to visit the exchange first to convert your fiat currency or crypto into EVER coin. You can as well buy any of our scratchcards from your local grocery store and top-up on your account on Ever. Using our scratchcards allow you to avoid gas fees and other inherent cost associated in token converts, swap, etc. 
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions">
                                            <p className="eachCategoryTitle" id="faqProducts">Products</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What are the products that EVER offers?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Our products and services are divided into six: 
                                                            <br />
                                                            <br />
                                                            Online Banking. This involves +18% annual interest-bearing current accounts, debit and credit Visa Cards/MasterCard, Crypto cards, Crypto Insurance, Bankwire, Money Transfer, and EVER HirePlus (a buy now pay later product)
                                                            <br />
                                                            <br />
                                                            Online Trading. This involves direct-access to trading in cryptos, stocks, commodities, bonds, ETFs, forex, and indices. It also involves binary options trading, copytrading, and Ever's eCredit ETF.
                                                            <br />
                                                            <br />
                                                            Sports Bookmaking. This involves betting on over 40 live sports around the world. It also involves eSports, 1-on-1 (peer-to-peer) betting, CopyBet, and daily fantasy sports.
                                                            <br />
                                                            <br />
                                                            Online Video Games. This involves EVER three multiplayer online games: PreDark, OneCity, and MoonRail. It also involves streaming of live games aside our three games.
                                                            <br />
                                                            <br />
                                                            Online Staking. This involves casinos, live casinos. Poker, slots, lottery, jackpots, Kano, etc.
                                                            <br />
                                                            <br />
                                                            eTrends. This involves, financial and business live news, tv, radio, podcast, and Live business terminal for trading professionals.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER eCrib?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Ever's eCrib is our interest-bearing vault for customers who hold our current accounts. We don’t call it current account but eCrib because it’s the only current account anywhere in the world that you can earn at least +18% annually on your deposit. Minimum deposit is $5 or 5 eUSD. Customers can choose any of our three personal current account plans. We also have Business current account for businesses. Customers can get free Debit and Crypto cards.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER Card?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER issue free debit and crypto cards for our current account customers. You can freely request a debit/crypto Visa card or MasterCard for your current account. Customers can also apply for Credit cards.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER Crap?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER Crap is our scratchcard. Customers can buy any of our scratchcards from their local grocery store and top-up on their EVER account. It’s instant. The cards start from $5, £5, €5, or equivalent to your local currency. The maximum amount on a scratchcard is $1000, £1000, €1000 or equivalent to your local currency.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is Ever's eCredit EFTs?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER eCredit ETF is a crypto ETF. It enables investors to hedge against price fluctuations and possible rugpull of any of the top 100 cryptos per market cap.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER CopyBet?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER the first social betting platform that allows users to share and copy best bets from other users automatically. EVER allows you to choose successful tipsters to copy their winning strategies.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER CopyTrade?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER CopyTrade enables traders to automatically copy positions opened and managed by another selected individuals.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is HirePlus?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            HirePlus is hire purchasing. Customers make a deposit for the item that they want to buy and will spread the rest over 3 to 36 months. EVER HirePlus is backed by our EVER Banking so customers can use their savings and cryptos held in EVER token to get hire purchase on any item online. Customers must pay 5 to 30% of the cost of the item and EVER will pay the remaining amount to the merchant. The rest of the money will be paid with interest over 3 to 36 months.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is Spread?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Spread is a buy now pay later product developed by Ever. Here, EVER customers do not pay any deposit to the merchant. The money is spread over 3 to 6 monthly instalments. 
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is EVER Insurance?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER allows users to insure crypto held in EVER Wallet and other online wallets against theft or other malicious hacks. Ours is a new type of liability insurance policy with a dynamic limit that increases or decreases in line with the price changes of crypto assets. Our policy will always repay you (the insured) for the underlying value of your managed asset. That remains true even if the value fluctuates over the policy period.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is eTrends?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            eTrends is our digital news platform. Subscribers to read the latest financial and business news, watch tv, and listen to radio and podcast. We also provide a live terminal for traders call eLive.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions hide">
                                            <p className="eachCategoryTitle" id="faqSecurity">Security</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">If I buy EVER coin, where will it be stored?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Your investment is nEVER stored on our server. Your cryptocurrencies are deposited immediately into your chosen wallet. You can choose to store your cryptos in EVER Wallet or your chosen wallet such as TrustWallet, Edgewallet, Winiwallet, etc. This is the safest and most secure way to store your cryptocurrencies.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is Cryptocurrency Wallet?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            A cryptocurrency wallet is a software program that stores private and public keys and interacts with various blockchain to enable users to send and receive digital currency and monitor their balance. If you want to buy any cryptocurrency you will need to have a digital wallet.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Are Wallets secure?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            It depends on the technology and security protocol of the wallet. EVER Wallet is one of the safest in the market. EVER Wallet comes 5 versions: online, mobile, desktop, paper, and hardware. EVER online, hardware and paper wallets will be available from December. EVER mobile and desktop Wallets will be available in February 2022.
                                                            <br />
                                                            <br />
                                                            Moreover, wallets are secure to varying degrees. The level of security depends on the type of wallet you use (desktop, mobile, online, paper, hardware) and the service provider. A web server is an intrinsically riskier environment to keep your currency compared to offline. Online wallets can expose users to possible vulnerabilities in the wallet platform which can be exploited by hackers to steal your funds. Offline wallets, on the other hand, cannot be hacked because they simply aren’t connected to an online network and don’t rely on a third party for security.
                                                            <br />
                                                            <br />
                                                            Although online wallets have proven the most vulnerable and prone to hacking attacks, diligent security precautions need to be implemented and followed when using any wallet. Remember that no matter which wallet you use, losing your private keys will lead you to lose your money. Similarly, if your wallet gets hacked, or you send money to a scammer, there is no way to reclaim lost currency or reverse the transaction. You must take precautions and be very careful!
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">How can I keep my wallet safe?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            The security of your cryptocurrencies and digital tokens depends on your computer, browser or mobile device not being compromised. You are your own bank. No matter how you decide to store your cryptocurrency or tokens, we strongly recommend backing up your private keys.
                                                            <br />
                                                            <br />
                                                            The most secure solution is to copy your private keys on a simple piece of paper and lock these in a physical safety in a discrete location.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachCategoryQuestions">
                                            <p className="eachCategoryTitle" id="faqPreSale">PreSale</p>
                                            <div className="bodyUnderEachFaqCategory">
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is PreSale?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            PreSales are used by projects as an opportunity to reward early adopters or backers by offering high discounted price on tokens ahead of public token sales.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Can you explain the difference between PreSale and public token sales? What is an ICO?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            PreSales are typically there for the ICO projects to raise the necessary funds to gear up for the launch of the public ICO and/or to get some more of the product/service finished before the public launch of the ICO. Public token sales (TGE’s) during an Initial Coin Offering are open to everyone in the community and offer tokens at much lower discounts for contributing than at PreSales.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is ICO?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            An Initial Coin Offering, also commonly referred to as an ICO, is a fundraising mechanism in which new projects sell their underlying crypto tokens in exchange for bitcoin and ether. It’s somewhat similar to an Initial Public Offering (IPO) in which investors purchase shares of a company.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Who can participate in a PreSale?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Anyone can participate in a token PreSale provided regulations in your country of residence doesn’t prevent your participation. 
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">When is the EVER token PreSale?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER token PreSale date will be communicated to the community and to all eArmy members on all our social platforms and also on Ever.re after the Private sale.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">What is the amount allocated for the PreSale?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            We have allocated 1,0,000,000 $EVA for the PreSale. The PreSale Softcap is $450,000. The PreSale Hardcap is $900,000. 
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">When will you release your Whitepaper?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            EVER Whitepaper version 1 was released on Friday September 24th. It has the 24 months Roadmap.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="eachQuestionAndAnswer">
                                                    <div className="eachQuestionContainer d-flex">
                                                        <p className="eachQuestion">Do you have any bounty program?</p>
                                                        <img alt="Img" className="eachQuestionExpandLogo" src="images/arrow-down.svg"/>
                                                    </div>
                                                    <div className="eachAnswerContainer">
                                                        <p className="eachAnswer">
                                                            Yes. Our bounty program will run from Janaury through February 2022.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
        </div>
    )
}
