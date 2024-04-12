

import React, { useContext } from "react";
import Layout from "../../component/layout/Layout";
import HeroSection from "../../component/heroSection/HeroSection";
import Category from "../../component/category/Category";
import HomePageProductCard from "../../component/homePageProductCard/HomePageProductCard";
import Track from "../../component/track/Track";

// import Loader from "../../component/loader/Loader";

const HomePage = () => {
  

    return (
        <>
    <Layout>
       <HeroSection/>
       <Category/>
       <HomePageProductCard/>
       <Track/>
  
      
    </Layout>
   
       </>     
   
    );
}

export default HomePage;

