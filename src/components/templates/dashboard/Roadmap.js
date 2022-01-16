import React from 'react'
import { Link } from 'react-router-dom';

export default function Roadmap() {
    return (
        <div>
               <section className="eachSection commonSection center-x roadMapSection" id="body_roadmap">
                        <div className="eachSectionMask center-x">
                            <div className="customContainer">
                                <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "24px"}}>
                                    <h1 className="sectionTitle">ROADMAP</h1>
                                </div>
                                <p style={{marginBottom: "24px"}}>This is our plans over the next 15 months. If you want to read our 24-Month Roadmap, please refer to our Whitepaper.</p>

                                <p className="sectionSummary">
                                    The team behind the EVER invites all users to view the new exploratory and launch roadmap of our unique ecosystem and various platforms. Each quarter explains what services and products will be coming online and the different regulatory milestones and financial structures we will be including. This is the perfect time to join our private sale.
                                    
                             
                                </p>
                                <div className="roadMapSmallDescContainer center-x">
                                    <p className="roadMapSmallDesc"></p>
                                </div>
                                <div className="roadMapSectionBody">
                                    <Link className="roadMapImageContainer" to="#">
                                        <img alt="Img" className="roadMapImage" src="images/roadMapImage.svg"/>
                                        <div className="zoomMask center">
                                            <img alt="Img" className="zoomMaskLogo" src="images/zoom-in.svg"/>
                                        </div>
                                    </Link>
                                    <div className="modelImage center-y hide">
                                        <div className="zoomInOutButtonContainer center">
                                            <button className="zoomInOutButton disabled center" id="zoomReset">
                                                <img alt="Img" src="images/reset.svg"/>
                                            </button>
                                            <button className="zoomInOutButton disabled center" id="zoomOut">
                                                <img alt="Img" src="images/zoom-out.svg"/>
                                            </button>
                                            <button className="zoomInOutButton center" id="zoomIn">
                                                <img alt="Img" src="images/zoom-in.svg"/>
                                            </button>
                                            <button className="zoomInOutButton modelCloseButton center" id="zoomIn">
                                                <img alt="Img" src="images/close.svg"/>
                                            </button>
                                        </div>
                                        <div className="modalContentContainer">
                                            <img alt="Img" className="modalContent" id="img01"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
    )
}
