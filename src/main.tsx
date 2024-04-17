import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App';
import './index.css';
import global_en from './translations/en/global.json';
import global_ru from './translations/ru/global.json';
import global_hy from './translations/hy/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: { global: global_en },
    ru: { global: global_ru },
    hy: { global: global_hy }
  }
});


createRoot(document.getElementById('root') as HTMLElement).render(

  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,

);



