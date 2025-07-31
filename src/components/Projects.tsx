import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; // Assuming all are correctly imported
import { Card, CardContent } from "./ui/card";
import { Github, ExternalLink, PlusCircle } from "lucide-react";

const projectsData = [
  {
    title: "Trip- Finder",
    description:
      "Trip Finder is a user-friendly travel platform that helps users plan, book, and manage their trips with ease,offering personalized recommendations and real-time updates.",
    githubLink: "https://github.com/midhun0987/TripFinder",
    liveLink: "https://project-alpha.vercel.app/",
  },
  {
    title: "IMS (inventory management)",
    description:
      "Inventory management app for real-time stock tracking and multi-location control.",
    githubLink: "https://github.com/midhun0987/microproject",
    liveLink: "https://project-beta.netlify.app/",
  },
  {
    title: "Loading...",
    description:
      "Fresh and groundbreaking projects are on the horizon. Keep an eye out for upcoming innovations!",
    githubLink: null,
    liveLink: null,
  },
  {
    title: "Coming Soon...",
    description:
      "Exciting new projects are currently under development. Stay tuned for more innovative creations!",
    githubLink: null,
    liveLink: null,
    isComingSoon: true,
  },
];

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-300 font-sans">
      <Carousel opts={{ align: "start" }} className="w-full relative">
        <CarouselContent className="-ml-2">
          {projectsData.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="bg-neutral-800 border border-neutral-700 shadow-md rounded-lg overflow-hidden h-56 flex flex-col">
                  <CardContent className="flex flex-col p-4 gap-3 flex-grow justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300 flex-grow overflow-hidden text-ellipsis">
                      {project.description}
                    </p>
                    <div className="flex justify-end gap-3 mt-2">
                      {project.isComingSoon ? (
                        <PlusCircle
                          size={20}
                          className="text-neutral-400"
                          aria-label="Coming Soon"
                        />
                      ) : (
                        <>
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-400 hover:text-white transition-colors duration-200"
                              aria-label={`${project.title} GitHub Repository`}
                            >
                              <Github size={20} />
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-400 hover:text-white transition-colors duration-200"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-900/50 border border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md p-2 transition-colors duration-200"
          aria-label="Previous project"
        />
        <CarouselNext
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-900/50 border border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md p-2 transition-colors duration-200"
          aria-label="Next project"
        />
      </Carousel>
    </div>
  );
};

export default Projects;
