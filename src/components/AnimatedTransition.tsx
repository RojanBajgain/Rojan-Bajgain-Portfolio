
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type AnimatedTransitionProps = {
  children: ReactNode;
};

export default function AnimatedTransition({ children }: AnimatedTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`${transitionStage === "fadeIn" ? "animate-[fadeIn_400ms_ease-out]" : "animate-[fadeOut_300ms_ease-out]"} min-h-[85vh]`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
}
