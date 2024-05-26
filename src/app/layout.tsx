import { Providers } from "@/Providers";
import Nav from "@/components/Nav";
import { ReactNode } from "react";
import "@/styles/globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
