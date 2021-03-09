import React from "react";
import Banner from "../components/about/banner.component";
import Insights from "../components/about/insights.component";
import Partners from "../components/about/partners.component";
import Practice from "../components/about/practice.page";
import Reviews from "../components/about/reviews.component";
import Vision from "../components/about/vision.component";
import Word from "../components/about/word.component";

function About() {
  return (
    <div>
      <Banner />
      <Vision />
      <Word />
      <Practice />
      <Partners />
      {/* <Reviews /> */}
      <Insights />
    </div>
  );
}

export default About;
