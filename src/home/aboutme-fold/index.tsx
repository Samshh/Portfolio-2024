import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap-register";
import { useRef } from "react";
import { Icon } from "@iconify/react";

export default function AboutMeFold() {
  const trigger = useRef(null);
  const text2 = useRef<HTMLHeadingElement>(null);
  const text3 = useRef(null);
  const text = useGradientText();
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = 2003;
  const birthMonth = 8;
  const birthDay = 4;

  let age = currentYear - birthYear;
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  useGSAP(() => {
    const text2Element = text2.current;
    if (!text2Element) return;

    gsap.from(text3.current, {
      opacity: 0,
      duration: 1,
      delay: 0.25,
      y: 25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    const words = text2Element.textContent?.split(" ") || [];
    text2Element.innerHTML = words
      .map(
        (word) =>
          `<span style="display: inline-block; margin-right: 6px;">${word}</span>`,
      )
      .join(" ");

    gsap.fromTo(
      text2Element.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.02,
        duration: 1,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            document.title = "Sam Dacara | About";
          },
          onLeaveBack: () => {
            document.title = "Sam Dacara";
          },
        },
      },
    );

    gsap.from(".skill-item", {
      opacity: 0,
      y: 30,
      x: -50,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      ref={trigger}
      className="h-full min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 py-4 max-w-7xl mx-auto select-none"
    >
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-[#333333]">
          <span ref={text}>About</span>.
        </h1>
        <h5 ref={text2} className="font-light flex flex-wrap">
          I'm a {age}-year-old front-end developer from the Philippines,
          specializing in seamless 2D & 3D web experiences and animations using
          modern web technologies. Outside of development, I'm also
          passionate about music and anime.
        </h5>
        <div className="w-full h-px bg-[#333333]"></div>
        <em>
          <h6 ref={text3} className="font-normal text-[#737373] leading-6">
            tech / tools:
          </h6>
        </em>
        <div className="flex flex-wrap justify-start items-center gap-2">
          {[
            { icon: "akar-icons:react-fill", label: "React" },
            { icon: "akar-icons:angular-fill", label: "Angular" },
            { icon: "akar-icons:vue-fill", label: "Vue" },
            { icon: "akar-icons:nextjs-fill", label: "Next" },
            { icon: "akar-icons:typescript-fill", label: "TypeScript" },
            { icon: "file-icons:tailwind", label: "Tailwind" },
            { icon: "akar-icons:sass-fill", label: "Sass" },
            { icon: "cib:greensock", label: "GSAP" },
            { icon: "akar-icons:github-fill", label: "GitHub" },
            { icon: "tabler:brand-threejs", label: "Three" },
            { icon: "akar-icons:figma-fill", label: "Figma" },
            { icon: "mdi:jira", label: "Jira" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="skill-item bg-[#0c0c0c] border border-[#333333] px-4 py-1 flex justify-center items-center gap-2"
            >
              <Icon className="text-[20px]" icon={icon} />
              <p className="text-[1rem]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
