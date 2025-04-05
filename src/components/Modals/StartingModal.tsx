import { useTranslation } from 'react-i18next';
import { useGame } from '@/context/game-context';
import { useState } from 'react';
import { settings } from '@/assets/settings';
import { Button } from '../Button';
import { GameSettings } from '@/types/enums';

interface SelectedButtons {
  time?: number;
  speed?: number;
  quantity?: number;
}

export const StartingModal = () => {
  const { t } = useTranslation();

  const { setQuantityOfMoles, handleSelectSpeed, handleSelectTime } = useGame();
  const [selectedButtons, setSelectedButtons] = useState<SelectedButtons>({});

  const handleClickSetting = (key: string, value: number) => {
    setSelectedButtons((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === GameSettings.SPEED) {
      handleSelectSpeed(value);
    } else if (key === GameSettings.QUANTITY) {
      setQuantityOfMoles(value);
    } else if (key === GameSettings.TIME) {
      handleSelectTime(value);
    }
  };

  return (
    <div className="h-full flex justify-center gap-6 mb-3">
      {settings.map(({ key, options }) => (
        <div className="flex flex-col items-center gap-6" key={key}>
          <h4 className="text-fg-primary text-lg">{t(`translation:modal.start.select_${key}`)}</h4>
          {options.map((option) => (
            <Button
              key={option.value}
              value={option.value}
              onClick={() => handleClickSetting(key, option.value)}
              isActive={
                key in selectedButtons &&
                selectedButtons[key as keyof SelectedButtons] === option.value
              }
              variant={option.variant as 'default' | 'accent'}
            >
              {typeof option.label === 'string' && option.label.startsWith('translation:')
                ? t(option.label)
                : option.label}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
