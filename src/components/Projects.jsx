import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";
import mitProject from "../assets/projects1.png";
import modelProject from "../assets/projects2.png";
import movieProject from "../assets/projects3.jpg";
import artWebsite from "../assets/projects4.png";
import miswebsite from "../assets/projects6.png";
import realestwebsite from "../assets/project7.png";
import renegadewebsite from "../assets/project8.png";

const projectList = [
  {
    img: miswebsite,
    title: "MIS Website",
    description:
      "Full-stack Management Information System with chatbot — React, Node.js, and MySQL.",
    stack: "React · Node · MySQL",
    src: "https://aquacaintacapstone.netlify.app/",
  },
  {
    img: mitProject,
    title: "School Website",
    description:
      "Institutional school website built and maintained with WordPress.",
    stack: "WordPress",
    src: "https://mit-edu.ph",
  },
  {
    img: movieProject,
    title: "Movie Site",
    description:
      "Movie browsing app using a public movie API, React, and Tailwind CSS.",
    stack: "React · Tailwind · API",
    src: "https://shariki569.github.io/Movie-App/",
  },
  {
    img: modelProject,
    title: "Model Site",
    description:
      "Clean model blog layout focused on structure and visual hierarchy.",
    stack: "HTML · CSS",
    src: "https://shariki569.github.io/sepalon-blog-project-1/",
  },
  {
    img: artWebsite,
    title: "Digital Art Portfolio",
    description: "Art portfolio highlighting illustration and creative work.",
    stack: "Carrd",
    src: "https://shariki569.carrd.co/",
  },
  {
    img: realestwebsite,
    title: "Real Estate Website",
    description:
      "Modern property listing site built to showcase sample homes with clean browsing and detail pages.",
    stack: "Next.js · TypeScript · Tailwind · Vercel",
    src: "https://g-homes-estate.vercel.app/",
  },
  {
    img: renegadewebsite,
    title: "Renegade Drums & Percussion",
    description:
      "Brand site for a drums and bugle percussion group with a bold layout and clear event-ready presence.",
    stack: "Next.js · TypeScript · Tailwind · Vercel",
    src: "https://renegade-drums.vercel.app/",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="mx-auto max-w-5xl px-6 py-20 md:pl-24 md:pr-10"
  >
    <Reveal>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        Selected work
      </p>
      <h2 className="section-title text-4xl font-bold text-ink-900">
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-ink-700/80">
        Capstone, client, and personal builds — from WordPress sites to React
        applications.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {projectList.map((project, idx) => (
        <Reveal key={project.title} delay={idx * 0.06}>
          <ProjectItem {...project} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
