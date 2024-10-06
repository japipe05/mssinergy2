
import React, { useEffect } from "react";
import Landingpage from "../components/landingpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ms Sinergy",
  description: "Pagina principal de Ms sinergy",
};

const page = () => {
  
  return (
    <>
      <Landingpage/>
    </>
  );
};

export default page;
