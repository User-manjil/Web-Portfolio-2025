import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const HoverPopup = ({ children, img }) => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const lerpPos = useRef({ x: 0, y: 0 });
  const leaveTimeout = useRef(null);

  // Magnetic follow animation (lerp loop)
  useEffect(() => {
    const animate = () => {
      lerpPos.current.x += (mouse.x - lerpPos.current.x) * 0.12;
      lerpPos.current.y += (mouse.y - lerpPos.current.y) * 0.12;

      if (imgRef.current) {
        gsap.set(imgRef.current, {
          x: lerpPos.current.x,
          y: lerpPos.current.y,
        });
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [mouse]);

  const handleEnter = () => {
    clearTimeout(leaveTimeout.current);

    if (!imgRef.current) return;

    gsap.to(imgRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const handleMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left + 20,
      y: e.clientY - rect.top + 20,
    });
  };

  const handleLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      if (!imgRef.current) return;

      gsap.to(imgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.25,
        ease: "power3.in",
      });
    }, 200);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}

      {/* Render image ONLY if img exists */}
      {img && (
        <img
          ref={imgRef}
          src={img}
          className=" pointer-events-none opacity-0  md:absolute w-40 rounded-md shadow-lg"
          style={{
            transform: "scale(0.8)",
          }}
        />
      )}
    </div>
  );
};

export default HoverPopup;
