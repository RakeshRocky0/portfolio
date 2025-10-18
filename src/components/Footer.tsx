import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            RN
          </span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          © {currentYear} Rakesh Nulu. Crafted with{" "}
          <Heart className="w-4 h-4 text-destructive fill-current animate-pulse" /> and code
        </p>
        <div className="mt-4 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>
    </footer>
  );
};
