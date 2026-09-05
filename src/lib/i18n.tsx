"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "kk";

export type LocalizedText = { ru: string; kk: string };

export function t(text: LocalizedText, lang: Lang): string {
  return text[lang] ?? text.ru;
}

// UI chrome strings — everything hardcoded directly in components
// (nav, buttons, labels, footer, generic microcopy). Data-driven content
// (services, pricing, doctors, features, hero copy) carries its own
// { ru, kk } fields in site-data.ts instead of living here.
const dictionary = {
  nav: {
    services: { ru: "Услуги", kk: "Қызметтер" },
    doctors: { ru: "Наша команда", kk: "Біздің команда" },
    pricing: { ru: "Цены", kk: "Бағалар" },
    about: { ru: "О клинике", kk: "Клиника туралы" },
    contacts: { ru: "Контакты", kk: "Байланыс" },
  },
  header: {
    book: { ru: "Записаться на приём", kk: "Қабылдауға жазылу" },
    openMenu: { ru: "Открыть меню", kk: "Мәзірді ашу" },
  },
  common: {
    backHome: { ru: "На главную", kk: "Басты бетке" },
    allServices: { ru: "Все услуги", kk: "Барлық қызметтер" },
    allPricing: { ru: "Все цены", kk: "Барлық бағалар" },
    seeAllReviews: { ru: "Посмотреть все отзывы на 2ГИС", kk: "2ГИС-тегі барлық пікірлерді көру" },
    from: { ru: "от", kk: "бастап" },
    experience: { ru: "Опыт", kk: "Тәжірибесі" },
    years: { ru: "лет", kk: "жыл" },
    book2: { ru: "Записаться", kk: "Жазылу" },
    whatsappCta: { ru: "Написать в WhatsApp", kk: "WhatsApp-қа жазу" },
  },
  hero: {
    badge: { ru: "Стоматологическая клиника", kk: "Стоматологиялық клиника" },
    heading: {
      ru: ["Здоровые зубы —", "уверенная улыбка", "каждый день"],
      kk: ["Дені сау тістер —", "сенімді күлкі", "әр күнге"],
    },
    description: {
      ru: "Стоматологическая клиника Genius в Астане: лечение, имплантация и эстетика зубов под одной крышей.",
      kk: "Genius стоматология клиникасы Астанада: тіс емдеу, имплантация және эстетика бір шатыр астында.",
    },
    bookCard: { ru: "Записаться на приём", kk: "Қабылдауға жазылу" },
    workHours: { ru: "Часы работы", kk: "Жұмыс уақыты" },
    today: { ru: "Сегодня", kk: "Бүгін" },
    weekdays: { ru: "Пн – Пт", kk: "Дс – Жм" },
    weekend: { ru: "Сб, Вс", kk: "Сб, Жс" },
  },
  services: {
    eyebrow: { ru: "Услуги", kk: "Қызметтер" },
    heading: { ru: "Стоматологические услуги на любой случай", kk: "Кез келген жағдайға арналған стоматологиялық қызметтер" },
    description: {
      ru: "От профилактики до сложной имплантации — полный цикл лечения под одной крышей.",
      kk: "Профилактикадан күрделі имплантацияға дейін — толық емдеу циклі бір шатыр астында.",
    },
  },
  serviceCatalog: {
    eyebrow: { ru: "Каталог услуг", kk: "Қызметтер каталогы" },
    heading: { ru: "Стоматологические услуги для всей семьи", kk: "Бүкіл отбасына арналған стоматологиялық қызметтер" },
    description: {
      ru: "От профилактики до сложной имплантации — полный цикл лечения под одной крышей. Точную стоимость и план лечения врач определит на консультации.",
      kk: "Профилактикадан күрделі имплантацияға дейін — толық емдеу циклі бір шатыр астында. Нақты құны мен емдеу жоспарын дәрігер кеңесте анықтайды.",
    },
  },
  doctors: {
    eyebrow: { ru: "Наша команда", kk: "Біздің команда" },
    heading: { ru: "Врачи, которым доверяют", kk: "Сенім артатын дәрігерлер" },
    all: { ru: "Все врачи", kk: "Барлық дәрігерлер" },
  },
  cases: {
    eyebrow: { ru: "Наши работы", kk: "Біздің жұмыстар" },
    heading: { ru: "Результаты, а не обещания", kk: "Уәде емес, нәтиже" },
    description: {
      ru: "Реальные случаи из практики клиники — потяните за разделитель, чтобы сравнить до и после.",
      kk: "Клиника тәжірибесінен алынған нақты жағдайлар — салыстыру үшін бөлгішті сүйреңіз.",
    },
    before: { ru: "До", kk: "Дейін" },
    after: { ru: "После", kk: "Кейін" },
  },
  reviews: {
    eyebrow: { ru: "Отзывы", kk: "Пікірлер" },
    heading: { ru: "Что говорят пациенты", kk: "Пациенттер не дейді" },
    description: { ru: "Реальные отзывы пациентов клиники с 2ГИС.", kk: "Клиент пациенттерінің 2ГИС-тегі нақты пікірлері." },
    reviewsWord: { ru: "отзывов на 2ГИС", kk: "пікір 2ГИС-те" },
  },
  pricing: {
    eyebrow: { ru: "Цены", kk: "Бағалар" },
    heading: {
      ru: ["Прозрачный", "прайс без", "сюрпризов"],
      kk: ["Мөлдір", "бағалар,", "тосынсыз"],
    },
    description: {
      ru: "Точную стоимость лечения определяет врач на консультации после диагностики. Ниже — ориентировочные цены по основным направлениям.",
      kk: "Емдеудің нақты құнын дәрігер диагностикадан кейінгі кеңесте анықтайды. Төменде — негізгі бағыттар бойынша болжамды бағалар.",
    },
    consult: { ru: "Записаться на консультацию", kk: "Кеңеске жазылу" },
  },
  about: {
    eyebrow: { ru: "Почему мы", kk: "Неге біз" },
    heading: { ru: "О клинике", kk: "Клиника туралы" },
    body: {
      ru: "Мы верим, что здоровая улыбка — это уверенность и хорошее самочувствие. Команда опытных врачей и гигиенистов использует современные технологии, чтобы лечение проходило комфортно — от рутинной чистки до сложного протезирования.",
      kk: "Біз денсаулығы мықты күлкі — сенімділік пен жақсы көңіл-күй деп есептейміз. Тәжірибелі дәрігерлер мен гигиенистер тобы емдеу қарапайым тазалаудан бастап күрделі протездеуге дейін жайлы өтуі үшін заманауи технологияларды қолданады.",
    },
  },
  contacts: {
    eyebrow: { ru: "Контакты", kk: "Байланыс" },
    address: { ru: "Адрес", kk: "Мекенжай" },
    workHours: { ru: "Часы работы", kk: "Жұмыс уақыты" },
    phone: { ru: "Телефон", kk: "Телефон" },
    route: { ru: "Построить маршрут в 2ГИС", kk: "2ГИС-те бағыт салу" },
    profile: { ru: "Профиль на 2ГИС", kk: "2ГИС-тегі профиль" },
  },
  booking: {
    eyebrow: { ru: "Запись", kk: "Жазылу" },
    heading: { ru: "Запишитесь на приём в WhatsApp", kk: "WhatsApp арқылы жазылыңыз" },
    description: {
      ru: "Нажмите на кнопку — откроется чат в WhatsApp с администратором клиники. Либо звоните сами:",
      kk: "Батырманы басыңыз — клиника әкімшісімен WhatsApp чаты ашылады. Немесе өзіңіз қоңырау шалыңыз:",
    },
  },
  footer: {
    nav: { ru: "Навигация", kk: "Навигация" },
    contacts: { ru: "Контакты", kk: "Байланыс" },
    social: { ru: "Мы в соцсетях", kk: "Әлеуметтік желілерде" },
    rightsReserved: { ru: "Все права защищены.", kk: "Барлық құқықтар қорғалған." },
    credit: { ru: "Создано разработчиком", kk: "Әзірлеген" },
  },
  notFound: {
    title: { ru: "Страница не найдена", kk: "Бет табылмады" },
    description: {
      ru: "Такой страницы не существует или она была перемещена. Вернитесь на главную или посмотрите каталог услуг.",
      kk: "Мұндай бет жоқ немесе басқа жерге ауыстырылған. Басты бетке оралыңыз немесе қызметтер каталогын қараңыз.",
    },
    home: { ru: "На главную", kk: "Басты бетке" },
    catalog: { ru: "Каталог услуг", kk: "Қызметтер каталогы" },
  },
} as const;

export function useT() {
  const { lang } = useLanguage();
  return { lang, d: dictionary, tr: (text: LocalizedText) => t(text, lang) };
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ru",
  setLang: () => {},
});

const STORAGE_KEY = "genius-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    // Must run post-mount, not in a lazy useState initializer: the server
    // always renders "ru", so reading localStorage during render would
    // make the client's first pass diverge from server HTML and break
    // hydration for a returning visitor with "kk" saved.
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored === "ru" || stored === "kk") setLangState(stored);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "kk" ? "kk" : "ru";
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
