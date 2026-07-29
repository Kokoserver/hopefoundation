"use client";

import { useEffect } from "react";

export function ScrollRevealController() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")
    );

    if (elements.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.scrollVisible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.dataset.scrollVisible = "true";
          observer.unobserve(target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
