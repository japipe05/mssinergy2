import React from 'react'
import CardBox from "@/app/components/shared/CardBox";
import EditInvoicePage from '@/app/components/apps/invoice/Edit-invoice/index';
import { InvoiceProvider } from '@/app/context/InvoiceContext/index';
import type { Metadata } from "next";
import ThemeBreadcrumb from '@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb';
export const metadata: Metadata = {
  title: "Invoice Edit App",
};
function EditPage() {
    return (
        <InvoiceProvider>
            <ThemeBreadcrumb title="Invoice Edit"  />
            <CardBox>
                <EditInvoicePage />
            </CardBox>
        </InvoiceProvider>
    )
}

export default EditPage;
