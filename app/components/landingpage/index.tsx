"use client";
import React, { useEffect } from "react";
import { Flowbite } from "flowbite-react";
import LpHeader from "@/app/components/landingpage/header/Header";
import customTheme from "@/utils/theme/custom-theme";
import LpBanners from "@/app/components/landingpage/banner/banner";
import ProductDemos from "@/app/components/landingpage/productdemos/demos";
import AllFeatures from "@/app/components/landingpage/features/AllFeatures";
import Ticket from "@/app/components/landingpage/ticket/Ticket";
import Footer from "@/app/components/landingpage/footer/Footer";
import AOS from "aos";
import 'aos/dist/aos.css';
import AppsDemos from "./productdemos/AppsDemos";

const Landingpage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="landingpage">
          <LpHeader />
          <LpBanners />
          {/*<ProductDemos />
          <AppsDemos/>
          <AllFeatures />
          <Ticket />
          <Footer />
          */}
        </div>
      </Flowbite>
    </>
  );
};

export default Landingpage;