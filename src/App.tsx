import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Mole } from './components/Mole';
import { Footer } from './components/Footer';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { t } = useTranslation();

  return (
    <div className="min-w-screen flex max-h-screen min-h-screen w-screen cursor-none flex-col justify-between overflow-hidden bg-bg-primary">
      <Cursor />
      <Navbar />
      <p className="font-">{t('translation:homepage.intro.title')}</p>
      <div className="h-full w-full font-game">
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-bd-primary bg-bg-tertiary px-20 py-10 shadow-inner md:gap-x-28 md:gap-y-10">
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
            <Mole />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
