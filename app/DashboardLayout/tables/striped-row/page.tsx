
import StripedRow from "@/app/components/tables/striped-row/index";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Striped Row Table",
  description: "Generated by create next app",
};


const StrippedRow = () => {
  return (
    <>
      <ThemeBreadcrumb title="Striped Row Table" />
      <StripedRow />
    </>
  );
};

export default StrippedRow;