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
  // Пока используем Google Maps embed (без ключа, официально
  // предназначен для iframe) с теми же координатами. Кнопки ниже уже
  // ведут на настоящий профиль и маршрут в 2ГИС.
  mapEmbedSrc: "https://www.google.com/maps?q=51.126181,71.394568&z=16&output=embed",
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
    icon: "shield",
    category: "therapy",
    title: "Терапия",
    priceFrom: 6500, // TODO
    description: "Лечим кариес, пульпит и другие заболевания зубов безболезненно, с современной анестезией.",
    items: ["Лечение кариеса", "Лечение пульпита", "Комфортная анестезия"],
  },
  {
    slug: "endodontics",
    icon: "tooth",
    category: "therapy",
    title: "Эндодонтия",
    priceFrom: 15000, // TODO
    description: "Лечение каналов зуба под контролем микроскопа — стремимся сохранить собственный зуб, а не удалять его.",
    items: ["Лечение каналов под микроскопом", "Перелечивание каналов", "Пломбирование каналов"],
  },
  {
    slug: "restoration",
    icon: "sparkle",
    category: "therapy",
    title: "Реставрация",
    priceFrom: 12000, // TODO
    description: "Возвращаем зубу естественную форму, прочность и внешний вид после повреждений.",
    items: ["Художественная реставрация", "Восстановление сколов", "Коррекция формы зуба"],
  },
  {
    slug: "prosthetics",
    icon: "crown",
    category: "prosthetics",
    title: "Ортопедия",
    priceFrom: 25000, // TODO
    description: "Коронки, вкладки и протезы, которые восстанавливают жевательную функцию и выглядят естественно.",
    items: ["Коронки", "Вкладки", "Мостовидные протезы"],
  },
  {
    slug: "veneers",
    icon: "crown",
    category: "cosmetic",
    title: "Виниры",
    priceFrom: 35000, // TODO
    description: "Тонкие керамические накладки, которые меняют форму и цвет зубов для ровной, гармоничной улыбки.",
    items: ["Керамические виниры", "Индивидуальный дизайн улыбки", "Минимальная обработка эмали"],
  },
  {
    slug: "implants",
    icon: "implant",
    category: "implants",
    title: "Имплантация",
    priceFrom: 45000, // TODO
    description: "Замена утраченного зуба надёжным имплантом, когда лечение уже не поможет его спасти.",
    items: ["Одноэтапная имплантация", "Костная пластика", "Протезирование на имплантах"],
  },
  {
    slug: "braces",
    icon: "aligner",
    category: "orthodontics",
    title: "Брекеты",
    priceFrom: 35000, // TODO
    description: "Выравниваем зубы и исправляем прикус — брекет-системы подходят и детям, и взрослым.",
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

// Имена и фото — реальные (переданы клиникой и/или подтверждены отзывами
// на 2ГИС). Точную специализацию для части врачей 2ГИС не показывает —
// для них должность оставлена мок-значением на время запуска (см.
// договорённость), их стоит уточнить и заменить при получении точных
// данных от клиники.
export const doctors: Doctor[] = [
  {
    name: "Нурбек Маратович",
    role: "Стоматолог-терапевт", // TODO: уточнить специализацию
    category: "therapists",
    experienceYears: 10, // TODO: уточнить стаж
    photo: "/photos/doctors/nurbek.jpg",
  },
  {
    name: "Данияр Рахманов",
    role: "Хирург-имплантолог", // подтверждено отзывом на 2ГИС
    category: "surgeons",
    experienceYears: 8, // TODO: уточнить стаж
    photo: "/photos/doctors/daniyar.jpg",
  },
  {
    name: "Султан Набижанович",
    role: "Хирург-имплантолог",
    category: "surgeons",
    experienceYears: 9, // TODO: уточнить стаж
    photo: "/photos/doctors/sultan.jpg",
  },
  {
    name: "Нурсултан Аскарович",
    role: "Врач-эндодонтист", // TODO: уточнить специализацию
    category: "therapists",
    experienceYears: 7, // TODO: уточнить стаж
    photo: "/photos/doctors/nursultan.jpg",
  },
  {
    name: "Диляра Назарбекова",
    role: "Ортодонт", // подтверждено отзывом на 2ГИС
    category: "orthodontists",
    experienceYears: 7, // TODO: уточнить стаж
  },
  {
    name: "Молдир Кайратовна",
    role: "Детский стоматолог", // TODO: уточнить специализацию
    category: "kids",
    experienceYears: 6, // TODO: уточнить стаж
  },
];

export type Review = {
  name: string;
  rating: number;
  date: string;
  source: string;
  text: string;
};

// Реальные отзывы с 2ГИС (карточка клиники), пересказаны своими словами.
// Даты 2ГИС не показывает постранично — TODO: уточнить точные даты.
export const reviews: Review[] = [
  {
    name: "Айгерим Сундетова",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Хожу в эту стоматологию уже 5 лет — надёжная клиника, которой можно доверять.",
  },
  {
    name: "Зульфия Пшембаева",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Огромное спасибо доктору Молдир Кайратовне и всей клинике Genius! Все врачи — настоящие профессионалы, кабинеты чистые, персонал очень внимательный.",
  },
  {
    name: "Сауле Божагул",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Бесконечная благодарность за имплантацию — работу выполнял Данияр, результат оценю на 10 из 10.",
  },
  {
    name: "Перизат Жаксылыкова",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Огромное спасибо доктору Нурбеку за профессионализм — лечение прошло максимально комфортно и безболезненно.",
  },
  {
    name: "kushanova_t",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Мой ортодонт — Диляра Назарбекова. Обожаю её работу, настоящий профессионал своего дела.",
  },
  {
    name: "Айсана Торебек",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Genius — лучшая клиника в Астане! Профессиональный подход, современное оборудование, заботливое отношение к пациентам.",
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
