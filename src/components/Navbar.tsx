import wackLogo from '../assets/img/Whack-a-Mole.png';

export const Navbar = () => (
  <div className="flex h-10 w-screen items-center justify-center bg-blue-main shadow-header md:h-16">
    <img className="h-5 md:h-10" src={wackLogo} alt='wack a mole' />
  </div>
);
