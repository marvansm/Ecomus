"use client";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "@/Featured/Components/Loading";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (globalLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-9999">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
