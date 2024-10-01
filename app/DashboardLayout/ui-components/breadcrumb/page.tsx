import React from "react";
import type { Metadata } from "next";
import Default from "@/app/components/ui-components/Breadcrumb/Default";
import BackgroundBread from "@/app/components/ui-components/Breadcrumb/BackgroundBread";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Breadcrumb",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Breadcrumb"  />
      <div className="grid grid-cols-12 gap-6">
        {/* Default  */}
        <div className="col-span-12">
          <Default />
        </div>
        {/* background color  */}
        <div className="col-span-12">
          <BackgroundBread />
        </div>
      </div>
    </>
  );
};

export default page;
