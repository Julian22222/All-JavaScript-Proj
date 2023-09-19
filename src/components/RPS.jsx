import { React, useState, useEffect } from "react";

import headerPicture from "../IMG/header.png";
import clickMe from "../IMG/clickMe.png";
import info from "../IMG/i.png";
import player from "../IMG/player.png";
import cpu from "../IMG/cpu.png";
import win from "../IMG/win1.png";
import lose from "../IMG/lose1.png";
import draw from "../IMG/draw2.png";
import vs from "../IMG/vs.png";
import left1 from "../IMG/left-1.png";
import left2 from "../IMG/left-2.png";
import left3 from "../IMG/left-3.png";
import right1 from "../IMG/right-1.png";
import right2 from "../IMG/right-2.png";
import right3 from "../IMG/right-3.png";

import shakeSound from "../Music/shaking2.mp3";
import handHit from "../Music/hit.mp3";
import endSound from "../Music/theEnd1.mp3";
import winSound from "../Music/theWin1.mp3";
import drawSound from "../Music/draw1.mp3";

function RPS() {
  // info btn
  const [showInfo, setShowInfo] = useState(false);

  // block to choose RemotePlayback, paper,scissors
  const [showMainBlock, setShowMainBlock] = useState(true);

  //selected rock,paper or scissors
  const [yourValue, setYourValue] = useState(null);
  const [showOpponent, setShowOpponent] = useState(null);

  //show main batle table (red/blue table) or not
  const [showBattle, setShowBattle] = useState(true);

  //shaking hands ,pre fight
  const [preFight, setPreFight] = useState(false);

  //points for myself and opponent
  const [myPoints, setMyPoints] = useState(0);
  const [opponentPoints, setOpponentPoints] = useState(0);

  //   click me sign
  const [showClickMe, setShowClickMe] = useState(true);

  //show win sign or lose sign
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [showDraw, setShowDraw] = useState(false);

  //end msg you won ,CPU wins
  //   you lost the game ,let's try again!
  const [showEndMsg, setShowEndMsg] = useState(false);

  //game progress
  const [gameProgress, setGameProgress] = useState(0);

  const opponent = [
    { logo: "../IMG/1.png", num: 1, title: "rock" },
    { logo: "../IMG/2.png", num: 2, title: "paper" },
    { logo: "../IMG/3.png", num: 3, title: "scissors" },
  ];

  ////////////////////////////////////////////////////////////////////////////////////////vvvvv/////useREffect

  useEffect(() => {
    console.log("second");
    if (!yourValue || !showOpponent) return;
    // YOUR_CODE_HERE WILL RUN WHEN the -ourValue is change
    // const myRandom = Math.floor(Math.random() * 3); //random number from 0 - 2
    // setTimeout(setShowOpponent(opponent[myRandom]), 2000);
    // setShowYourChoice(true);
    // console.log("yourValue", yourValue);
    // console.log("myValue - useEffect block", yourValue?.num);
    // console.log("oppValue useEffect block", showOpponent?.num);
    // add points

    ///////////////////////////////////////////////////////// adding points
    //////////////////////////////////////////// show win sign or lose sign
    /////////////////////////////////////////////////////////show win/lose logo
    setTimeout(() => {
      if (yourValue?.num === 1 && showOpponent?.num === 2) {
        setOpponentPoints(opponentPoints + 1);
        setShowLose(true);
        loseTrack();
      }

      if (yourValue?.num === 1 && showOpponent?.num === 3) {
        setMyPoints(myPoints + 1);
        console.log(myPoints, "help");
        setShowWin(true);
        winTrack();
      }

      if (yourValue?.num === 2 && showOpponent?.num === 1) {
        setMyPoints(myPoints + 1);
        console.log(myPoints, "help");
        setShowWin(true);
        winTrack();
      }

      if (yourValue?.num === 2 && showOpponent?.num === 3) {
        setOpponentPoints(opponentPoints + 1);
        setShowLose(true);
        loseTrack();
      }

      if (yourValue?.num === 3 && showOpponent?.num === 1) {
        setOpponentPoints(opponentPoints + 1);
        setShowLose(true);
        loseTrack();
      }

      if (yourValue?.num === 3 && showOpponent?.num === 2) {
        setMyPoints(myPoints + 1);
        console.log(myPoints, "help");
        setShowWin(true);
        winTrack();
      }

      if (
        (yourValue?.num === 1 && showOpponent?.num === 1) ||
        (yourValue?.num === 2 && showOpponent?.num === 2) ||
        (yourValue?.num === 3 && showOpponent?.num === 3)
      ) {
        setShowDraw(true);
        drawTrack();
      }
    }, 100);

    /////////////////////////////////////////////////////////

    console.log("myPoints", myPoints);
    console.log("opponentPoints", opponentPoints);

    setGameProgress(1);
  }, [gameProgress]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////useEffect

  /////////////////////////////////////////////////////////////////////////vvvvvvvvvvvvvvvvv////////second useEffect
  useEffect(() => {
    if (myPoints === 3) {
      setShowEndMsg("GAME OVER. YOU WON THE GAME!!!! ,GREAT JOB!!!! ");
      setShowDraw(false);
      setShowWin(false);
      setShowLose(false);
      setShowMainBlock(false);
      setShowClickMe(false);
    }

    if (opponentPoints === 3) {
      setShowEndMsg("GAME OVER. YOU LOST THE GAME ,LET'S TRY AGAIN! ");
      setShowDraw(false);
      setShowWin(false);
      setShowLose(false);
      setShowMainBlock(false);
      setShowClickMe(false);
    }
  }, [myPoints, opponentPoints]);

  console.log(gameProgress);
  console.log("myPoints outside - ", myPoints);
  console.log("opponentPoints outside - ", opponentPoints);

  //////////////////////////////////////////////////////////////////////music effects

  const playShake = () => {
    new Audio(shakeSound).play();
  };

  const playHit = () => {
    new Audio(handHit).play();
  };

  //   const playTrack = () => {
  //     new Audio(track).play();
  //   };

  const loseTrack = () => {
    new Audio(endSound).play();
  };

  const winTrack = () => {
    new Audio(winSound).play();
  };

  const drawTrack = () => {
    new Audio(drawSound).play();
  };

  ///////////////////////////////////////////////handle Info btn
  const handleInfo = () => {
    setShowInfo(true);
  };

  //////////////////////////////////////////////handle close Info btn
  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  /////////////////////////////////////////////////handle Play Again btn
  const handlePlayAgain = () => {
    setShowClickMe(true);
    setShowMainBlock(true);
    setMyPoints(0);
    setOpponentPoints(0);
    setShowEndMsg(false);
    setShowLose(false);
    setShowWin(false);
    setShowDraw(false);
    setYourValue(false);
    setShowOpponent(false);
    setShowBattle(true);
  };

  /////////////////////////////////////////////////////////////////////////////////handleClick

  const handleClick = (e) => {
    playShake();
    setShowDraw(false);
    setShowWin(false);
    setShowLose(false);
    setShowClickMe(false);
    setYourValue(false);
    setShowOpponent(false);
    //remove epty battle field(red/blue table)
    setShowBattle(false);

    setShowMainBlock(false);

    ///////////////////// show shaking hands
    setPreFight(true);

    //////////////////////hide shaking hands
    setTimeout(() => {
      setPreFight(false);
    }, 1000);

    setTimeout(() => {
      playHit();
    }, 1000);

    //////////////////////////// set your choise
    setTimeout(() => {
      setYourValue(opponent[e - 1]);
    }, 1000);

    const myRandom = Math.floor(Math.random() * 3); //random number from 0 - 2
    //////////////////////////////////////////////////set opponent choise
    setTimeout(() => {
      setShowOpponent(opponent[myRandom]);
    }, 1000);

    setTimeout(() => {
      setShowLose(false);
      setShowWin(false);
      setShowDraw(false);
      setShowClickMe(true);
      setShowMainBlock(true);

      setGameProgress(2);
      console.log("end of handle click");
    }, 2000);

    // console.log(e);
    // console.log("Chousen element", opponent[e - 1]);
    // console.log("yourValue", yourValue);
    // console.log("Random", myRandom);
    // console.log("Random element", opponent[myRandom]);
  };

  return (
    <div class="all-page-rps">
      <img
        // width={800}
        // height={300}
        src={headerPicture}
        className="header-rps"
        alt="header picture"
      />
      <div className="btn-container">
        <button onClick={() => handleInfo()} className="info-btn">
          {/* info */}
          <img
            width={15}
            height={30}
            src={info}
            className="info"
            alt="info picture"
          />
        </button>
      </div>
      <div className="container">
        <div className="flexbox-leftside">
          {/* //////////////////click me sign */}
          {showClickMe ? (
            <img
              width={300}
              height={150}
              // style={{ margin: 30 }}
              src={clickMe}
              className="clickMe-blink"
              alt="clickMe picture"
            />
          ) : (
            ""
          )}

          <div className="btn-options">
            {/* ////////////////////////////////////////////////////chose element block  */}

            {showMainBlock ? (
              <div className="pic-container">
                <button className="RPS-btn" onClick={() => handleClick(1)}>
                  <img
                    name="1"
                    width={150}
                    height={100}
                    src={left1}
                    className="btn-main"
                    alt="pcs of scissors"
                  />
                </button>

                <button className="RPS-btn" onClick={() => handleClick(2)}>
                  <img
                    name="2"
                    width={150}
                    height={100}
                    src={left2}
                    className="ImageOfMe"
                    alt="pcs of paper"
                  />
                </button>

                <button className="RPS-btn" onClick={() => handleClick(3)}>
                  <img
                    name="3"
                    width={150}
                    height={100}
                    src={left3}
                    className="ImageOfMe"
                    alt="pcs of scissors"
                  />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flexbox-rightside">
          {/* ////////////////////////////////////////////////////////////////main info -points, players */}

          <div className="mainInfo-container">
            <div className="block-1">
              <img
                width={100}
                height={60}
                src={player}
                className="player"
                alt="player picture"
              />

              <p style={{ color: "black" }}>
                Points:<span style={{ fontSize: 30 }}>{myPoints}</span>
              </p>
            </div>
            <div className="block-2">
              <img
                width={100}
                height={50}
                src={cpu}
                className="cpu"
                alt="cpu picture"
              />

              <p style={{ color: "black" }}>
                Points:<span style={{ fontSize: 30 }}>{opponentPoints}</span>
              </p>
            </div>
          </div>

          {/* ////////////////////////////////////////////////////////////////pre-batle , shaking hands */}

          <div className="epty-batlefield-container">
            {showBattle ? <div className="epty-batlefield"></div> : ""}
          </div>

          <div
            className={
              preFight ? "pre-battle-field-change" : "pre-battle-field"
            }
          >
            {preFight ? (
              <div>
                <div className="pre-ellement1">
                  <img
                    width={300}
                    height={250}
                    src={left1}
                    className="preEllement1"
                    alt="pcs of left rock"
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            {/* ///////////////////////////////////////////////////////vs */}

            {preFight ? <img className="vs" src={vs} alt="vs logo" /> : ""}

            {preFight ? (
              <div className="pre-ellement2">
                <img
                  width={300}
                  height={250}
                  src={right1}
                  className="preEllement2"
                  alt="pcs of left rock"
                />
              </div>
            ) : (
              ""
            )}
          </div>

          {/* ///////////////////////////////////////////////////////////////////////battle */}

          {/* //////////////////////////////////////////////////////////////////////////my element */}
          <div className={yourValue ? "battle-field-change" : "battle-field"}>
            {yourValue?.num === 1 ? (
              <div className="my-ellement">
                <img
                  width={300}
                  height={250}
                  src={left1}
                  className="myEllement"
                  alt="pcs of chousen element"
                />
              </div>
            ) : yourValue?.num === 2 ? (
              <div className="my-ellement">
                <img
                  width={300}
                  height={250}
                  src={left2}
                  className="myEllement"
                  alt="pcs of chousen element"
                />
              </div>
            ) : yourValue?.num === 3 ? (
              <div className="my-ellement">
                <img
                  width={300}
                  height={250}
                  src={left3}
                  className="myEllement"
                  alt="pcs of chousen element"
                />
              </div>
            ) : (
              ""
            )}
            {/* ///////////////////////////////show win logo or lose logo or draw*/}

            {showWin ? (
              <img
                width={300}
                height={250}
                src={win}
                className="win"
                alt="win pcs"
              />
            ) : (
              ""
            )}

            {showLose ? (
              <img
                width={300}
                height={250}
                src={lose}
                className="lose"
                alt="lose pcs"
              />
            ) : (
              ""
            )}

            {showDraw ? (
              <img
                width={300}
                height={250}
                src={draw}
                className="draw"
                alt="draw pcs"
              />
            ) : (
              ""
            )}

            {/* //////////////////////////end message */}
            {showEndMsg ? (
              <div className="end-container">
                <h1>{showEndMsg}</h1>
                <button onClick={() => handlePlayAgain()}>Play again !</button>
              </div>
            ) : (
              ""
            )}

            {/* /////////////////////////////////////////info msg */}
            {showInfo ? (
              <div className="info-blur">
                <div className="info-container">
                  <button
                    onClick={() => handleCloseInfo()}
                    className="info-close-btn"
                  >
                    x
                  </button>
                  <h1 className="info-rules">Game Rules:</h1>
                  <h3>
                    Choose one of three elements: rock ,paper or scissors. Rock
                    beats Scissors, Paper beats Rock and Scissors beats Paper.
                    Get 3 points first to win the match.
                  </h3>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* //////////////////////////////////////////////////////////////////opponent element */}
            {showOpponent?.num === 1 ? (
              <div className="opp-ellement">
                <img
                  width={300}
                  height={250}
                  src={right1}
                  className="oppEllement"
                  alt="opponent rock pcs"
                />
              </div>
            ) : showOpponent?.num === 2 ? (
              <div className="opp-ellement">
                <img
                  width={300}
                  height={250}
                  src={right2}
                  className="oppEllement"
                  alt="opponent paper pcs"
                />
              </div>
            ) : showOpponent?.num === 3 ? (
              <div className="opp-ellement">
                <img
                  width={300}
                  height={250}
                  src={right3}
                  className="oppEllement"
                  alt="opponent scissors pcs"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RPS;
