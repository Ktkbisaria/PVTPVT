import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Green Trace - A web application",
      description:
        "Green Trace is web application designed to promote sustainability within communities with features like carbon footprint calculator, product recommendation, carpooling etc ",
      tags: ["HTML", "JavaScript", "Leaflet", "Selenium"],
      link: "",
    },
    {
      title: "ZenZone ",
      description:
        "ZenZone is a web app to help people curb procastination with self assigned challenges",
      tags: ["Reactjs", "Nodejs", "MongoDB"],
      link: "",
    },
    {
      title: "Gym - Native App",
      description:
        "This is a React Native App that was made to handle the services offered by gym and be available to various gyms according to their preference.",
      tags: ["Nextjs", "Shadcnui", "Npx","Library"],
      link: "",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated selection
            of websites that practically dance across your screen to backend systems 
            smoother than a jazz playlist, I've got a little bit of everything.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
