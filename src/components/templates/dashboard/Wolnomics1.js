import React from 'react'
// import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';


export default function Wolnomics1() {


    // const echartFunction = ()=> {
    // }
    // echartFunction();

        let dataObj = [
            {value: 2, name: 'Buyback', id:"chart1_data1", itemStyle:{color:"rgb(121,183,214)"}},
            {value: 2, name: 'Reward to Holders', id:"chart1_data3", itemStyle:{color:"rgb(196,110,188)"}},
            {value: 3, name: 'Marketing', id:"chart1_data4", itemStyle:{color:"rgb(154,111,77)"}},
        ]

        let dataObjHover = []

        for(let i=0;i<dataObj.length;i++){
            let obj = {value: dataObj[i].value, name: dataObj[i].name, id:dataObj[i].id, itemStyle:"white"}
            dataObjHover.push(obj)
        }

    const options = {
        tooltip: {
            trigger: 'item',
            formatter:function (params) {

                let hoverValue = ""
                for (let i=0;i<dataObjHover.length;i++){
                    if(params.name===dataObjHover[i].name){
                        hoverValue = dataObjHover[i].value+"%"
                        hoverValue = "<span style='color: "+dataObjHover[i].itemStyle+"'>"+hoverValue+"</span>"
                    }
                }
                hoverValue="<p>Value: "+hoverValue+"</p>"
                hoverValue="<p style='font-weight: bold'>"+params.name+"</p>"+hoverValue

                return hoverValue;
            }
        },

        series: [
            {
                name: 'Pie Chart',
                type: 'pie',
                radius: ['50%', '75%'],
                center: ['50%', '50%'],
                data: dataObj.sort(function (b, a) {
                    return a.value - b.value;
                }),
                avoidLabelOverlap:false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '8',
                        fontWeight: 'bold'
                    }
                },
            }
        ]
    };



    return (
        <div>
            
            <section className="commonSection eachSection center-x wolnomicsSection1" id="body_wolnomics1">
                        <div className="eachSectionMask center-x">
                            <div className="customContainer">
                                
                                <div className="sectionSummary">
                                      
                                    
                                    
                                    The breakdown of EVER token transaction fee is as follows: 
                                    <br />
                                    <br />
                                    <div className="wolnomicsChartContainer center-x">
                                        <div className="wolnomicsEachChartContainer center-x-with-flex-column">
                                            <p className="smallTitle" style={{marginBottom: "16px"}}>7% Transaction Fee Breakdown</p>
                                            <div className="pie-chart-container center-y">
                                                <div className="pie-chart-main-container">
                                                    <div id="wolnomics-pie-chart1">
                                                    <ReactECharts option={options} />
                                                    </div>
                                                </div>
                                                <div className="pie-chart-label-container">
                                                    <div className="pie-chart-label-left">
                                                        <div className="pie-chart-each-label center-y">
                                                            <div className="pie-chart-each-label-color" style={{backgroundColor: "rgb(121,183,214)"}}></div>
                                                            <p className="pie-chart-each-label-title">Buyback</p>
                                                            <p className="pie-chart-each-label-relative-value" id="chart1_data1"></p>
                                                        </div>
                                                        <div className="pie-chart-each-label center-y">
                                                            <div className="pie-chart-each-label-color" style={{backgroundColor: "rgb(196,110,188)"}}></div>
                                                            <p className="pie-chart-each-label-title">Reward to Holders</p>
                                                            <p className="pie-chart-each-label-relative-value" id="chart1_data3"></p>
                                                        </div>
                                                        <div className="pie-chart-each-label center-y">
                                                            <div className="pie-chart-each-label-color" style={{backgroundColor: "rgb(154,111,77)"}}></div>
                                                            <p className="pie-chart-each-label-title">Marketing</p>
                                                            <p className="pie-chart-each-label-relative-value" id="chart1_data4"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
              
                                    </div>
                                    <br />
                                    <br />
                                    <div className="normalTables w-100"> 
                                        <div className="table2in1 d-flex">
                                            <div className="tableWithTitle">
                                                <h3 className="sectionTitle">Token</h3>
                                                <div className="eachTableContainer">
                                                    <table className="customTable" width="100%" cellSpacing="0" cellPadding="0" border="0" style={{minWidth: "300px"}}>
                                                        <thead>
                                                            <tr>
                                                                <th width="50%" align="left" valign="bottom">Name</th>
                                                                <th width="50%" align="center" valign="bottom">EVER coin</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td align="left" valign="middle">Symbol</td>
                                                                <td align="center" valign="middle">$EVA</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">Token Sale price</td>
                                                                <td align="center" valign="middle">$0.55</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">Retail Sale price</td>
                                                                <td align="center" valign="middle">$0.80</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">Max. emission</td>
                                                                <td align="center" valign="middle">$EVA 100 billion </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tableWithTitle">
                                                <h3 className="sectionTitle">Private & Public Sales</h3>
                                                <div className="eachTableContainer">
                                                    <table className="customTable" width="100%" cellSpacing="0" cellPadding="0" border="0" style={{minWidth: "500px"}}>
                                                        <thead>
                                                            <tr>
                                                                <th width="25%" align="left" valign="bottom"></th>
                                                                <th width="25%" align="center" valign="bottom">Date</th>
                                                                <th width="25%" align="center" valign="bottom">Soft cap</th>
                                                                <th width="25%" align="center" valign="bottom">Hardcap</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td align="left" valign="middle">Private Sale</td>
                                                                <td align="center" valign="middle">Nov 19 - Nov 24</td>
                                                                <td align="left" valign="middle"></td>
                                                                <td align="center" valign="middle">$2,500,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">PreSale</td>
                                                                <td align="center" valign="middle">Nov 25 - Nov 30</td>
                                                                <td align="left" valign="middle">$150,000</td>
                                                                <td align="center" valign="middle">$300,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">Token Sale</td>
                                                                <td align="center" valign="middle">Dec 01 - Dec 07</td>
                                                                <td align="left" valign="middle">$450,000</td>
                                                                <td align="center" valign="middle">$900,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" valign="middle">Retail Sale</td>
                                                                <td align="center" valign="middle">Dec 08</td>
                                                                <td align="center" valign="middle"></td>
                                                                <td align="center" valign="middle"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tableWithTitle">
                                            <h3 className="sectionTitle">Bonuses</h3>
                                            <div className="eachTableContainer">
                                                <table className="customTable" width="100%" cellSpacing="0" cellPadding="0" border="0" style={{minWidth: "700px"}}>
                                                    <thead>
                                                        <tr>
                                                            <th width="14%" align="left" valign="bottom">Private Sale</th>
                                                            <th width="26%" align="center" valign="bottom">PreSale</th>
                                                            <th width="60%" align="center" valign="bottom">Token Sale</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" valign="middle" style={{padding: "0"}}>
                                                                <table style={{borderSpacing: "0", borderCollapse: "collapse", width:"100%"}}>
                                                                    <thead>
                                                                        <tr>
                                                                            <th width="100%" align="left" valign="middle">1st-6th Day</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="left" valign="middle">40%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td align="left" valign="middle" style={{padding: "0"}}>
                                                                <table style={{borderSpacing: "0",borderCollapse: "collapse", width:"100%"}}>
                                                                    <thead>
                                                                        <tr>
                                                                            <th width="50%" align="center" valign="middle">1st-3rd Day</th>
                                                                            <th width="50%" align="center" valign="middle">4th-6th Day</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" valign="middle">30%</td>
                                                                            <td align="center" valign="middle">20%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td align="left" valign="middle" style={{padding: "0"}}>
                                                                <table style={{borderSpacing: "0",borderCollapse: "collapse", width:"100%"}}>
                                                                    <thead>
                                                                        <tr>
                                                                            <th width="20%" align="center" valign="middle">1st Day</th>
                                                                            <th width="20%" align="center" valign="middle">2nd Day</th>
                                                                            <th width="20%" align="center" valign="middle">3rd-4th Day</th>
                                                                            <th width="20%" align="center" valign="middle">5th Day</th>
                                                                            <th width="20%" align="center" valign="middle">6th-7th Day</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" valign="middle">20%</td>
                                                                            <td align="center" valign="middle">15%</td>
                                                                            <td align="center" valign="middle">10%</td>
                                                                            <td align="center" valign="middle">5%</td>
                                                                            <td align="center" valign="middle">0%</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="tableWithTitle">
                                            <h3 className="sectionTitle">Token Distribution</h3>
                                            <div className="eachTableContainer">
                                            <table className="customTable"   style={{minWidth:"500px", width:"100%", cellSpacing:"0", cellPadding:"0",border:"0"}}>
                                                    <thead>
                                                        <tr>
                                                            <th width="33%" align="left" valign="bottom">Distribution of token</th>
                                                            <th width="33%" align="center" valign="bottom">Token ($EVA)</th>
                                                            <th width="33%" align="center" valign="bottom">Percent</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" valign="middle">Burned</td>
                                                            <td align="center" valign="middle">49,000,000,000</td>
                                                            <td align="center" valign="middle">49%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">PreSale</td>
                                                            <td align="center" valign="middle">21,002,379,300</td>
                                                            <td align="center" valign="middle">21%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">PancakeSwap Liquidity Pool</td>
                                                            <td align="center" valign="middle">14,410,899,510</td>
                                                            <td align="center" valign="middle">14.41%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">EverDEX Liquidity Pool</td>
                                                            <td align="center" valign="middle">9,450,007,076</td>
                                                            <td align="center" valign="middle">9.45%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Private Sale</td>
                                                            <td align="center" valign="middle">1,500,000,000</td>
                                                            <td align="center" valign="middle">1.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">DxSale PreSale Fees</td>
                                                            <td align="center" valign="middle">1,136,714,114</td>
                                                            <td align="center" valign="middle">1.14%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Token Sale</td>
                                                            <td align="center" valign="middle">1,000,000,000</td>
                                                            <td align="center" valign="middle">1%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Research & Development</td>
                                                            <td align="center" valign="middle">500,000,000</td>
                                                            <td align="center" valign="middle">0.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Airdrop & Bounty</td>
                                                            <td align="center" valign="middle">500,000,000</td>
                                                            <td align="center" valign="middle">0.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Team</td>
                                                            <td align="center" valign="middle">500,000,000</td>
                                                            <td align="center" valign="middle">0.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Strategic Reserves</td>
                                                            <td align="center" valign="middle">500,000,000</td>
                                                            <td align="center" valign="middle">0.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle">Charity</td>
                                                            <td align="center" valign="middle">500,000,000</td>
                                                            <td align="center" valign="middle">0.50%</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" valign="middle" style={{fontWeight: "500"}}>Total</td>
                                                            <td align="center" valign="middle" style={{fontWeight: "500"}}>1000 Trillion</td>
                                                            <td align="center" valign="middle" style={{fontWeight: "500"}}>100%</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                    <br />
                                    <br />
                                
                                </div>
                                <div className="commonSectionTitleAndSubTitleContainer d-flex" style={{marginBottom: "16px"}}>
                                    <h3 className="sectionTitle">EVER token Details</h3>
                                    <p className="sectionTitleSubTitle"></p>
                                </div>
                                <div className="wolnomicsSection1Body">
                                    <div className="wolnomicsSection1Left">
                                        <div className="wolnomicsSection1LeftEach">
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">TOKEN NAME</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">EVER coin</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">TOKEN SYMBOL</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">$EVA</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">TOKEN SUPPLY</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">100,000,000,000 $EVA</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">TOKEN BURNED (49%)</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">49,000,000,000 $EVA</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">REMAINING SUPPLY (51%)</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">51,000,000,000 $EVA</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">LP PER NETWROK</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">23,860,906,767.95 $EVA</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">LP TOKENS LOCKED</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">100%</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">UNLOCK LP TOKEN DATE</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle">JANUARY 1ST 2100, 00.00 AM GMT</p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">LP TOKEN UNLOCK DAYS</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle"><a href="https://dxsale.app/app/v3/dxlockview?id=1&add=0x3DF313C20395e33F3b010F987AEd69650d883ddF&type=lplock&chain=BSC" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)", textDecoration: "underline"}}>28,500 DAYS</a></p>
                                            </div>
                                            <div className="wolnomicsSection1LeftEachItem">
                                                <p className="wolnomicsSection1LeftEachItemTitle">LISTED TRADING EXCHANGES</p>
                                                <p className="wolnomicsSection1LeftEachItemSubtitle" style={{wordBreak: "break-all" }}>
                                                    <a href="under_construction.php" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>Ever</a>,&nbsp;
                                                    <a href="under_construction.php" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>EverDEX</a>,&nbsp;
                                                    <a href="https://pancakeswap.finance/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>PancakeSwap</a>,&nbsp;
                                                    <a href="https://app.uniswap.org/#/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>Uniswap</a>,&nbsp;
                                                    <a href="https://app.sushi.com/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>Sushiswap</a>,&nbsp;
                                                    <a href="https://traderjoexyz.com/#/trade" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>Trader Joe</a>,&nbsp;
                                                    <a href="https://app.pangolin.exchange/#/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)", textDecoration: "underline"}}>Pangolin</a>,&nbsp;
                                                    <a href="https://quickswap.exchange/#/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)", textDecoration: "underline"}}>QuickSwap</a>,&nbsp;
                                                    <a href="https://spookyswap.finance/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>SpookySwap</a>, and&nbsp;
                                                    <a href="https://app.honeyswap.org/#/swap" target="_blank"  rel="noopener noreferrer" style={{color: "var(--siteColor2)",textDecoration: "underline"}}>HoneySwap</a>
                                                </p>
                                            </div>
                                         
                                            
                                        </div>
                                    </div>
                                    <br />
                               
                                </div>
                            </div>
                        </div>
                    </section>
        </div>
    )
}
