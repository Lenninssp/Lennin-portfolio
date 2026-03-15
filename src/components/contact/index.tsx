import { toast } from "sonner";
import { GeneralContentFrame } from "../general/frame/content-frame";
import { RoundedLink } from "../general/rounded-link/rounded-link";
import { TextLine } from "../general/text/text-line";

export const handleEmailClick = () => {
  navigator.clipboard.writeText(process.env.NEXT_PUBLIC_MY_EMAIL ?? "");
  toast("The link has been copied successfully");
};

export const Contact = () => {
  return (
    <GeneralContentFrame className="flex flex-col gap-6">
      <div className="space-y-2">
        <TextLine text="Contact" type="subTitle" color="secondary" />
        <TextLine text="Let’s build something thoughtful" type="title" />
      </div>
      <div className="grid h-full w-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.6rem] border border-white/30 bg-white/35 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]">
          <TextLine
            text="I’m open to collaborating on product-focused frontend, full-stack systems, and experimental developer tools."
            type="text"
          />
        </div>
        <div className="rounded-[1.6rem] border border-white/30 bg-white/35 p-5 shadow-[0_14px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]">
          <TextLine
            text="The fastest way to reach me is by email or LinkedIn. You can also explore my code on GitHub."
            type="text"
          />
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-start gap-3">
        <RoundedLink
          text="lenninssp1021@gmail.com"
          icon="ic:baseline-email"
          onClick={handleEmailClick}
        />

        <RoundedLink
          text="GitHub"
          icon="grommet-icons:github"
          link="https://github.com/Lenninssp"
        />
        <RoundedLink
          text="LinkedIn"
          icon="grommet-icons:linkedin"
          link="https://www.linkedin.com/in/lennin-sabogal/"
        />
      </div>
    </GeneralContentFrame>
  );
};
