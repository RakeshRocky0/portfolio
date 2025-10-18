import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "CodSoft",
      period: "Mar 2025 - Apr 2025",
      description:
        "Assisted in building and deploying responsive websites using HTML, CSS, and JavaScript. Gained practical experience in web development best practices.",
      color: "primary",
    },
    {
      title: "Web Developer Intern",
      company: "Website Makers",
      period: "Jan 2025 - Feb 2025",
      description:
        "Worked on web application projects, enhancing front-end and back-end integration skills. Collaborated with team members on real-world projects.",
      color: "accent",
    },
  ];

  const education = {
    degree: "B.Tech in Computer Science",
    institution: "NBKR Institute of Science and Technology",
    period: "Oct 2022 - Present",
    cgpa: "8.03",
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-accent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="glass p-6 rounded-lg border border-primary/30 hover:border-primary/50 transition-all">
                    <h4 className="text-lg font-bold mb-1">{exp.title}</h4>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5"
                />
              </svg>
              Education
            </h3>
            <div className="glass p-6 rounded-lg border border-primary/30 mb-8">
              <h4 className="text-xl font-bold mb-2">{education.degree}</h4>
              <p className="text-primary font-semibold mb-2">{education.institution}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                {education.period}
              </div>
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                <span className="text-sm font-semibold">CGPA: {education.cgpa}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <div className="space-y-3">
              <div className="glass p-4 rounded-lg border border-accent/30 hover:border-accent/50 transition-all">
                <p className="font-semibold mb-1">Web Development Certification</p>
                <p className="text-sm text-muted-foreground">CodSoft</p>
              </div>
              <div className="glass p-4 rounded-lg border border-accent/30 hover:border-accent/50 transition-all">
                <p className="font-semibold mb-1">Critical Thinking & Problem Solving</p>
                <p className="text-sm text-muted-foreground">edX - Apr 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
