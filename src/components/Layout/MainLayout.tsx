import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props{
  children: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: Props) {
  return (
    <main className={"h-full w-full " + className}>
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
