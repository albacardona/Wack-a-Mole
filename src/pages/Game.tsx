import { StartingModal } from '@/components/Modals/StartingModal';
import { Mole } from '@/components/Mole';
import { useGame } from '@/context/game-context';
import { useModal } from '@/context/modal-context';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Game = () => {
  const { t } = useTranslation();
  const startGameModal = useModal();
  const { moles } = useGame();

  useEffect(() => {
    startGameModal.showModal({
      title: t('translation:modal.start.title'),
      description: t('translation:modal.start.body'),
      content: <StartingModal />,
    });
  }, [t]);

  return (
    <div className="h-full w-full font-game">
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-bd-light bg-bg-tertiary px-20 py-10 shadow-inner md:gap-x-28 md:gap-y-10">
          {moles?.map((id, index) => (
            <Mole key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};
