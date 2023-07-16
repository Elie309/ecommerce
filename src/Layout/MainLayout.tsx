import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

interface Props{
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="h-full w-full">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
