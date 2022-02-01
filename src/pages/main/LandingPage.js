import React, { useState } from "react";
import Query from "../../components/Query";
import QueryResult from "../../components/QueryResult";
import githubLogoSvg from "../../assets/githublogo.svg";

const LandingPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <div className="logo-container">
        <a
          href="https://github.com/krebyancode"
          target="blank"
          style={{ color: "white" }}
        >
          <img
            src={githubLogoSvg}
            alt="logo"
            style={{ height: "30px", display: "block" }}
          ></img>
        </a>
        <a className="link" href="/">
          <code>{"<Krebyancode /> "}</code>
        </a>
      </div>
      <Query setSearch={setSearch} />
      <QueryResult search={search} />
    </div>
  );
};

export default LandingPage;
