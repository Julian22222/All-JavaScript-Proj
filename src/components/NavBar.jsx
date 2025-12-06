import { Link } from "react-router-dom";

const NavBar = () => {
  const items = ["Home", "Cat", "RPS", "Wordle"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // marginBottom: "20px",
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
              if (el === "Wordle") {
                return (
                  <li className="eachEll" key={el}>
                    <Link
                      to="https://julian22222.github.io/Wordle/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {el}
                    </Link>
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
