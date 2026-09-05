// Content shown across the landing page.
// TODO: replace every placeholder value below with the clinic's real data.
import type { LocalizedText } from "@/lib/i18n";

// Данные ниже взяты с карточки клиники на 2ГИС (https://go.2gis.com/YHWSl),
// профиля Instagram @genius_stom и правок клиники. Полное расписание по
// дням, email и стаж врачей 2ГИС не показывает — уточните напрямую и
// замените отмеченные TODO. Переводы на казахский выполнены ИИ — перед
// запуском их стоит вычитать носителю языка.
export const siteConfig = {
  name: "Genius Dental Clinic",
  shortName: "Genius",
  // Канонический домен клиники. apex geniusstom.com настроен на 308-редирект
  // на www — во всех metadata/sitemap/robots/JSON-LD используем www-адрес.
  url: "https://www.geniusstom.com",
  tagline: { ru: "Стоматология нового поколения", kk: "Жаңа буын стоматологиясы" } satisfies LocalizedText,
  phone: "+7 775 507 77 63",
  phoneHref: "tel:+77755077763",
  phoneSecondary: "+7 700 434 95 54",
  phoneSecondaryHref: "tel:+77004349554",
  email: "info@genius-stom.kz", // TODO: подтвердить адрес почты
  address: {
    ru: "Казахстан, г. Астана, ул. Толе би, 55",
    kk: "Қазақстан, Астана қаласы, Төле би көшесі, 55",
  } satisfies LocalizedText,
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
    // TODO: подтвердить, что это реальный WhatsApp клиники (сейчас — тот
    // же номер, что и основной телефон).
    whatsapp: "https://wa.me/77755077763",
    telegram: "https://t.me/+77755077763", // TODO: подтвердить точный юзернейм в Telegram
  },
  license: "Лицензия № 23014118",
  requisites: "ИП «Рахманов Д.О.», ИИН 880918301497",
};

export const navLinks: { href: string; label: LocalizedText }[] = [
  { href: "/services", label: { ru: "Услуги", kk: "Қызметтер" } },
  { href: "/#doctors", label: { ru: "Наша команда", kk: "Біздің команда" } },
  { href: "/pricing", label: { ru: "Цены", kk: "Бағалар" } },
  { href: "/#about", label: { ru: "О клинике", kk: "Клиника туралы" } },
  { href: "/#contacts", label: { ru: "Контакты", kk: "Байланыс" } },
];

export type ServiceCategory =
  | "diagnostics"
  | "hygiene"
  | "cosmetic"
  | "therapy"
  | "surgery"
  | "prosthetics"
  | "implants"
  | "orthodontics";

export const serviceCategoryLabels: Record<ServiceCategory, LocalizedText> = {
  diagnostics: { ru: "Диагностика", kk: "Диагностика" },
  hygiene: { ru: "Гигиена", kk: "Гигиена" },
  cosmetic: { ru: "Эстетика", kk: "Эстетика" },
  therapy: { ru: "Терапия", kk: "Терапия" },
  surgery: { ru: "Хирургия", kk: "Хирургия" },
  prosthetics: { ru: "Ортопедия", kk: "Ортопедия" },
  implants: { ru: "Имплантация", kk: "Имплантация" },
  orthodontics: { ru: "Брекеты", kk: "Брекеттер" },
};

export type Service = {
  slug: string;
  icon: "tooth" | "sparkle" | "aligner" | "implant" | "kids" | "shield" | "crown" | "drop";
  category: ServiceCategory;
  title: LocalizedText;
  description: LocalizedText;
  items: LocalizedText[];
};

