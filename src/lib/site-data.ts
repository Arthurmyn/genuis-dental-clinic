// Content shown across the landing page.
// TODO: replace every placeholder value below with the clinic's real data.

// Данные ниже взяты с карточки клиники на 2ГИС (https://go.2gis.com/YHWSl)
// и профиля Instagram @genius_stom. Полное расписание по дням, email,
// стаж врачей и юр. реквизиты 2ГИС не показывает — уточните напрямую и
// замените отмеченные TODO.
export const siteConfig = {
  name: "Genius Dental Clinic",
  shortName: "Genius",
  tagline: "Стоматология нового поколения",
  phone: "+7 775 507 77 63",
  phoneHref: "tel:+77755077763",
  phoneSecondary: "+7 700 434 95 54",
  phoneSecondaryHref: "tel:+77004349554",
  email: "info@genius-stom.kz", // TODO: подтвердить адрес почты
  address: "Казахстан, г. Астана, ул. Толе би, 55",
  city: "Астана",
  addressLocality: "Astana",
  addressCountry: "KZ",
  coordinates: { lat: 51.126181, lon: 71.394568 },
  workHoursWeekdays: "10:00 – 20:00", // TODO: уточнить точное расписание по дням
  workHoursWeekend: "10:00 – 20:00", // TODO: уточнить точное расписание по дням
  // 2ГИС не даёт бесплатный iframe-эмбед без регистрации виджета: нужно
  // зайти на https://firmsonmap.api.2gis.ru/, указать org-id клиники
  // (70000001075092075) и вставить сюда сгенерированный ими src.
  // Пока используем открытый OpenStreetMap-эмбед с теми же координатами —
  // он не требует ключей и точно работает. Кнопки ниже уже ведут на
  // настоящий профиль и маршрут в 2ГИС.
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=71.374568%2C51.116181%2C71.414568%2C51.136181&layer=mapnik&marker=51.126181%2C71.394568",
  twoGisFirmUrl: "https://2gis.kz/astana/firm/70000001075092075",
  twoGisRouteUrl: "https://2gis.kz/astana/routeSearch/to/71.394568,51.126181",
  googleBusinessUrl: "#", // TODO: добавить ссылку на профиль Google Business
  rating: 5,
  reviewCount: 212, // по данным 2ГИС на момент сбора данных
  social: {
    instagram: "https://www.instagram.com/genius_stom/",
    whatsapp: "https://wa.me/77755077763",
    telegram: "https://t.me/+77755077763", // TODO: подтвердить точный юзернейм в Telegram
  },
  license: "Лицензия № KZ00LAA00000000 от 00.00.0000", // TODO
  requisites: "ТОО «Genius», БИН 000000000000", // TODO
};

export const navLinks = [
  { href: "/services", label: "Услуги" },
  { href: "/#doctors", label: "Наша команда" },
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

// Имена — из хайлайтов Instagram @genius_stom. Специализация и стаж
// там не указаны, поэтому распределены ориентировочно — TODO: уточнить.
export const doctors: Doctor[] = [
  { name: "Нурбек", role: "Хирург-имплантолог", category: "surgeons", experienceYears: 10 }, // TODO: уточнить специализацию и стаж
  { name: "Данияр", role: "Стоматолог-терапевт", category: "therapists", experienceYears: 8 }, // TODO: уточнить специализацию и стаж
  { name: "Диляра", role: "Ортодонт", category: "orthodontists", experienceYears: 7 }, // TODO: уточнить специализацию и стаж
  { name: "Молдир", role: "Детский стоматолог", category: "kids", experienceYears: 6 }, // TODO: уточнить специализацию и стаж
  { name: "Султан", role: "Хирург-имплантолог", category: "surgeons", experienceYears: 9 }, // TODO: уточнить специализацию и стаж
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
    source: "2ГИС",
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
    source: "2ГИС",
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
  before: string;
  after: string;
};

export const cases: CaseItem[] = [
  {
    title: "Лечение кариеса под микроскопом",
    note: "Композитная реставрация, 1 визит",
    before: "/photos/cases/case-filling-before.jpg",
    after: "/photos/cases/case-filling-after.jpg",
  },
  {
    title: "Керамические виниры",
    note: "Реставрация фронтальной группы зубов",
    before: "/photos/cases/case-veneers-before.jpg",
    after: "/photos/cases/case-veneers-after.jpg",
  },
  {
    title: "Протезирование коронками",
    note: "Замена старых металлических коронок",
    before: "/photos/cases/case-crowns-before.jpg",
    after: "/photos/cases/case-crowns-after.jpg",
  },
];
