import { Code2, Lightbulb, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building modern web applications with React, Node.js, and MongoDB",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical approach to creating innovative solutions",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and experience in real-world projects",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse-glow" />
                <div className="relative w-full h-full glass rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    RN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio section */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg border border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Hi, I'm Rakesh Nulu</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A dedicated B.Tech Computer Science student at NBKR Institute of Science and
                Technology with a CGPA of 8.03. I'm passionate about creating innovative web
                solutions and solving complex problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience through internships at Website Makers and CodSoft, I've
                developed strong skills in full-stack development, specializing in the MERN stack
                and modern web technologies.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
