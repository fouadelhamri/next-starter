import React from "react";
import type { NextPage } from "next";
import { WebSiteHead } from "@components/WebSiteHead";
const Home: NextPage = () => {
  return (
    <div>
      <WebSiteHead title="Business IT Solutions" />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
