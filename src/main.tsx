import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { StrictMode } from 'react';
import { App } from './App';
import './index.css';
import { GameProvider } from './context/game-context';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <StrictMode>
    <GameProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </GameProvider>
  </StrictMode>,
);
