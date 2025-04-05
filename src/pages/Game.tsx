import { Mole } from '@/components/Mole';
import { useGame } from '@/context/game-context';
import { useMemo, useState } from 'react';

export const Game = () => {
  const { moles } = useGame();
  const [clickedMole, setClickedMole] = useState<string | null>(null);

  const handleClickMole = (id: string) => {
    setClickedMole(id);
  };

  const moleSize = useMemo(() => {
    switch (moles.length) {
      case 6:
        return 'large';
      case 9:
        return 'medium';
      case 12:
        return 'small';
      default:
        return 'medium';
    }
  }, [moles.length]);

  return (
    <div className="h-full w-full font-game">
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-bd-light bg-bg-tertiary px-20 py-10 shadow-inner md:gap-x-28 md:gap-y-10">
          {moles?.map((id) => (
            <Mole
              key={id}
              size={moleSize}
              show={clickedMole === id}
              onClick={() => handleClickMole(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