export const services: Service[] = [
  {
    slug: "diagnostics",
    icon: "shield",
    category: "diagnostics",
    title: { ru: "Диагностика и осмотр", kk: "Диагностика және тексеру" },
    description: {
      ru: "Полный осмотр полости рта, консультация и план лечения.",
      kk: "Ауыз қуысын толық тексеру, кеңес беру және емдеу жоспары.",
    },
    items: [
      { ru: "Первичная консультация", kk: "Алғашқы кеңес" },
      { ru: "Прицельный снимок", kk: "Прицелды рентген снимогі" },
      { ru: "План лечения", kk: "Емдеу жоспары" },
    ],
  },
  {
    slug: "hygiene",
    icon: "drop",
    category: "hygiene",
    title: { ru: "Профессиональная гигиена", kk: "Кәсіби гигиена" },
    description: {
      ru: "Снятие налёта и камня, полировка, укрепление эмали.",
      kk: "Тас пен жабынды алу, жылтырату, эмальді нығайту.",
    },
    items: [
      { ru: "Ультразвуковая чистка", kk: "Ультрадыбыстық тазалау" },
      { ru: "Air Flow", kk: "Air Flow" },
      { ru: "Фторирование", kk: "Фторлау" },
    ],
  },
  {
    slug: "therapy",
    icon: "shield",
    category: "therapy",
    title: { ru: "Терапия", kk: "Терапия" },
    description: {
      ru: "Лечим кариес, пульпит и другие заболевания зубов безболезненно, с современной анестезией.",
      kk: "Кариес, пульпит және басқа тіс ауруларын заманауи анестезиямен ауыртпай емдейміз.",
    },
    items: [
      { ru: "Лечение кариеса", kk: "Кариесті емдеу" },
      { ru: "Лечение пульпита", kk: "Пульпитті емдеу" },
      { ru: "Комфортная анестезия", kk: "Жайлы анестезия" },
    ],
  },
  {
    slug: "endodontics",
    icon: "tooth",
    category: "therapy",
    title: { ru: "Эндодонтия", kk: "Эндодонтия" },
    description: {
      ru: "Лечение каналов зуба под контролем микроскопа - стремимся сохранить собственный зуб, а не удалять его.",
      kk: "Тіс арналарын микроскоп бақылауымен емдеу - тісті жұлудың орнына сақтап қалуға тырысамыз.",
    },
    items: [
      { ru: "Лечение каналов под микроскопом", kk: "Арналарды микроскоппен емдеу" },
      { ru: "Перелечивание каналов", kk: "Арналарды қайта емдеу" },
      { ru: "Пломбирование каналов", kk: "Арналарды пломбалау" },
    ],
  },
  {
    slug: "restoration",
    icon: "sparkle",
    category: "therapy",
    title: { ru: "Реставрация", kk: "Реставрация" },
    description: {
      ru: "Возвращаем зубу естественную форму, прочность и внешний вид после повреждений.",
      kk: "Зақымданудан кейін тіске табиғи пішінін, беріктігін және сыртқы көрінісін қайтарамыз.",
    },
    items: [
      { ru: "Художественная реставрация", kk: "Көркем реставрация" },
      { ru: "Восстановление сколов", kk: "Сынықтарды қалпына келтіру" },
      { ru: "Коррекция формы зуба", kk: "Тіс пішінін түзету" },
    ],
  },
  {
    slug: "surgery",
    icon: "shield",
    category: "surgery",
    title: { ru: "Хирургия", kk: "Хирургия" },
    description: {
      ru: "Хирургическое лечение и удаление зубов любой сложности, включая зубы мудрости.",
      kk: "Кез келген күрделіліктегі тістерді, оның ішінде ақыл тісін хирургиялық емдеу және жұлу.",
    },
    items: [
      { ru: "Удаление зуба", kk: "Тісті жұлу" },
      { ru: "Удаление зуба мудрости", kk: "Ақыл тісін жұлу" },
      { ru: "Костная пластика", kk: "Сүйек пластикасы" },
    ],
  },
  {
    slug: "prosthetics",
    icon: "crown",
    category: "prosthetics",
    title: { ru: "Ортопедия", kk: "Ортопедия" },
    description: {
      ru: "Коронки, вкладки и протезы, которые восстанавливают жевательную функцию и выглядят естественно.",
      kk: "Шайнау қызметін қалпына келтіретін және табиғи көрінетін коронкалар, инлейлер мен протездер.",
    },
    items: [
      { ru: "Коронки", kk: "Коронкалар" },
      { ru: "Вкладки", kk: "Инлейлер" },
      { ru: "Мостовидные протезы", kk: "Көпір тәрізді протездер" },
    ],
  },
  {
    slug: "veneers",
    icon: "crown",
    category: "cosmetic",
    title: { ru: "Виниры", kk: "Винирлер" },
    description: {
      ru: "Тонкие керамические накладки, которые меняют форму и цвет зубов для ровной, гармоничной улыбки.",
      kk: "Тегіс, үйлесімді күлкі үшін тістердің пішіні мен түсін өзгертетін жұқа керамикалық қаптамалар.",
    },
    items: [
      { ru: "Керамические виниры", kk: "Керамикалық винирлер" },
      { ru: "Индивидуальный дизайн улыбки", kk: "Жеке күлкі дизайны" },
      { ru: "Минимальная обработка эмали", kk: "Эмальді минималды өңдеу" },
    ],
  },
  {
    slug: "implants",
    icon: "implant",
    category: "implants",
    title: { ru: "Имплантация", kk: "Имплантация" },
    description: {
      ru: "Замена утраченного зуба надёжным имплантом, когда лечение уже не поможет его спасти.",
      kk: "Емдеу тісті құтқаруға көмектеспегенде, жоғалған тісті сенімді имплантпен алмастыру.",
    },
    items: [
      { ru: "Одноэтапная имплантация", kk: "Бір кезеңді имплантация" },
      { ru: "All-on-4", kk: "All-on-4" },
      { ru: "All-on-6", kk: "All-on-6" },
    ],
  },
  {
    slug: "braces",
    icon: "aligner",
    category: "orthodontics",
    title: { ru: "Брекеты", kk: "Брекеттер" },
    description: {
      ru: "Выравниваем зубы и исправляем прикус - брекет-системы подходят и детям, и взрослым.",
      kk: "Тістерді туралаймыз және тістеуді дұрыстаймыз - брекет-жүйелер балаларға да, ересектерге де жарайды.",
    },
    items: [
      { ru: "Брекет-системы", kk: "Брекет-жүйелер" },
      { ru: "Элайнеры", kk: "Элайнерлер" },
    ],
  },
];

