
import React from "react";
import HoverTable from '@/app/components/tables/hover/index'
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Hover Table",
  description: "Generated by create next app",
};


const hoverTable = () => {
 
  return (
    <>
      <ThemeBreadcrumb title="Hover Table" />
      <HoverTable/> 
    </>
  );
};

export default hoverTable;
