import React, { useEffect, useState, useRef } from 'react';
import dice000 from './dice000.png';
import dice001 from './dice001.png';
import dice002 from './dice002.png';
import dice003 from './dice003.png';
import dice004 from './dice004.png';
import dice005 from './dice005.png';
import dice006 from './dice006.png';
import dice007 from './dice007.png';
import dice008 from './dice008.png';
import dice009 from './dice009.png';
import dice010 from './dice010.png';
import dice011 from './dice011.png';
import dice012 from './dice012.png';
import dice013 from './dice013.png';
import dice0 from './dice0.png';
import dice1 from './dice1.png';
import dice2 from './dice2.png';
import dice3 from './dice3.png';
import dice4 from './dice4.png';
import dice5 from './dice5.png';
import dice6 from './dice6.png';

console.log(dice000); // Should print a path or a base64 encoded string

const DiceAnimation = ({ isAnimating, onAnimationEnd, finalImage, currentcolor }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationFrameIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const frameRate = 7; // Number of frames per second
  const frameDuration = 600 / frameRate; // Duration of each frame in milliseconds

  const diceImages = [
    dice000, dice001, dice002, dice003, dice004, dice005,
    dice006, dice007, dice008, dice009, dice010, dice011,
    dice012, dice013
  ];

  const finalDiceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

  useEffect(() => {
    if (!isAnimating) {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      setAnimationComplete(true);
      return;
    }
    setAnimationComplete(false);
    startTimeRef.current = performance.now();
    const totalImages = diceImages.length;
    const duration = 500; // Total duration of the animation in milliseconds
    const animate = (timestamp) => {
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const frameIndex = 1+Math.floor(elapsed / frameDuration) % totalImages;
      setCurrentImage(frameIndex);
      // console.log("DiceAn..js : CurrentImage FrameIndex",currentImage, frameIndex)
      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        setAnimationComplete(true);
        setCurrentImage(finalImage); // Adjust index for finalImage array (0-based index)
        onAnimationEnd();
      }
    };
    animationFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };
  }, [isAnimating, finalImage, onAnimationEnd, frameDuration]);
  return (
    <div className="dice-roll">
      {animationComplete ? (
        <div className="diceimg" style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src={finalDiceImages[finalImage]} 
            alt={`Dice ${finalImage}`}
            style={{ display: 'block' }} 
          />
          <span 
            style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              color: currentcolor === 'yellow' ? 'yellow' : currentcolor === 'green' ? 'lawngreen' : currentcolor === 'blue' ? 'aqua' : currentcolor === 'red' ? 'red':  'aqua',
              fontFamily: 'Courier', 
              fontSize: '34px',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
          >
            {finalImage}
          </span>
        </div>
      ) : (
        <div className="diceimg">
          <img 
            src={diceImages[currentImage]}
            alt={`Dice ${currentImage}`}
          />
        </div>
      )}
    </div>
  );
};

export default DiceAnimation;
