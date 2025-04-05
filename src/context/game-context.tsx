import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface GameContextType {
  moles: string[];
  time: number;
  speed: number;
  setQuantityOfMoles: (quantity: number) => void;
  handleSelectTime: (seconds: number) => void;
  handleSelectSpeed: (speed: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [moles, setMoles] = useState<string[]>(new Array(9).fill(0).map(() => crypto.randomUUID()));
  const [time, setTime] = useState<number>(60);
  const [speed, setSpeed] = useState<number>(0);

  const setQuantityOfMoles = useCallback((quantity: number) => {
    const newMoles = new Array(quantity).fill(0).map(() => crypto.randomUUID());
    setMoles(newMoles);
  }, []);

  const handleSelectTime = useCallback((seconds: number) => {
    setTime(seconds);
  }, []);

  const handleSelectSpeed = useCallback((speed: number) => {
    setSpeed(speed);
  }, []);

  const value = useMemo(
    () => ({
      moles,
      time,
      speed,
      setQuantityOfMoles,
      handleSelectTime,
      handleSelectSpeed,
    }),
    [moles, time, speed, setQuantityOfMoles, handleSelectTime, handleSelectSpeed],
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
