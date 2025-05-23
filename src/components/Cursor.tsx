import { useEffect, useRef } from 'react';
import hammer from '../assets/img/hammer.png';
import hammer2 from '../assets/img/hammer2.png';
import gsap from 'gsap';

export const Cursor = () => {
  const cursor = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const setCursorX = gsap.quickTo(cursor.current, 'x', { duration: 0.01 });
    const setCursorY = gsap.quickTo(cursor.current, 'y', { duration: 0.01 });

    const onCursorMove = (e: PointerEvent) => {
      const xOffset = 15;
      const yOffset = -15;
      setCursorX(e.clientX + xOffset);
      setCursorY(e.clientY + yOffset);
    };

    document.body.addEventListener('pointermove', onCursorMove);
    window.addEventListener('mousedown', () => {
      if (cursor.current) {
        cursor.current.src = hammer2;
      }
    });

    window.addEventListener('mouseup', () => {
      if (cursor.current) {
        cursor.current.src = hammer;
      }
    });

    return () => {
      document.body.removeEventListener('pointermove', onCursorMove);
    };
  }, []);

  return (
    <img
      ref={cursor}
      src={hammer}
      alt="cursor"
      className="z-20 pointer-events-none absolute size-16 overflow-hidden origin-[100%_100%] translate-x-[-50%] translate-y-[-50%]"
    />
  );
};
