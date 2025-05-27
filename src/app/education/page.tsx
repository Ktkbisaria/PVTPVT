import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            {/* Experience Section */}
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
      </div>

      {/* Coditas Internship (Ongoing) */}
      <div className="w-full h-fit flex">
        <FramerWrapper
          y={0}
          x={-100}
          delay={0.35}
          className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
        >
          Jan 2025 - Present
        </FramerWrapper>
        <div className="relative w-3/4 flex">
          <div className="border-l-4 border-l-[#3c3c3c] pl-4 w-full gap-3 education_point relative">
            {/* Blue dot for ongoing */}
          
            <div className="text-2xl font-rubik max-sm:text-xl">
              Coditas, Pune — DevOps Engineer Intern
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Working on automating CI/CD pipelines, managing cloud infrastructure, and optimizing deployment workflows.
              Contributing to DevOps tooling and infrastructure as code using Docker, Jenkins, GitHub Actions, and Terraform.
              Gaining hands-on experience with scalable deployments and monitoring tools.
            </p>
          </div>
        </div>
      </div>

      {/* Xebia Internship (Completed) */}
      <div className="w-full h-fit flex">
        <FramerWrapper
          y={0}
          x={-100}
          delay={0.4}
          className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
        >
          June 2024 - July 2024
        </FramerWrapper>
        <div className="relative w-3/4 flex">
          <div className="border-l-4 border-l-[#3c3c3c] pl-4 w-full gap-3 experience_point relative">
            {/* No dot for completed */}
            <div className="text-2xl font-rubik max-sm:text-xl">
              Xebia — Software Development Intern
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Developed and launched GymMaster, a comprehensive gym management system, using React Native and Node.js.
              Enhanced user experience with a mobile-friendly interface and real-time class reminders and progress updates.
              Collaborated with developers and designers to deliver high-quality features on time.
            </p>
          </div>
        </div>
      </div>
      {/* Education Section */}
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
          >
            July 2021 - 2025
          </FramerWrapper>
          <div className="relative w-3/4 flex">
            <div className="border-l-4 border-l-[#3c3c3c] pl-4 w-full gap-3  relative">
              {/* No dot here as education is completed */}
              <div className="text-2xl font-rubik max-sm:text-xl">
                B.Tech in Computer Science and Engineering, <br /> University of Petroleum & Energy, UK
              </div>
              <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                I have completed B.Tech in Computer Science and Engineering from the University of Petroleum & Energy Studies.
                It equipped me with a strong foundation in computer science principles, programming languages, and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default educationPage;
