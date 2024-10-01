import React from "react";
import type { Metadata } from "next";
import DefaultAvatar from "@/app/components/ui-components/Avatar/DefaultAvatar";
import BorderAvatar from "@/app/components/ui-components/Avatar/BorderAvatar";
import PlaceholderAvatar from "@/app/components/ui-components/Avatar/PlaceholderAvatar";
import IntitalAvatar from "@/app/components/ui-components/Avatar/IntitalAvatar";
import DotIndicator from "@/app/components/ui-components/Avatar/DotIndicator";
import ImageOverride from "@/app/components/ui-components/Avatar/ImageOverride";
import AvatarWithText from "@/app/components/ui-components/Avatar/AvatarWithText";
import ColorAvatar from "@/app/components/ui-components/Avatar/ColorAvatar";
import StackAvatar from "@/app/components/ui-components/Avatar/StackAvatar";
import SizeAvatar from "@/app/components/ui-components/Avatar/SizeAvatar";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Avatar",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Avatar"  />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <DefaultAvatar />
        </div>
        {/* Border Avatar */}
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <BorderAvatar />
        </div>
        {/* Placeholder Avatar */}
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <PlaceholderAvatar />
        </div>
        {/* Intital Avatar */}
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <IntitalAvatar />
        </div>
        {/* Dot Avatar */}
        <div className="lg:col-span-4 col-span-12">
          <DotIndicator />
        </div>
        {/* Image Override */}
        <div className="lg:col-span-4 col-span-12">
          <ImageOverride />
        </div>
        {/* Avatar With Text */}
        <div className="lg:col-span-4 col-span-12">
          <AvatarWithText />
        </div>
        {/* Color Avatar */}
        <div className="lg:col-span-4 col-span-12">
          <ColorAvatar />
        </div>
        {/* Stack Avatar */}
        <div className="lg:col-span-4 col-span-12">
          <StackAvatar />
        </div>
        {/* Size Avatar */}
        <div className="lg:col-span-4 col-span-12">
          <SizeAvatar />
        </div>
      </div>
    </>
  );
};

export default page;