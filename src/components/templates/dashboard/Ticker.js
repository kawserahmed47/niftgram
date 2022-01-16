import React from 'react'

// import '../../../assets/css/dashboard/ticker.module.css'

export default function Ticker() {

    function animationPlayPause(e){
        let el1 = document.querySelector(".navi-data-strip__tickers-list-first")
        let el2 = document.querySelector(".navi-data-strip__tickers-list-second")

        if(e.target.classList.contains("is-playing")){
            e.target.classList.remove("is-playing")
            e.target.classList.add("is-paused")

            el1.style.animationPlayState = 'paused';
            el2.style.animationPlayState = 'paused';
        }else{
            e.target.classList.add("is-playing")
            e.target.classList.remove("is-paused")

            el1.style.animationPlayState = 'running';
            el2.style.animationPlayState = 'running';
        }
    }

    return (
        <div>
            <div className="navi-data-strip">
                <button className="navi-data-strip__play-pause-button is-playing" value="Play/Pause Toggle" aria-label="Play/Pause Toggle" aria-describedby="play-pause-button-description" onClick={(e)=>{animationPlayPause(e)}}></button>
                <span id="play-pause-button-description" style={{display:"none"}}>Press this button to toggle pause/play states.</span>
                <div className="navi-data-strip__ticker-viewport">
                    <div className="navi-data-strip__ticker-viewport-inner">
                        <ul className="navi-data-strip__tickers-list-first animate-tickers-left" style={{left: "-1867.6090087890625px"}}><li className="navi-data-strip__ticker">
                            <a href="/quote/ES1:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">S&amp;P 500 Futures</div>
                                <div className="navi-data-strip__ticker-market-price">4772.25</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--neutral"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--neutral">+0</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--neutral">+0%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DM1:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Dow Jones Futures</div>
                                <div className="navi-data-strip__ticker-market-price">36277</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-14</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.04%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SX5E:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Euro Stoxx 50 Pr</div>
                                <div className="navi-data-strip__ticker-market-price">4306.07</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+21.240</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.50%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/UKX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">FTSE 100</div>
                                <div className="navi-data-strip__ticker-market-price">7403.01</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-17.680</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.24%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DAX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">DAX INDEX</div>
                                <div className="navi-data-strip__ticker-market-price">15884.86</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+32.610</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.21%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/NKY:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">NIKKEI 225</div>
                                <div className="navi-data-strip__ticker-market-price">28791.71</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-115.170</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.40%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SHCOMP:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">SHANGHAI SE COMPOSITE</div>
                                <div className="navi-data-strip__ticker-market-price">3619.19</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+22.189</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.62%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SPX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">S&amp;P 500</div>
                                <div className="navi-data-strip__ticker-market-price">4778.73</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-14.330</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.30%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/RTY:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">RUSSELL 2000 INDEX</div>
                                <div className="navi-data-strip__ticker-market-price">2248.79</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.45</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.02%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DXY:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">DOLLAR INDEX SPOT</div>
                                <div className="navi-data-strip__ticker-market-price">95.97</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.039</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.04%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/USDJPY:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">USD-JPY X-RATE</div>
                                <div className="navi-data-strip__ticker-market-price">115.04</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.040</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.03%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/EURUSD:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">EUR-USD</div>
                                <div className="navi-data-strip__ticker-market-price">1.13</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.000</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.01%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/XAU:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Gold Spot   $/Oz</div>
                                <div className="navi-data-strip__ticker-market-price">1816.27</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+1.60</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.09%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/LEGATRUU:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Bloomberg Global Aggregate Bond Index</div>
                                <div className="navi-data-strip__ticker-market-price">531.15</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.714</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.13%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/CL1:COM" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">WTI Future</div>
                                <div className="navi-data-strip__ticker-market-price">76.36</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.630</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.82%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/CO1:COM" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">BRENT Future</div>
                                <div className="navi-data-strip__ticker-market-price">79.32</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.090</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.11%</div>
                            </a>
                        </li></ul>
                        <ul className="navi-data-strip__tickers-list-second animate-tickers-left" style={{left: "-1867.6090087890625px"}}><li className="navi-data-strip__ticker">
                            <a href="/quote/ES1:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">S&amp;P 500 Futures</div>
                                <div className="navi-data-strip__ticker-market-price">4772.25</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--neutral"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--neutral">+0</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--neutral">+0%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DM1:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Dow Jones Futures</div>
                                <div className="navi-data-strip__ticker-market-price">36277</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-14</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.04%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SX5E:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Euro Stoxx 50 Pr</div>
                                <div className="navi-data-strip__ticker-market-price">4306.07</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+21.240</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.50%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/UKX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">FTSE 100</div>
                                <div className="navi-data-strip__ticker-market-price">7403.01</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-17.680</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.24%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DAX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">DAX INDEX</div>
                                <div className="navi-data-strip__ticker-market-price">15884.86</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+32.610</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.21%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/NKY:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">NIKKEI 225</div>
                                <div className="navi-data-strip__ticker-market-price">28791.71</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-115.170</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.40%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SHCOMP:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">SHANGHAI SE COMPOSITE</div>
                                <div className="navi-data-strip__ticker-market-price">3619.19</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+22.189</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.62%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/SPX:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">S&amp;P 500</div>
                                <div className="navi-data-strip__ticker-market-price">4778.73</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-14.330</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.30%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/RTY:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">RUSSELL 2000 INDEX</div>
                                <div className="navi-data-strip__ticker-market-price">2248.79</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.45</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.02%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/DXY:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">DOLLAR INDEX SPOT</div>
                                <div className="navi-data-strip__ticker-market-price">95.97</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.039</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.04%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/USDJPY:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">USD-JPY X-RATE</div>
                                <div className="navi-data-strip__ticker-market-price">115.04</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.040</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.03%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/EURUSD:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">EUR-USD</div>
                                <div className="navi-data-strip__ticker-market-price">1.13</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.000</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.01%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/XAU:CUR" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Gold Spot   $/Oz</div>
                                <div className="navi-data-strip__ticker-market-price">1816.27</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+1.60</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.09%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/LEGATRUU:IND" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">Bloomberg Global Aggregate Bond Index</div>
                                <div className="navi-data-strip__ticker-market-price">531.15</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.714</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.13%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/CL1:COM" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">WTI Future</div>
                                <div className="navi-data-strip__ticker-market-price">76.36</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--negative"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.630</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--negative">-0.82%</div>
                            </a>
                        </li><li className="navi-data-strip__ticker">
                            <a href="/quote/CO1:COM" className="navi-data-strip__ticker-link">
                                <div className="navi-data-strip__ticker-label">BRENT Future</div>
                                <div className="navi-data-strip__ticker-market-price">79.32</div>
                                <div className="navi-data-strip__ticker-direction navi-data-strip__ticker-direction--positive"></div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.090</div>
                                <div className="navi-data-strip__ticker-value navi-data-strip__ticker-value--positive">+0.11%</div>
                            </a>
                        </li></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}