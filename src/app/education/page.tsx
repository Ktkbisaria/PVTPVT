import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
            July 2021 - 2025
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
            <div className="text-2xl font-rubik max-sm:text-xl">
              B.Tech in Computer Science and Engineering, <br /> University of Petroleum & Energy, UK
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              I am currently Studying B.Tech in Computer Science and Engineering, University of Petroleum & Energy. 
              It equiped me with a strong foundation in computer science principles, programming languages, and problem-solving skills.
            </p>
          </FramerWrapper>
        </div>
      </div>

      {/* Experience Section */}
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
            June 2024 - July 2024
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 experience_point">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Xebia — Software Development Intern
            </div>
            <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
              Developed and launched GymMaster, a comprehensive gym management system, using React Native for the frontend and Node.js for the backend.
              Enhanced user experience with a mobile-friendly interface and real-time notifications for class reminders and progress updates.
              Collaborated with a team of developers and designers to ensure the timely delivery of high-quality features.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
