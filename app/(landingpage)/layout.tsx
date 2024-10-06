import type { Metadata } from "next";
import Landingpage from "../components/landingpage";

export const metadata: Metadata = {
  title: "Ms sinergy",
  description: "Pagina principal de Ms Sinergy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Landingpage/>
      {children}
    </>
  );
}
