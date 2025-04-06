import { Button } from '@/components/Button';
import { Mole } from '@/components/Mole';
import { useGame } from '@/context/game-context';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const Game = () => {
  const { t } = useTranslation();
  const { moles, showMoleRandomly, handleClickStartGame, hideMole } = useGame();

  const handleClickMole = (id: string) => {
    hideMole(id);
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
      <div className="h-full flex flex-col items-center justify-center gap-6">
        <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-bd-light bg-bg-tertiary px-20 py-10 shadow-inner md:gap-x-28 md:gap-y-10">
          {moles?.map((mole) => (
            <Mole
              key={mole.id}
              size={moleSize}
              show={mole.show}
              onClick={() => handleClickMole(mole.id)}
            />
          ))}
        </div>
        <Button onClick={handleClickStartGame}>{t('translation:button.start')}</Button>
      </div>
    </div>
  );
};
