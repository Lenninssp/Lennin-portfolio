"use client";

import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";
import { ContentRouter } from "@/components/content";

const Home = () => {

  return (
    <div className=" w-full flex flex-row gap-4 relative">
      <Sidebar />
      <ContentRouter />
    </div>
  )
}

export default Home;