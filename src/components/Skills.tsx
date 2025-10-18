import { useState } from "react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 75 },
        { name: "Python", level: 70 },
      ],
    },
    {
      category: "Tools & Other",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass p-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-primary">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills tags */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "REST APIs",
              "Responsive Design",
              "Version Control",
              "Debugging",
              "Critical Thinking",
              "Agile",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm border border-accent/30 hover:border-accent/60 transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
