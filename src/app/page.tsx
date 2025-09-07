"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

const Home = () => {

  const [text, setText] = useState(">");

  return (
    <div className=" w-full flex flex-col">
     {"> Lennin s portfolio"}
     <Input onChange={(e) => setText(e.target.value)} content={text} placeholder=">" className="bg-transparent border-0 "/>
    </div>
  )
}

export default Home;