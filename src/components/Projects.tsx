import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioImg from "@/assets/project-portfolio.jpg";
import calculatorImg from "@/assets/project-calculator.jpg";
import gameImg from "@/assets/project-game.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing skills, projects, and experiences with a user-friendly, responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-primary to-accent",
      image: portfolioImg,
    },
    {
      title: "Calculator",
      description:
        "A fully functional calculator with an intuitive interface and responsive design for seamless user experience across devices.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-accent to-pink-500",
      image: calculatorImg,
    },
    {
      title: "Number Guessing Game",
      description:
        "An interactive Python game with efficient algorithms and engaging gameplay, demonstrating problem-solving skills.",
      tech: ["Python"],
      gradient: "from-primary to-purple-500",
      image: gameImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-lg overflow-hidden border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 hover:shadow-2xl"
            >
              {/* Project header with image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
