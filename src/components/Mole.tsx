import mole from "../assets/img/mole.png";
import hole from "../assets/img/hole.png";

export const Mole = (props) => (
  <div className="relative w-18 md:w-36">
    <img className={props.hide ? 'hidden' : 'absolute w-full'} src={mole} alt='mole' />
    <img className="w-full" src={hole} alt='hole' />
  </div>
);
