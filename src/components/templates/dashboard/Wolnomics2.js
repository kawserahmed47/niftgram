import React from 'react'

export default function Wolnomics2() {
    return (
        <div>
                <section className="eachSection commonSection wolnomicsSection2" id="body_wolnomics2">
                        <div className="eachSectionMask center-x-with-flex-column" style={{paddingBottom: "0"}}>
                            <div className="customContainer center-x-with-flex-column">
                                <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                    <h1 className="sectionTitle">TOKENOMICS</h1>
                                    <p className="sectionTitleSubTitle"></p>
                              
                                </div>
                            </div>
                            <div className="wolnomicVideoContainer" style={{width: "calc(100% + 48px)"}}>
                                <video autoPlay muted loop className="wolnomicVideo" id="wolnomicVideo">
                                    <source src="images/wolnomics.mp4" type="video/mp4"/>
                                </video>
                            
                            </div>
                            <div className="customContainer center-x-with-flex-column">
                                <p className="sectionSummary" style={{marginBottom: "0", marginTop: "16px"}}>
                                    EVER ($EVA) token is developed with a total supply of $EVA 6 million. At creation, 1.7% (or $EVA 100,000) of the total supply is burned and the remaining supply of 98.3% (or $EVA 5,900,0000).
                                </p>
                           
                            </div>

                        </div>
                    </section>
        </div>
    )
}
