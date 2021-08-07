import React, { useContext } from "react";
import Base from "./Base";
import { AuthProvider, AuthContest } from "../day24/Store";
const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContest);

  console.log(isAuthenticated);
  return (
    <div>
      <Base>
        <div className='container' style={{ textAlign: "center" }}>
          {" "}
          <h1 style={{ textAlign: "center" }}>
            Home <span>Login to access dashboard and profile</span>
          </h1>
          {!isAuthenticated && (
            <button
              className='btn'
              style={{
                padding: "1em",
                backgroundColor: "blue",
                color: "white",
                fontSize: "1.2em",
              }}
              onClick={() => {
                setIsAuthenticated(true);
              }}
            >
              Login
            </button>
          )}
        </div>
      </Base>
    </div>
  );
};

export default Home;
