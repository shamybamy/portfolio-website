import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-24">
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center gap-4 text-center">
        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:samuelwong0305@example.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/shamybamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-wong-008978347/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp />
        </a>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Samuel Wong. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
