"use client";

import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { ContentRouter } from "@/components/content";
import { BasePage } from "@/components/general/base/base-page";

const Home = () => {
  return (
    <BasePage>
      <div className=" w-full flex flex-row gap-4 relative">
        <Sidebar />
        <ContentRouter />
      </div>
    </BasePage>
  );
};

export default Home;
