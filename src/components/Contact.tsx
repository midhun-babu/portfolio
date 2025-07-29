"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Copy } from "lucide-react";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("");

  const emailAddress = "your.email@example.com"; // Replace with your actual email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    });
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com/in/yourprofile" },
    { name: "Twitter", icon: <Twitter size={24} />, url: "https://twitter.com/yourhandle" },
  ];

  return (
    <div className="max-w-md mx-auto px-4 sm:px-0 font-sans text-gray-300">
      {/* Email Section */}
      <div className="mb-10 text-center">
        <button
          onClick={handleCopyEmail}
          aria-label="Copy email address to clipboard"
          className="group inline-flex items-center gap-3 px-6 py-3 bg-neutral-800 border border-neutral-700 rounded-lg shadow-sm
                     hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     transition-colors duration-300 cursor-pointer"
          type="button"
        >
          <Mail size={24} className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
          <span className="text-lg font-medium text-white select-text">{emailAddress}</span>
          <Copy size={20} className="text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
        </button>
        {copyStatus && (
          <p
            className="mt-2 text-sm text-indigo-400 font-semibold"
            aria-live="polite"
            role="status"
          >
            {copyStatus}
          </p>
        )}
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-200 border-b border-gray-700 pb-2 w-max mx-auto mb-6">
          Find Me Online
        </h2>
        <ul className="flex justify-center gap-12">
          {socialLinks.map(({ name, icon, url }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${name}`}
                className="flex flex-col items-center text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                {icon}
                <span className="mt-1 text-sm font-medium select-text">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
