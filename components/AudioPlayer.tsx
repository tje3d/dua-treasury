import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, RotateCcw, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if(audioRef.current) {
        audioRef.current.load();
    }
  }, [src]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const skip = (amount: number) => {
    if (audioRef.current) {
        audioRef.current.currentTime += amount;
    }
  };

  return (
    <div dir="ltr" className="fixed bottom-6 left-4 right-4 z-50 flex justify-center">
        <div className="bg-islamic-green/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl shadow-islamic-green/20 border border-white/10 w-full max-w-lg">
          
          <div className="flex items-center gap-4 mb-3">
             {/* Controls */}
             <div className="flex flex-1 items-center gap-3">
                 <button onClick={() => skip(-10)} className="text-white/70 hover:text-white transition p-1">
                    <SkipBack size={18} />
                 </button>
                 
                 <button 
                    onClick={togglePlay}
                    className="w-10 h-10 bg-islamic-gold text-islamic-dark rounded-full flex items-center justify-center hover:bg-white hover:text-islamic-green transition-all shadow-lg"
                  >
                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                  </button>

                  <button onClick={() => skip(10)} className="text-white/70 hover:text-white transition p-1">
                    <SkipForward size={18} />
                 </button>
             </div>

             {/* Info */}
             <div className="min-w-0">
                <h4 className="text-sm font-bold text-islamic-goldLight truncate mb-1">{title}</h4>
                <div className="text-[10px] text-white/60 font-mono tracking-wider">
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>
             </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-1.5 w-full bg-black/20 rounded-full overflow-hidden group cursor-pointer">
             <div 
                className="absolute top-0 left-0 h-full bg-islamic-gold transition-all duration-100"
                style={{ width: `${(currentTime / duration) * 100}%` }}
             ></div>
             <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

        </div>
        
        <audio
            ref={audioRef}
            src={src}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
        />
    </div>
  );
};

export default AudioPlayer;