import { Button } from '@/components/Button';
import { Mole } from '@/components/Mole';
import { useGame } from '@/context/game-context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Game = () => {
  const { t } = useTranslation();
  const { moles, speed, setQuantityOfMoles, handleSelectSpeed } = useGame();
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const speedSelector = [
    { value: 0, label: t('translation:button.speed.normal') },
    { value: 1, label: t('translation:button.speed.fast') },
    { value: 2, label: t('translation:button.speed.crazy') },
  ];

  const handleClickSpeed = (speed: number) => {
    setSelectedButton(speed);
    handleSelectSpeed(speed);
  };

  return (
    <div className="h-full w-full font-game">
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-bd-light bg-bg-tertiary px-20 py-10 shadow-inner md:gap-x-28 md:gap-y-10">
          {speedSelector.map((item) => (
            <Button
              key={item.value}
              value={item.value}
              onClick={() => handleClickSpeed(item.value)}
              isActive={selectedButton === item.value}
            >
              {item.label}
            </Button>
          ))}
          {moles?.map((id, index) => (
            <Mole key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
