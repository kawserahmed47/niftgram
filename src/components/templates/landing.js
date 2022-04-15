import React, { useState, useEffect } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function Landing() {
  const [sliderVal, setSliderVal] = useState(0);
  useEffect(() => {
    changeArrowWithLink();
    getAllTeamMembers();
  });

  var startX,
    startY,
    dist,
    threshold = 150, //required min distance traveled to be considered swipe
    allowedTime = 1000, // maximum time allowed to travel that distance
    elapsedTime,
    startTime;

  function handleswipe(isrightswipe, isleftswipe) {
    if (isrightswipe) {
      let val = sliderVal;
      val -= 10;

      sliderInput(val);
    } else if (isleftswipe) {
      let val = sliderVal;
      val += 10;

      sliderInput(val);
    } else {
      console.log("didn't worked");
    }
  }

  function touchStart(e) {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime(); // record time when finger first makes contact with surface
    // e.preventDefault()
  }

  function touchMove(e) {
    // e.preventDefault() // prevent scrolling when inside DIV
  }

  function touchEnd(e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime; // get time elapsed
    // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
    var swiperightBol =
      elapsedTime <= allowedTime &&
      dist >= threshold &&
      Math.abs(touchobj.pageY - startY) <= 100;
    var swipeleftBol =
      elapsedTime <= allowedTime &&
      dist * -1 >= threshold &&
      Math.abs(touchobj.pageY - startY) <= 100;

    handleswipe(swiperightBol, swipeleftBol);
    // e.preventDefault()
  }

  function sliderInput(val) {
    val = parseInt(val);
    let max = parseInt(document.getElementById("rangeSlider").value);
    let min = 0;

    if (val < min) {
      val = min;
    }
    if (val > max) {
      val = max;
    }

    setSliderVal(val);

    let teamContainer = document.querySelector(".team__list");
    let teamBlock = document.querySelectorAll(".team__list__block")[0];

    let width = teamBlock.offsetWidth;

    teamContainer.scrollLeft = width * (val / 10);
  }

  // useEffect(() => {
  //     console.log('Do something after counter has changed', sliderVal);
  // }, [sliderVal]);

  function fitSlider(val) {
    val = parseInt(val);
    if (val % 10 !== 0) {
      if (val % 10 <= 5) {
        val = val - (val % 10);
        // setSliderVal(val)
      } else {
        val = val + (val % 10);
        // setSliderVal(val)
      }
      // sliderInput(val)
    }
  }

  let allTeamMembers = [];
  let perBlock;
  let totalBlock;
  function getAllTeamMembers() {
    let teamMember = document.querySelectorAll(".team__member");

    teamMember.forEach((element) => {
      allTeamMembers.push(element);
    });
    makeTeamBlock();
  }

  window.onresize = () => {
    makeTeamBlock();
  };
  function makeTeamBlock() {
    let teamContainer = document.querySelector(".team__list");
    teamContainer.innerHTML = "";
    if (window.screen.width > 500) {
      perBlock = 8;
    } else {
      perBlock = 4;
    }

    totalBlock = Math.ceil(allTeamMembers.length / perBlock);
    let blockNeed = totalBlock;
    for (let i = 0; i < blockNeed; i++) {
      let block = document.createElement("div");
      block.classList.add("team__list__block");
      for (
        let j = 0;
        j < perBlock && i * perBlock + j < allTeamMembers.length;
        j++
      ) {
        block.appendChild(allTeamMembers[i * perBlock + j]);
      }
      teamContainer.appendChild(block);
    }

    // change slider step
    let slider = document.getElementById("rangeSlider");
    slider.max = (totalBlock - 1) * 10;
    // slider.step = slider.max/totalBlock
  }

  function changeArrowWithLink() {
    let element = document.getElementById("typewriter");

    let all = [
      "Open a free bank account in minutes",
      "Deposit or Invest as little as $5 and start earning +18% APR, paid out daily",
      "Trade 1000s of cryptos and securities at one place",
      "Deposit, buy, and sell cryptos and securities with over 160 supported fiat currencies",
      "Free demo trading account with $10,000 to perfect your trading skills",
      "Make your money go further",
    ];

    let interval;
    let index = 0;
    typeChar();
    function typeChar() {
      let charIndex = 0;
      let textTemp = "";
      let typeForward = true;
      let wait = true;
      interval = setInterval(function () {
        if (typeForward) {
          textTemp += all[index][charIndex];
          element.innerText = textTemp;

          if (charIndex === all[index].length - 1) {
            typeForward = false;
            setTimeout(function () {
              wait = false;
            }, 3000);
          } else {
            charIndex++;
          }
        } else {
          if (!wait) {
            textTemp = textTemp.slice(0, -1);
            element.innerText = textTemp;

            if (textTemp.length === 0) {
              wait = true;
              if (index === all.length - 1) {
                index = 0;
              } else {
                index++;
              }
              clearInterval(interval);
              typeChar();
            }
          }
        }
      }, 50);
    }
  }
  return (
    <div>
      <div className="wrapper">
        <Header />
        <main className="main">

          <article className="first-screen">
            <div className="center">
              <h1 className="first-screen__title h1">
                One platform, all things money.
              </h1>
              <div className="fade-in--200">
                <p
                  className="typewriterContainer"
                  style={{ minHeight: "56px" }}
                >
                  <span
                    className="first-screen__desc typewriter"
                    id="typewriter"
                  ></span>
                  <span className="typyingCursor"></span>
                </p>
              </div>
              <div className="first-screen__btns fade-in--400">
                <a
                  href="https://www.niftgram.io/"
                  className="btn btn--grad btn--demo"
                  rel="noopener nofollow"
                >
                  <span>Live Demo</span>
                  {/* <img src="./assets/img/brandLogo/favicon_white.png" alt="" /> */}
                </a>
                <a
                  href="https://wh.niftgram.io/"
                  className="btn btn--grad btn--demo"
                  rel="noopener nofollow"
                >
                  <span>Whitepaper</span>
                  {/* <img src="./assets/img/brandLogo/favicon_white.png" alt="" /> */}
                </a>
                <a
                  href="https://pd.niftgram.io/"
                  target="_blank"
                  className="btn btn--grad btn--demo"
                  rel="noopener nofollow"
                >
                  <span style={{ paddingLeft: 0 }}>Pitch Deck</span>
                  {/* <img src="./assets/img/brandLogo/favicon_white.png" alt="" /> */}
                </a>
              </div>
              <div className="fade-in--400">
                <p className="first-screen__intro_deck">
                  Auditing by{" "}
                  <img
                    style={{ marginLeft: "8px", marginRight: "8px" }}
                    src="./assets/img/certik_logo.svg"
                    height="20"
                    alt="CERTIK"
                  />{" "}
                  in progress
                </p>
              </div>
            </div>
            <div className="first-screen__scroll">
              <div className="center">
                <a href="#about">
                  <svg width="16" height="23" viewBox="0 0 16 23">
                    <path d="M7.3 22.7a1 1 0 001.4 0l6.37-6.36a1 1 0 00-1.41-1.41L8 20.59l-5.66-5.66a1 1 0 00-1.41 1.41l6.36 6.37zM7 0v22h2V0H7z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="first-screen__img">
              {/* <picture>
                                <img src="./assets/img/app.png" alt="" loading="lazy" height="900" />
                            </picture>
                            <a target="_blank" href="#" className="btn btn--play" aria-label="Play video" rel="noopener nofollow" data-id="_Jond3Bb4us">
                                <svg width="136" height="136" viewBox="0 0 136 136">
                                    <path d="M53 87.43V49.15a3 3 0 014.48-2.61l38.28 21.7a3 3 0 01-.28 5.35L57.19 90.2A3 3 0 0153 87.42z">
                                    </path>
                                </svg>
                            </a> */}
              <video
                playsinline
                autoPlay
                muted
                loop
                class="bannerImage"
                id="bannerImage"
              >
                <source
                  src="./assets/img/landing-page-top-video-new.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </article>

            {/* About */}
          <article className="about" id="about">
            <div className="center">
              <h2 className="hash">About</h2>
              <p className="h1">Mission</p> <br></br>
              <p>
                Our mission is to create a single platform for everything
                Non-Fungible Tokens (NFTs).
              </p>
              <br></br>
              <p className="h1">Who we are</p> <br></br>
              <p>
                Niftgram is a social networking and marketplace for everything
                NFTs. Users can use our website and mobile apps to create, mint,
                stake, buy, sell, and auction NFTs. Users can also create and
                play games, go virtual (metaverse), fundraise and launch their
                own projects, swap cryptos, and more. Niftgram is powered by our
                100% in-house custom built blockchain, Nift. Nift Protocol
                provides a zero-gas fee, secure, and scalable blockchain
                ecosystem and infrastructure. Nift Blockchain has an in-built
                auditing layer that all smart contracts and projects built on
                the blockchain are automatically and sporadically audited for
                bugs, malware, etc. Nift will power billions of transactions
                over its blockchain. Nift Blockchain is built with scale and
                security for global adoption and dominance.
              </p>
              <br></br>
              <p className="h1">Benefits</p> <br></br>
              <p>
                The useage of Nift Blockchain extends beyond NFTs. Creators,
                Developers, etc can use the blockchain to develop smart
                contracts, gaming, daos, payments, defi, and much more.
              </p>
              <br></br>
              <p className="h1">Earn</p> <br></br>
              <p></p>
              <ul className="about__list">
                <li className="about__item fade-in--100">
                  <h3 className="about__head">Tipping</h3>
                  <p>
                    Users can use the Nift in their in-app Niftwallet to tip
                    their favourite content creators directly from the video
                    feed, as well as from the Creator’s profile. These
                    transactions are completely on-chain.
                  </p>
                </li>
                <li className="about__item fade-in--200">
                  <h3 className="about__head">Niftcard</h3>
                  <p>
                    Holders of Niftcard Visa Debit cards can be able to earn up
                    to 25% cashback at a variety of major online and local
                    retailers.
                  </p>
                </li>
                <li className="about__item fade-in--300">
                  <h3 className="about__head">Boost</h3>
                  <p>
                    Creators will be able to boost their profile and posts to
                    100M+ Niftgram users, while making the payment for the
                    service through NIF.
                  </p>
                </li>
                <li className="about__item fade-in--600">
                  <h3 className="about__head">Token Gated access</h3>
                  <p>
                    NIF holders can access exclusive content on Nifgram platform
                    by staking their tokens on creator pools.
                  </p>
                </li>
                <li className="about__item fade-in--500">
                  <h3 className="about__head">Niftprime</h3>
                  <p>
                    Creators, influencers, and celebs can create a prime account
                    and sell exclusive rights and views to NFTs to their
                    followers and funds. Subscriptions can only be paid in NIF.
                  </p>
                </li>
                <li className="about__item fade-in--400">
                  <h3 className="about__head">Watch-2-Earn</h3>
                  <p>Watch videos and earn NIFTs</p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Governance</h3>
                  <p>
                    NIF holders will be able to stake and earn yield as well as
                    vote on proposals to decide the future direction of the
                    platform.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">NFTs</h3>
                  <p>
                    Niftgram will be the world’s biggest arts, video, 3d, and
                    audio NFT marketplace. These NFTs can be purchased with NIF
                    as the default currency plus other 1500 cryptocurrencies.
                  </p>
                </li>
                <li className="about__item fade-in--400">
                  <h3 className="about__head">Niftvoucher</h3>
                  <p>
                    Creators and users who top-up their Niftwallet with
                    Niftvouchers will receive a 200% match deposit bonus by
                    making a first deposit of at least $10 or NIF equivalent.
                    For example if you deposit $100, you will have $200 in bonus
                    funds.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Audio Rooms Currency</h3>
                  <p>
                    Audio rooms is a feature on Niftgram app, similar to
                    Clubhouse, where creators can connect with their followers
                    over audio meetings. NIF will be used by users to purchase
                    gifts for these creators.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Niftgram Live Streams</h3>
                  <p>
                    The Creators will be able to do live streams on the app. The
                    live streams will be exclusively available for those staking
                    NIF or buying NFT.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Play-2-Earn</h3>
                  <p>
                    Earn NIFTs by playing games, building in Niftverse
                    (metaverse) in the app.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Nifthall</h3>
                  <p>
                    {" "}
                    Creators can showcase their NFTs in a museum-like gallery
                    and charge visitors to view the NFTs. NIF will be only
                    accepted currency in Nifthall.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Engage-2-Earn</h3>
                  <p>
                    {" "}
                    Like, comment on videos on the Niftgram app and website and
                    earn NIFTs.
                  </p>
                </li>

                <li className="about__item fade-in--400">
                  <h3 className="about__head">Nift Blockchain</h3>
                  <p>
                    {" "}
                    Code, develop, and/or validate Nift Blockchain, Niftgame,
                    and Niftverse and earn NIFTs.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          {/* About */}


          {/* Products */}
          <article className="products" id="products">
            <div className="center" style={{ width: "1280px" }}>
              <h2 className="hash">Products</h2>
              <p
                className="h1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "20px",
                }}
              >
                Powered by{" "}
                <img
                  height={20}
                  style={{ display: "inline", margin: "0px 12px" }}
                  src="assets/img/brandLogo/nift_all_black.png"
                  alt="Ever white logo"
                />
              </p>
              {/* <p className='headline-2'>Auditing by CERTIK in progress</p> */}
              <p className="mt-2">
                There are 12 products at presents. Those are Niftgram, Niftdebt,
                Niftverse, Niftlaunch, Niftswap, Nifthall, Niftgames,
                Niftdollar, Niftwallet, Niftprime, Niftcard and Niftvoucher. See
                below more details.{" "}
              </p>
            </div>
          </article>
        

          <aside className="try-demo" id="demo">
            <div className="center">
              <p
                class="h1"
                style={{ color: "var(--primary)", textAlign: "center" }}
              >
                What is <a href="https://pixelverse.ai/">PixelVerse?</a>
              </p>
              <br />
              <br />

              {/* Gamma */}
              {/* <h2 style={{color:"var(--primary)"}}>Gamma</h2> */}
              <br />
              <div className="try-demo__box">
                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient(red, yellow, green)"}} >
                  <h2>Niftgram</h2>
                  <br />
                  <p>
                    Ai and ML driven social networking and marketplace for
                    creating, minting, staking, buying, selling, auctioning, and
                    socializing of NFTs on web3. Niftgram provides a next
                    generation toolset that lets creators create multi media
                    NFTs across different blockchains. Creators and users can
                    create in photos, videos, audios, 3Ds, etc. There are over
                    15 categories to pick from and advanced tools to edit and
                    filter your works and uploads. You can transfer ALL your
                    NFTs in any blockchain from other NFT platforms to your
                    Niftgram album or hall. Niftgram is 100% powered by Nift
                    Blockchain.
                  </p>
                  <br />
                  <a href="#" target="_blank" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>
                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient(green, yellow, red)"}}>
                  <h2>Niftdebt</h2>
                  <br />
                  <p>
                    This is the first in its kind in the NFT space. Niftdebt
                    enables Niftgram users to borrow crypto funds in NIF using
                    their created NFTs as collateral. In other words, based on
                    your Art NFT, Ticket NFT, Video NFT, etc you can borrow an
                    amount of funds in NIF for trading and transacting in
                    Niftgram, Niftswap, Niftlaunch, or Niftverse.
                  </p>
                  <br />
                  <a href="#" target="_blank" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>
                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient(red, green, yellow)"}}>
                  <h2>Niftverse</h2>
                  <br />
                  <p>
                    A virtual world built on Nift blockchain that lets users
                    collect, display, interact with NFTs in a shared space.
                    Users can create and develop games, real estate, career,
                    communities, towns, cities, offices, products, etc and sell
                    them on the platform. Nift is the only accepted currency.
                  </p>
                  <br />
                  <a href="#" target="_blank" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient(white, yellow, green)"}}>
                  <h2>Niftlaunch</h2>
                  <br />
                  <p>
                    Fundraise your NFT collections, games, metaverse, defi,
                    exchanges, sale as well whole projects into the growing Nift
                    ecosystem. 100% powered by Nift Blockchain and
                    Infrastructure.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient(white, green, yellow)"}}>
                  <h2>Niftswap</h2>
                  <br />
                  <p>
                    A defi exchange build on Nift Blockchain. Traders can swap
                    Nift, Niftdollar and other Nift developed tokens on the
                    platform at zero gas fees.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>
                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient( green, white, yellow)"}}>
                  <h2>Nifthall</h2>
                  <br />
                  <p>
                    Want parade you NFT collections for exclusive private
                    viewing? Nifthall provides a corridor or gallery where
                    creators can show some of their expensive and unique NFT
                    collections on a pay-to-view platform. Creators put all
                    their NFT collections on Niftgram on their hall or select
                    some of them.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient( green, yellow, white)"}}>
                  <h2>Niftgames</h2>
                  <br />
                  <p>
                    A platform for game developers to build the next generation
                    of games and guilds on Nift Blockchain. Developers earn
                    Nifts in every game that they build and can sell
                    subscriptions on the platform. Nift also has its own
                    in-house game developers building advanced multiplayer games
                    and guilds for global adoptation.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient( green, red, white)"}} >
                  <h2>Niftdollar</h2>
                  <br />
                  <p>
                    The world’s first NFT regulated stablecoin designed for
                    scalability and usability in all kinds of transactions.
                    Niftdollar (NID) is purpose-built to bring the value of the
                    U.S. dollar into the modern digital era.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient( red, green, white)"}}>
                  <h2>Niftwallet</h2>
                  <br />
                  <p>
                    The only accept wallet that users can use on Niftgram is
                    Niftwallet. There's no MetaMask, Coinbase wallet, etc. Users
                    can add funds to their wallet via: Niftvouchers; Debit
                    card/credit card to buy Nift on Niftgram; Nift/Niftdollar
                    from Niftswap; or Centralized exchanges such Binance,
                    Coinbase, etc.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each"  style={{backgroundImage : "linear-gradient( white, red, green )"}}>
                  <h2>Niftprime</h2>
                  <br />
                  <p>
                    Verified Creators, Influencers, and Celebs get their own
                    private accounts to showcase their NFTs. Fans and
                    speculators can trade and back up quality and popular
                    creators based on their standing in Niftgram and Niftverse.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>

                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient( white, green, red )"}} >
                  <h2>Niftcard</h2>
                  <br />
                  <p>
                    Earn up to 15% instant crypto rewards in the cryptocurrency
                    of your choice. You also earn up to 25% cashback at a
                    variety of major online and local retailers. There are
                    monthly fixed maintenance fees based on the type of debit
                    card you choose but there’s no foreign transaction fees, and
                    the card comes with World Visa card protection benefits.
                    Plus, your choice of a black, silver, or rose gold
                    stainless-steel card. The cards can be used in ATMs, POS,
                    and online/offline shopping. iii. Mobile app slides This
                    will show a slide of the mobile app screens. Please use
                    those that sent you. Combine the Samsung and iPhone screens.
                    Each of the screens will show one after the other and there
                    should be 7 seconds between each screen. Take a look at the
                    layout in gari.network on how screen are arranged. iv.
                    Website slides The layout will be same as the mobile app
                    slides. Please side of the landing page, home page, shop,
                    profile, and explore page.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>
                

                <div className="try-demo__box__each" style={{backgroundImage : "linear-gradient( white, green, blue )"}} >
                  <h2>Niftvoucher</h2>
                  <br />
                  <p>
                    The world's first crypto voucher and etop cards for scale
                    and global adoptation. With Niftvouchers, users can topup
                    their wallet instantly. Niftvouchers will readily be
                    available in local grocery stores. The cards will be in $1,
                    $5, $10, $20, $50, $100 or equivalent to the user's local
                    fiat currency.
                  </p>
                  <br />
                  <a href="#" className="try-demo__button dim">
                    Re-testing
                  </a>
                </div>
              </div>

              <br />
              <br />
            </div>
          </aside>

            {/* Products */}


             {/* begin::Token */}
          <article className="token" id="token">
            <div className="center">
              <h2 className="hash">Token</h2>
              <p className="h1">Token details</p>
              {/* <img className="token__pic" src="./assets/img/brandLogo/faviconTransparent-normal.png" width="379" height="auto" loading="lazy" alt="" /> */}
              <div className="token__tabs">
                <button
                  className="token__btn-tab button is-active"
                  type="button"
                >
                  Metrics
                </button>
                <button className="token__btn-tab button" type="button">
                  Distribution
                </button>
                <button className="token__btn-tab button" type="button">
                  Schedule
                </button>
                <button className="token__btn-tab button" type="button">
                  Governance
                </button>
              </div>
              <div className="token__row">
                <div className="token__col is-active">
                  <img src="/assets/img/token/token1.svg" alt="" />
                </div>
                <div className="token__col fade-in--100">
                  <img src="/assets/img/token/token2.svg" alt="" />
                </div>
                <div className="token__col fade-in--100">
                  <img src="/assets/img/token/token4.svg" alt="" />
                </div>
              </div>
            </div>
          </article>
          {/* end::Token */}
          

       
          <aside className="mobile-app">
            <div className="center">
              <div className="mobile-app__box">
                <div className="mobile-app__content">
                  <h2 className="hash">Coming soon</h2>
                  <p className="h2">NIFT Mobile</p>
                  <p className="mobile-app__text fade-in--100">
                    The convenient way to bank, invest, trade, and earn on the
                    go.
                  </p>
                </div>
                <div className="mobile-app__img fade-in--right fade-in--500">
                  <img
                    className="mobile-app__img-phone"
                    src="./assets/img/mobileApp.png"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Team */}
                
          <article className="team" id="team">
            <div className="center team__center">
              <h2 className="hash">Team</h2>
              <p className="h1">Team members</p>
              <p style={{ marginTop: "16px" }}>
                NIFT currently has in-house 23 technical staff and 2 project
                managers and we are presently interviewing and onboarding
                executives for our c-suit and top-level positions as well as
                more programmers/coders for the NIFT protocol and framework.
                Soon, we will be having their profiles on this section.
                <br />
                <br />
                There are still available positions in c-suit, top, and
                mid-level, engineering, programming, internships, customer
                services, etc.
                <br />
                <br />
                Please visit our{" "}
                <a
                  href="https://careers.niftgram.io"
                  target="_blank"
                  className="referenceLink"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Careers
                </a>{" "}
                page to learn more about our current available job offers.
              </p>
           
              <div
                className="team__list hide"
                id="team__list"
                onTouchStart={(e) => {
                  touchStart(e);
                }}
                onTouchMove={(e) => {
                  touchMove(e);
                }}
                onTouchEnd={(e) => {
                  touchEnd(e);
                }}
              >
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Founder</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Chief Executive Officer</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Chief Operating Officer & President
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    The Ever Foundation Council Member
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Vice President, Risk</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Vice President, Products</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Vice President, Technology
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Vice President, Growth</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Vice President, Communications
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Vice President, Compliance
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Vice President, Investor Relations
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">
                    Vice President, Business Development
                  </p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
                <div className="team__member">
                  <div className="team__member__image-container">
                    <img
                      className="team__member__image"
                      src="./assets/img/team/demo.jpg"
                    />
                  </div>
                  <p className="team_member_name">Name</p>
                  <p className="team_member_title">Technical Staff</p>
                  <a className="team_member_url" href="#"></a>
                </div>
              </div>
              <div className="team__scroll hide">
                <div class="range-slider">
                  <div class="range-slider__slider">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step=".1"
                      value={sliderVal}
                      className="slider"
                      id="rangeSlider"
                      onInput={(element) => {
                        sliderInput(element.target.value);
                      }}
                      onMouseUp={(element) => {
                        fitSlider(element.target.value);
                      }}
                      onTouchEnd={(element) => {
                        fitSlider(element.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Team */}

             

          <aside className="join-demo">
            <div className="center">
              <div className="join-demo__box">
                <div className="join-demo__content">
                  <p className="join-demo__text">
                    Join NFIT right now and start earning
                  </p>
                  <div className="join-demo__btn fade-in--100">
                    <a
                      href="./signup"
                      className="btn btn--white"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>


          {/* Roadmap */}
          <article className="roadmap" id="roadmap">
            <div className="center">
              <h2 className="hash">Roadmap</h2>
              <p className="h1">Stages of the project</p>
              <div className="roadmap__table">
                <div className="roadmap__row roadmap__row--q1-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year"></div>
                    <div className="roadmap__quarter"></div>
                  </div>
                  <div className="roadmap__tbody fade-in--000 roadmap-heading">
                    <div className="roadmap__td funding-th ">
                      <span>Funding </span>
                    </div>
                    <div className="roadmap__td business-th">
                      <span>Business Initiative</span>
                    </div>
                    <div className="roadmap__td product-th">
                      <span>Product Developments</span>
                    </div>
                    <div className="roadmap__td technical-th">
                      <span>Technical Development</span>
                    </div>
                  </div>
                </div>
                <div className="roadmap__row roadmap__row--q0-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year">1st Quarter</div>
                    <div className="roadmap__quarter">Q1</div>
                  </div>
                  <div className="roadmap__tbody fade-in--000">
                    <div className="roadmap__td funding-td">
                      <span>---</span>
                    </div>
                    <div className="roadmap__td">
                      <span>---</span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Products conception, planning, and development
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Hire MERN developers Hire Kotlin and Swift developers
                        Hire UI UX and Product designers Hire C++, Rust, Go,
                        Python, etc developers and programmers - Blockchain
                        development Complete Niftgram.com Demo Complete Mobile
                        apps UI UX mockups
                      </span>
                    </div>
                  </div>
                </div>
                <div className="roadmap__row roadmap__row--q2-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year">2nd Quarter</div>
                    <div className="roadmap__quarter">Q2</div>
                  </div>
                  <div className="roadmap__tbody fade-in--000">
                    <div className="roadmap__td funding-td">
                      <span>
                        PreSeed Round: Successful close and raise $600k in
                        equity
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>Complete Nift Whitepaper v1.0</span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Start development of Niftgram.com pages: landing, home,
                        profile, shop, etc Start development of Niftverse
                        development center & platform Initiate Niftwallet
                        development
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Start Mobile Apps Development Nift Blockchain
                        Development Mobile Apps Development
                      </span>
                    </div>
                  </div>
                </div>
                <div className="roadmap__row roadmap__row--q3-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year">3rd Quarter</div>
                    <div className="roadmap__quarter">Q3</div>
                  </div>
                  <div className="roadmap__tbody fade-in--000">
                    <div className="roadmap__td funding-td">
                      <span>Seed & Private Sale Round</span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Social appearance & Community development Influencer
                        Promotions & Advertising campaigns Airdrop & Bounty
                        campaign Smart Contract release dits
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Launch Niftwallet Launch Niftverse development center
                        Launch Niftvoucher - online and mobile credit topup on
                        se Initiate Niftgams & guild development
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Nift Blockchain solution live testing Niftgram Platform
                        integration (beta) Finalize Platform smart contract
                      </span>
                    </div>
                  </div>
                </div>
                <div className="roadmap__row roadmap__row--q4-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year">4th Quarter</div>
                    <div className="roadmap__quarter">Q4</div>
                  </div>
                  <div className="roadmap__tbody fade-in--000">
                    <div className="roadmap__td funding-td">
                      <span>
                        Public Sale Round - Niftgram Round - Coinbase, Binance,
                        FTX, Gate.io, and Kucoin
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Launch Nift Foundation: Grants to support Nift-powered
                        projects and developments Coinmarketcap, Coingecko, and
                        Nomics Listing Post Launch Marketing Nift Investor
                        Staking Initiated
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Launch Niftgram.com Launch Niftprime for creators and
                        influencers Launch Niftcards Launch Nifthall Launch
                        Niftverse Initiate Niftswap development
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Launch Niftgram Mobile Apps Launch NiftgramWebsite
                        Launch Niftgram Desktop
                      </span>
                    </div>
                  </div>
                </div>
                <div className="roadmap__row roadmap__row--q5-2021">
                  <div className="roadmap__thead fade-in--left">
                    <div className="roadmap__year">2023 & Beyond</div>
                    <div className="roadmap__quarter">+</div>
                  </div>
                  <div className="roadmap__tbody fade-in--000">
                    <div className="roadmap__td funding-td">
                      <span>
                        Series A to Series C Round Funding Stages Public listing
                        on exchanges: NASDAQ, LSE, TYO, SSE, Euronext, BSE, etc.
                        Bond & Debt issurance
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Corporate Sponsorship of educational and sports
                        organizations and events Launch Nift Whitepaper v1.2
                        Launch Nift 10-Year Plan
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Launch Niftaudit Launch Niftdebt Continue adding new
                        user-driven and requested product features
                      </span>
                    </div>
                    <div className="roadmap__td">
                      <span>
                        Hire more technical staff, globally Continue development
                        and upgrades on Nift Blockchain Enhance Nift Blockchain
                        global coverage and usage Launch Niftgram TV app and
                        Linux
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          {/* Roadmap */}

      


          <aside className="subscribe">
            <div className="center">
              <div className="subscribe__box mc_embed_signup">
                <form
                  className="subscribe__form fade-in--right form validate"
                  action="https://ever.us20.list-manage.com/subscribe/post?u=56934695d4f357d705d9e1283&amp;id=171eeb594f"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  noValidate
                  autoComplete="off"
                >
                  {/*<input type="hidden" value="Subscribe" name="subject" />*/}
                  <h3 className="subscribe__title h2">
                    STAY UP TO DATE ON ALL THINGS, NIFT
                  </h3>
                  <div className="mc_embed_signup_scroll subscribe__fieldset">
                    <div className="mc-field-group" style={{ height: "100%" }}>
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="E-mail"
                        aria-label="enter email"
                        required="required"
                        className="required email input input--invalid"
                        autoComplete="off"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_56934695d4f357d705d9e1283_171eeb594f"
                        tabIndex="-1"
                      />
                    </div>
                    <div className="clear btn btn--black form__submit">
                      <button
                        className="btn btn--black form__submit"
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </aside>

        </main>
        <Footer />
      </div>


      <div className="modal" id="modal">
        <div className="modal__box">
          <div className="modal__item modal__item--video">
            {/* <div id="modal-video"></div> */}

            <div className="">
              <video controls className="" id="" width="300px">
                <source
                  src="assets/img/landing-page-top-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <aside className="modal__item modal__item--thank">
            <h3 className="h2">Thank you!</h3>
            <p>Your subscription has been successfully completed.</p>
            <button
              type="button"
              className="modal__close modal__close-btn button"
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path
                  stroke="#4F208A"
                  strokeWidth="2"
                  d="M21 21L1 1M1 21L21 1"
                ></path>
              </svg>
            </button>
          </aside>
          <button
            type="button"
            className="modal__close modal__close-btn button"
            aria-label="Close"
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                stroke="#848484"
                strokeWidth="2"
                d="M28.58 28.58L1 1M1 28.58L28.58 1"
              ></path>
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
