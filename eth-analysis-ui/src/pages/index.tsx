import React from "react";
import Script from "next/script";
import RelayIndexPage from "./relay"; // Ensure this points to the correct file

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to eth-analysis-ui</h1>
      <RelayIndexPage />
    </div>
  );
};

export default Home;