export type Feature = {
  icon: "shield" | "kids" | "sparkle" | "tooth";
  title: LocalizedText;
  description: LocalizedText;
  highlighted?: boolean;
};

export const features: Feature[] = [
  {
    icon: "shield",
    title: { ru: "Современное оборудование", kk: "Заманауи жабдық" },
    description: {
      ru: "Используем последние разработки в стоматологии для точной диагностики и лечения.",
      kk: "Дәл диагностика мен емдеу үшін стоматологиядағы соңғы әзірлемелерді қолданамыз.",
    },
  },
  {
    icon: "kids",
    title: { ru: "Опытная и заботливая команда", kk: "Тәжірибелі және қамқор команда" },
    description: {
      ru: "Врачи и гигиенисты с многолетним опытом и постоянным повышением квалификации.",
      kk: "Көп жылдық тәжірибесі бар және біліктілігін үнемі арттыратын дәрігерлер мен гигиенистер.",
    },
  },
  {
    icon: "tooth",
    title: { ru: "Лечение без боли и стресса", kk: "Ауырсынусыз және стресссіз емдеу" },
    description: {
      ru: "Понимаем, что визит к стоматологу может пугать - используем щадящие методики.",
      kk: "Стоматологқа бару қорқынышты болуы мүмкін екенін түсінеміз - жұмсақ әдістерді қолданамыз.",
    },
    highlighted: true,
  },
  {
    icon: "sparkle",
    title: { ru: "Индивидуальный подход", kk: "Жеке көзқарас" },
    description: {
      ru: "Каждая улыбка уникальна, поэтому и план лечения мы составляем персонально.",
      kk: "Әр күлкі бірегей, сондықтан емдеу жоспарын жеке дайындаймыз.",
    },
  },
];

