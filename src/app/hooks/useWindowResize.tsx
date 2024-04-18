"use client";

import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

type ResizeCallback = (size: WindowSize) => any | (() => any);

function useWindowResize(callback: ResizeCallback): [number, number] {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    callback(windowSize); 
  }, [callback, windowSize]);

  return [windowSize.width, windowSize.height];
}

export {useWindowResize};
