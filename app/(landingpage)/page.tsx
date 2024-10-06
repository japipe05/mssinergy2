
"use client";
import React, { useEffect } from "react";
import Landingpage from "../components/landingpage";
import type { Metadata } from "next";
import LpBanners from "@/app/components/landingpage/banner/banner";
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";

export default function page()  {
  
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="landingpage">
        <LpBanners />
          {/*
          <ProductDemos />
          <LpBanners />
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
