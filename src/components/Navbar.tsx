import wackLogo from '../assets/img/Whack-a-Mole.png';

export const Navbar = () => (
  <div className="flex h-10 w-screen items-center justify-center bg-bg-secondary shadow-header md:h-16">
    <img className="h-5 md:h-8" src={wackLogo} alt="wack a mole" />
  </div>
);
