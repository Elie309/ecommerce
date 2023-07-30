import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: Props) {
  return (
    <>
      <Navigation />
      <main className={`min-h-full w-full ${className}`}>
        {children}
      </main >
      <Footer />
    </>

  )
}
