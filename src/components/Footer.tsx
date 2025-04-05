import { useState } from 'react';
import AlbaAvatar from '../assets/img/AlbaAvatar.jpeg';
import { Button } from './Button';

export const Footer = () => {
  const [counter, setCounter] = useState<number>(0);
  const [showAvatar, setShowAvatar] = useState<boolean>(true);

  const handleClickAvatar = () => {
    if (counter === 4) {
      setShowAvatar(!showAvatar);
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="flex h-10 w-screen items-center justify-center md:h-16">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={handleClickAvatar}>
          <div className="size-6 rounded-full border-2 border-bd-light shadow-inner-subtle md:size-8">
            {showAvatar && (
              <img className="size-full rounded-full shadow-inner" src={AlbaAvatar} alt="Alba" />
            )}
          </div>
        </Button>
        <p className="font-game text-[8px] text-blue-main md:text-[10px]">Alba Cardona 2025</p>
      </div>
    </div>
  );
};
