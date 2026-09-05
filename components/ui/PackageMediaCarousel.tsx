"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface PackageMediaCarouselProps {
  title: string;
  images: string[];
  video?: string;
}

type MediaItem =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      src: string;
    };

export default function PackageMediaCarousel({
  title,
  images,
  video,
}: PackageMediaCarouselProps) {
  const media = useMemo<MediaItem[]>(() => {
    const imageItems: MediaItem[] = images.map((src) => ({
      type: "image",
      src,
    }));

    if (video) {
      imageItems.push({
        type: "video",
        src: video,
      });
    }

    return imageItems;
  }, [images, video]);

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  function goToNext() {
    setActiveIndex((current) => {
      if (media.length === 0) return 0;

      return current === media.length - 1 ? 0 : current + 1;
    });
  }

  function goToPrevious() {
    setActiveIndex((current) => {
      if (media.length === 0) return 0;

      return current === 0 ? media.length - 1 : current - 1;
    });
  }

  useEffect(() => {
    if (media.length <= 1) return;

    const activeMedia = media[activeIndex];

    if (!activeMedia || activeMedia.type === "video") {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        const currentMedia = media[current];

        if (!currentMedia || currentMedia.type === "video") {
          return current;
        }

        return current === media.length - 1 ? 0 : current + 1;
      });
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeIndex, media]);

  useEffect(() => {
    const activeMedia = media[activeIndex];

    if (!activeMedia || activeMedia.type !== "video") {
      return;
    }

    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.currentTime = 0;

    const startVideo = async () => {
      try {
        await video.play();
      } catch {
        window.setTimeout(() => {
          setActiveIndex(0);
        }, 6000);
      }
    };

    startVideo();
  }, [activeIndex, media]);

  if (media.length === 0) {
    return null;
  }

  const activeMedia = media[activeIndex];

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] bg-[#071F5B]"
      aria-label={`${title} photo and video gallery`}
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
        {activeMedia.type === "image" ? (
          <Image
            key={`${activeMedia.src}-${activeIndex}`}
            src={activeMedia.src}
            alt={`${title} travel gallery`}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            key={activeMedia.src}
            muted
            autoPlay
            playsInline
            preload="auto"
            onEnded={() => setActiveIndex(0)}
            onError={() => setActiveIndex(0)}
            className="h-full w-full object-cover"
            aria-label={`${title} travel video`}
          >
            <source src={activeMedia.src} type="video/mp4" />
          </video>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071F5B]/30 via-transparent to-transparent" />

        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#071F5B] shadow-lg transition hover:scale-105 hover:bg-white sm:left-5 sm:h-12 sm:w-12"
          aria-label="Previous image or video"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#071F5B] shadow-lg transition hover:scale-105 hover:bg-white sm:right-5 sm:h-12 sm:w-12"
          aria-label="Next image or video"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {media.map((item, index) => (
            <button
              key={`${item.type}-${item.src}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index
                  ? "w-7 bg-[#F5B51B]"
                  : "w-2.5 bg-white/75 hover:bg-white"
              }`}
              aria-label={
                item.type === "video"
                  ? "Go to travel video"
                  : `Go to image ${index + 1}`
              }
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}