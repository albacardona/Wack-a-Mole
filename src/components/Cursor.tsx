import { useEffect, useRef } from 'react';
import hammer from '../assets/img/hammer.png';
import gsap from 'gsap';

export const Cursor = () => {
  const cursor = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const setCursorX = gsap.quickTo(cursor.current, 'x', { duration: 0.01 });
    const setCursorY = gsap.quickTo(cursor.current, 'y', { duration: 0.01 });

    const onCursorMove = (e: PointerEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    document.body.addEventListener('pointermove', onCursorMove);
    window.addEventListener('mousedown', () => {
      if (cursor.current) {
        cursor.current.src = 'src/assets/img/hammer2.png';
      }
    });

    window.addEventListener('mouseup', () => {
      if (cursor.current) {
        cursor.current.src = 'src/assets/img/hammer.png';
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
      className="z-10 pointer-events-none absolute size-16 overflow-hidden origin-[100%_100%] translate-x-[-50%] translate-y-[-50%]"
    />
  );
};
