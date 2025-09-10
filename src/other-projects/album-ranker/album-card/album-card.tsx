import { GeneralContentFrame } from "@/components/general/frame/content-frame";
import { Track } from "../types/album";
import { TextLine } from "@/components/general/text/text-line";
import { GeneralImage } from "@/components/general/media/general-image";
import { useEffect, useState } from "react";

interface AlbumCardProps {
  track: Track;
}
const imageAlbum = async (idAlbum: string) => {
  const response = await fetch(
    `https://www.theaudiodb.com/api/v1/json/123/album.php?m=${idAlbum}`
  );
  const data = await response.json();
  console.log("hey lennin", data.album[0].strAlbum3DFace)
  return data.album[0].strAlbum3DFace;
};
export const AlbumCard = ({ track }: AlbumCardProps) => {
  const [imageSong, setImageSong] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      const img = await imageAlbum(track.idAlbum);
      setImageSong(img);
    };
    fetchImage();
  }, [track.idAlbum]);

  return (
    <GeneralContentFrame className=" min-h-fit flex-row gap-3">
      {imageSong && (
        <GeneralImage
          src={imageSong}
          alt={track.strTrack}
          size={{ width: 200, height: 200 }}
          className=" h-full flex items-center"
        />
      )}
      <div className=" h-full w-full flex flex-col">
        <TextLine type="title" text={track.strTrack} />
        <TextLine type="subTitle" color="red" text={track.strAlbum} />
        <TextLine type="subTitle" text={track.strArtist} />
        <TextLine
          type="text"
          text={track.strDescriptionEN ?? "No description"}
        />
        
      </div>
    </GeneralContentFrame>
  );
};
