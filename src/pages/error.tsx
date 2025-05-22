import { useGradientText } from "@/animations/useGradientText";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Error() {
  const navigate = useNavigate();
  const textRef = useGradientText();

  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.from(pageRef.current, {
      duration: 0.5,
      opacity: 0,
      delay: 0.5,
      ease: "expo.inOut",
    });
  });

  useEffect(() => {
    document.title = "Sam Dacara | Error";
  }, []);

  return (
    <div
      ref={pageRef}
      className="relative w-full h-screen justify-center items-center flex flex-col select-none gap-[0.5rem]"
    >
      <em className="text-center text-[#535353] flex flex-col gap-[0.5rem]">
        <p className="text-[0.7rem]">(To awaken the star)</p>
        <h4 className="font-thin font-special astra">Ad astram excitandam</h4>
      </em>
      <Button className="px-[2rem]" onClick={() => navigate("/")}>
        <h6 ref={textRef} className="font-light">
          RELOAD
        </h6>
      </Button>
      <div className="fixed bottom-4 text-center px-[1rem]">
        <p className="font-normal font-serif text-[1rem] md:text-[1.25rem] text-[#535353]">
          Error
        </p>
        <p className="font-normal font-serif text-[0.6rem] md:text-[0.8rem] text-[#535353]">
          | Enable graphics acceleration |
        </p>
      </div>
    </div>
  );
}
