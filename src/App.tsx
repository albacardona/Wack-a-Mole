import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Mole } from './components/Mole';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="min-w-screen flex h-screen min-h-screen w-screen cursor-none flex-col justify-between overflow-hidden bg-yellow-main">
      <Cursor />
      <Navbar />
      <div className="h-full w-full font-game">
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-3 gap-x-14 gap-y-6 rounded-2xl border-4 border-white bg-brown-main px-20 py-10 shadow-game md:gap-x-28 md:gap-y-10">
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
