import { useState } from 'react';
import AlbaAvatar from '../assets/img/AlbaAvatar.jpeg';

export const Footer = () => {
  const [showAvatar, setShowAvatar] = useState(true);

  const handleClickAvatar = () => {
    setShowAvatar(false);
  };

  return (
    <div className="flex h-10 w-screen items-center justify-center md:h-16">
      <div className="flex items-center gap-4">
        <button type="button" onClick={handleClickAvatar} className="p-0 m-0">
          <div className="size-6 rounded-full border-2 border-bd-light shadow-inner-subtle md:size-8">
            {showAvatar && (
              <img className="size-full rounded-full shadow-inner" src={AlbaAvatar} alt="Alba" />
            )}
          </div>
        </button>
        <p className="font-game text-[8px] text-blue-main md:text-[10px]">Alba Cardona 2025</p>
      </div>
    </div>
  );
};
