import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Code,
  Database,
  Settings,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Layers },
  { name: "Node.js", icon: Settings },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind", icon: Layers },
  { name: "Git", icon: GitBranch },
  { name: "Python", icon: Terminal },
  { name: "Docker", icon: Cloud },
  { name: "Firebase", icon: ShieldCheck },
  { name: "AWS", icon: Cloud },
  { name: "TypeScript", icon: Code },
  { name: "GraphQL", icon: Database },
  { name: "Next.js", icon: Zap },
  { name: "SQL", icon: Server },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-300 font-sans">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map(({ name, icon: Icon }, idx) => (
          <Card
            key={idx}
            className="bg-neutral-800 border border-neutral-700 rounded-md cursor-default shadow-sm
              flex items-center justify-center sm:justify-start gap-2 p-3
              transition-transform duration-200 ease-in-out
              hover:scale-[1.03] hover:shadow-md"
          >
            <CardContent className="flex items-center gap-2 p-0">
              <Icon size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-200 whitespace-nowrap">
                {name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
