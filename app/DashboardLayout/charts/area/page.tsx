
import React from "react";
import ApexAreaChart from "@/app/components/charts/ApexAreaChart";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Area Chart",
  description: "Generated by create next app",
};

const AreaChart = () => {

  return (
    <>
      <ThemeBreadcrumb title="Chart Apex Area" />
      <ApexAreaChart/>
    </>
  );
};

export default AreaChart;