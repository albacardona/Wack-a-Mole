import mole from '../assets/img/mole.png';
import hole from '../assets/img/hole.png';

interface MoleProps {
  hide: boolean;
}

export const Mole = (props: MoleProps) => (
  <div className="relative w-18 md:w-36">
    <img
      className={props.hide ? 'hidden' : 'absolute w-full pointer-events-none select-none'}
      src={mole}
      alt="mole"
    />
    <img className="w-full pointer-events-none select-none" src={hole} alt="hole" />
  </div>
);
