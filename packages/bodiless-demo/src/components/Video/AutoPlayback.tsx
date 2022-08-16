// from https://esausilva.com/2021/06/14/react-hook-to-play-video-using-intersection-observer/

import { useRef, useEffect } from 'react';

// @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
const useVideoAutoPlayback = options => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
  const cb = entries => {
    const [entry] = entries;
    // @ts-ignore:Object is possibly 'null'.
    if (entry.isIntersecting) videoRef.current.play();
    // @ts-ignore: Object is possibly 'null'.
    else videoRef.current.pause();
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
