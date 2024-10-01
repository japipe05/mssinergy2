import React from "react";
import type { Metadata } from "next";
import DefaultNav from "@/app/components/ui-components/Navbar/DefaultNav";
import CTANav from "@/app/components/ui-components/Navbar/CTANav";
import NavWithDropdown from "@/app/components/ui-components/Navbar/NavWithDropdown";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Navbar",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Navbar" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default Navbar*/}
        <div className="col-span-12">
          <DefaultNav />
        </div>
        {/* CTA Navbar */}
        <div className="col-span-12">
          <CTANav />
        </div>
         {/* Nav With Dropdown */}
         <div className="col-span-12">
          <NavWithDropdown />
        </div>
      </div>
    </>
  );
};

export default page;
