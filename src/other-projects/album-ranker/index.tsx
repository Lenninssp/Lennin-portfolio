"use client";
import { GeneralContentFrame } from "@/components/general/frame/content-frame";
import { RoundedLink } from "@/components/general/rounded-link/rounded-link";
import { TextLine } from "@/components/general/text/text-line";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Album } from "./types/album";
import { AlbumCard } from "./album-card/album-card";

export const AlbumRankerComponent = () => {
  const [request, setRequest] = useState<Album>();
  const getHi = async () => {
    const response = await fetch(
      "https://www.theaudiodb.com/api/v1/json/123/track.php?m=2112973"
    );
    const data: Album = await response.json();
    console.log(data);
    setRequest(data);
    return response;
  };
  return (
    <div className=" h-full w-full flex flex-col gap-4">
      <div className=" flex w-full justify-between">
        <TextLine text="album ranker" type="title" />
        <div>
          
          <RoundedLink
            icon=""
            text="Get it"
            onClick={getHi}
            className=" h-fit"
          />
        </div>
      </div>
      <GeneralContentFrame className=" gap-3 overflow-auto">
        {request?.track.map((track) => (
          <AlbumCard key={track.idTrack} track={track} />
        ))}
      </GeneralContentFrame>
    </div>
  );
};
