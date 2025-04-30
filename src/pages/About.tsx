import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePortfolioData, Profile } from "@/services/dataService";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/ExperienceSection";
import Background from "@/components/Background";
import ScrollReveal from "@/components/ScrollReveal";
import TiltEffect from "@/components/TiltEffect";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const About: React.FC = () => {
  const [profile] = usePortfolioData<Profile>("profile");

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <Background />
      <ThemeSwitcher />

      <main className="flex-grow">
        <section className="bg-background/80 backdrop-blur-sm py-16 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-accent/10 blur-xl"></div>

          <div className="section-container relative z-10">
            <ScrollReveal>
              <h1 className="section-title text-center gradient-text text-5xl">
                About Me
              </h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <ScrollReveal threshold={0.2} delay={100}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl animate-pulse"></div>
                  <img
                    src={`${import.meta.env.BASE_URL}dev.jpeg`}
                    alt={profile.name}
                    className="rounded-lg shadow-lg w-full max-w-md mx-auto relative z-10 tilt-card"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      (e.target as HTMLImageElement).src = `${
                        import.meta.env.BASE_URL
                      }placeholder.svg`;
                    }}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal threshold={0.3} delay={300}>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 gradient-text">
                    {profile.name} - {profile.title}
                  </h2>
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    {profile.bio} I'm passionate about building
                    high-performance, maintainable backend systems that solve
                    real-world problems. With expertise in Node.js and database
                    design, I focus on creating reliable and secure APIs that
                    power exceptional user experiences.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md tilt-card">
                      <h3 className="font-semibold text-foreground mb-2 animated-border inline-block">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        {profile.location}
                      </p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md tilt-card">
                      <h3 className="font-semibold text-foreground mb-2 animated-border inline-block">
                        Experience
                      </h3>
                      <p className="text-muted-foreground">
                        {profile.experience}
                      </p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md tilt-card">
                      <h3 className="font-semibold text-foreground mb-2 animated-border inline-block">
                        Email
                      </h3>
                      <p className="text-muted-foreground">{profile.email}</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-md tilt-card">
                      <h3 className="font-semibold text-foreground mb-2 animated-border inline-block">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">{profile.phone}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Skills />
        <ExperienceSection />
      </main>

      <Footer />
      <TiltEffect />
    </div>
  );
};

export default About;
