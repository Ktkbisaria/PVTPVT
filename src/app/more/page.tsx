import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/FramerWrapper";

const morePage = () => {
  const morelink = [
    {
      title: "Mounting AWS EFS on Ubuntu",
      description: "Step-by-step guide to mount an AWS Elastic File System on a Linux instance.",
      link: "https://medium.com/@ktkbisaria100/mounting-an-aws-efs-elastic-file-system-on-a-linux-ubuntu-instance-5aadc89833ab",
    },
    {
      title: "Rethinking Hiring Practices",
      description: "What’s the Best Way to Evaluate Developers in 2024?",
      link: "https://medium.com/@ktkbisaria100/whats-the-best-way-to-evaluate-developers-in-2024-a6c486199bfd",
    },
    {
      title: "Balancing Code and Creativity",
      description: "Navigating the AI-Driven Development Landscape",
      link: "https://medium.com/@ktkbisaria100/balancing-code-and-creativity-navigating-the-ai-driven-development-landscape-d8fa6f9fa844",
    },
  ];


  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
      <div className="h-auto w-full flex flex-wrap gap-3 p-2">
        {morelink.map((value, indx) => {
          
          return (
            <FramerWrapper key={indx} className="max-w-[32%] max-lg:max-w-full" y={0} scale={0.8} delay={indx/4} duration={0.15}>
            <Card  className="w-full">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-poppins">{value.description}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={value.link}
                  target="blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "w-full gap-3"
                  )}
                >
                  {" "}
                  <ExternalLink />
                  Visit here
                </Link>
              </CardFooter>
            </Card>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default morePage;
