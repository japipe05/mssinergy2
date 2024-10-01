import React from "react";
import type { Metadata } from "next";
import DefaultCusrosel from "@/app/components/ui-components/Curousel/DefaultCusrosel";
import StaticCurosel from "@/app/components/ui-components/Curousel/StaticCurosel";
import SlidingInterval from "@/app/components/ui-components/Curousel/SlidingInterval";
import CustomControl from "@/app/components/ui-components/Curousel/CustomControl";
import Indicators from "@/app/components/ui-components/Curousel/Indicators";
import PauseHover from "@/app/components/ui-components/Curousel/PauseHover";
import SliderContent from "@/app/components/ui-components/Curousel/SliderContent";
import SlideEventChange from "@/app/components/ui-components/Curousel/SlideEventChange";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Carousel",
};


const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Carousel" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DefaultCusrosel />
        </div>
        {/* Static Curosel */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <StaticCurosel />
        </div>
        {/* Sliding Interval */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <SlidingInterval />
        </div>
        {/* Custom Control */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <CustomControl />
        </div>
        {/* Indicators */}
        <div className="col-span-12">
          <Indicators />
        </div>
        {/* Pause On Hover */}
        <div className="col-span-12">
          <PauseHover />
        </div>
        {/* Slider Content */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <SliderContent />
        </div>
        {/* Slide Event Change */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <SlideEventChange />
        </div>
      </div>
    </>
  );
};

export default page;
