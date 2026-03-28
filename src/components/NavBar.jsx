import { Link } from "react-router-dom";

const NavBar = () => {
  const items = ["Home", "Cat", "RPS", "Wordle", "To Do List"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5px",
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
              marginLeft: "20px",
            }}
          >
            JS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            marginLeft: "40px",
            alignItems: "center",
          }}
        >
          <ul style={{ display: "flex", listStyle: "none" }}>
            {items.map((el) => {
              if (el === "Home") {
                return (
                  <li className="eachEll" key={el}>
                    <Link
                      to="/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </li>
                );
              } else if (el === "Wordle") {
                return (
                  <li className="eachEll" key={el}>
                    <a
                      to="https://julian22222.github.io/Wordle/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {el}
                    </a>
                  </li>
                );
              } else if (el === "To Do List") {
                return (
                  <li className="eachEll" key={el}>
                    <a
                      to="https://to-do-list-front-end.onrender.com/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {el}
                    </a>
                  </li>
                );
              } else {
                return (
                  <li className="eachEll" key={el}>
                    {
                      <Link
                        to={`/${el}`}
                        style={{ color: "#fff", textDecoration: "none" }}
                      >
                        {el}
                      </Link>
                    }
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
