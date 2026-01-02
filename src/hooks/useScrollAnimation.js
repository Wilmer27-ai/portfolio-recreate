import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(
  animationType = "fade-in-up",
  threshold = 0.1,
  delay = 0
) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [isVisible, threshold, delay]);

  return [elementRef, isVisible ? `animate-${animationType}` : ""];
}
