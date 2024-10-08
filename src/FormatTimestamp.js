import React, { useEffect, useRef, useState } from 'react';

const FormatTimestamp = () => {
  const [displayTime, setDisplayTime] = useState('Elapsed Time: 0d 0h 0m 0s');
  const startTimeRef = useRef(performance.now()); 
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const updateTime = (timestamp) => {
      const elapsed = timestamp - startTimeRef.current;

      const elapsedMilliseconds = Math.floor(elapsed);
      const seconds = Math.floor(elapsedMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const formattedTime = `Elapsed Time: ${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
      setDisplayTime(formattedTime);

       animationFrameIdRef.current = requestAnimationFrame(updateTime);
    };
    animationFrameIdRef.current = requestAnimationFrame(updateTime);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return <div>{displayTime}</div>;
};

export default FormatTimestamp;
