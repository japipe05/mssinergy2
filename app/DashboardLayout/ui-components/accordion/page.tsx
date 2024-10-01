import React from "react";
import BasicAccordion from "@/app/components/ui-components/Accordian/BasicAccordion";
import FlushAccordian from "@/app/components/ui-components/Accordian/FlushAccordion";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Accordion",
};


const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Accordion" />
      <div className="grid grid-cols-12 gap-6">
        {/* Basic */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <BasicAccordion />
        </div>
        {/* Flush */}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <FlushAccordian />
        </div>
      </div>
    </>
  );
};

export default page;