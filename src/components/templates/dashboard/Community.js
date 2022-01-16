import React from 'react'

export default function Community() {
    return (
        <div>
                     <section className="eachSection center-x communitySection" id="body_community">
                        <div className="customContainer center-x-with-flex-column">
                            <div className="commonSectionTitleAndSubTitleContainer d-flex">
                                <h1 className="sectionTitle">COMMUNITY</h1>
                                <p className="sectionTitleSubTitle"></p>
                            </div>
                            <div className="communityBody d-flex">
                                <div className="communitySummary center-x-with-flex-column" style={{maxWidth: "800px"}}>
                                    <p style={{textAlign:"center",lineHeight: "24px"}}>If you would like to donate the marketing, research, and development, please send BNB (BEP20) or $EVA here. Thank you for your supporting Ever!</p>
                                    <div className="communityCopyContainer center-y">
                                        <p className="communityCopyCode">0x24A47E2beC7e8bB8Dbe900C806B380934eAd6B0a <span></span></p>
                                        <button className="communityCopyButton copyToClipBoard">Copy to Clipboard</button>
                                    </div>
                                    <div className="divider"></div>
                                    <p style={{textAlign:"center", lineHeight: "24px"}}>Our community grows stronger every day. Please follow our social platform to get the most up to date, accurate EVER information. Using our social accounts on Telegram, you can join our various groups alongside the other members of the eArmy.</p>
                                </div>
                                <div className="communityMascot center-with-flex-column">
                                    <img alt="Im" className="communityMascotImage" src="images/mascotImage.png"/>
                                    <p>Woldes, Our mascot</p>
                                </div>
                            </div>
                         
                            <div className="communityWolpaper d-flex" id="communityWolpaper">
                                <div className="wolpaperLeft d-flex">
                                    <h1 className="sectionTitle">Whitepaper</h1>
                                    
                                </div>
                                <div>
                                    <p>This is the project description of the World's first single integrated banking, trading, and gaming platform... the future of finance and gaming.</p>
                                    
                                    
                                </div>
                                <div className="wolpaperRight center-x">
                                    <a className="whitepaperPdfDownload center-y" href="pdf/Whitepaper.pdf" download="Whitepaper.pdf">
                                        <img alt="Im" className="pdfLogo" src="images/pdfLogo.svg"/>
                                        <p>Download Whitepaper (ENG)</p>
                                    </a>
                             
                             
                                </div>
                            </div>
                            <div className="auditAndKYC" id="auditAndKYC">
                                <div className="auditAndKYCBody">
                                    <div className="auditAndKYCEachItem">
                                        <p className="auditAndKYCSectionTitle sectionTitle">Audit Report</p>
                                        <p className="auditAndKYCEachItemDesc">At Ever, we pride ourselves on transparency and customer satisfaction. To this end, we have ensured from the start of every quarter, our entire systems, codes, accounts, and operations are thoroughly audited. This is to ensure you, our client, is in the loop of all that is going on at Ever. It also ensure we stay in line with our local, state-wide, federal, and global compliance requirements.</p>
                                        <br />
                                        <p> Our first audit was conducted by India tech company, Enebula. Our second audit, which is currently underway, is conducted by CERTIK. The third and subsequent audits will be conducted by PricewaterhouseCoopers (PwC) and will examine all areas of accounting and tax records, a full and complete investigation of the company's financial and economic activities. Specifically, it will examine Review of all Systems & Codes, Review of the Internal Controls, Arithmetical Accuracy, Accounting Principles, Verification of Assets, Verification of Liabilities, and Vouching. .</p>
                                        <div className="auditReportButtonsContainer center-x">
                                            <a className="whitepaperPdfDownload center-y" href="pdf/audit.pdf" download="Audit.pdf">
                                                <img alt="Im" className="pdfLogo" src="images/pdfLogo.svg"/>
                                                <p>Download Audit Report</p>
                                            </a>
                                        
                                        </div>
                                    </div>
                              
                                </div>
                            </div>
                            <br />
                            <div className="communityCarity">

                                <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                    <p className="communityCarityTitle sectionTitle">Charity</p>
                                    <p className="sectionTitleSubTitle"></p>
                                    <div className="scrollButtonContainer d-flex">
                                        <button className="eachScrollButton scrollCharity left center">
                                            <img alt="Im" src="images/left-arrow.svg"/>
                                        </button>
                                        <button className="eachScrollButton scrollCharity right center">
                                            <img alt="Im" src="images/right-arrow.svg"/>
                                        </button>
                                    </div>
                                </div>
                                <p style={{marginBottom: "56px"}}>Each charity is carefully selected to ensure it is reputable and attractive to our broad community of users and their interests.</p>

                                <div className="communityCarityBody d-flex">
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                            <img alt="Im" className="eachCarityImage" src="images/charity/eGrant.png"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                                Grants given to women and children focused causes and foundations. The grant is extended to support needy but brilliant college and graduate students, and will also provide relief funds to victims of natural disasters and a widespread outbreak of an infectious diseases.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                            <img alt="Im" className="eachCarityImage" src="images/charity/worldAnimalProtectionLogo.png"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                                World Animal Protection is a global animal welfare organization with 50 years of experience moving the world to protect animals. Our work is focused on four priority animal welfare areas: Animals in the Wild, Animals in Farming, Animals in Disasters, and Animals in Communities. We seek to achieve the World Animal Protection vision - a world where animal welfare matters and animal cruelty has ended.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                            <img alt="Im" className="eachCarityImage invertOnDark" src="images/charity/americanHearthFoundation.svg"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                            The American Heart Association is committed to fighting heart disease and stroke and raising awareness of these diseases. As part of our mission, we focus on specific causes designed to help people achieve a heart-healthy lifestyle.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                             <img alt="Im" className="eachCarityImage" src="images/charity/cancerResearchUK.png"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                                Cancer Research UK's mission is to see the day when all cancers are cured. Investing an average of $500 million per year, we're the world's largest independent funder of cancer research. They are seen as the country's most innovative and trustworthy charity, according to a survey by the consultancy Incite.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                            <img alt="Im" className="eachCarityImage" src="images/charity/mentalHealth.jpg"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                                Offering funds and support for many mental health organizations around the globe. The importance of promoting good mental health has been heightened in recent years as we are faced with increased stressors in daily life.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="eachCarity">
                                        <div className="charityImageContainer center">
                                            <img alt="Im" className="eachCarityImage" src="images/charity/lupusResearch.png"/>
                                        </div>
                                        <div className="eachCarityDesc">
                                            <p>
                                                The Lupus Research Alliance is an American voluntary health organization based in New York City whose mission is to find better treatments and ultimately prevent and cure systemic lupus erythematosus, a debilitating autoimmune disease, through supporting medical research.
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
    )
}
