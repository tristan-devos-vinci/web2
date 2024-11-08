// File: src/components/Header.tsx

import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  title: string;
  version: number;
}

const Header = ({ title }: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <header onClick={handleClick}>
      <h1 className="animate__animated animate__bounce">
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}
      </h1>
      <audio ref={audioRef} src="/path/to/your/audio/file.mp3" />
    </header>
  );
};

export default Header;