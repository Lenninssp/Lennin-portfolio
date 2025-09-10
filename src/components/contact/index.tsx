import { toast } from "sonner";
import { GeneralContentFrame } from "../general/frame/content-frame";
import { RoundedLink } from "../general/rounded-link/rounded-link";
import { TextLine } from "../general/text/text-line";
import { Button } from "../ui/button";

export const handleEmailClick = () => {
  navigator.clipboard.writeText(process.env.NEXT_PUBLIC_MY_EMAIL ?? "");
  toast("The link has been copied successfully");
};

export const Contact = () => {
  return (
    <GeneralContentFrame className=" flex flex-col gap-4">
      <TextLine text="Contact me" type="title" />
      <div className=" h-full flex flex-col justify-start">
        <RoundedLink
          text="lenninssp1021@gmail.com"
          icon="ic:baseline-email"
          className=" cursor-pointer"
          onClick={handleEmailClick}
        />

        <RoundedLink
          text="Github"
          icon="grommet-icons:github"
          link="https://github.com/Lenninssp"
        />
        <RoundedLink
          text="Linkedln"
          icon="grommet-icons:linkedin"
          link="https://www.linkedin.com/in/lennin-sabogal/"
        />
      </div>
    </GeneralContentFrame>
  );
};
