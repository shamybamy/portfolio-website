import PortfolioPhoto from "@/assets/portfolio photo.jpeg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* About me title */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>

      {/* grid of photo and bio*/}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* photo */}
        <div className="mx-auto w-75 h-75 rounded-full overflow-hidden animate-float shadow-[0_0_20px_rgba(139,92,246,0.6)] ring-4 ring-primary/40">
          <img
            src={PortfolioPhoto}
            alt="Profile photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* bio */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            NUS Computer Science Student
          </h3>

          <p className="text-muted-foreground">
            With a strong academic foundation and hands-on experience with software projects. I'm passionate about creating elegant solutions to complex problems. 
          </p>

          <p className="text-muted-foreground">
            In my free time, I enjoy exploring new coding projects and heading to the gym.
          </p>

          {/* resume buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in Touch
            </a>
            <a
              href="#PLACEHOLDER_FOR_RESUME_LINK"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
