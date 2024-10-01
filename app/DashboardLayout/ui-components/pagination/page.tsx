import React from "react";
import type { Metadata } from "next";
import DefaultPagination from "@/app/components/ui-components/Pagination/DefaultPagination";
import PaginationWithIcon from "@/app/components/ui-components/Pagination/PaginationWithIcon";
import TableDataPaginationIcon from "@/app/components/ui-components/Pagination/TableDataPaginationIcon";
import PrevNextPagiantion from "@/app/components/ui-components/Pagination/PrevNextPagiantion";
import PrevNextPagiantionIcon from "@/app/components/ui-components/Pagination/PrevNextPagiantionIcon";
import PaginationControl from "@/app/components/ui-components/Pagination/PaginationControl";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Pagination",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Pagination" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-6 col-span-12">
          <DefaultPagination />
        </div>
        {/* With Icons */}
        <div className="lg:col-span-6 col-span-12">
          <PaginationWithIcon />
        </div>
        {/* Prev Next Pagiantion */}
        <div className="lg:col-span-4 col-span-12">
          <PrevNextPagiantion />
        </div>
        {/* Prev Next Pagiantion Icon */}
        <div className="lg:col-span-4 col-span-12">
          <PrevNextPagiantionIcon />
        </div>
        {/* Table Data PaginationIcon */}
        <div className="lg:col-span-4 col-span-12">
          <TableDataPaginationIcon />
        </div>
        {/* Table Data PaginationIcon */}
        <div className="col-span-12">
          <PaginationControl />
        </div>
      </div>
    </>
  );
};

export default page;