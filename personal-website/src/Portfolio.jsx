import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "JustCoding",
    description: "An interactive coding platform that helps beginners learn coding with practical challenges and live execution.",
    github: "https://github.com/ANU-2524/JustCoding",
    live: "https://just-coding-theta.vercel.app/",
  },
  {
    title: "SnapSendSmile",
    description: "A quick photo capture and sharing tool with a delightful UI for sending smiles across the web.",
    github: "https://github.com/ANU-2524/Snap-Send-Smile",
    live: "https://snap-send-smile.vercel.app/",
  },
  {
    title: "DSA Instructor",
    description: "A platform to master Data Structures & Algorithms with structured lessons, examples, and practice problems.",
    github: "https://github.com/ANU-2524/DSA-Instructor",
    live: "https://onlydsa.netlify.app/",
  },
  {
    title: "MindSpirit",
    description: "A mental wellness platform with resources, meditation tips, and motivational guidance.",
    github: "https://github.com/ANU-2524/MindSpirit",
    live: "https://mind-spirit.netlify.app/",
  },
  {
    title: "Weather App (Python)",
    description: "A Python-based weather application fetching real-time weather data and displaying it in a user-friendly format.",
    github: "https://github.com/ANU-2524/Weather-App-Python",
    live: null,
  },
  {
    title: "CollabNerds (Capstone)",
    description: "A collaborative project management platform enabling users to create, join, and manage tech projects with real-time chat.",
    github: "https://github.com/kalviumcommunity/S_84_ANU_CAPSTONE_CollabNerds",
    live: "https://glowing-melba-4fb0ac.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="portfolio-grid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="portfolio-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div className="portfolio-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
