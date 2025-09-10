"use client"
import { GeneralContentFrame } from "@/components/general/frame/content-frame";
import { RoundedLink } from "@/components/general/rounded-link/rounded-link";
import { TextLine } from "@/components/general/text/text-line";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AlbumRankerComponent = () => {
  const [request, setRequest] = useState<string>();
  const getHi = async() => {
    const response = await fetch(process.env.NEXT_PUBLIC_ALBUM_BACK ?? "");
    setRequest(await response.text())
    return response;
  }
  return (
    <div className=" h-full w-full flex flex-col gap-4">
      <TextLine text="album ranker" type="title" />
      <GeneralContentFrame>
        <TextLine
          type="subTitle"
          text={request ?? ""}
        />

        <RoundedLink icon="" text="Get it" onClick={getHi} className=" h-fit" />

      </GeneralContentFrame>
    </div>
  );
};