export type DoctorCategory = "therapists" | "surgeons" | "orthodontists";

export const doctorCategoryLabels: Record<DoctorCategory, LocalizedText> = {
  therapists: { ru: "Терапевты", kk: "Терапевттер" },
  surgeons: { ru: "Хирурги", kk: "Хирургтер" },
  orthodontists: { ru: "Ортодонты", kk: "Ортодонттар" },
};

export type Doctor = {
  name: string;
  role: LocalizedText;
  category: DoctorCategory;
  experienceYears: number;
  photo?: string;
};

// Имена и фото — реальные (переданы клиникой). Точную специализацию для
// части врачей клиника ещё не прислала — для них должность оставлена
// мок-значением на время запуска, стоит уточнить и заменить.
export const doctors: Doctor[] = [
  {
    name: "Данияр Рахманов",
    role: { ru: "Хирург-имплантолог", kk: "Хирург-имплантолог" },
    category: "surgeons",
    experienceYears: 8,
    photo: "/photos/doctors/daniyar.jpg",
  },
  {
    name: "Нурбек Маратович",
    role: { ru: "Стоматолог-терапевт", kk: "Терапевт-стоматолог" },
    category: "therapists",
    experienceYears: 10,
    photo: "/photos/doctors/nurbek.jpg",
  },
  {
    name: "Султан Набижанович",
    role: { ru: "Хирург-имплантолог", kk: "Хирург-имплантолог" },
    category: "surgeons",
    experienceYears: 9,
    photo: "/photos/doctors/sultan.jpg",
  },
  {
    name: "Диляра Назарбекова",
    role: { ru: "Ортодонт", kk: "Ортодонт" },
    category: "orthodontists",
    experienceYears: 7,
    photo: "/photos/doctors/dilyara.jpg",
  },
  {
    name: "Рымханова Молдир",
    role: { ru: "Стоматолог-терапевт", kk: "Терапевт-стоматолог" }, // TODO: уточнить специализацию
    category: "therapists",
    experienceYears: 6, // TODO: уточнить стаж
    photo: "/photos/doctors/moldir.jpg",
  },
  {
    name: "Кикашев Аслан",
    role: { ru: "Стоматолог-хирург", kk: "Хирург-стоматолог" }, // TODO: уточнить специализацию
    category: "surgeons",
    experienceYears: 5, // TODO: уточнить стаж
    // Фото добавят позже — до тех пор карточка показывает плейсхолдер.
  },
  {
    name: "Нурсултан Аскарович",
    role: { ru: "Врач-эндодонтист", kk: "Дәрігер-эндодонтист" },
    category: "therapists",
    experienceYears: 7,
    photo: "/photos/doctors/nursultan.jpg",
  },
];

// Общее фото команды клиники — используется отдельным баннером под
// карточками врачей.
export const teamPhoto = "/photos/doctors/team-photo.jpg";

export type Review = {
  name: string;
  rating: number;
  date: string;
  source: string;
  // Реальные отзывы приведены как есть, на языке оригинала (русский) —
  // не переводим цитаты пациентов, чтобы сохранить их подлинность.
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
    text: "Хожу в эту стоматологию уже 5 лет - надёжная клиника, которой можно доверять.",
  },
  {
    name: "Зульфия Пшембаева",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Огромное спасибо доктору Молдир и всей клинике Genius! Все врачи - настоящие профессионалы, кабинеты чистые, персонал очень внимательный.",
  },
  {
    name: "Перизат Жаксылыкова",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Огромное спасибо доктору Нурбеку за профессионализм - лечение прошло максимально комфортно и безболезненно.",
  },
  {
    name: "kushanova_t",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Мой ортодонт - Диляра Назарбекова. Обожаю её работу, настоящий профессионал своего дела.",
  },
  {
    name: "Айсана Торебек",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Genius - лучшая клиника в Астане! Профессиональный подход, современное оборудование, заботливое отношение к пациентам.",
  },
  {
    name: "Ерлан Байжанов",
    rating: 5,
    date: "2026", // TODO: уточнить дату
    source: "2ГИС",
    text: "Ставил имплант у доктора Султана - всё прошло быстро и без осложнений. Врачи подробно объясняют каждый шаг лечения.",
  },
];

