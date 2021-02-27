import { useEffect, useState, useRef } from "react";

function FadeInWrapper({ children }) {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={isVisible ? "opacity-100 visible" : "opacity-0  invisible"}
      style={{
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
        willChange: "opacity, visibility",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInWrapper;
