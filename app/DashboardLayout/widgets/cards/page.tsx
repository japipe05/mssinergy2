import React from "react";
import BlogCards from "@/app/components/widgets/cards/BlogCards";
import ProductsCards from "@/app/components/widgets/cards/ProductsCards";
import MusicCards from "@/app/components/widgets/cards/MusicCards";
import ProfileCards from "@/app/components/widgets/cards/ProfileCards";
import UserCards from "@/app/components/widgets/cards/UserCards";
import SocialCards from "@/app/components/widgets/cards/SocialCards";
import SettingsCard from "@/app/components/widgets/cards/SettingsCard";
import GiftCards from "@/app/components/widgets/cards/GiftCards";
import PaymentGateway from "@/app/components/widgets/cards/PaymentGatways";
import UpcommingActCard from "@/app/components/widgets/cards/UpcommingActivitiesCard";
import RecentTransactionCard from "@/app/components/widgets/cards/RecentTransactionCard";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Card Widgets",
  description: "Generated by create next app",
};

const CardWidgets = () => {
  return (
    <>
      <ThemeBreadcrumb title="Cards"/>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <BlogCards />
        </div>
        <div className="col-span-12">
          <ProductsCards />
        </div>
        <div className="col-span-12">
          <MusicCards />
        </div>
        <div className="col-span-12">
          <ProfileCards />
        </div>
        <div className="col-span-12">
          <UserCards />
        </div>
        <div className="col-span-12">
          <SocialCards />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <SettingsCard />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <GiftCards />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <PaymentGateway/>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <UpcommingActCard/>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RecentTransactionCard/>
        </div>
      </div>
    </>
  );
};

export default CardWidgets;
