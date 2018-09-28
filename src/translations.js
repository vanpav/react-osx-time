const translations = {
  ru: {
    start: 'Старт',
    stop: 'Стоп',
    pause: 'Пауза',
    lap: 'Круг',
    reset: 'Сброс',
    stopwatch: 'Секундомер',
    timer: 'Таймер',
  },
  en: {
    start: 'Start',
    stop: 'Stop',
    pause: 'Pause',
    lap: 'Lap',
    reset: 'Reset',
    stopwatch: 'Stopwatch',
    timer: 'Timer',
  },
};

const trans = (key: string, lang: string = 'ru'): any => {
  if (!key) return '';
  return lang in translations
    ? translations[lang][key]
    : translations['en'][key];
};

export default trans;
