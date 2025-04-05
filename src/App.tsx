import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Game } from './pages/Game';

export const App = () => (
  <div className="min-w-screen flex max-h-screen min-h-screen w-screen cursor-none flex-col justify-between overflow-hidden bg-bg-primary">
    <Cursor />
    <Navbar />
    <Game />
    <Footer />
  </div>
);
