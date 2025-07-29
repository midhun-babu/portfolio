import React from "react";
import { Card, CardContent } from "./ui/card"; // Assuming these are correctly imported from your UI library
import {
  Code,
  Database,
  Settings,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Server,
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <Code size={18} color="#F7DF1E" />, color: "#F7DF1E" }, // Yellow
    { name: "React", icon: <Layers size={18} color="#61DAFB" />, color: "#61DAFB" }, // Light Blue
    { name: "Node.js", icon: <Settings size={18} color="#339933" />, color: "#339933" }, // Green
    { name: "MongoDB", icon: <Database size={18} color="#47A248" />, color: "#47A248" }, // Dark Green
    { name: "Tailwind", icon: <Layers size={18} color="#38B2AC" />, color: "#38B2AC" }, // Teal
    { name: "Git", icon: <GitBranch size={18} color="#F05033" />, color: "#F05033" }, // Orange-Red
    { name: "Python", icon: <Terminal size={18} color="#3776AB" />, color: "#3776AB" }, // Blue
    { name: "Docker", icon: <Cloud size={18} color="#2496ED" />, color: "#2496ED" }, // Bright Blue
    { name: "Firebase", icon: <ShieldCheck size={18} color="#FFCA28" />, color: "#FFCA28" }, // Amber
    { name: "AWS", icon: <Cloud size={18} color="#FF9900" />, color: "#FF9900" }, // Orange
    { name: "TypeScript", icon: <Code size={18} color="#3178C6" />, color: "#3178C6" }, // Darker Blue
    { name: "GraphQL", icon: <Database size={18} color="#E10098" />, color: "#E10098" }, // Pink
    { name: "Next.js", icon: <Zap size={18} color="#000000" />, color: "#000000" }, // Black (often monochrome)
    { name: "SQL", icon: <Server size={18} color="#4479A1" />, color: "#4479A1" }, // Steel Blue
    { name: "Oombitharam", icon: <Server size={18} color="#4479A1" />, color: "#4479A1" }, // Steel Blue
  ];

  return (
    <div className="text-white font-inter">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"> {/* Reduced gap slightly */}
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="flex items-center justify-center sm:justify-start gap-1 bg-neutral-700 border border-neutral-700 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out rounded-md cursor-pointer" // Reduced padding, rounded-md
          >
            <CardContent className="flex items-center gap-1 p-1.5"> {/* Reduced gap here too */}
              {skill.icon}
              <span className="text-xs font-medium text-gray-200 whitespace-nowrap">{skill.name}</span> {/* Smaller text for compactness */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
