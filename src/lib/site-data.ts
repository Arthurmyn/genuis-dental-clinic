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
  workHoursWeekdays: "9:00 – 21:00", // TODO
  workHoursWeekend: "10:00 – 18:00", // TODO
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
  { href: "/services", label: "Услуги" },
  { href: "/#doctors", label: "Врачи" },
  { href: "/#pricing", label: "Цены" },
  { href: "/#about", label: "О клинике" },
  { href: "/#contacts", label: "Контакты" },
];

export type ServiceCategory =
  | "diagnostics"
  | "hygiene"
  | "cosmetic"
  | "therapy"
  | "prosthetics"
  | "implants"
  | "orthodontics"
  | "kids";

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  diagnostics: "Диагностика",
  hygiene: "Гигиена",
  cosmetic: "Эстетика",
  therapy: "Терапия",
  prosthetics: "Ортопедия",
  implants: "Имплантация",
  orthodontics: "Ортодонтия",
  kids: "Детская",
};

export type Service = {
  slug: string;
  icon: "tooth" | "sparkle" | "aligner" | "implant" | "kids" | "shield" | "crown" | "drop";
  category: ServiceCategory;
  title: string;
  priceFrom: number;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "diagnostics",
    icon: "shield",
    category: "diagnostics",
    title: "Диагностика и осмотр",
    priceFrom: 1500, // TODO
    description: "Полный осмотр полости рта, консультация и план лечения.",
    items: ["Первичная консультация", "Компьютерная томография", "План лечения"],
  },
  {
    slug: "hygiene",
    icon: "drop",
    category: "hygiene",
    title: "Профессиональная гигиена",
    priceFrom: 4900, // TODO
    description: "Снятие налёта и камня, полировка, укрепление эмали.",
    items: ["Ультразвуковая чистка", "Air Flow", "Фторирование"],
  },
  {
    slug: "whitening",
    icon: "sparkle",
    category: "cosmetic",
    title: "Отбеливание",
    priceFrom: 12000, // TODO
    description: "Безопасное отбеливание зубов до 8 тонов за один визит.",
    items: ["ZOOM 4", "Домашнее отбеливание", "Реминерализация"],
  },
  {
    slug: "therapy",
    icon: "tooth",
    category: "therapy",
    title: "Терапия и лечение кариеса",
    priceFrom: 6500, // TODO
    description: "Лечение кариеса и пульпита с использованием микроскопа.",
    items: ["Лечение кариеса", "Лечение пульпита", "Эстетическая реставрация"],
  },
  {
    slug: "prosthetics",
    icon: "crown",
    category: "prosthetics",
    title: "Протезирование",
    priceFrom: 25000, // TODO
    description: "Коронки, виниры и мосты из современных материалов.",
    items: ["Коронки", "Виниры", "Мостовидные протезы"],
  },
  {
    slug: "implants",
    icon: "implant",
    category: "implants",
    title: "Имплантация",
    priceFrom: 45000, // TODO
    description: "Одноэтапная имплантация с гарантией на всю систему.",
    items: ["Одноэтапная имплантация", "Костная пластика", "Протезирование на имплантах"],
  },
  {
    slug: "orthodontics",
    icon: "aligner",
    category: "orthodontics",
    title: "Ортодонтия",
    priceFrom: 35000, // TODO
    description: "Брекет-системы и элайнеры для взрослых и подростков.",
    items: ["Брекет-системы", "Элайнеры", "Ретенционный период"],
  },
  {
    slug: "kids",
    icon: "kids",
    category: "kids",
    title: "Детская стоматология",
    priceFrom: 3500, // TODO
    description: "Бережное лечение молочных и постоянных зубов без слёз.",
    items: ["Лечение молочных зубов", "Герметизация фиссур", "Седация закисью азота"],
  },
];

export type Feature = {
  icon: "shield" | "kids" | "sparkle" | "tooth";
  title: string;
  description: string;
  highlighted?: boolean;
};

export const features: Feature[] = [
  {
    icon: "shield",
    title: "Современное оборудование",
    description: "Используем последние разработки в стоматологии для точной диагностики и лечения.",
  },
  {
    icon: "kids",
    title: "Опытная и заботливая команда",
    description: "Врачи и гигиенисты с многолетним опытом и постоянным повышением квалификации.",
  },
  {
    icon: "tooth",
    title: "Лечение без боли и стресса",
    description: "Понимаем, что визит к стоматологу может пугать — используем щадящие методики.",
    highlighted: true,
  },
  {
    icon: "sparkle",
    title: "Индивидуальный подход",
    description: "Каждая улыбка уникальна, поэтому и план лечения мы составляем персонально.",
  },
];

export type DoctorCategory = "therapists" | "surgeons" | "orthodontists" | "kids";

export const doctorCategoryLabels: Record<DoctorCategory, string> = {
  therapists: "Терапевты",
  surgeons: "Хирурги",
  orthodontists: "Ортодонты",
  kids: "Детские",
};

export type Doctor = {
  name: string;
  role: string;
  category: DoctorCategory;
  experienceYears: number;
  photo?: string;
};

export const doctors: Doctor[] = [
  { name: "Имя Фамилия", role: "Стоматолог-терапевт", category: "therapists", experienceYears: 12 }, // TODO
  { name: "Имя Фамилия", role: "Хирург-имплантолог", category: "surgeons", experienceYears: 15 }, // TODO
  { name: "Имя Фамилия", role: "Ортодонт", category: "orthodontists", experienceYears: 9 }, // TODO
  { name: "Имя Фамилия", role: "Детский стоматолог", category: "kids", experienceYears: 7 }, // TODO
  { name: "Имя Фамилия", role: "Стоматолог-терапевт", category: "therapists", experienceYears: 8 }, // TODO
  { name: "Имя Фамилия", role: "Хирург-имплантолог", category: "surgeons", experienceYears: 11 }, // TODO
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
    rating: 4.8,
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
