import mole from '../assets/img/mole.png';
import hole from '../assets/img/hole.png';
import clsx from 'clsx';

interface MoleProps {
  hidden?: boolean;
}

export const Mole = ({ hidden = false }: MoleProps) => (
  <div className="relative w-18 md:w-36">
    <img
      className={clsx({ 'absolute w-full pointer-events-none select-none': true, hidden })}
      src={mole}
      alt="mole"
    />
    <img className="w-full pointer-events-none select-none" src={hole} alt="hole" />
  </div>
);
