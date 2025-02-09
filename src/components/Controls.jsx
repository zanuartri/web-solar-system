import { useState, useEffect } from "react";
import { Switch } from "@material-tailwind/react";

export default function Controls({
  speed,
  setSpeed,
  controlsRef,
  stars,
  setStars,
  planetName,
  setPlanetName,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio("/sound.mp3") : null
  );

  // kecepatan
  const handlePointerDown = () => {
    if (controlsRef.current) controlsRef.current.enabled = false;
  };

  const handlePointerUp = () => {
    if (controlsRef.current) controlsRef.current.enabled = true;
  };

  // sound
  useEffect(() => {
    if (!audio) return;

    audio.loop = true;
    return () => audio.pause();
  }, [audio]);

  const toggleSound = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="text-white z-50 flex flex-col gap-[16px]">
      {/* Kecepatan */}
      <div>
        <label className="text-sm font-bold">
          Kecepatan {speed ? speed.toFixed(1) : "1.0"}x
        </label>
        <input
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Nama Planet */}
      <Switch
        color="blue"
        label={<div className="text-sm font-bold text-white">Nama Planet</div>}
        onChange={() => setPlanetName(!planetName)}
        className=" bg-white/50"
        defaultChecked
      />

      {/* Bintang */}
      <Switch
        color="blue"
        label={<div className="text-sm font-bold text-white">Bintang</div>}
        onChange={() => setStars(!stars)}
        className="text-sm font-bold text-white bg-white/50"
        defaultChecked
      />

      {/* Play/Pause Sound Button */}
      <button
        onClick={toggleSound}
        className="mt-2 px-4 py-1 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition hover:cursor-pointer"
      >
        {isPlaying ? (
          <div className="flex items-center justify-center gap-[4px]">
            <span className="text-[20px]">🔇 </span>
            Stop Sound
          </div>
        ) : (
          <div className="flex items-center justify-center gap-[4px]">
            <span className="text-[20px]">🔊 </span>
            Play Sound
          </div>
        )}
      </button>

      {/* Quiz */}
      <button className="relative mt-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white text-2xl font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:from-green-600 hover:to-teal-700 active:scale-95 hover:cursor-pointer">
        🎯 Take the Quiz!
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full animate-bounce">
          New!
        </span>
      </button>
    </div>
  );
}
