import { GeneralContentFrame } from "../general/frame/content-frame";
import { TextLine } from "../general/text/text-line";
import { GeneralImage } from "../general/media/general-image";
import { RoundedLink } from "../general/rounded-link/rounded-link";

export const AboutMe = () => {
  return (
    <GeneralContentFrame className="flex flex-col items-center gap-6 text-center">
      <GeneralImage
        src="images/personal-picture.jpeg" 
        alt="Lennin Sabogal portrait"
        size={{ width: 200, height: 200 }}
        className="w-32 h-32"
        rounded="rounded-full"
        framed
      />

      <div className="flex flex-col gap-2">
        <TextLine text="About Me" type="title" />
        <TextLine text="Lennin Sabogal" type="title" />
        <TextLine
          text="Full-Stack Developer • Product Builder • Entrepreneur"
          type="subTitle"
          color="secondary"
        />
      </div>

      <div className="max-w-xl space-y-3">
        <TextLine
          text="I'm a 21-year-old developer based in Montreal, with 2+ years of experience building scalable front-end and back-end applications. Passionate about creating digital products that are not only functional but also delightful to use."
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

      <div className="flex flex-col gap-2">
        <TextLine text="Skills:" type="subTitle" />
        <TextLine
          text="React.js/Next.js • Python • Javascript/typescript • Node.js/Deno • AWS • Docker"
          type="smallText"
          color="secondary"
        />
      </div>

      <div className="flex gap-4 mt-4">
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
