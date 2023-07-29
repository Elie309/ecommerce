import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: Props) {
  return (
    <main className={"h-full w-full flex flex-col justify-between" + " " + className}>
      <div>
        <Navigation />
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
