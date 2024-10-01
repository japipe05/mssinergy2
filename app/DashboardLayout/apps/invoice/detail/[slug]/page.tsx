import React from 'react'
import CardBox from "@/app/components/shared/CardBox";
import { InvoiceProvider } from '@/app/context/InvoiceContext/index';
import InvoiceDetail from '@/app/components/apps/invoice/Invoice-detail/index'
import type { Metadata } from "next";
import ThemeBreadcrumb from '@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb';
export const metadata: Metadata = {
  title: "Invoice Details App ",
};


function InvoiceDetailPage() {
    return (
        <InvoiceProvider>
            <ThemeBreadcrumb title="Invoice Details" />
            <CardBox>
                <InvoiceDetail />
            </CardBox>
        </InvoiceProvider>
    )
}
export default InvoiceDetailPage;



