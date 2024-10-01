import React from "react";

import type { Metadata } from "next";
import DefaultMegamenu from "@/app/components/ui-components/Megamenu/DefaultMegamenu";
import MegamenuWithIcons from "@/app/components/ui-components/Megamenu/MegamenuWithIcons";
import FullWidthMegamenu from "@/app/components/ui-components/Megamenu/FullWidthMegamenu";
import FullWidthCTA from "@/app/components/ui-components/Megamenu/FullWidthCTA";
import FullWidthWithImage from "@/app/components/ui-components/Megamenu/FullWidthWithImage";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Megamenu",
};
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Mega Menu",
  },
];

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Mega Menu" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="col-span-12">
          <DefaultMegamenu />
        </div>
        {/* With Icons */}
        <div className="col-span-12">
          <MegamenuWithIcons />
        </div>
        {/* Full Width Megamenu */}
        <div className="col-span-12">
          <FullWidthMegamenu />
        </div>
        {/* Full Width CTA */}
        <div className="col-span-12">
          <FullWidthCTA />
        </div>
        {/* Full Width with Image */}
        <div className="col-span-12">
          <FullWidthWithImage />
        </div>
      </div>
    </>
  );
};

export default page;
