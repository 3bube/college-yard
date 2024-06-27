import React, { useRef, useState } from 'react';
import { CgPlayButtonO } from "react-icons/cg";
import { FaPause } from 'react-icons/fa';
import { FiMaximize, FiMinimize } from 'react-icons/fi';

const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen(); // Firefox
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen(); // Chrome, Safari, and Opera
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen(); // IE/Edge
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Chrome, Safari, and Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE/Edge
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div ref={containerRef} className="relative w-full h-96 rounded-xl">
      <video ref={videoRef} className="w-full h-full rounded-xl">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50"
          onClick={handlePlayPause}
        >
          <CgPlayButtonO size={45} />
        </button>
      )}
      {isPlaying && (
        <button
          className="absolute top-4 left-4 text-white text-2xl"
          onClick={handlePlayPause}
        >
          <FaPause />
        </button>
      )}
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={handleFullscreen}
      >
        {isFullscreen ? <FiMinimize /> : <FiMaximize />}
      </button>
    </div>
  );
};

export default CustomVideoPlayer;
