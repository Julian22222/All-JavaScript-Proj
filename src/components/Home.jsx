// import { Link } from "react-router-dom";

const Home = () => {
  const arr = [
    "Mini calendar",
    "Calculator",
    "Age calculator",
    "Weather app",
    "Drag&drop",
    "Music player",
    "Dark theme",
    "Pokemon battle",
  ];

  return (
    <div>
      <h1 className="header-home">Welcome to my JavaScript projects.</h1>
      <p className="home-text">
        Here you can find different JavaScript projects , such as Colourful Cat,
        Rock Paper Scissors game, Calculator and many more other interesting
        stuff.
      </p>
      <div className="logo-container">
        <img
          width={300}
          height={250}
          src="https://www.segredosdatecnologia.com/wp-content/uploads/2019/03/logo-javascript.png"
          alt="JS"
        />
        <img
          width={300}
          height={250}
          src="https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU"
          alt="css"
        />
        <img
          width={300}
          height={250}
          src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn"
          alt="html"
        />
        <img
          width={300}
          height={250}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          alt="react"
        />
      </div>

      <h2 className="f-proj" style={{ fontSize: 20 }}>
        Future mini projects:
      </h2>
      <ul>
        {arr.map((el) => {
          return (
            <li className="el-proj" key={el}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