export type PriceItem = {
  name: LocalizedText;
  price: number;
  priceTo?: number;
  /** "от X" без верхней границы, когда verhняя цена не указана. */
  openEnded?: boolean;
};

export type PricingCategory = {
  category: LocalizedText;
  highlighted?: boolean;
  items: PriceItem[];
};

// Актуальный прайс клиники (заменён целиком — см. договорённость).
export const pricing: PricingCategory[] = [
  {
    category: { ru: "Имплантация", kk: "Имплантация" },
    highlighted: true,
    items: [
      { name: { ru: "Dentis, Южная Корея", kk: "Dentis, Оңтүстік Корея" }, price: 80000 },
      { name: { ru: "MegaGen AnyRidge, Южная Корея", kk: "MegaGen AnyRidge, Оңтүстік Корея" }, price: 150000 },
      { name: { ru: "Neodent, Бразилия", kk: "Neodent, Бразилия" }, price: 180000 },
      { name: { ru: "Straumann, Швейцария", kk: "Straumann, Швейцария" }, price: 350000 },
    ],
  },
  {
    category: { ru: "Терапия", kk: "Терапия" },
    items: [
      { name: { ru: "Лечение кариеса", kk: "Кариесті емдеу" }, price: 25000, priceTo: 35000 },
      { name: { ru: "Лечение пульпита", kk: "Пульпитті емдеу" }, price: 50000, priceTo: 90000 },
      { name: { ru: "Лечение периодонтита", kk: "Периодонтитті емдеу" }, price: 70000, priceTo: 100000 },
      { name: { ru: "Лечение под микроскопом", kk: "Микроскоппен емдеу" }, price: 90000, priceTo: 120000 },
    ],
  },
  {
    category: { ru: "Хирургия", kk: "Хирургия" },
    items: [
      { name: { ru: "Удаление (простое)", kk: "Жұлу (қарапайым)" }, price: 10000, priceTo: 20000 },
      { name: { ru: "Удаление (сложное)", kk: "Жұлу (күрделі)" }, price: 20000, priceTo: 36000 },
      { name: { ru: "Удаление зуба мудрости", kk: "Ақыл тісін жұлу" }, price: 25000, priceTo: 54000 },
    ],
  },
  {
    category: { ru: "Ортопедия", kk: "Ортопедия" },
    items: [
      { name: { ru: "Металлокерамическая коронка", kk: "Металлокерамикалық коронка" }, price: 60000 },
      { name: { ru: "Безметалловая циркониевая коронка", kk: "Металлсыз цирконий коронкасы" }, price: 100000 },
      {
        name: { ru: "Безметалловая циркониевая коронка на импланте", kk: "Имплантқа орнатылған металлсыз цирконий коронкасы" },
        price: 120000,
      },
      { name: { ru: "Съёмный протез", kk: "Алынбалы протез" }, price: 70000 },
      { name: { ru: "Термобюгельный протез", kk: "Термобюгельді протез" }, price: 150000 },
    ],
  },
  {
    category: { ru: "Ортодонтия", kk: "Ортодонтия" },
    items: [
      { name: { ru: "Металлические брекеты (одна челюсть)", kk: "Металл брекеттер (бір жақ)" }, price: 120000 },
      {
        name: { ru: "Самолигирующие брекеты H4 USA (одна челюсть)", kk: "Өзін-өзі лигирлейтін H4 USA брекеттері (бір жақ)" },
        price: 300000,
      },
      { name: { ru: "Элайнеры OrthoLine", kk: "OrthoLine элайнерлері" }, price: 1050000 },
      { name: { ru: "Элайнеры Klesmile", kk: "Klesmile элайнерлері" }, price: 700000 },
      { name: { ru: "Aligners Angel (одна челюсть)", kk: "Angel элайнерлері (бір жақ)" }, price: 1200000 },
    ],
  },
  {
    category: { ru: "All-on-4", kk: "All-on-4" },
    items: [
      { name: { ru: "Временная конструкция", kk: "Уақытша конструкция" }, price: 1000000, priceTo: 1800000 },
      { name: { ru: "Постоянная конструкция (акриловая)", kk: "Тұрақты конструкция (акрил)" }, price: 600000 },
      {
        name: {
          ru: "Постоянная конструкция (циркониевая коронка на титановой балке)",
          kk: "Тұрақты конструкция (титан балкасындағы цирконий коронкасы)",
        },
        price: 1000000,
        openEnded: true,
      },
    ],
  },
  {
    category: { ru: "All-on-6", kk: "All-on-6" },
    items: [
      {
        name: {
          ru: "Постоянная конструкция (циркониевая коронка на титановой балке)",
          kk: "Тұрақты конструкция (титан балкасындағы цирконий коронкасы)",
        },
        price: 1200000,
        openEnded: true,
      },
      { name: { ru: "Постоянная конструкция (акриловая)", kk: "Тұрақты конструкция (акрил)" }, price: 600000 },
    ],
  },
];

