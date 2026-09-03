// Content shown across the landing page.
// TODO: replace every placeholder value below with the clinic's real data.

export const siteConfig = {
  name: "Genius Dental Clinic", // TODO: подтвердить финальное название клиники
  shortName: "Genius",
  tagline: "Стоматология нового поколения",
  phone: "+7 (999) 000-00-00", // TODO
  phoneHref: "tel:+79990000000", // TODO
  email: "info@genius-dental.ru", // TODO
  address: "г. Москва, ул. Примерная, д. 1", // TODO
  workHours: "Пн–Сб: 09:00–21:00, Вс: 10:00–18:00", // TODO
  mapEmbedSrc:
    "https://www.google.com/maps?q=Moscow&output=embed", // TODO: заменить на embed с точным адресом клиники
  social: {
    instagram: "#", // TODO
    whatsapp: "#", // TODO
    telegram: "#", // TODO
    vk: "#", // TODO
  },
  license: "Лицензия № ЛО-00-00-000000 от 00.00.0000", // TODO
  requisites: "ООО «Гениус», ИНН 0000000000, ОГРН 0000000000000", // TODO
};

export const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#doctors", label: "Врачи" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#pricing", label: "Цены" },
  { href: "#contacts", label: "Контакты" },
];

export type Service = {
  icon: "tooth" | "sparkle" | "aligner" | "implant" | "kids" | "shield" | "crown" | "drop";
  title: string;
  priceFrom: number;
  description: string;
};

export const services: Service[] = [
  {
    icon: "shield",
    title: "Диагностика и осмотр",
    priceFrom: 1500, // TODO
    description: "Полный осмотр полости рта, консультация и план лечения.",
  },
  {
    icon: "drop",
    title: "Профессиональная гигиена",
    priceFrom: 4900, // TODO
    description: "Снятие налёта и камня, полировка, укрепление эмали.",
  },
  {
    icon: "sparkle",
    title: "Отбеливание",
    priceFrom: 12000, // TODO
    description: "Безопасное отбеливание зубов до 8 тонов за один визит.",
  },
  {
    icon: "tooth",
    title: "Терапия и лечение кариеса",
    priceFrom: 6500, // TODO
    description: "Лечение кариеса и пульпита с использованием микроскопа.",
  },
  {
    icon: "crown",
    title: "Протезирование",
    priceFrom: 25000, // TODO
    description: "Коронки, виниры и мосты из современных материалов.",
  },
  {
    icon: "implant",
    title: "Имплантация",
    priceFrom: 45000, // TODO
    description: "Одноэтапная имплантация с гарантией на всю систему.",
  },
  {
    icon: "aligner",
    title: "Ортодонтия",
    priceFrom: 35000, // TODO
    description: "Брекет-системы и элайнеры для взрослых и подростков.",
  },
  {
    icon: "kids",
    title: "Детская стоматология",
    priceFrom: 3500, // TODO
    description: "Бережное лечение молочных и постоянных зубов без слёз.",
  },
];

export const stats = [
  { value: 12000, suffix: "+", label: "довольных пациентов" }, // TODO
  { value: 18, suffix: " лет", label: "на рынке" }, // TODO
  { value: 4.9, suffix: "/5", label: "средний рейтинг" }, // TODO
  { value: 0, suffix: "%", label: "рассрочка без переплат" }, // TODO
];

export type Doctor = {
  name: string;
  role: string;
  experienceYears: number;
  photo?: string;
};

export const doctors: Doctor[] = [
  { name: "Имя Фамилия", role: "Стоматолог-терапевт", experienceYears: 12 }, // TODO
  { name: "Имя Фамилия", role: "Ортодонт", experienceYears: 9 }, // TODO
  { name: "Имя Фамилия", role: "Хирург-имплантолог", experienceYears: 15 }, // TODO
  { name: "Имя Фамилия", role: "Детский стоматолог", experienceYears: 7 }, // TODO
];

export type Review = {
  name: string;
  rating: number;
  date: string;
  source: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Имя Клиента", // TODO
    rating: 5,
    date: "2026", // TODO
    source: "Google",
    text: "Отличная клиника, внимательный персонал, всё объяснили перед лечением. Очень довольна результатом.", // TODO
  },
  {
    name: "Имя Клиента", // TODO
    rating: 5,
    date: "2026", // TODO
    source: "2ГИС",
    text: "Ставил имплант — прошло безболезненно и быстро. Врач на связи даже после приёма.", // TODO
  },
  {
    name: "Имя Клиента", // TODO
    rating: 5,
    date: "2026", // TODO
    source: "Google",
    text: "Ребёнок первый раз не боялся стоматолога. Спасибо за терпение и заботу!", // TODO
  },
];

export type PricingCategory = {
  category: string;
  items: { name: string; price: number }[];
};

export const pricing: PricingCategory[] = [
  {
    category: "Терапия",
    items: [
      { name: "Лечение кариеса", price: 6500 }, // TODO
      { name: "Лечение пульпита (1 канал)", price: 9500 }, // TODO
      { name: "Пломба светового отверждения", price: 4500 }, // TODO
    ],
  },
  {
    category: "Гигиена",
    items: [
      { name: "Комплексная гигиена полости рта", price: 4900 }, // TODO
      { name: "Air Flow", price: 3500 }, // TODO
      { name: "Фторирование", price: 2000 }, // TODO
    ],
  },
  {
    category: "Ортопедия",
    items: [
      { name: "Коронка керамическая", price: 25000 }, // TODO
      { name: "Винир", price: 28000 }, // TODO
      { name: "Имплантация под ключ", price: 45000 }, // TODO
    ],
  },
  {
    category: "Ортодонтия",
    items: [
      { name: "Брекет-система (металл)", price: 65000 }, // TODO
      { name: "Элайнеры (курс)", price: 120000 }, // TODO
      { name: "Консультация ортодонта", price: 1500 }, // TODO
    ],
  },
];

export type CaseItem = {
  title: string;
  note: string;
};

export const cases: CaseItem[] = [
  { title: "Виниры на верхний ряд", note: "10 виниров, 2 визита" }, // TODO
  { title: "Имплантация 3 зубов", note: "Одноэтапный протокол" }, // TODO
  { title: "Отбеливание + гигиена", note: "Результат за 1 визит" }, // TODO
];

export const avatarCount = "3 200+"; // TODO: реальное число пациентов
