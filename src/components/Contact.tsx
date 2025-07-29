"use client";

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Copy } from 'lucide-react'; // Importing necessary icons

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState(''); // State to manage copy feedback

  const emailAddress = "your.email@example.com"; // Replace with your actual email

  const handleCopyEmail = () => {
    // Use document.execCommand('copy') as navigator.clipboard.writeText() might not work in some iframe environments
    const el = document.createElement('textarea');
    el.value = emailAddress;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setCopyStatus('Copied!');
    setTimeout(() => {
      setCopyStatus('');
    }, 2000); // Clear feedback after 2 seconds
  };

  const socialLinks = [
    { name: "GitHub", icon: <Github size={24} />, url: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <Linkedin size={24} />, url: "https://linkedin.com/in/yourprofile" },
    { name: "Twitter", icon: <Twitter size={24} />, url: "https://twitter.com/yourhandle" },
  ];

  return (
    <div className='flex flex-col justify-start text-white font-inter'>
      <h1 className='text-3xl font-bold mb-6'>
        Contact Me
      </h1>

      <div className="space-y-6"> {/* Adjusted spacing */}
        {/* Email Section - Clickable email for copy */}
        <div className="flex items-center gap-3">
          <Mail size={24} className="text-neutral-400" />
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-lg text-neutral-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50 cursor-pointer"
            aria-label="Click to copy email address"
          >
            <span>{emailAddress}</span>
            {copyStatus && <span className="text-sm text-neutral-400 ml-2">{copyStatus}</span>} {/* Show copy status next to email */}
          </button>
        </div>

        {/* Socials Section - Direct links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Find Me On</h2>
          <div className="flex flex-wrap gap-6 justify-start"> {/* Adjusted gap */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group"
                aria-label={`Link to ${social.name}`}
              >
                {social.icon}
                <span className="text-lg font-medium group-hover:underline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
