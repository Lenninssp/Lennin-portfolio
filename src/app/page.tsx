"use client";

import { Sidebar } from "@/components/sidebar";
import { ContentRouter } from "@/components/content";
import { BasePage } from "@/components/general/base/base-page";

const Home = () => {
  return (
    <BasePage>
      <div className="relative flex h-full w-full flex-col gap-4 md:flex-row">
        <Sidebar />
        <ContentRouter />
      </div>
    </BasePage>
  );
};

export default Home;
