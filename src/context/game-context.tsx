import { SpeedLabels } from '@/types/enums';
import type { MolesTypes } from '@/types/types';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface GameContextType {
  moles: MolesTypes[];
  time: number;
  speed: [number, number];
  setQuantityOfMoles: (quantity: number) => void;
  handleSelectTime: (seconds: number) => void;
  handleSelectSpeed: (speed: number) => void;
  showMoleRandomly: () => void;
  handleClickStartGame: () => void;
  hideMole: (id: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [moles, setMoles] = useState<MolesTypes[]>(
    new Array(9).fill(0).map(() => ({ show: true, id: crypto.randomUUID() })),
  );
  const [time, setTime] = useState<number>(10);
  const [speed, setSpeed] = useState<[number, number]>([700, 2000]);

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const activeMole = useMemo(() => moles.find((mole) => mole.show), [moles]);
  const randomSpeed = useMemo(() => {
    if (activeMole) {
      const random = Math.floor(Math.random() * (speed[1] - speed[0]) + speed[0]);
      return random;
    }
  }, [activeMole, speed]);

  const setQuantityOfMoles = useCallback((quantity: number) => {
    const newMoles = new Array(quantity)
      .fill(0)
      .map(() => ({ show: true, id: crypto.randomUUID() }));
    setMoles(newMoles);
  }, []);

  const handleSelectTime = useCallback((seconds: number) => {
    setTime(seconds);
  }, []);

  const handleSelectSpeed = useCallback((speed: number) => {
    setSpeed(SpeedLabels[speed as keyof typeof SpeedLabels]);
  }, []);

  const hideMole = useCallback(
    (id: string) => {
      if (!activeMole) {
        return;
      }

      if (activeMole.id === id) {
        const activeMoleIndex = moles.findIndex((mole) => mole.id === activeMole.id);
        const newMoles = [...moles];
        newMoles[activeMoleIndex].show = false;
        setMoles(newMoles);
        // console.log('Mole hidden at index:', activeMoleIndex);
      }
    },
    [moles, activeMole],
  );

  const hideAllMoles = useCallback(() => {
    setMoles((prevMoles) =>
      prevMoles.map((mole) => ({
        ...mole,
        show: false,
      })),
    );
    // console.log('All moles hidden');
  }, []);

  const showAllMoles = useCallback(() => {
    setQuantityOfMoles(moles.length);
    // console.log('All moles shown');
  }, [moles, setQuantityOfMoles]);

  const resetTimer = useCallback(() => {
    setTime(10);
    showAllMoles();
  }, [showAllMoles]);

  const startCountdown = useCallback(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          setGameStarted(false);
          resetTimer();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [resetTimer]);

  const showMoleRandomly = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * moles.length);
    const newMoles = [...moles];
    if (!moles.find((mole) => !mole.show)) {
      setGameStarted(false);
    } else if (newMoles[randomIndex].show) {
      showMoleRandomly();
    } else {
      newMoles[randomIndex].show = true;
      setMoles(newMoles);
    }
    // console.log('Mole shown at index:', randomIndex);
  }, [moles]);

  const showMoles = useCallback(() => {
    if (gameStarted) {
      if (activeMole) {
        const timeout = setTimeout(() => {
          hideMole(activeMole?.id || '');
        }, randomSpeed);
        return () => clearTimeout(timeout);
      }
      showMoleRandomly();
    }
  }, [showMoleRandomly, gameStarted, activeMole, hideMole, randomSpeed]);

  const handleClickStartGame = useCallback(() => {
    hideAllMoles();
    setGameStarted(true);
    startCountdown();
  }, [hideAllMoles, startCountdown]);

  useEffect(() => {
    if (!gameStarted) {
      return;
    }
    showMoles();
  }, [gameStarted, showMoles]);

  const value = useMemo(
    () => ({
      moles,
      time,
      speed,
      setQuantityOfMoles,
      handleSelectTime,
      handleSelectSpeed,
      showMoleRandomly,
      handleClickStartGame,
      hideMole,
    }),
    [
      moles,
      time,
      speed,
      setQuantityOfMoles,
      handleSelectTime,
      handleSelectSpeed,
      showMoleRandomly,
      handleClickStartGame,
      hideMole,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
