import React from "react";

import image1 from "../IMG/PIC/js.jpg";
import image2 from "../IMG/PIC/html.png";
import image3 from "../IMG/PIC/css.png";
import image4 from "../IMG/PIC/react.png";
import image5 from "../IMG/PIC/code.png";
import move1 from "../IMG/PIC/move1.gif";
import move2 from "../IMG/PIC/move2.gif";
import move3 from "../IMG/PIC/move3.gif";
import move4 from "../IMG/PIC/move4.gif";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#343d4b",
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          background: "#2f3640",
          borderRadius: "12px",
          padding: "40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* NAVIGATION */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#4b73ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              JS
            </div>
            <span>React JS, JavaScript, Node JS, HTML, CSS</span>
          </div>

          {/* //////////////////////////////////////////// */}

          {/* /////Right Side nav Bar///// */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              marginLeft: "40px",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/Julian22222/All-JavaScript-Proj"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              GitHub Code
            </a>
            <a
              href="https://github.com/Julian22222/Wordle"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Wordle GitHub Code
            </a>
            {/* <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              RPS
            </a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Wordle
            </a> */}

            {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="https://i.pravatar.cc/40"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span>Julian Golovens</span>
            </div> */}
          </div>

          {/* ////////////// */}
        </div>

        {/* LEFT TEXT AREA */}
        <div style={{ width: "50%" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "45px",
              marginBottom: "20px",
            }}
          >
            Welcome to my JavaScript projects.
            <br /> 👾
          </h1>
          <br />
          <br />

          {/* Stars */}
          <div style={{ marginBottom: "10px" }}>⭐⭐⭐⭐⭐</div>

          <p style={{ opacity: 0.7 }}>
            Here you can find different JavaScript projects , such as Colourful
            Cat, Rock Paper Scissors game and many more other interesting stuff.
          </p>

          <br />
          <br />

          {/* PROGRAMS*/}
          <div
            style={{ display: "flex", alignItems: "center", margin: "20px 0" }}
          >
            <img
              src={image1}
              alt=""
              style={{
                width: "150px",
                borderRadius: "50%",
                marginRight: "-15px",
              }}
            />
            <img
              src={image2}
              alt=""
              style={{
                width: "150px",
                borderRadius: "50%",
                marginRight: "-15px",
              }}
            />
            <img
              src={image3}
              alt=""
              style={{
                width: "150px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <img
              src={image4}
              alt=""
              style={{
                width: "150px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />

            <span style={{ opacity: 0.7 }}>
              Other mini projects are in the works...
            </span>
          </div>

          {/* BUTTON */}
          <a
            href="https://julian22222.github.io/Portfolio/"
            style={{
              padding: "10px 20px",
              background: "#4b73ff",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            Return to Main Portfolio
          </a>
        </div>

        {/* PNG IMAGE RIGHT SIDE */}
        <div
          style={{
            position: "absolute",
            right: "-130px",
            top: "80px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={move4}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right Title */}
        <div
          style={{
            position: "absolute",
            right: "280px",
            top: "180px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "42px", fontWeight: "600" }}>Full-Stack</div>
          <div
            style={{
              marginTop: "10px",
              borderTop: "1px solid #aaa",
              paddingTop: "10px",
              fontSize: "24px",
            }}
          >
            Software Development
          </div>
        </div>

        {/* BOTTOM CARD */}
        <div
          style={{
            marginTop: "250px",
            background: "#ffffff15",
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <h2 style={{ flexDirection: "column" }}>
              Ideas for Future mini projects:
            </h2>
          </div>

          {/* Row of cards */}
          <div style={{ display: "flex", gap: "20px" }}>
            {["Mini calendar", "Weather app", "Music player"].map((item, i) => (
              <div
                key={i}
                style={{
                  width: "180px",
                  padding: "15px",
                  background: "#2c3340",
                  borderRadius: "12px",
                }}
              >
                <img
                  src="https://i.pravatar.cc/60"
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <div style={{ fontWeight: 600, marginBottom: "5px" }}>
                  {item}
                </div>
                <div style={{ fontSize: "12px", opacity: 0.6 }}>
                  In process...
                </div>
              </div>
            ))}

            {/* VIDEO CARD */}
            <div
              style={{
                width: "250px",
                background: "#fff",
                color: "#000",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: "700",
                    marginBottom: "5px",
                    fontSize: "14px",
                  }}
                >
                  Learn How to Build AI Programs
                </div>
                <div style={{ fontSize: "12px", opacity: 0.7 }}>
                  Your journey begins here…
                </div>
              </div>

              <a href="https://www.youtube.com/watch?v=Yq0QkCxoTHM">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                  style={{ width: "45px" }}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
