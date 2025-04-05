import { Settings01 } from '@untitled-ui/icons-react';
import wackLogo from '../assets/img/Whack-a-Mole.png';
import { Button } from './Button';
import { useModal } from '@/context/modal-context';
import { useTranslation } from 'react-i18next';
import { SettingsModal } from './Modals/SettingsModal';

export const Navbar = () => {
  const { t } = useTranslation();
  const settingsModal = useModal();

  const handleClickSettings = () => {
    settingsModal.showModal({
      title: t('translation:modal.start.title'),
      description: t('translation:modal.start.body'),
      content: <SettingsModal />,
    });
  };
  return (
    <div className="flex h-10 px-4 w-screen items-center justify-end bg-bg-secondary shadow-header md:h-16">
      <div className="w-[calc(50vw+4.5rem)] md:w-[calc(50vw+7.5rem)] flex items-center justify-between">
        <img className="h-full w-36 md:w-60" src={wackLogo} alt="wack a mole" />
        <Button variant="ghost" onClick={handleClickSettings}>
          <Settings01 className="size-5 md:size-6 text-fg-primary" />
        </Button>
      </div>
    </div>
  );
};
