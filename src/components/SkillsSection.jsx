import cPhoto from "@/assets/C-icon.png";
import pythonPhoto from "@/assets/Python-logo.svg";
import htmlPhoto from "@/assets/HTML5-logo.svg";
import jsPhoto from "@/assets/JS.svg";
import cssPhoto from "@/assets/CSS-logo.svg";
import sqlPhoto from "@/assets/SQLite.svg";
import jinjaPhoto from "@/assets/Jinja-logo.svg";
import bootstrapPhoto from "@/assets/Bootstrap-logo.svg";
import flaskPhoto from "@/assets/palletsprojects_flask-icon.svg";
import reactPhoto from "@/assets/React-logo.svg";
import tailwindPhoto from "@/assets/Tailwind-logo.svg";
import vitePhoto from "@/assets/Vite-logo.svg";
import nodejsPhoto from "@/assets/Nodejs-logo.svg";
import gitPhoto from "@/assets/Git-logo.svg";

const skills = [
  { name: "C", logo: cPhoto },
  { name: "Python", logo: pythonPhoto },
  { name: "HTML", logo: htmlPhoto },
  { name: "JavaScript", logo: jsPhoto },
  { name: "CSS", logo: cssPhoto},
  { name: "SQLite", logo: sqlPhoto },
  { name: "Jinja", logo: jinjaPhoto },
  { name: "Bootstrap", logo: bootstrapPhoto },
  { name: "Flask", logo: flaskPhoto },
  { name: "React", logo: reactPhoto },
  { name: "Tailwind", logo: tailwindPhoto },
  { name: "Vite", logo: vitePhoto },
  { name: "Node.js", logo: nodejsPhoto },
  { name: "Git", logo: gitPhoto },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Title */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-5 rounded-xl shadow-xs card-hover flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
            >
              {/* logo */}
              {skill.logo && (
                <div className="transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:shadow-md">
                  <img
                    src={skill.logo}
                    alt="html logo"
                    className="w-14 h-14 md:w-18 md:h-18 object-contain"
                  />
                </div>
              )}
              {/* logo name */}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
