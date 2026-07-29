"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

const storyVideoUrl = "https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1";

function StoryVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Watch our story video"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/78 px-6 py-16 text-white sm:px-12"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2A1708] shadow-lg transition hover:bg-primary hover:text-white"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="aspect-video w-full max-w-[920px] overflow-hidden rounded-[10px] bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <iframe
          title="Watch our story"
          src={storyVideoUrl}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
}

export function StoryVideoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Watch our story"
        className="watch-story-button absolute right-[16%] top-[34%] hidden h-28 w-28 items-center justify-center rounded-full text-white md:flex"
        onClick={() => setOpen(true)}
      >
        <svg className="watch-story-label absolute inset-0 h-full w-full rounded-full border border-white/25 text-white/78" viewBox="0 0 112 112" aria-hidden="true">
          <defs>
            <path id="watch-story-circle" d="M56 56 m-43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0" />
          </defs>
          <text className="text-[9px] font-semibold uppercase tracking-[0.24em]" fill="currentColor">
            <textPath href="#watch-story-circle" startOffset="0%">
              Watch Our Story • Watch Our Story •
            </textPath>
          </text>
        </svg>
        <span className="watch-story-icon relative flex h-11 w-11 items-center justify-center rounded-full bg-white/18 backdrop-blur transition-colors duration-200">
          <Play className="h-4 w-4 fill-current" />
        </span>
      </button>

      <StoryVideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function StoryVideoPlayButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Watch our story"
        className="mx-auto mt-16 flex h-[86px] w-[86px] items-center justify-center rounded-full bg-primary text-white shadow-[0_22px_70px_rgba(239,70,63,0.4)] transition hover:scale-105 hover:bg-accent"
        onClick={() => setOpen(true)}
      >
        <Play className="h-6 w-6 fill-current" />
      </button>
      <StoryVideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
