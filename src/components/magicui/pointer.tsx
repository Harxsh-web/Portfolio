"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react";

interface PointerProps extends Omit<HTMLMotionProps<"div">, "ref"> {}

export function Pointer({
  className,
  style,
  children,
  ...props
}: PointerProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isClickable, setIsClickable] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(true); // ✅ control pointer
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ✅ Disable pointer below 768px (mobile/tablet)
    const checkScreen = () => {
      setEnabled(window.innerWidth >= 768);
    };

    checkScreen(); // run once
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!enabled) return; // ❌ don't activate on mobile

    if (typeof window !== "undefined" && containerRef.current) {
      const parentElement = containerRef.current.parentElement;
      if (parentElement) {
        const classNameScope = "magicui-custom-cursor";
        const styleId = "magicui-custom-cursor-style";
        let createdStyle = false;

        if (!document.getElementById(styleId)) {
          const styleEl = document.createElement("style");
          styleEl.id = styleId;
          styleEl.innerHTML = `
            .${classNameScope}, .${classNameScope} * {
              cursor: none !important;
            }
          `;
          document.head.appendChild(styleEl);
          createdStyle = true;
        }

        parentElement.classList.add(classNameScope);

        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
          const target = e.target as HTMLElement | null;
          const clickable =
            !!target &&
            (target.closest('a, button, [role="button"], input, textarea, select') !== null ||
              window.getComputedStyle(target).cursor === "pointer");
          setIsClickable(clickable);
        };

        const handleMouseEnter = (e: MouseEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
          setIsActive(true);
        };

        const handleMouseLeave = () => {
          setIsActive(false);
        };

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.classList.remove(classNameScope);
          if (createdStyle) {
            const styleEl = document.getElementById(styleId);
            if (styleEl) styleEl.remove();
          }
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y, enabled]);

  // ✅ Hide pointer on mobile
  if (!enabled) return null;

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="transform-[translate(-50%,-50%)] pointer-events-none fixed z-50"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            {...props}
          >
            {children || (
              isClickable ? (
                <div className={cn("text-2xl", className)}>👆</div>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 16 16"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "rotate-[-70deg] stroke-white text-blue-500",
                    className,
                  )}
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
