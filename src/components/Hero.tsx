import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.3})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Animated particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Rakesh Nulu
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-muted-foreground font-light">
            Full Stack Developer & Problem Solver
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Crafting futuristic web experiences with modern technologies
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 justify-center">
            {["React.js", "Node.js", "MongoDB", "Python", "Express.js"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};
