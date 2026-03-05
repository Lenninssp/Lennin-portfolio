import { usePageContext } from "@/contexts/selected-page"
import { PagesEnum } from "@/enums/pages"
import { Projects } from "../projects";
import { AboutMe } from "../about-me";
import { Contact } from "../contact";

export const ContentRouter = () => {
  const { selectedPage} = usePageContext()

  switch (selectedPage) {

    case PagesEnum.ABOUT_ME:
      return <AboutMe />
      break;

    case PagesEnum.PROJECTS:
      return <Projects />
      break;

    case PagesEnum.CONTACT:
      return <Contact />
      break;
  }
}