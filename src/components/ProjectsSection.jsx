import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: "koto",
    title: "Koto — Japanese Foundations",
    description:
      "A Japanese learning website where users can study pronunciation, prosody and pitch accent, as well as practise hiragana and katakana with FSRS spaced repetition.",
    image: `${import.meta.env.BASE_URL}projects/Koto.png`,
    imageAlt: "Koto artwork featuring a hiragana flashcard and pitch-accent curve",
    tags: ["Next.js", "TypeScript", "React", "AWS", "DynamoDB"],
    githubURL: "https://github.com/shamybamy/koto-japanese-foundations",
  },
  {
    id: "techjam",
    title: "TikTok TechJam — Agent Run Supervisor",
    description:
      "An agent monitoring platform built using Kafka architecture for TikTok TechJam 2026 where users can track AI agent activity, review alerts, and recover stalled runs.",
    image: `${import.meta.env.BASE_URL}projects/TechJam.png`,
    imageAlt: "Agent Run Supervisor dashboard with run health, event history and suspicious-activity alerts",
    tags: ["TypeScript", "Fastify", "Kafka", "SQLite", "React"],
    githubURL: "https://github.com/shamybamy/CodeJam",
  },
  {
    id: 1,
    title: "Finance Website",
    description:
      "A paper trading website where users can look up stock prices, trade virtual shares, and track their portfolio and transaction history.",
    image: `${import.meta.env.BASE_URL}projects/Finance.png`,
    tags: ["Python", "JavaScript", "HTML", "CSS", "Flask", "SQL"],
    githubURL: "https://github.com/shamybamy/Finance",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website where visitors can explore my projects, browse my skills, and learn about my background in software development.",
    image: `${import.meta.env.BASE_URL}projects/Portfolio.png`,
    tags: ["JavaScript", "React", "TailwindCSS", "Vite", "Node.js"],
    githubURL: "https://github.com/shamybamy/portfolio-website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured {""}
          <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my work, from learning tools and web applications to
          backend systems built for a hackathon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border  rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mt-auto pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
                  >
                    <Github size={18} aria-hidden="true" /> View code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shamybamy"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
