import { useGradientText } from "@/animations/useGradientText";
import { Accordion } from "@/components/ui/accordion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectAccordion from "./components/ProjectAccordion";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectsFold() {
  const trigger = useRef(null);
  const text = useGradientText();
  const accordionRef1 = useRef(null);
  const accordionRef2 = useRef(null);
  const accordionRef3 = useRef(null);
  const accordionRef4 = useRef(null);
  const accordionRef5 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Projects";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | Career";
        },
      },
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      [
        accordionRef1.current,
        accordionRef2.current,
        accordionRef3.current,
        accordionRef4.current,
        accordionRef5.current,
      ],
      { opacity: 0, y: 50, x: -50 },
      { opacity: 1, y: 0, x: 0, stagger: 0.15, duration: 1, ease: "power3.out" }
    );
  });

  return (
    <div
      ref={trigger}
      className="h-full min-h-screen flex flex-col items-start justify-center px-4 py-4 max-w-[1280px] mx-auto gap-[1rem] select-none"
    >
      <div className="w-full h-auto flex flex-col gap-[1rem]">
        <h1>
          <span ref={text}>Projects</span>
          <span className="text-[#333333]">.</span>
        </h1>
      </div>
      <div className="flex flex-col w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <ProjectAccordion
            ref={accordionRef1}
            value="item-1"
            title="Naonao.ph"
            role="Front-end Developer"
            link="https://naonao.ph/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
            ]}
          >
            Get ready to supercharge your networking experience with Naonao.
            Dive into a world where seamless networking meets exciting event
            planning, all at your fingertips!
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef2}
            value="item-2"
            title="CHEDˣ2.0"
            role="Lead Front-end Developer"
            link="https://chedx2024.usep.edu.ph/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
              { icon: "cib:greensock", label: "GSAP" },
            ]}
          >
            The CHEDˣ2.0 Summit is an innovative 2-day event happening from
            December 4-5, 2024, at the SMX Convention Center, Davao City.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef3}
            value="item-3"
            title="DurianPy"
            role="Senior Front-end Developer"
            link="https://www.durianpy.org/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "akar-icons:nextjs-fill", label: "Next" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
            ]}
          >
            DurianPy is a community for Python enthusiasts to learn, share, and
            connect through monthly meetups, workshops, and events.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef4}
            value="item-4"
            title="MMCM OPED"
            role="Lead Front-end Developer"
            link="https://mmcm-ocp.com/"
            linkLabel="Website"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "akar-icons:sass-fill", label: "Sass" },
            ]}
          >
            A website that helps students at Mapúa Malayan Colleges Mindanao to
            find the best companies for their internship.
          </ProjectAccordion>
          <ProjectAccordion
            ref={accordionRef5}
            value="item-5"
            title="ChainMed"
            role="Front-end Developer & Designer"
            link="https://github.com/Samshh/Hackathon-Project---The-Launchpad"
            linkLabel="Repository"
            techStack={[
              { icon: "akar-icons:react-fill", label: "React" },
              { icon: "file-icons:tailwind", label: "Tailwind" },
              { icon: "cryptocurrency:icp", label: "ICP" },
            ]}
          >
            ChainMed was our entry for the PBWx Davao hackathon (2nd Place).
            Using React and Web3 technologies, we built a secure application for
            automating healthcare.
          </ProjectAccordion>
        </Accordion>
      </div>
    </div>
  );
}
