import type { Metadata } from "next";
import React from "react";
import BasicButtons from "@/app/components/headless-form/Button/BasicButtons";
import LightButtons from "@/app/components/headless-form/Button/LightButtons";
import RoundedOutlineBtn from "@/app/components/headless-form/Button/RoundedOutlineBtn";
import SquareOutlineBtn from "@/app/components/headless-form/Button/SquareOutlineBtn";
import DisableButton from "@/app/components/headless-form/Button/DisableButton";
import DisableOutlineButtons from "@/app/components/headless-form/Button/DisableOutlineButtons";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Button",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Button" />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <BasicButtons />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <LightButtons />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <RoundedOutlineBtn />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <SquareOutlineBtn />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DisableButton />
        </div>
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DisableOutlineButtons />
        </div>
      </div>
    </>
  );
};

export default page;
