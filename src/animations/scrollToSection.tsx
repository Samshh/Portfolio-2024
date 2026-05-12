import gsap from "@/lib/gsap-register";

export function scrollToSection(ref: React.RefObject<HTMLDivElement>) {
  if (ref.current) {
    gsap.to(window, {
      duration: 2,
      scrollTo: {
        y: ref.current,
        offsetY: 70,
      },
      ease: "expo.inOut",
    });
  }
}