// from https://esausilva.com/2021/06/14/react-hook-to-play-video-using-intersection-observer/

import { useRef, useEffect } from 'react';

// @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
const useVideoAutoPlayback = options => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
  const cb = entries => {
    const [entry] = entries;
    if (videoRef.current) {
      if (entry.isIntersecting) videoRef.current!.play();
      else videoRef.current!.pause();
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
