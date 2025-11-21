import { useRef, useState } from "react";
import HeroFold from "../home/hero-fold";
import AboutMeFold from "../home/aboutme-fold";
import ProjectsFold from "../home/projects-fold";
import ContactFold from "../home/contact-fold";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingPage from "@/components/LoadingPage";
import Navigation from "@/components/Navigation";
import ThreeRenderer from "@/components/ThreeRenderer";
import CustomCursor from "../components/CustomCursor";
import ExperienceFold from "../home/experience-fold";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const navRef = useRef(null);
  const loading = useRef(null);

  const threeRenderer = ThreeRenderer();
  const {
    isGLTFLoaded,
    isStarFieldLoaded,
    isForceStart,
    Canvas,
    progress,
    starFieldMaterialRef,
  } = threeRenderer;

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  useGSAP(() => {
    if (hasStarted) {
      gsap.to(loading.current, {
        duration: 0.75,
        delay: 0.25,
        opacity: 0,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(loading.current, { display: "none" });
          if (navRef.current) {
            gsap.to(navRef.current, {
              duration: 1,
              opacity: 1,
              y: 0,
              ease: "power2.out",
            });
          }
        },
      });
    }
  }, [hasStarted]);

  useGSAP(() => {
    const elements = [
      heroRef.current,
      aboutMeRef.current,
      experienceRef.current,
      projectsRef.current,
      contactRef.current,
    ];
    if (elements.every((el) => el !== null)) {
      gsap.to(elements, {
        opacity: menuOpen ? 0 : 1,
        duration: 0.5,
        delay: menuOpen ? 0 : 0.75,
        ease: menuOpen ? "power2.in" : "power2.out",
      });
    }

    if (starFieldMaterialRef.current) {
      gsap.to(starFieldMaterialRef.current.uniforms.opacity, {
        value: menuOpen ? 0 : 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      {Canvas()}
      <CustomCursor hasStarted={hasStarted} />
      <ReactLenis root>
        <div ref={loading}>
          <LoadingPage
            progress={progress}
            isGlTFLoaded={isGLTFLoaded}
            isStarFieldLoaded={isStarFieldLoaded}
            isForceStart={isForceStart}
            onStart={handleStart}
          />
        </div>
        <div className="overflow-x-clip">
          <Navigation
            heroRef={heroRef}
            aboutMeRef={aboutMeRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
            contactRef={footerRef}
            navRef={navRef}
            menuOpen={menuOpen}
            onMenuToggle={handleMenuToggle}
            hasStarted={hasStarted}
          />
          {hasStarted && (
            <div className="flex flex-col sm:px-0 md:px-8 xlg:px-0">
              <section ref={heroRef}>
                <HeroFold projectsRef={projectsRef} contactRef={footerRef} />
              </section>
              <section ref={aboutMeRef}>
                <AboutMeFold />
              </section>
              <section ref={experienceRef}>
                <ExperienceFold />
              </section>
              <section ref={projectsRef}>
                <ProjectsFold />
              </section>
              <section ref={contactRef}>
                <ContactFold footerRef={footerRef} />
              </section>
            </div>
          )}
        </div>
      </ReactLenis>
    </>
  );
}