export type CaseItem = {
  title: LocalizedText;
  note: LocalizedText;
  before: string;
  after: string;
};

export const cases: CaseItem[] = [
  {
    title: { ru: "Эстетическая реставрация зубов", kk: "Тістерді эстетикалық реставрациялау" },
    note: { ru: "Устранение налёта и потемнений эмали", kk: "Тіс жабынын және қараюын жою" },
    before: "/photos/cases/case1-before.jpg",
    after: "/photos/cases/case1-after.jpg",
  },
  {
    title: { ru: "Протезирование коронками", kk: "Коронкамен протездеу" },
    note: { ru: "Замена старых металлических коронок", kk: "Ескі металл коронкаларды алмастыру" },
    before: "/photos/cases/case2-before.jpg",
    after: "/photos/cases/case2-after.jpg",
  },
  {
    title: { ru: "Комплексная гигиена и эстетика", kk: "Кешенді гигиена және эстетика" },
    note: { ru: "Результат за несколько визитов", kk: "Бірнеше келу нәтижесі" },
    before: "/photos/cases/case3-before.jpg",
    after: "/photos/cases/case3-after.jpg",
  },
  {
    title: { ru: "Реставрация жевательной группы зубов", kk: "Азу тістерді реставрациялау" },
    note: { ru: "Восстановление формы после кариеса", kk: "Кариестен кейін пішінді қалпына келтіру" },
    before: "/photos/cases/case4-before.jpg",
    after: "/photos/cases/case4-after.jpg",
  },
  {
    title: { ru: "Комплексное протезирование", kk: "Кешенді протездеу" },
    note: { ru: "Восстановление всего зубного ряда", kk: "Барлық тіс қатарын қалпына келтіру" },
    before: "/photos/cases/case5-before.jpg",
    after: "/photos/cases/case5-after.jpg",
  },
  {
    title: { ru: "Замена старых коронок", kk: "Ескі коронкаларды алмастыру" },
    note: { ru: "Обновление фронтальной группы зубов", kk: "Алдыңғы тістер тобын жаңарту" },
    before: "/photos/cases/case6-before.jpg",
    after: "/photos/cases/case6-after.jpg",
  },
];
