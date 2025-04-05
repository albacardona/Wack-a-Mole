import mole from '../assets/img/mole.png';
import hole from '../assets/img/hole.png';
import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

const moleVariants = cva('relative', {
  variants: {
    size: {
      small: 'w-16 md:w-28',
      medium: 'w-20 md:w-36',
      large: 'w-24 md:w-40',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export interface MoleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof moleVariants> {
  show?: boolean;
  onClick?: () => void;
}

export const Mole = ({ show = true, size, onClick }: MoleProps) => {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className={clsx(moleVariants({ size }))} onClick={onClick}>
      <img
        className={clsx({
          'absolute top-0 w-full pointer-events-none select-none transition-all duration-200 ease-in-out': true,
          'translate-y-9': show && size === 'small',
          'translate-y-12': show && size === 'medium',
          'translate-y-14': show && size === 'large',
        })}
        src={mole}
        alt="mole"
      />
      <img className="sticky w-full pointer-events-none select-none" src={hole} alt="hole" />
    </div>
  );
};
