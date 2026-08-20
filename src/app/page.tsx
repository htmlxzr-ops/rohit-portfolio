import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/home/Stats";
import AboutPreview from "@/components/sections/home/AboutPreview";
import SkillsPreview from "@/components/sections/home/SkillsPreview";
import ProjectsPreview from "@/components/sections/home/ProjectsPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <Footer />
    </>
  );
}
