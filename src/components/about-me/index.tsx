import { GeneralContentFrame } from "../general/frame/content-frame";
import { TextLine } from "../general/text/text-line";
import { GeneralImage } from "../general/media/general-image";
import { RoundedLink } from "../general/rounded-link/rounded-link";

export const AboutMe = () => {
  return (
    <GeneralContentFrame className="flex flex-col items-center gap-8 text-center">
      <GeneralImage
        src="images/personal-picture.jpeg" 
        alt="Lennin Sabogal portrait"
        size={{ width: 200, height: 200 }}
        className="h-36 w-36 animate-float border-4 border-white/60 shadow-[0_18px_50px_rgba(15,23,42,0.12)] md:h-44 md:w-44"
        rounded="rounded-full"
        framed
      />

      <div className="flex max-w-3xl flex-col gap-3">
        <TextLine text="About Me" type="subTitle" color="secondary" className="animate-pop-in" />
        <TextLine text="Lennin Sabogal" type="title" className="animate-pop-in" />
        <TextLine
          text="Full-Stack Developer • Product Builder • Entrepreneur"
          type="subTitle"
          color="secondary"
          className="mx-auto rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 dark:border-orange-300/20 dark:bg-orange-300/10"
        />
      </div>

      <div className="max-w-3xl space-y-4">
        <TextLine
          text="I'm a 22-year-old developer based in Montreal, with 2+ years of experience building scalable front-end and back-end applications. Passionate about creating digital products that are not only functional but also delightful to use."
          type="text"
        />
        <TextLine
          text="Currently, I'm working at Hadaly, where I help build the payment platform and design user-friendly React components. On the side, I'm developing Nidnib, a modular notebook for designers and creatives, and various personal coding projects."
          type="text"
        />
        <TextLine
          text="Beyond coding, I love playing guitar, exploring music, and pushing myself through fitness and learning challenges. My goal is to merge creativity, technology, and entrepreneurship into everything I build."
          type="text"
        />
      </div>

      <div className="flex max-w-2xl flex-col gap-3 rounded-[1.5rem] border border-white/30 bg-white/30 px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03]">
        <TextLine text="Skills:" type="subTitle" />
        <TextLine
          text="React.js/Next.js • Python • Javascript/typescript • Node.js/Deno • AWS • Docker"
          type="smallText"
          color="secondary"
        />
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <RoundedLink
          link="https://github.com/Lenninssp"
          text="GitHub"
          icon="grommet-icons:github"
        />
        <RoundedLink
          link="https://www.linkedin.com/in/lennin-sabogal/"
          text="LinkedIn"
          icon="mdi:linkedin"
        />
        
        <RoundedLink link="pdf/resume.pdf" text="Resume" icon="mdi:file-account" />
      </div>
    </GeneralContentFrame>
  );
};
