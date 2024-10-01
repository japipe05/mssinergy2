
import React from "react";
import ApexDoughnutChart from "@/app/components/charts/ApexDoughnutChart";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Doughnut & Pie Chart",
  description: "Generated by create next app",
};
const DoughnutChart = () => {

  return (
    <>
      <ThemeBreadcrumb title="Chart Apex Doughtnut" />
      <ApexDoughnutChart/>
    </>
  );
};

export default DoughnutChart;