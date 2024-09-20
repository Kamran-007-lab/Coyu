import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FreshDrops from "./FreshDrops";
import CoyuAssurance from "./CoyuAssurance";
import ShopByCategories from "./ShopByCategories";
import VideoCard from "./VideoCard";
import ShopByOccasions from "./ShopByOccasions";
import BestSellers from "./BestSellers";
import OurStores from "./OurStores";
import StoreEvents from "./StoreEvents";
import Instagram from "./Instagram";
import Social from "./Social";
import Brands from "./Brands";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FreshDrops />
      <CoyuAssurance />
      <ShopByCategories />
      <VideoCard />
      <ShopByOccasions />
      <Brands />
      <BestSellers />
      <OurStores />
      <StoreEvents />
      <Instagram />
      <Social />
      <Footer/>

      <div className={`fixed bottom-0 w-full`}>
        <MenuBar />
      </div>
    </div>
  );
};

export default Home;
