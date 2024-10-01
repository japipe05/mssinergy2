import React from "react";

import type { Metadata } from "next";
import OrdinaryForm from "@/app/components/form-components/Form-Layouts/OrdinaryForm";
import InputVariants from "@/app/components/form-components/Form-Layouts/InputVariants";
import DefaultForm from "@/app/components/form-components/Form-Layouts/DefaultForm";
import BasicHeaderForm from "@/app/components/form-components/Form-Layouts/BasicHeaderForm";
import ReadOnlyForm from "@/app/components/form-components/Form-Layouts/ReadOnlyForm";
import DisableForm from "@/app/components/form-components/Form-Layouts/DisableForm";
import FormWithLeftIcon from "@/app/components/form-components/Form-Layouts/FormWithLeftIcon";
import FormWithRightIcon from "@/app/components/form-components/Form-Layouts/FormWithRightIcon";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Form Layouts",
};
const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Form Layout" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <OrdinaryForm />
        </div>
        <div className="col-span-12">
          <InputVariants />
        </div>
        <div className="col-span-12">
          <DefaultForm />
        </div>
        <div className="col-span-12">
          <BasicHeaderForm />
        </div>
        <div className="col-span-12">
          <ReadOnlyForm />
        </div>
        <div className="col-span-12">
          <DisableForm />
        </div>
        <div className="lg:sm:col-span-6 col-span-12">
          <FormWithLeftIcon />
        </div>
        <div className="lg:sm:col-span-6 col-span-12">
          <FormWithRightIcon />
        </div>
      </div>
    </>
  );
};

export default page;
