import React from "react";
import Banner from "../components/Banner";
import Featur from "../components/Featur";
import { Blog } from "../components/Blog";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <section>
      <Banner />
      <Featur />
      <Blog/>
      <Footer/>
    </section>
  );
};

export default Home;
