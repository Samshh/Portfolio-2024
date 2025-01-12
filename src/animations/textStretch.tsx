import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

interface TextStretchProps {
  triggerRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
  width?: number;
  delay?: number;
}

export default function TextStretch({
  triggerRef,
  children,
  width = 65,
  delay = 0,
}: TextStretchProps) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth <= 445) return;
    gsap.to(textRef.current, {
      scaleX: 2.5,
      duration: 0.5,
      width: width,
      ease: "power1.inOut",
      delay: delay,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div ref={textRef} className="inline-flex items-center justify-center">
      {children}
    </div>
  );
}
