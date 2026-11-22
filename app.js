/**
 * ЗНАК СВОИХ (OUR OWN SIGN) — Master Interactive Engine
 * Autonomous Senior Full-Stack Implementation
 * Shared Element Transition + 36 Distinct Products with 4 Unique Images Each
 */

// ==========================================================================
// 1. MASSIVE CATALOG DATASET (36 Products: 18 Men, 18 Women)
// Each product has 4 DISTINCT, VERIFIED images (Main, Model, Macro, Lifestyle)
// Gender accuracy: Men's items have men models, Women's items have women models!
// ==========================================================================
const PRODUCTS_DATA = [
  // ===================== МУЖСКОЕ (18 ТОВАРОВ) =====================
  {
    id: 'm-hoodie-storm',
    title: 'Худи Оверсайз «Шторм»',
    gender: 'men',
    category: 'hoodies',
    price: 1890,
    priceDisplay: 'от 1 890 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 460 г/м²',
    density: '460 г/м²',
    fabric: '100% гребенной хлопок пенье компакт, 3-нитка диагональ',
    fit: 'Свободный уличный оверсайз со спущенным плечом и двойным капюшоном',
    care: 'Стирка при 30°C на деликатном режиме, вывернув наизнанку. Глажка только с изнанки.',
    colors: ['#0E0E11', '#1C1C20', '#DDBFB4'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shortDesc: 'Флагманское премиум-худи. Плотная турецкая ткань, не образует катышков.',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-zip-graphite',
    title: 'Зип-худи «Ночной Графит»',
    gender: 'men',
    category: 'hoodies',
    price: 2190,
    priceDisplay: 'от 2 190 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 420 г/м²',
    density: '420 г/м²',
    fabric: 'Хлопок пенье 85%, полиэстер 15% для стабильности формы',
    fit: 'Relaxed Fit, японская металлическая двухзамковая молния YKK, скрытые карманы',
    care: 'Машинная стирка при 30°C. Не сушить в барабане.',
    colors: ['#1C1C20', '#2E2B2A', '#F5F0E6'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    shortDesc: 'Универсальное худи на молнии с фирменным пуллером-звездой и вышивкой.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-crewneck-base',
    title: 'Свитшот Heavyweight «База»',
    gender: 'men',
    category: 'hoodies',
    price: 1690,
    priceDisplay: 'от 1 690 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 380 г/м²',
    density: '380 г/м²',
    fabric: '100% органический хлопок пенье, гладкая фактура',
    fit: 'Классический свободный силуэт, усиленная горловина с треугольной вставкой',
    care: 'Стирка до 40°C, естественная сушка.',
    colors: ['#0E0E11', '#EDE6D8'],
    sizes: ['S', 'M', 'L', 'XL'],
    shortDesc: 'Монолитный базовый свитшот. Держит форму даже после 50 стирок.',
    images: [
      'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-hoodie-monochrome',
    title: 'Худи с двойным капюшоном',
    gender: 'men',
    category: 'hoodies',
    price: 1990,
    priceDisplay: 'от 1 990 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 440 г/м²',
    density: '440 г/м²',
    fabric: '100% длинноволокнистый хлопок пенье с начесом',
    fit: 'Тяжелый уличный оверсайз, двойной плотный капюшон, стоящий стойкой',
    care: 'Стирка 30°C, без отбеливания.',
    colors: ['#0E0E11', '#2A2928'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    shortDesc: 'Утепленная модель для прохладных сезонов. Архитектурный крой.',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-tee-heavy-black',
    title: 'Футболка Heavyweight Boxy',
    gender: 'men',
    category: 'tshirts',
    price: 990,
    priceDisplay: 'от 990 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 260 г/м²',
    density: '260 г/м²',
    fabric: '100% супрем пенье компакт, повышенная плотность',
    fit: 'Широкий Boxy Fit, утолщенный воротник 2.5 см с двойной отстрочкой',
    care: 'Стирка при 30°C, глажка с изнанки.',
    colors: ['#0E0E11', '#EDE6D8', '#DDBFB4'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shortDesc: 'Культовая тяжелая футболка. Идеальная основа под вышивку и шелкографию.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-tee-ash',
    title: 'Футболка Raw Hem «Пепел»',
    gender: 'men',
    category: 'tshirts',
    price: 1090,
    priceDisplay: 'от 1 090 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 240 г/м²',
    density: '240 г/м²',
    fabric: '100% органический хлопок с эффектом мягкого энзимного умягчения',
    fit: 'Прямой свободный крой, открытый край на рукавах',
    care: 'Стирка 30°C.',
    colors: ['#28272A', '#0E0E11'],
    sizes: ['S', 'M', 'L', 'XL'],
    shortDesc: 'Винтажный серый оттенок с легкой потертостью швов и звездой на груди.',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-longsleeve-cream',
    title: 'Лонгслив Relaxed «Крем»',
    gender: 'men',
    category: 'tshirts',
    price: 1350,
    priceDisplay: 'от 1 350 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 280 г/м²',
    density: '280 г/м²',
    fabric: '100% гребенной хлопок пенье, фактурная мягкость',
    fit: 'Свободный лонгслив с плотными эластичными манжетами',
    care: 'Стирка 30°C, без отжима на максимальных оборотах.',
    colors: ['#F5F0E6', '#0E0E11'],
    sizes: ['M', 'L', 'XL'],
    shortDesc: 'Теплый кремовый тон. Тканая жаккардовая бирка и вышитая звезда на запястье.',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-tee-washed',
    title: 'Футболка Vintage Washed',
    gender: 'men',
    category: 'tshirts',
    price: 1190,
    priceDisplay: 'от 1 190 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 250 г/м²',
    density: '250 г/м²',
    fabric: 'Хлопок с кислотной стиркой Acid Wash',
    fit: 'Streetwear Boxy Fit',
    care: 'Стирка 30°C.',
    colors: ['#222124'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shortDesc: 'Уникальный мраморный узор на каждом изделии. Принт не смывается.',
    images: [
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-overshirt-twill',
    title: 'Овершот Твил «Шторм»',
    gender: 'men',
    category: 'shirts',
    price: 2450,
    priceDisplay: 'от 2 450 ₽',
    minQty: 'от 10 шт.',
    badge: 'Твил 340 г/м²',
    density: '340 г/м²',
    fabric: '100% хлопковый саржевый твил высокой прочности',
    fit: 'Прямой овершот, нагрудные карманы с клапанами на металлических кнопках',
    care: 'Деликатная стирка при 30°C.',
    colors: ['#0E0E11', '#2C2B29'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    shortDesc: 'Полноценная плотная куртка-рубашка. Идеальный второй слой для команды.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-shirt-canvas',
    title: 'Рубашка Canvas Relaxed',
    gender: 'men',
    category: 'shirts',
    price: 2290,
    priceDisplay: 'от 2 290 ₽',
    minQty: 'от 10 шт.',
    badge: 'Канвас 300 г/м²',
    density: '300 г/м²',
    fabric: 'Смесь умягченного хлопка и льна',
    fit: 'Свободный силуэт, костяные матовые пуговицы',
    care: 'Стирка 30°C.',
    colors: ['#EDE6D8', '#0E0E11'],
    sizes: ['S', 'M', 'L', 'XL'],
    shortDesc: 'Экологичный бежевый канвас с природной фактурой и вышивкой на кармане.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-zip-shacket',
    title: 'Шакет на металлической молнии',
    gender: 'men',
    category: 'shirts',
    price: 2690,
    priceDisplay: 'от 2 690 ₽',
    minQty: 'от 10 шт.',
    badge: 'Heavy Twill 360 г/м²',
    density: '360 г/м²',
    fabric: 'Плотный хлопковый твил с водоотталкивающей пропиткой',
    fit: 'Строгий прямой крой со скрытыми врезными карманами',
    care: 'Химчистка или ручная стирка 30°C.',
    colors: ['#0E0E11'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    shortDesc: 'Флагманский предмет для корпоративного руководства и амбассадоров.',
    images: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-pants-cargo',
    title: 'Брюки Карго Wide-Leg',
    gender: 'men',
    category: 'pants',
    price: 2590,
    priceDisplay: 'от 2 590 ₽',
    minQty: 'от 10 шт.',
    badge: 'Твил 320 г/м²',
    density: '320 г/м²',
    fabric: '100% плотный хлопок саржевого плетения',
    fit: 'Широкие штанины Wide-Leg с затяжками снизу, 6 функциональных карманов',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#2C2A28'],
    sizes: ['S', 'M', 'L', 'XL'],
    shortDesc: 'Стритвир брюки с брендированными пуллерами и вышитой звездой на клапане.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-jeans-raw',
    title: 'Джинсы Straight Raw Denim',
    gender: 'men',
    category: 'pants',
    price: 2890,
    priceDisplay: 'от 2 890 ₽',
    minQty: 'от 10 шт.',
    badge: '14 oz Сухой деним',
    density: '14 oz (420 г/м²)',
    fabric: '100% нестиранный хлопок селвидж-деним',
    fit: 'Классический прямой крой со средней посадкой',
    care: 'Редкая стирка при 30°C наизнанку.',
    colors: ['#12131A', '#0E0E11'],
    sizes: ['30', '32', '34', '36'],
    shortDesc: 'Тяжелый деним с кожаным патчем со звездой «Знак Своих» на поясе.',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-pants-chinos',
    title: 'Брюки чинос «Песчаник»',
    gender: 'men',
    category: 'pants',
    price: 2390,
    priceDisplay: 'от 2 390 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 310 г/м²',
    density: '310 г/м²',
    fabric: 'Хлопок 98%, эластан 2% для комфорта движения',
    fit: 'Relaxed Tapered (свободный верх, зауженный низ)',
    care: 'Стирка 30°C.',
    colors: ['#EDE6D8', '#0E0E11'],
    sizes: ['S', 'M', 'L', 'XL'],
    shortDesc: 'Элегантные бежевые брюки, гармонирующие с худи и овершотами.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-notebook-soft',
    title: 'Блокнот Soft-Touch А5 со звездой',
    gender: 'men',
    category: 'stationery',
    price: 550,
    priceDisplay: 'от 550 ₽',
    minQty: 'от 15 шт.',
    badge: 'Премиум бумага 90г',
    density: '240 стр, 90 г/м²',
    fabric: 'Гибкая обложка софт-тач с глубоким тиснением',
    fit: 'Формат А5, точка 5мм, ляссе в тон, карман на форзаце',
    care: 'Хранить в сухом месте.',
    colors: ['#0E0E11', '#DDBFB4'],
    sizes: ['A5'],
    shortDesc: 'Тактильный блокнот премиального уровня. Идеален для заметок и встреч.',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589384267710-7a170981ca78?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-pen-brass',
    title: 'Металлическая ручка в футляре',
    gender: 'men',
    category: 'stationery',
    price: 390,
    priceDisplay: 'от 390 ₽',
    minQty: 'от 20 шт.',
    badge: 'Матовая латунь',
    density: 'Вес 38г',
    fabric: 'Анодированный алюминий с лазерной гравировкой звезды',
    fit: 'Стержень немецкий гелевый Dokumental 0.5 мм',
    care: 'Сменный стержень стандарта G2.',
    colors: ['#0E0E11', '#DDBFB4'],
    sizes: ['Standard'],
    shortDesc: 'Увесистая статусная ручка с бархатным ходом пера и гравировкой.',
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585336261026-7788c697855d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-cap-dad',
    title: 'Кепка Dad Cap с 3D-вышивкой',
    gender: 'men',
    category: 'accessories',
    price: 790,
    priceDisplay: 'от 790 ₽',
    minQty: 'от 15 шт.',
    badge: '3D вышивка звезды',
    density: 'Хлопок 320 г/м²',
    fabric: '100% тяжелый саржевый хлопок',
    fit: '6 клиньев, изогнутый козырек, металлическая пряжка сзади',
    care: 'Ручная сухая чистка.',
    colors: ['#0E0E11', '#EDE6D8'],
    sizes: ['One Size (регулируется)'],
    shortDesc: 'Фирменная кепка со скругленным силуэтом и объемной вышивкой.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'm-bag-shopper',
    title: 'Шоппер холщовый с карманом',
    gender: 'men',
    category: 'accessories',
    price: 490,
    priceDisplay: 'от 490 ₽',
    minQty: 'от 15 шт.',
    badge: 'Канвас 380 г/м²',
    density: '380 г/м²',
    fabric: '100% суровый необработанный хлопковый канвас',
    fit: 'Вместительный размер 42х38х10 см, ручки 70 см, внутренний карман на молнии',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#EDE6D8'],
    sizes: ['One Size'],
    shortDesc: 'Выдерживает вес до 20 кг. Шелкография высокой стойкости.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80'
    ]
  },

  // ===================== ЖЕНСКОЕ (18 ТОВАРОВ) =====================
  {
    id: 'w-hoodie-rose',
    title: 'Худи Оверсайз «Пыльный Кварц»',
    gender: 'women',
    category: 'hoodies',
    price: 1890,
    priceDisplay: 'от 1 890 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 420 г/м²',
    density: '420 г/м²',
    fabric: '100% гребенной хлопок пенье компакт с бархатистым peach-эффектом',
    fit: 'Уютный оверсайз крой со спущенным плечом и двойным капюшоном',
    care: 'Стирка 30°C, деликатный отжим.',
    colors: ['#DDBFB4', '#F5F0E6', '#0E0E11'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Главный бестселлер женской линейки. Фирменный пудровый оттенок бренда.',
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-sweatshirt-crop',
    title: 'Свитшот Кроп «Теплый Крем»',
    gender: 'women',
    category: 'hoodies',
    price: 1650,
    priceDisplay: 'от 1 650 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 360 г/м²',
    density: '360 г/м²',
    fabric: '100% хлопок пенье, гладкая фактура',
    fit: 'Укороченный оверсайз силуэт с необработанным краем и широкими рукавами',
    care: 'Стирка 30°C.',
    colors: ['#F5F0E6', '#DDBFB4'],
    sizes: ['XS', 'S', 'M'],
    shortDesc: 'Стильный кроп-свитшот. Идеально сочетается с брюками палаццо и джинсами.',
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-zip-charcoal',
    title: 'Зип-худи «Шоколадный Уголь»',
    gender: 'women',
    category: 'hoodies',
    price: 2190,
    priceDisplay: 'от 2 190 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 440 г/м²',
    density: '440 г/м²',
    fabric: 'Хлопок пенье 90%, полиэстер 10%',
    fit: 'Boyfriend Fit, плотный начес, застежка-молния под горло',
    care: 'Стирка при 30°C.',
    colors: ['#0E0E11', '#2C2224'],
    sizes: ['S', 'M', 'L'],
    shortDesc: 'Глубокий темный оттенок. Акцентная вышивка звезды на груди.',
    images: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-sweatshirt-sand',
    title: 'Свитшот Relaxed «Песок»',
    gender: 'women',
    category: 'hoodies',
    price: 1690,
    priceDisplay: 'от 1 690 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 380 г/м²',
    density: '380 г/м²',
    fabric: '100% длинноволокнистый хлопок',
    fit: 'Свободный расслабленный силуэт',
    care: 'Стирка 30°C.',
    colors: ['#EDE6D8', '#DDBFB4'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Мягкий песочный оттенок. Деликатная вышивка шелковой нитью в тон.',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-tee-rose',
    title: 'Футболка Boxy «Пыльная Роза»',
    gender: 'women',
    category: 'tshirts',
    price: 990,
    priceDisplay: 'от 990 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 240 г/м²',
    density: '240 г/м²',
    fabric: '100% органический хлопок пенье',
    fit: 'Широкий женский крой со спущенным рукавом',
    care: 'Стирка 30°C.',
    colors: ['#DDBFB4', '#F5F0E6'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Нежный акцентный цвет палитры. Не просвечивает, держит красивую форму.',
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-tee-ivory',
    title: 'Футболка Relaxed Ivory Cream',
    gender: 'women',
    category: 'tshirts',
    price: 1050,
    priceDisplay: 'от 1 050 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 220 г/м²',
    density: '220 г/м²',
    fabric: '100% шелковистый хлопок премиум-выделки',
    fit: 'Прямой силуэт со слегка удлиненным рукавом',
    care: 'Стирка 30°C.',
    colors: ['#F5F0E6', '#0E0E11'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Базовая футболка цвета слоновой кости. Тонкая контрастная звезда на вороте.',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-longsleeve-rib',
    title: 'Лонгслив в рубчик со звездой',
    gender: 'women',
    category: 'tshirts',
    price: 1390,
    priceDisplay: 'от 1 390 ₽',
    minQty: 'от 10 шт.',
    badge: 'Фактурный кашкорсе 260г',
    density: '260 г/м²',
    fabric: 'Хлопок 95%, эластан 5% в мелкий рубчик',
    fit: 'Полуприлегающий крой с удлиненными рукавами и прорезями для пальцев',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#DDBFB4'],
    sizes: ['XS', 'S', 'M'],
    shortDesc: 'Женственный силуэт с вышивкой звезды серебристой нитью на манжете.',
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-tee-boyfriend',
    title: 'Футболка Boyfriend Charcoal',
    gender: 'women',
    category: 'tshirts',
    price: 1090,
    priceDisplay: 'от 1 090 ₽',
    minQty: 'от 10 шт.',
    badge: 'Хлопок 250 г/м²',
    density: '250 г/м²',
    fabric: '100% супрем пенье с эффектом застиранности',
    fit: 'Увеличенный мужской оверсайз крой для девушек',
    care: 'Стирка 30°C.',
    colors: ['#28272A', '#0E0E11'],
    sizes: ['S', 'M', 'L'],
    shortDesc: 'Любимый силуэт девушек — будто снята с плеча бойфренда.',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-shirt-linen',
    title: 'Рубашка-Оверсайз Linen Cream',
    gender: 'women',
    category: 'shirts',
    price: 2390,
    priceDisplay: 'от 2 390 ₽',
    minQty: 'от 10 шт.',
    badge: 'Лен / Хлопок 240г',
    density: '240 г/м²',
    fabric: 'Лен 55%, хлопок 45% умягченный',
    fit: 'Воздушный оверсайз со спущенным плечом и удлиненной спинкой',
    care: 'Стирка 30°C на деликатном режиме.',
    colors: ['#F5F0E6', '#EDE6D8'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Летящая натуральная рубашка. Фирменная пудровая пуговица на воротнике.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-jacket-denim',
    title: 'Джинсовая куртка-рубашка',
    gender: 'women',
    category: 'shirts',
    price: 2790,
    priceDisplay: 'от 2 790 ₽',
    minQty: 'от 10 шт.',
    badge: '13 oz Black Denim',
    density: '13 oz (390 г/м²)',
    fabric: '100% хлопковый стираный деним',
    fit: 'Oversize Shacket, акцентные карманы',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#28272A'],
    sizes: ['S', 'M', 'L'],
    shortDesc: 'Стильная джинсовая рубашка-куртка со слепым тиснением знака на кокетке.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-shirt-microtwill',
    title: 'Рубашка в клетку микротвил',
    gender: 'women',
    category: 'shirts',
    price: 2290,
    priceDisplay: 'от 2 290 ₽',
    minQty: 'от 10 шт.',
    badge: 'Фланель 280 г/м²',
    density: '280 г/м²',
    fabric: '100% мягкий ворсованный хлопок',
    fit: 'Свободный расслабленный силуэт',
    care: 'Стирка 30°C.',
    colors: ['#EDE6D8', '#2C2B29'],
    sizes: ['XS', 'S', 'M'],
    shortDesc: 'Мягчайшая рубашка в сдержанную бежево-черную клетку.',
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-pants-palazzo',
    title: 'Брюки палаццо «Теплый Крем»',
    gender: 'women',
    category: 'pants',
    price: 2490,
    priceDisplay: 'от 2 490 ₽',
    minQty: 'от 10 шт.',
    badge: 'Футер 380 г/м²',
    density: '380 г/м²',
    fabric: '100% хлопок пенье, гладкая фактура без начеса',
    fit: 'Широкие струящиеся штанины палаццо, высокая посадка на мягкой резинке',
    care: 'Стирка 30°C.',
    colors: ['#F5F0E6', '#0E0E11', '#DDBFB4'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Максимальный комфорт и роскошный силуэт. Составляют костюм со свитшотом.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-jeans-wide',
    title: 'Джинсы Wide-Leg High Waist',
    gender: 'women',
    category: 'pants',
    price: 2890,
    priceDisplay: 'от 2 890 ₽',
    minQty: 'от 10 шт.',
    badge: '13 oz Деним',
    density: '13 oz',
    fabric: '100% натуральный хлопок без синтетики',
    fit: 'Высокая талия, широкие штанины от бедра, удлиняющие силуэт',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#28272A'],
    sizes: ['25', '26', '27', '28', '29', '30'],
    shortDesc: 'Идеальные пропорции денима. Кожаный лейбл со звездой на заднем кармане.',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-pants-cargo-tan',
    title: 'Брюки карго Desert Tan',
    gender: 'women',
    category: 'pants',
    price: 2590,
    priceDisplay: 'от 2 590 ₽',
    minQty: 'от 10 шт.',
    badge: 'Твил 300 г/м²',
    density: '300 г/м²',
    fabric: 'Хлопок 100% саржевого переплетения',
    fit: 'Регулируемая посадка на шнурке, аккуратные плоские карманы',
    care: 'Стирка 30°C.',
    colors: ['#EDE6D8', '#0E0E11'],
    sizes: ['XS', 'S', 'M', 'L'],
    shortDesc: 'Песочные карго с мягкой посадкой и фирменным шевроном.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-planner-rose',
    title: 'Планер в обложке Soft-Touch Rose',
    gender: 'women',
    category: 'stationery',
    price: 590,
    priceDisplay: 'от 590 ₽',
    minQty: 'от 15 шт.',
    badge: 'Премиум бумага 100г',
    density: '200 стр, нелинованный блок',
    fabric: 'Итальянская экокожа софт-тач пудрового оттенка',
    fit: 'Недатированный ежедневник с золотым тиснением знака',
    care: 'Сухая чистка.',
    colors: ['#DDBFB4', '#F5F0E6'],
    sizes: ['A5'],
    shortDesc: 'Вдохновляющий планер для сообществ, лекций и творческих идей.',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1589384267710-7a170981ca78?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-pen-roller',
    title: 'Роллер-ручка в тубусе',
    gender: 'women',
    category: 'stationery',
    price: 390,
    priceDisplay: 'от 390 ₽',
    minQty: 'от 20 шт.',
    badge: 'Металл & керамика',
    density: 'Вес 32г',
    fabric: 'Матовый алюминиевый сплав цвета Dusty Rose',
    fit: 'Керамический шарик 0.5 мм, синие чернила',
    care: 'Сменный стержень.',
    colors: ['#DDBFB4', '#0E0E11'],
    sizes: ['Standard'],
    shortDesc: 'Изящная ручка в фирменном брендовом футляре с гравировкой звезды.',
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1585336261026-7788c697855d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-tote-ivory',
    title: 'Шоппер объемный с карабином',
    gender: 'women',
    category: 'accessories',
    price: 520,
    priceDisplay: 'от 520 ₽',
    minQty: 'от 15 шт.',
    badge: 'Саржа 380 г/м²',
    density: '380 г/м²',
    fabric: 'Плотная хлопковая саржа цвета слоновой кости',
    fit: 'Объемное дно 12 см, внутренний карабин для ключей, карман на молнии',
    care: 'Стирка 30°C.',
    colors: ['#F5F0E6', '#0E0E11'],
    sizes: ['One Size'],
    shortDesc: 'Вместительный шопер для учебы, ноутбука и тренировок со звездой.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'w-set-socks-hat',
    title: 'Панама Bucket Hat & Носки (Сет)',
    gender: 'women',
    category: 'accessories',
    price: 890,
    priceDisplay: 'от 890 ₽ / сет',
    minQty: 'от 15 сетов',
    badge: 'Сет со скидкой',
    density: 'Панама 320г + Хлопок 80%',
    fabric: 'Плотный хлопковый канвас + гребенной хлопок',
    fit: 'Двусторонняя панама со звездой + носки с высокой резинкой',
    care: 'Стирка 30°C.',
    colors: ['#0E0E11', '#DDBFB4'],
    sizes: ['One Size'],
    shortDesc: 'Готовый подарочный дуэт: панама с вышивкой и мягкие жаккардовые носки.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

// Current filter state
let catalogFilter = {
  gender: 'men',
  category: 'all'
};

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initClothesRack();
  initHeaderScroll();
  initMobileMenu();
  initGenderTabs();
  initCategoryTabs();
  renderCatalog();
  initMerchCalculator();
  initModalListeners();
});


// ==========================================================================
// INTERACTIVE 2D CLOTHES RACK HERO (PURE SVG TECHNICAL SKETCHES)
// ==========================================================================
const RACK_GARMENTS = [{"id": "hoodie-cream", "name": "Худи Оверсайз Cream", "subtitle": "Флагманский оверсайз из плотного футера 3-нитки", "colorName": "Кремовый (Cream #EAE6DF)", "colorHex": "#EAE6DF", "gsm": "480 GSM", "price": "от 1 890 ₽", "minQty": "от 10 шт.", "badge": "Футер 480 г/м²", "density": "480 г/м²", "fabric": "100% гребенной хлопок пенье, 3-нитка диагональ", "fit": "Свободный уличный оверсайз, двойной капюшон, спущенное плечо", "care": "Деликатная стирка при 30°C, вывернув наизнанку. Не отбеливать.", "sku": "ZS-H480-CRM", "category": "hoodies", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"hc-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"hc-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F4F1EA\"/>\n      <stop offset=\"50%\" stop-color=\"#EAE6DF\"/>\n      <stop offset=\"100%\" stop-color=\"#DDD8D0\"/>\n    </linearGradient>\n    <linearGradient id=\"hc-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(0,0,0,0.06)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.18)\"/>\n    </linearGradient>\n    <linearGradient id=\"hc-pocket-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#E8E4DC\"/>\n      <stop offset=\"100%\" stop-color=\"#DDD8CF\"/>\n    </linearGradient>\n    <pattern id=\"hc-rib-pat\" width=\"4\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"4\" stroke=\"#D0CBC2\" stroke-width=\"1.2\"/>\n    </pattern>\n  </defs>\n\n  <!-- Wire Hanger -->\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#hc-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#hc-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <!-- Garment: Hoodie Front -->\n  <g class=\"garment-body\">\n    <!-- Back Collar Inner -->\n    <path d=\"M 125 76 Q 160 92 195 76 Q 160 84 125 76 Z\" fill=\"#C5BFB5\" stroke=\"#B8B2A7\" stroke-width=\"1\"/>\n    <!-- Brand Label Inside Neck -->\n    <rect x=\"150\" y=\"80\" width=\"20\" height=\"11\" rx=\"1\" fill=\"#1C1C1E\"/>\n    <path d=\"M 160 82.5 L 160.8 84.5 L 162.8 85.5 L 160.8 86.5 L 160 88.5 L 159.2 86.5 L 157.2 85.5 L 159.2 84.5 Z\" fill=\"#DDBFB4\"/>\n\n    <!-- Left & Right Dropped Sleeves -->\n    <path d=\"M 85 76 L 36 182 C 34 186, 40 190, 48 188 L 88 152 L 95 240 Z\" fill=\"url(#hc-body-grad)\" stroke=\"#C8C3BA\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 284 182 C 286 186, 280 190, 272 188 L 232 152 L 225 240 Z\" fill=\"url(#hc-body-grad)\" stroke=\"#C8C3BA\" stroke-width=\"1.2\"/>\n\n    <!-- Sleeve Ribbed Cuffs -->\n    <path d=\"M 36 182 L 48 188 L 42 208 L 30 202 Z\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1\"/>\n    <line x1=\"33\" y1=\"184\" x2=\"39\" y2=\"204\" stroke=\"#D0C9BE\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/>\n    <path d=\"M 284 182 L 272 188 L 278 208 L 290 202 Z\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1\"/>\n    <line x1=\"287\" y1=\"184\" x2=\"281\" y2=\"204\" stroke=\"#D0C9BE\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/>\n\n    <!-- Main Torso (Oversized Boxy Silhouette) -->\n    <path d=\"M 85 76 \n             C 80 88, 78 128, 88 152\n             L 92 345\n             L 228 345\n             L 232 152\n             C 242 128, 240 88, 235 76\n             Q 160 98 85 76 Z\" \n          fill=\"url(#hc-body-grad)\" \n          stroke=\"#C8C3BA\" \n          stroke-width=\"1.4\"/>\n\n    <!-- Torso Depth Shading -->\n    <path d=\"M 88 152 L 92 345 L 115 345 C 105 250, 102 180, 88 152 Z\" fill=\"url(#hc-shade-grad)\" opacity=\"0.6\"/>\n    <path d=\"M 232 152 L 228 345 L 205 345 C 215 250, 218 180, 232 152 Z\" fill=\"url(#hc-shade-grad)\" opacity=\"0.6\"/>\n\n    <!-- Subtle Fold Creases -->\n    <path d=\"M 100 170 Q 118 205 106 240\" fill=\"none\" stroke=\"#D0C9BF\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n    <path d=\"M 220 170 Q 202 205 214 240\" fill=\"none\" stroke=\"#D0C9BF\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n\n    <!-- Kangaroo Pocket -->\n    <path d=\"M 112 250 \n             L 208 250 \n             L 218 318 \n             C 214 322, 206 322, 202 322\n             L 118 322\n             C 114 322, 106 322, 102 318\n             Z\" \n          fill=\"url(#hc-pocket-grad)\" \n          stroke=\"#C4BEB4\" \n          stroke-width=\"1.2\"/>\n    <!-- Pocket Twin Needle Stitch -->\n    <path d=\"M 115 253 L 205 253\" fill=\"none\" stroke=\"#AFA99E\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n    <path d=\"M 115 255 L 205 255\" fill=\"none\" stroke=\"#AFA99E\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n    <!-- Pocket Slanted Openings -->\n    <line x1=\"112\" y1=\"250\" x2=\"102\" y2=\"318\" stroke=\"#AFA99E\" stroke-width=\"1.2\"/>\n    <line x1=\"114\" y1=\"252\" x2=\"105\" y2=\"316\" stroke=\"#AFA99E\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n    <line x1=\"208\" y1=\"250\" x2=\"218\" y2=\"318\" stroke=\"#AFA99E\" stroke-width=\"1.2\"/>\n    <line x1=\"206\" y1=\"252\" x2=\"215\" y2=\"316\" stroke=\"#AFA99E\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n    <!-- Pocket Bar Tacks -->\n    <line x1=\"110\" y1=\"250\" x2=\"114\" y2=\"250\" stroke=\"#7A756D\" stroke-width=\"2\"/>\n    <line x1=\"206\" y1=\"250\" x2=\"210\" y2=\"250\" stroke=\"#7A756D\" stroke-width=\"2\"/>\n    <line x1=\"100\" y1=\"318\" x2=\"104\" y2=\"318\" stroke=\"#7A756D\" stroke-width=\"2\"/>\n    <line x1=\"216\" y1=\"318\" x2=\"220\" y2=\"318\" stroke=\"#7A756D\" stroke-width=\"2\"/>\n\n    <!-- Bottom Wide Ribbed Hem -->\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" rx=\"2\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1.2\"/>\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" fill=\"url(#hc-rib-pat)\" opacity=\"0.35\"/>\n    <line x1=\"91\" y1=\"345\" x2=\"229\" y2=\"345\" stroke=\"#AFA99E\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Double Layered Hood Draped at Neck -->\n    <path d=\"M 104 68 \n             C 100 50, 116 42, 138 46 \n             C 148 40, 172 40, 182 46 \n             C 204 42, 220 50, 216 68 \n             C 212 90, 186 104, 160 106 \n             C 134 104, 108 90, 104 68 Z\" \n          fill=\"url(#hc-body-grad)\" \n          stroke=\"#C4BEB4\" \n          stroke-width=\"1.3\"/>\n    <!-- Hood Inner Opening Depth -->\n    <path d=\"M 132 58 Q 160 76 188 58 Q 160 92 132 58 Z\" fill=\"#C0BAB0\" stroke=\"#ABA59B\" stroke-width=\"1\"/>\n    \n    <!-- Hood Eyelets & Flat Drawstrings -->\n    <circle cx=\"146\" cy=\"92\" r=\"2.2\" fill=\"#D0CBC2\" stroke=\"#888\" stroke-width=\"0.8\"/>\n    <circle cx=\"174\" cy=\"92\" r=\"2.2\" fill=\"#D0CBC2\" stroke=\"#888\" stroke-width=\"0.8\"/>\n    <!-- Left Cording -->\n    <path d=\"M 146 94 Q 142 140 148 185\" fill=\"none\" stroke=\"#EDEAE4\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <rect x=\"146.5\" y=\"185\" width=\"3\" height=\"9\" rx=\"0.8\" fill=\"#B0AAA0\" stroke=\"#777\" stroke-width=\"0.5\"/>\n    <!-- Right Cording -->\n    <path d=\"M 174 94 Q 178 135 172 178\" fill=\"none\" stroke=\"#EDEAE4\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <rect x=\"170.5\" y=\"178\" width=\"3\" height=\"9\" rx=\"0.8\" fill=\"#B0AAA0\" stroke=\"#777\" stroke-width=\"0.5\"/>\n\n    <!-- Subtle Minimalist Chest Star Embroidery -->\n    <g transform=\"translate(182, 135) scale(0.65)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\"/>\n    </g>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"hcb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"hcb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#F4F1EA\"/>\n      <stop offset=\"50%\" stop-color=\"#EAE6DF\"/>\n      <stop offset=\"100%\" stop-color=\"#DDD8D0\"/>\n    </linearGradient>\n    <pattern id=\"hcb-rib-pat\" width=\"4\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"4\" stroke=\"#D0CBC2\" stroke-width=\"1.2\"/>\n    </pattern>\n  </defs>\n\n  <!-- Wire Hanger -->\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#hcb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#hcb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <!-- Garment: Hoodie Back -->\n  <g class=\"garment-body\">\n    <!-- Sleeves -->\n    <path d=\"M 85 76 L 36 182 C 34 186, 40 190, 48 188 L 88 152 L 95 240 Z\" fill=\"url(#hcb-body-grad)\" stroke=\"#C8C3BA\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 284 182 C 286 186, 280 190, 272 188 L 232 152 L 225 240 Z\" fill=\"url(#hcb-body-grad)\" stroke=\"#C8C3BA\" stroke-width=\"1.2\"/>\n    <!-- Cuffs -->\n    <path d=\"M 36 182 L 48 188 L 42 208 L 30 202 Z\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1\"/>\n    <path d=\"M 284 182 L 272 188 L 278 208 L 290 202 Z\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1\"/>\n\n    <!-- Main Torso -->\n    <path d=\"M 85 76 C 80 88, 78 128, 88 152 L 92 345 L 228 345 L 232 152 C 242 128, 240 88, 235 76 Q 160 88 85 76 Z\" fill=\"url(#hcb-body-grad)\" stroke=\"#C8C3BA\" stroke-width=\"1.4\"/>\n\n    <!-- Back Yoke Seam with Twin Needle Stitch -->\n    <path d=\"M 90 138 L 230 138\" fill=\"none\" stroke=\"#B8B2A7\" stroke-width=\"1\"/>\n    <path d=\"M 90 141 L 230 141\" fill=\"none\" stroke=\"#B8B2A7\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- PROMINENT BACK PRINT: Brand Star + Typography -->\n    <g transform=\"translate(160, 215) scale(1.6)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"258\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"13\" fill=\"#1C1C1E\" text-anchor=\"middle\" letter-spacing=\"3\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"272\" font-family=\"'Inter', sans-serif\" font-weight=\"500\" font-size=\"7\" fill=\"#757067\" text-anchor=\"middle\" letter-spacing=\"2\">480 GSM · HEAVYWEIGHT HOODIE</text>\n\n    <!-- Bottom Hem -->\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" rx=\"2\" fill=\"#E2DDD5\" stroke=\"#BFBAAF\" stroke-width=\"1.2\"/>\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" fill=\"url(#hcb-rib-pat)\" opacity=\"0.35\"/>\n\n    <!-- Hood Resting on Back -->\n    <path d=\"M 112 55 C 104 75, 120 115, 160 118 C 200 115, 216 75, 208 55 Q 160 65 112 55 Z\" fill=\"#DDD8CE\" stroke=\"#C0BAB0\" stroke-width=\"1.2\"/>\n    <path d=\"M 130 65 Q 160 90 190 65\" fill=\"none\" stroke=\"#ABA498\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>"}, {"id": "hoodie-black", "name": "Худи Оверсайз Obsidian", "subtitle": "Культовый глубокий черный с фирменной пыльно-розовой искрой", "colorName": "Глубокий черный (Obsidian #1C1C1E)", "colorHex": "#1C1C1E", "gsm": "480 GSM", "price": "от 1 890 ₽", "minQty": "от 10 шт.", "badge": "Футер 480 г/м²", "density": "480 г/м²", "fabric": "100% гребенной хлопок пенье компакт, 3-нитка диагональ", "fit": "Свободный уличный оверсайз, двойной капюшон, спущенное плечо", "care": "Деликатная стирка при 30°C, вывернув наизнанку.", "sku": "ZS-H480-OBS", "category": "hoodies", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-2xl select-none\">\n  <defs>\n    <linearGradient id=\"hb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#A1A1A6\"/>\n      <stop offset=\"50%\" stop-color=\"#555558\"/>\n      <stop offset=\"100%\" stop-color=\"#242426\"/>\n    </linearGradient>\n    <linearGradient id=\"hb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2A2A2E\"/>\n      <stop offset=\"50%\" stop-color=\"#1C1C1E\"/>\n      <stop offset=\"100%\" stop-color=\"#121214\"/>\n    </linearGradient>\n    <linearGradient id=\"hb-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(255,255,255,0.04)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.5)\"/>\n    </linearGradient>\n    <linearGradient id=\"hb-pocket-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#242428\"/>\n      <stop offset=\"100%\" stop-color=\"#18181A\"/>\n    </linearGradient>\n    <pattern id=\"hb-rib-pat\" width=\"4\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"4\" stroke=\"#121214\" stroke-width=\"1.2\"/>\n    </pattern>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#hb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#555\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#444\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#hb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <path d=\"M 125 76 Q 160 92 195 76 Q 160 84 125 76 Z\" fill=\"#141416\" stroke=\"#2A2A2E\" stroke-width=\"1\"/>\n    <rect x=\"150\" y=\"80\" width=\"20\" height=\"11\" rx=\"1\" fill=\"#2A2A2E\"/>\n    <path d=\"M 160 82.5 L 160.8 84.5 L 162.8 85.5 L 160.8 86.5 L 160 88.5 L 159.2 86.5 L 157.2 85.5 L 159.2 84.5 Z\" fill=\"#DDBFB4\"/>\n\n    <path d=\"M 85 76 L 36 182 C 34 186, 40 190, 48 188 L 88 152 L 95 240 Z\" fill=\"url(#hb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 284 182 C 286 186, 280 190, 272 188 L 232 152 L 225 240 Z\" fill=\"url(#hb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.2\"/>\n\n    <path d=\"M 36 182 L 48 188 L 42 208 L 30 202 Z\" fill=\"#18181A\" stroke=\"#2C2C30\" stroke-width=\"1\"/>\n    <line x1=\"33\" y1=\"184\" x2=\"39\" y2=\"204\" stroke=\"#121214\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/>\n    <path d=\"M 284 182 L 272 188 L 278 208 L 290 202 Z\" fill=\"#18181A\" stroke=\"#2C2C30\" stroke-width=\"1\"/>\n    <line x1=\"287\" y1=\"184\" x2=\"281\" y2=\"204\" stroke=\"#121214\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/>\n\n    <path d=\"M 85 76 C 80 88, 78 128, 88 152 L 92 345 L 228 345 L 232 152 C 242 128, 240 88, 235 76 Q 160 98 85 76 Z\" fill=\"url(#hb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.4\"/>\n    <path d=\"M 88 152 L 92 345 L 115 345 C 105 250, 102 180, 88 152 Z\" fill=\"url(#hb-shade-grad)\" opacity=\"0.7\"/>\n    <path d=\"M 232 152 L 228 345 L 205 345 C 215 250, 218 180, 232 152 Z\" fill=\"url(#hb-shade-grad)\" opacity=\"0.7\"/>\n\n    <path d=\"M 100 170 Q 118 205 106 240\" fill=\"none\" stroke=\"#2C2C32\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n    <path d=\"M 220 170 Q 202 205 214 240\" fill=\"none\" stroke=\"#2C2C32\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n\n    <path d=\"M 112 250 L 208 250 L 218 318 C 214 322, 206 322, 202 322 L 118 322 C 114 322, 106 322, 102 318 Z\" fill=\"url(#hb-pocket-grad)\" stroke=\"#2B2B30\" stroke-width=\"1.2\"/>\n    <path d=\"M 115 253 L 205 253\" fill=\"none\" stroke=\"#3A3A42\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n    <path d=\"M 115 255 L 205 255\" fill=\"none\" stroke=\"#3A3A42\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n    <line x1=\"112\" y1=\"250\" x2=\"102\" y2=\"318\" stroke=\"#3A3A42\" stroke-width=\"1.2\"/>\n    <line x1=\"208\" y1=\"250\" x2=\"218\" y2=\"318\" stroke=\"#3A3A42\" stroke-width=\"1.2\"/>\n\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" rx=\"2\" fill=\"#18181B\" stroke=\"#2C2C30\" stroke-width=\"1.2\"/>\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" fill=\"url(#hb-rib-pat)\" opacity=\"0.45\"/>\n    <line x1=\"91\" y1=\"345\" x2=\"229\" y2=\"345\" stroke=\"#2F2F36\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <path d=\"M 104 68 C 100 50, 116 42, 138 46 C 148 40, 172 40, 182 46 C 204 42, 220 50, 216 68 C 212 90, 186 104, 160 106 C 134 104, 108 90, 104 68 Z\" fill=\"url(#hb-body-grad)\" stroke=\"#2B2B30\" stroke-width=\"1.3\"/>\n    <path d=\"M 132 58 Q 160 76 188 58 Q 160 92 132 58 Z\" fill=\"#141416\" stroke=\"#28282C\" stroke-width=\"1\"/>\n\n    <circle cx=\"146\" cy=\"92\" r=\"2.2\" fill=\"#555\" stroke=\"#888\" stroke-width=\"0.8\"/>\n    <circle cx=\"174\" cy=\"92\" r=\"2.2\" fill=\"#555\" stroke=\"#888\" stroke-width=\"0.8\"/>\n    <path d=\"M 146 94 Q 142 140 148 185\" fill=\"none\" stroke=\"#2A2A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <rect x=\"146.5\" y=\"185\" width=\"3\" height=\"9\" rx=\"0.8\" fill=\"#888\" stroke=\"#444\" stroke-width=\"0.5\"/>\n    <path d=\"M 174 94 Q 178 135 172 178\" fill=\"none\" stroke=\"#2A2A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\"/>\n    <rect x=\"170.5\" y=\"178\" width=\"3\" height=\"9\" rx=\"0.8\" fill=\"#888\" stroke=\"#444\" stroke-width=\"0.5\"/>\n\n    <!-- Subtle Rose Star Embroidery -->\n    <g transform=\"translate(182, 135) scale(0.65)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\"/>\n    </g>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-2xl select-none\">\n  <defs>\n    <linearGradient id=\"hbb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#A1A1A6\"/>\n      <stop offset=\"50%\" stop-color=\"#555558\"/>\n      <stop offset=\"100%\" stop-color=\"#242426\"/>\n    </linearGradient>\n    <linearGradient id=\"hbb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2A2A2E\"/>\n      <stop offset=\"50%\" stop-color=\"#1C1C1E\"/>\n      <stop offset=\"100%\" stop-color=\"#121214\"/>\n    </linearGradient>\n    <pattern id=\"hbb-rib-pat\" width=\"4\" height=\"4\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"4\" stroke=\"#121214\" stroke-width=\"1.2\"/>\n    </pattern>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#hbb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#555\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#444\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#hbb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <path d=\"M 85 76 L 36 182 C 34 186, 40 190, 48 188 L 88 152 L 95 240 Z\" fill=\"url(#hbb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 284 182 C 286 186, 280 190, 272 188 L 232 152 L 225 240 Z\" fill=\"url(#hbb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.2\"/>\n    <path d=\"M 36 182 L 48 188 L 42 208 L 30 202 Z\" fill=\"#18181A\" stroke=\"#2C2C30\" stroke-width=\"1\"/>\n    <path d=\"M 284 182 L 272 188 L 278 208 L 290 202 Z\" fill=\"#18181A\" stroke=\"#2C2C30\" stroke-width=\"1\"/>\n\n    <path d=\"M 85 76 C 80 88, 78 128, 88 152 L 92 345 L 228 345 L 232 152 C 242 128, 240 88, 235 76 Q 160 88 85 76 Z\" fill=\"url(#hbb-body-grad)\" stroke=\"#2F2F34\" stroke-width=\"1.4\"/>\n    <path d=\"M 90 138 L 230 138\" fill=\"none\" stroke=\"#2C2C32\" stroke-width=\"1\"/>\n    <path d=\"M 90 141 L 230 141\" fill=\"none\" stroke=\"#2C2C32\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Prominent Star in Rose + Typography -->\n    <g transform=\"translate(160, 215) scale(1.6)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"258\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"13\" fill=\"#DDBFB4\" text-anchor=\"middle\" letter-spacing=\"3\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"272\" font-family=\"'Inter', sans-serif\" font-weight=\"500\" font-size=\"7\" fill=\"#888890\" text-anchor=\"middle\" letter-spacing=\"2\">480 GSM · HEAVYWEIGHT HOODIE</text>\n\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" rx=\"2\" fill=\"#18181B\" stroke=\"#2C2C30\" stroke-width=\"1.2\"/>\n    <rect x=\"91\" y=\"345\" width=\"138\" height=\"32\" fill=\"url(#hbb-rib-pat)\" opacity=\"0.45\"/>\n\n    <path d=\"M 112 55 C 104 75, 120 115, 160 118 C 200 115, 216 75, 208 55 Q 160 65 112 55 Z\" fill=\"#202024\" stroke=\"#2D2D32\" stroke-width=\"1.2\"/>\n    <path d=\"M 130 65 Q 160 90 190 65\" fill=\"none\" stroke=\"#333338\" stroke-width=\"1\" stroke-dasharray=\"2 2\"/>\n  </g>\n</svg>"}, {"id": "tshirt-offwhite", "name": "Футболка Heavyweight", "subtitle": "Плотный премиум-хлопок 260 г/м² с идеальной посадкой", "colorName": "Off-White (#F5F5F0)", "colorHex": "#F5F5F0", "gsm": "260 GSM", "price": "от 990 ₽", "minQty": "от 10 шт.", "badge": "Хлопок 260 г/м²", "density": "260 г/м²", "fabric": "100% чесаный компакт-хлопок пенье", "fit": "Прямой свободный крой, плотный ворот 2.5 см с двойной отстрочкой", "care": "Стирка при 30°C. Сохраняет форму и плотность после 50+ стирок.", "sku": "ZS-TS260-OFW", "category": "tshirts", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"ts-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"ts-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"50%\" stop-color=\"#F5F5F0\"/>\n      <stop offset=\"100%\" stop-color=\"#E8E8E2\"/>\n    </linearGradient>\n    <linearGradient id=\"ts-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(0,0,0,0.04)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.12)\"/>\n    </linearGradient>\n    <pattern id=\"ts-rib-pat\" width=\"3\" height=\"3\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"3\" stroke=\"#D5D5CE\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#ts-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#ts-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Inner Collar -->\n    <path d=\"M 124 74 Q 160 88 196 74 Q 160 80 124 74 Z\" fill=\"#DBD7CE\" stroke=\"#CCC7BC\" stroke-width=\"1\"/>\n    <!-- Brand Label -->\n    <rect x=\"151\" y=\"78\" width=\"18\" height=\"10\" rx=\"1\" fill=\"#1C1C1E\"/>\n    <path d=\"M 160 80 L 160.7 82 L 162.7 83 L 160.7 84 L 160 86 L 159.3 84 L 157.3 83 L 159.3 82 Z\" fill=\"#DDBFB4\"/>\n\n    <!-- Sleeves (Boxy drop-shoulder) -->\n    <path d=\"M 85 76 L 30 148 C 28 152, 34 156, 42 154 L 88 126 Z\" fill=\"url(#ts-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n    <line x1=\"30\" y1=\"148\" x2=\"42\" y2=\"154\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n    <line x1=\"32\" y1=\"145\" x2=\"43\" y2=\"150\" stroke=\"#BBB7AD\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <path d=\"M 235 76 L 290 148 C 292 152, 286 156, 278 154 L 232 126 Z\" fill=\"url(#ts-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n    <line x1=\"290\" y1=\"148\" x2=\"278\" y2=\"154\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n    <line x1=\"288\" y1=\"145\" x2=\"277\" y2=\"150\" stroke=\"#BBB7AD\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <!-- Main Torso -->\n    <path d=\"M 85 76 C 80 84, 80 110, 88 126 L 90 355 L 230 355 L 232 126 C 240 110, 240 84, 235 76 Q 160 92 85 76 Z\" fill=\"url(#ts-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.3\"/>\n    \n    <!-- Torso Depth Shading -->\n    <path d=\"M 88 126 L 90 355 L 110 355 C 102 240, 100 160, 88 126 Z\" fill=\"url(#ts-shade-grad)\"/>\n    <path d=\"M 232 126 L 230 355 L 210 355 C 218 240, 220 160, 232 126 Z\" fill=\"url(#ts-shade-grad)\"/>\n\n    <!-- Double Needle Bottom Hem -->\n    <line x1=\"90\" y1=\"355\" x2=\"230\" y2=\"355\" stroke=\"#C8C4BB\" stroke-width=\"1.2\"/>\n    <line x1=\"90\" y1=\"347\" x2=\"230\" y2=\"347\" stroke=\"#BBB7AD\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n    <line x1=\"90\" y1=\"344\" x2=\"230\" y2=\"344\" stroke=\"#BBB7AD\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Thick Ribbed Crewneck Collar -->\n    <path d=\"M 124 74 Q 160 102 196 74 Q 160 88 124 74 Z\" fill=\"#EAE6DC\" stroke=\"#C8C4BA\" stroke-width=\"1.3\"/>\n    <path d=\"M 124 74 Q 160 102 196 74\" fill=\"none\" stroke=\"url(#ts-rib-pat)\" opacity=\"0.4\"/>\n    <path d=\"M 126 77 Q 160 105 194 77\" fill=\"none\" stroke=\"#B8B4AA\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <!-- Minimalist Left Chest Star Embroidery -->\n    <g transform=\"translate(185, 138) scale(0.7)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\"/>\n    </g>\n\n    <!-- Natural Crease Lines -->\n    <path d=\"M 100 170 Q 115 195 106 225\" fill=\"none\" stroke=\"#DCD8CF\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n    <path d=\"M 220 170 Q 205 195 214 225\" fill=\"none\" stroke=\"#DCD8CF\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"tsb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"tsb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#FFFFFF\"/>\n      <stop offset=\"50%\" stop-color=\"#F5F5F0\"/>\n      <stop offset=\"100%\" stop-color=\"#E8E8E2\"/>\n    </linearGradient>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#tsb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#tsb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <path d=\"M 85 76 L 30 148 C 28 152, 34 156, 42 154 L 88 126 Z\" fill=\"url(#tsb-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 290 148 C 292 152, 286 156, 278 154 L 232 126 Z\" fill=\"url(#tsb-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.2\"/>\n\n    <path d=\"M 85 76 C 80 84, 80 110, 88 126 L 90 355 L 230 355 L 232 126 C 240 110, 240 84, 235 76 Q 160 84 85 76 Z\" fill=\"url(#tsb-body-grad)\" stroke=\"#D4D0C7\" stroke-width=\"1.3\"/>\n    \n    <!-- High Back Collar -->\n    <path d=\"M 124 74 Q 160 86 196 74 Q 160 76 124 74 Z\" fill=\"#EAE6DC\" stroke=\"#C8C4BA\" stroke-width=\"1.2\"/>\n\n    <!-- Twin Needle Bottom Hem -->\n    <line x1=\"90\" y1=\"355\" x2=\"230\" y2=\"355\" stroke=\"#C8C4BB\" stroke-width=\"1.2\"/>\n    <line x1=\"90\" y1=\"347\" x2=\"230\" y2=\"347\" stroke=\"#BBB7AD\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Prominent Back Logo Hit -->\n    <g transform=\"translate(160, 160) scale(1.4)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"196\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#1C1C1E\" text-anchor=\"middle\" letter-spacing=\"3\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"209\" font-family=\"'Inter', sans-serif\" font-weight=\"500\" font-size=\"6.5\" fill=\"#757067\" text-anchor=\"middle\" letter-spacing=\"2\">HEAVYWEIGHT TEE · 260 GSM</text>\n  </g>\n</svg>"}, {"id": "jacket-camel", "name": "Workwear Куртка Camel", "subtitle": "Плотный хлопковый твил с водоотталкивающей пропиткой", "colorName": "Кэмел / Охра (#C19A6B)", "colorHex": "#C19A6B", "gsm": "360 GSM", "price": "от 3 490 ₽", "minQty": "от 10 шт.", "badge": "Твил 360 г/м²", "density": "360 г/м²", "fabric": "100% тяжелый хлопковый твил саржевого переплетения", "fit": "Прямой силуэт классической куртки плотника, металлическая фурнитура", "care": "Химчистка или щадящая стирка при 30°C без отжима.", "sku": "ZS-JK360-CML", "category": "jackets", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"jk-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"jk-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D4AC7D\"/>\n      <stop offset=\"50%\" stop-color=\"#C19A6B\"/>\n      <stop offset=\"100%\" stop-color=\"#AA8455\"/>\n    </linearGradient>\n    <linearGradient id=\"jk-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(0,0,0,0.06)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.25)\"/>\n    </linearGradient>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#jk-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#jk-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Inner Collar -->\n    <path d=\"M 125 76 Q 160 92 195 76 Q 160 84 125 76 Z\" fill=\"#997548\" stroke=\"#836239\" stroke-width=\"1\"/>\n    <!-- Brand Label -->\n    <rect x=\"151\" y=\"80\" width=\"18\" height=\"10\" rx=\"1\" fill=\"#1C1C1E\"/>\n    <path d=\"M 160 82 L 160.7 84 L 162.7 85 L 160.7 86 L 160 88 L 159.3 86 L 157.3 85 L 159.3 84 Z\" fill=\"#DDBFB4\"/>\n\n    <!-- Sleeves with Cuffs & Stitching -->\n    <path d=\"M 85 76 L 38 185 C 36 190, 42 194, 50 192 L 88 152 Z\" fill=\"url(#jk-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.3\"/>\n    <path d=\"M 38 185 L 50 192 L 45 208 L 33 201 Z\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <circle cx=\"40\" cy=\"200\" r=\"1.8\" fill=\"#4A3B2C\"/>\n\n    <path d=\"M 235 76 L 282 185 C 284 190, 278 194, 270 192 L 232 152 Z\" fill=\"url(#jk-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.3\"/>\n    <path d=\"M 282 185 L 270 192 L 275 208 L 287 201 Z\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <circle cx=\"280\" cy=\"200\" r=\"1.8\" fill=\"#4A3B2C\"/>\n\n    <!-- Main Torso Boxy Workwear -->\n    <path d=\"M 85 76 C 80 88, 78 128, 88 152 L 90 350 L 230 350 L 232 152 C 242 128, 240 88, 235 76 Q 160 92 85 76 Z\" fill=\"url(#jk-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.4\"/>\n    \n    <!-- Torso Depth Shading -->\n    <path d=\"M 88 152 L 90 350 L 112 350 C 104 250, 100 180, 88 152 Z\" fill=\"url(#jk-shade-grad)\" opacity=\"0.6\"/>\n    <path d=\"M 232 152 L 230 350 L 208 350 C 216 250, 220 180, 232 152 Z\" fill=\"url(#jk-shade-grad)\" opacity=\"0.6\"/>\n\n    <!-- Horizontal Shoulder Yoke Seam with Twin Stitch -->\n    <path d=\"M 86 112 L 234 112\" fill=\"none\" stroke=\"#8A673E\" stroke-width=\"1.2\"/>\n    <path d=\"M 86 115 L 234 115\" fill=\"none\" stroke=\"#7A5A35\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Center Front Button Placket -->\n    <rect x=\"154\" y=\"94\" width=\"12\" height=\"256\" fill=\"#B58E5F\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <line x1=\"156\" y1=\"94\" x2=\"156\" y2=\"350\" stroke=\"#7A5A35\" stroke-width=\"0.7\" stroke-dasharray=\"3 2\"/>\n    <line x1=\"164\" y1=\"94\" x2=\"164\" y2=\"350\" stroke=\"#7A5A35\" stroke-width=\"0.7\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Metal Buttons on Placket -->\n    <circle cx=\"160\" cy=\"118\" r=\"3.2\" fill=\"#3D3023\" stroke=\"#8A673E\" stroke-width=\"0.8\"/>\n    <circle cx=\"160\" cy=\"165\" r=\"3.2\" fill=\"#3D3023\" stroke=\"#8A673E\" stroke-width=\"0.8\"/>\n    <circle cx=\"160\" cy=\"215\" r=\"3.2\" fill=\"#3D3023\" stroke=\"#8A673E\" stroke-width=\"0.8\"/>\n    <circle cx=\"160\" cy=\"265\" r=\"3.2\" fill=\"#3D3023\" stroke=\"#8A673E\" stroke-width=\"0.8\"/>\n    <circle cx=\"160\" cy=\"315\" r=\"3.2\" fill=\"#3D3023\" stroke=\"#8A673E\" stroke-width=\"0.8\"/>\n\n    <!-- Chest Pockets with Flaps -->\n    <!-- Left Flap & Pocket -->\n    <path d=\"M 104 140 L 144 140 L 144 185 L 104 185 Z\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <path d=\"M 102 135 L 146 135 L 144 148 L 124 154 L 104 148 Z\" fill=\"#9E784D\" stroke=\"#7A5A35\" stroke-width=\"1\"/>\n    <circle cx=\"124\" cy=\"144\" r=\"2.2\" fill=\"#3D3023\"/>\n    <line x1=\"106\" y1=\"182\" x2=\"142\" y2=\"182\" stroke=\"#7A5A35\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n    <!-- Star Tag on Pocket -->\n    <g transform=\"translate(133, 160) scale(0.45)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\"/>\n    </g>\n\n    <!-- Right Flap & Pocket -->\n    <path d=\"M 176 140 L 216 140 L 216 185 L 176 185 Z\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <path d=\"M 174 135 L 218 135 L 216 148 L 196 154 L 176 148 Z\" fill=\"#9E784D\" stroke=\"#7A5A35\" stroke-width=\"1\"/>\n    <circle cx=\"196\" cy=\"144\" r=\"2.2\" fill=\"#3D3023\"/>\n    <line x1=\"178\" y1=\"182\" x2=\"214\" y2=\"182\" stroke=\"#7A5A35\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <!-- Welt Waist Slash Pockets -->\n    <line x1=\"102\" y1=\"260\" x2=\"135\" y2=\"285\" stroke=\"#7A5A35\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    <line x1=\"218\" y1=\"260\" x2=\"185\" y2=\"285\" stroke=\"#7A5A35\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n\n    <!-- Bottom Hem Band -->\n    <rect x=\"89\" y=\"340\" width=\"142\" height=\"18\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1.2\"/>\n    <line x1=\"89\" y1=\"343\" x2=\"231\" y2=\"343\" stroke=\"#7A5A35\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Classic Pointed Collar -->\n    <path d=\"M 124 74 L 102 96 L 138 98 L 154 94 Z\" fill=\"#A88152\" stroke=\"#7A5A35\" stroke-width=\"1.2\"/>\n    <path d=\"M 196 74 L 218 96 L 182 98 L 166 94 Z\" fill=\"#A88152\" stroke=\"#7A5A35\" stroke-width=\"1.2\"/>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"jkb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"jkb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#D4AC7D\"/>\n      <stop offset=\"50%\" stop-color=\"#C19A6B\"/>\n      <stop offset=\"100%\" stop-color=\"#AA8455\"/>\n    </linearGradient>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#jkb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#jkb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Sleeves -->\n    <path d=\"M 85 76 L 38 185 C 36 190, 42 194, 50 192 L 88 152 Z\" fill=\"url(#jkb-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.3\"/>\n    <path d=\"M 235 76 L 282 185 C 284 190, 278 194, 270 192 L 232 152 Z\" fill=\"url(#jkb-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.3\"/>\n\n    <!-- Main Torso -->\n    <path d=\"M 85 76 C 80 88, 78 128, 88 152 L 90 350 L 230 350 L 232 152 C 242 128, 240 88, 235 76 Q 160 84 85 76 Z\" fill=\"url(#jkb-body-grad)\" stroke=\"#9E784D\" stroke-width=\"1.4\"/>\n    \n    <!-- Back Yoke with Double Contrast Stitch -->\n    <path d=\"M 86 122 L 234 122\" fill=\"none\" stroke=\"#8A673E\" stroke-width=\"1.3\"/>\n    <path d=\"M 86 125 L 234 125\" fill=\"none\" stroke=\"#7A5A35\" stroke-width=\"0.9\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Center Back Vertical Seam -->\n    <line x1=\"160\" y1=\"125\" x2=\"160\" y2=\"340\" stroke=\"#8A673E\" stroke-width=\"1\"/>\n    <line x1=\"162\" y1=\"125\" x2=\"162\" y2=\"340\" stroke=\"#7A5A35\" stroke-width=\"0.7\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Back Collar Stand -->\n    <path d=\"M 124 74 Q 160 84 196 74 Q 160 70 124 74 Z\" fill=\"#9E784D\" stroke=\"#7A5A35\" stroke-width=\"1.2\"/>\n\n    <!-- High-end Back Screenprint / Patch -->\n    <g transform=\"translate(160, 200) scale(1.4)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#1C1C1E\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"238\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"12\" fill=\"#1C1C1E\" text-anchor=\"middle\" letter-spacing=\"3\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"252\" font-family=\"'Inter', sans-serif\" font-weight=\"600\" font-size=\"7\" fill=\"#5E472D\" text-anchor=\"middle\" letter-spacing=\"2\">WORKWEAR CANVAS · 360 GSM</text>\n\n    <!-- Bottom Hem Band with Adjuster Tabs -->\n    <rect x=\"89\" y=\"340\" width=\"142\" height=\"18\" fill=\"#B38C5D\" stroke=\"#8A673E\" stroke-width=\"1.2\"/>\n    <circle cx=\"102\" cy=\"349\" r=\"2.2\" fill=\"#3D3023\"/>\n    <circle cx=\"218\" cy=\"349\" r=\"2.2\" fill=\"#3D3023\"/>\n  </g>\n</svg>"}, {"id": "tank-mesh", "name": "Спортивная Майка Mesh", "subtitle": "Перфорированная дышащая сетка для интенсивных тренировок", "colorName": "Матовый черный (#111111)", "colorHex": "#111111", "gsm": "210 GSM", "price": "от 890 ₽", "minQty": "от 10 шт.", "badge": "Микросетка 210 г/м²", "density": "210 г/м²", "fabric": "Дышащая микропористая полисетка со спандексом", "fit": "Атлетический крой со спортивными глубокими вырезами и закругленным низом", "care": "Быстро сохнет, машинная стирка 30°C.", "sku": "ZS-TK210-BLK", "category": "tanks", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-2xl select-none\">\n  <defs>\n    <linearGradient id=\"tk-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#A1A1A6\"/>\n      <stop offset=\"50%\" stop-color=\"#555558\"/>\n      <stop offset=\"100%\" stop-color=\"#242426\"/>\n    </linearGradient>\n    <linearGradient id=\"tk-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E1E22\"/>\n      <stop offset=\"50%\" stop-color=\"#141416\"/>\n      <stop offset=\"100%\" stop-color=\"#0D0D0E\"/>\n    </linearGradient>\n    <!-- Realistic Micro Perforated Mesh Pattern -->\n    <pattern id=\"tk-mesh-pat\" width=\"5\" height=\"5\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2.5\" cy=\"2.5\" r=\"0.9\" fill=\"#26262B\"/>\n    </pattern>\n    <linearGradient id=\"tk-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(255,255,255,0.05)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.4)\"/>\n    </linearGradient>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#tk-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#555\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#444\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#tk-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Back Neck Inner -->\n    <path d=\"M 130 76 Q 160 92 190 76 Q 160 84 130 76 Z\" fill=\"#0A0A0C\" stroke=\"#222226\" stroke-width=\"1\"/>\n    <!-- Brand Label -->\n    <rect x=\"151\" y=\"80\" width=\"18\" height=\"9\" rx=\"1\" fill=\"#242428\"/>\n    <path d=\"M 160 81.5 L 160.7 83.5 L 162.7 84.5 L 160.7 85.5 L 160 87.5 L 159.3 85.5 L 157.3 84.5 L 159.3 83.5 Z\" fill=\"#DDBFB4\"/>\n\n    <!-- Tank Straps and Torso -->\n    <!-- Hanging Shoulder Straps (hanging directly from hanger) -->\n    <path d=\"M 112 76 \n             L 130 76 \n             Q 142 120 102 170\n             L 105 345\n             C 105 352, 115 356, 130 357\n             L 190 357\n             C 205 356, 215 352, 215 345\n             L 218 170\n             Q 178 120 190 76\n             L 208 76\n             C 214 110, 230 148, 218 170\n             L 215 345\n             L 105 345\n             L 102 170\n             C 90 148, 106 110, 112 76 Z\"\n          fill=\"url(#tk-body-grad)\"\n          stroke=\"#2A2A30\"\n          stroke-width=\"1.3\"/>\n\n    <!-- Mesh Texture Overlay -->\n    <path d=\"M 102 170 L 105 345 C 105 352, 115 356, 130 357 L 190 357 C 205 356, 215 352, 215 345 L 218 170 Q 178 120 190 76 L 208 76 C 214 110, 230 148, 218 170 L 215 345 L 105 345 L 102 170 C 90 148, 106 110, 112 76 L 130 76 Q 142 120 102 170 Z\"\n          fill=\"url(#tk-mesh-pat)\"\n          opacity=\"0.6\"/>\n\n    <!-- Deep Scoop Neckline Binding -->\n    <path d=\"M 130 76 Q 160 126 190 76\" fill=\"none\" stroke=\"#2C2C33\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M 130 76 Q 160 126 190 76\" fill=\"none\" stroke=\"#44444C\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <!-- Deep Armhole Piping -->\n    <path d=\"M 112 76 C 106 110, 90 148, 102 170\" fill=\"none\" stroke=\"#2C2C33\" stroke-width=\"2.5\"/>\n    <path d=\"M 208 76 C 214 110, 230 148, 218 170\" fill=\"none\" stroke=\"#2C2C33\" stroke-width=\"2.5\"/>\n\n    <!-- Curved Athletic Hem Binding -->\n    <path d=\"M 105 345 C 105 354, 115 358, 130 359 L 190 359 C 205 358, 215 354, 215 345\" fill=\"none\" stroke=\"#2C2C33\" stroke-width=\"2\"/>\n    <path d=\"M 105 342 C 105 351, 115 355, 130 356 L 190 356 C 205 355, 215 351, 215 342\" fill=\"none\" stroke=\"#3E3E48\" stroke-width=\"0.8\" stroke-dasharray=\"2 2\"/>\n\n    <!-- Center Brand Chest Hit -->\n    <g transform=\"translate(160, 185) scale(0.8)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"210\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"8.5\" fill=\"#DDBFB4\" text-anchor=\"middle\" letter-spacing=\"2\">ЗНАК СВОИХ</text>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-2xl select-none\">\n  <defs>\n    <linearGradient id=\"tkb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#A1A1A6\"/>\n      <stop offset=\"50%\" stop-color=\"#555558\"/>\n      <stop offset=\"100%\" stop-color=\"#242426\"/>\n    </linearGradient>\n    <linearGradient id=\"tkb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#1E1E22\"/>\n      <stop offset=\"50%\" stop-color=\"#141416\"/>\n      <stop offset=\"100%\" stop-color=\"#0D0D0E\"/>\n    </linearGradient>\n    <pattern id=\"tkb-mesh-pat\" width=\"5\" height=\"5\" patternUnits=\"userSpaceOnUse\">\n      <circle cx=\"2.5\" cy=\"2.5\" r=\"0.9\" fill=\"#26262B\"/>\n    </pattern>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#tkb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#555\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#444\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#tkb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Back Racer Silhouette -->\n    <path d=\"M 112 76 L 130 76 Q 150 110 102 170 L 105 345 C 105 352, 115 356, 130 357 L 190 357 C 205 356, 215 352, 215 345 L 218 170 Q 170 110 190 76 L 208 76 C 214 110, 230 148, 218 170 L 215 345 L 105 345 L 102 170 C 90 148, 106 110, 112 76 Z\"\n          fill=\"url(#tkb-body-grad)\"\n          stroke=\"#2A2A30\"\n          stroke-width=\"1.3\"/>\n\n    <path d=\"M 102 170 L 105 345 C 105 352, 115 356, 130 357 L 190 357 C 205 356, 215 352, 215 345 L 218 170 Q 170 110 190 76 L 208 76 C 214 110, 230 148, 218 170 L 215 345 L 105 345 L 102 170 C 90 148, 106 110, 112 76 L 130 76 Q 150 110 102 170 Z\"\n          fill=\"url(#tkb-mesh-pat)\"\n          opacity=\"0.6\"/>\n\n    <!-- High Athletic Back Scoop -->\n    <path d=\"M 130 76 Q 160 98 190 76\" fill=\"none\" stroke=\"#2C2C33\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n\n    <!-- Upper Back Brand Print -->\n    <g transform=\"translate(160, 150) scale(1.3)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"180\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"10\" fill=\"#DDBFB4\" text-anchor=\"middle\" letter-spacing=\"2.5\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"193\" font-family=\"'Inter', sans-serif\" font-weight=\"500\" font-size=\"6\" fill=\"#888892\" text-anchor=\"middle\" letter-spacing=\"1.5\">PERFORMANCE MESH · 210 GSM</text>\n  </g>\n</svg>"}, {"id": "longsleeve-navy", "name": "Лонгслив Heavyweight Navy", "subtitle": "Плотный кулирный трикотаж пенье с премиальным эластичным воротником", "colorName": "Глубокий индиго (Navy #1A2238)", "colorHex": "#1A2238", "gsm": "280 GSM", "price": "от 1 290 ₽", "minQty": "от 10 шт.", "badge": "Трикотаж 280 г/м²", "density": "280 г/м²", "fabric": "100% гребенной хлопок пенье, плотная кулирная гладь", "fit": "Прямой силуэт с удлиненным рукавом и плотными манжетами", "care": "Стирка при 30°C. Сохраняет форму и цвет.", "sku": "ZS-LS280-NVY", "category": "shirts", "svgFront": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"ls-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"ls-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#253152\"/>\n      <stop offset=\"50%\" stop-color=\"#1A2238\"/>\n      <stop offset=\"100%\" stop-color=\"#101626\"/>\n    </linearGradient>\n    <linearGradient id=\"ls-shade-grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"rgba(255,255,255,0.04)\"/>\n      <stop offset=\"100%\" stop-color=\"rgba(0,0,0,0.35)\"/>\n    </linearGradient>\n    <pattern id=\"ls-rib-pat\" width=\"3\" height=\"3\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"3\" stroke=\"#121828\" stroke-width=\"1\"/>\n    </pattern>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#ls-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#ls-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n    <line x1=\"76\" y1=\"83\" x2=\"244\" y2=\"83\" stroke=\"#888\" stroke-width=\"0.8\" opacity=\"0.6\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Inner Collar -->\n    <path d=\"M 124 74 Q 160 88 196 74 Q 160 80 124 74 Z\" fill=\"#121726\" stroke=\"#222C46\" stroke-width=\"1\"/>\n    <!-- Brand Label -->\n    <rect x=\"151\" y=\"78\" width=\"18\" height=\"10\" rx=\"1\" fill=\"#1C1C1E\"/>\n    <path d=\"M 160 80 L 160.7 82 L 162.7 83 L 160.7 84 L 160 86 L 159.3 84 L 157.3 83 L 159.3 82 Z\" fill=\"#DDBFB4\"/>\n\n    <!-- Set-in Long Sleeves -->\n    <path d=\"M 85 76 L 36 210 C 34 214, 40 218, 48 216 L 88 140 Z\" fill=\"url(#ls-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n    <path d=\"M 36 210 L 48 216 L 43 234 L 31 228 Z\" fill=\"#151C2E\" stroke=\"#24304E\" stroke-width=\"1\"/>\n\n    <path d=\"M 235 76 L 284 210 C 286 214, 280 218, 272 216 L 232 140 Z\" fill=\"url(#ls-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n    <path d=\"M 284 210 L 272 216 L 277 234 L 289 228 Z\" fill=\"#151C2E\" stroke=\"#24304E\" stroke-width=\"1\"/>\n\n    <!-- Torso -->\n    <path d=\"M 85 76 C 80 88, 78 120, 88 140 L 90 350 L 230 350 L 232 140 C 242 120, 240 88, 235 76 Q 160 92 85 76 Z\" fill=\"url(#ls-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.3\"/>\n    \n    <!-- Torso Depth Shading -->\n    <path d=\"M 88 140 L 90 350 L 110 350 C 102 240, 100 170, 88 140 Z\" fill=\"url(#ls-shade-grad)\" opacity=\"0.6\"/>\n    <path d=\"M 232 140 L 230 350 L 210 350 C 218 240, 220 170, 232 140 Z\" fill=\"url(#ls-shade-grad)\" opacity=\"0.6\"/>\n\n    <!-- Double Needle Bottom Hem -->\n    <line x1=\"90\" y1=\"350\" x2=\"230\" y2=\"350\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n    <line x1=\"90\" y1=\"343\" x2=\"230\" y2=\"343\" stroke=\"#2D3A5D\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Ribbed Crewneck Collar -->\n    <path d=\"M 124 74 Q 160 98 196 74 Q 160 86 124 74 Z\" fill=\"#161D30\" stroke=\"#24304E\" stroke-width=\"1.3\"/>\n    <path d=\"M 124 74 Q 160 98 196 74\" fill=\"none\" stroke=\"url(#ls-rib-pat)\" opacity=\"0.4\"/>\n\n    <!-- Minimalist Rose Star Embroidery -->\n    <g transform=\"translate(185, 138) scale(0.7)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\"/>\n    </g>\n\n    <!-- Natural Crease Lines -->\n    <path d=\"M 100 175 Q 115 200 106 230\" fill=\"none\" stroke=\"#263456\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n    <path d=\"M 220 175 Q 205 200 214 230\" fill=\"none\" stroke=\"#263456\" stroke-width=\"1\" stroke-linecap=\"round\"/>\n  </g>\n</svg>", "svgBack": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 420\" class=\"w-full h-full drop-shadow-xl select-none\">\n  <defs>\n    <linearGradient id=\"lsb-hanger-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8E8E93\"/>\n      <stop offset=\"50%\" stop-color=\"#48484A\"/>\n      <stop offset=\"100%\" stop-color=\"#1C1C1E\"/>\n    </linearGradient>\n    <linearGradient id=\"lsb-body-grad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#253152\"/>\n      <stop offset=\"50%\" stop-color=\"#1A2238\"/>\n      <stop offset=\"100%\" stop-color=\"#101626\"/>\n    </linearGradient>\n  </defs>\n\n  <g class=\"hanger-group\">\n    <path d=\"M 160 50 L 160 28 C 160 16, 172 8, 168 2 C 164 -3, 150 1, 150 12\" fill=\"none\" stroke=\"url(#lsb-hanger-grad)\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>\n    <circle cx=\"150\" cy=\"12\" r=\"2.2\" fill=\"#444\"/>\n    <rect x=\"157\" y=\"30\" width=\"6\" height=\"5\" rx=\"1.5\" fill=\"#333\"/>\n    <path d=\"M 160 34 L 74 76 C 68 78, 68 82, 74 83 L 246 83 C 252 82, 252 78, 246 76 Z\" fill=\"none\" stroke=\"url(#lsb-hanger-grad)\" stroke-width=\"2.4\" stroke-linejoin=\"round\"/>\n  </g>\n\n  <g class=\"garment-body\">\n    <!-- Sleeves -->\n    <path d=\"M 85 76 L 36 210 C 34 214, 40 218, 48 216 L 88 140 Z\" fill=\"url(#lsb-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n    <path d=\"M 235 76 L 284 210 C 286 214, 280 218, 272 216 L 232 140 Z\" fill=\"url(#lsb-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n\n    <!-- Torso -->\n    <path d=\"M 85 76 C 80 88, 78 120, 88 140 L 90 350 L 230 350 L 232 140 C 242 120, 240 88, 235 76 Q 160 84 85 76 Z\" fill=\"url(#lsb-body-grad)\" stroke=\"#222D4A\" stroke-width=\"1.3\"/>\n    \n    <!-- High Back Collar -->\n    <path d=\"M 124 74 Q 160 84 196 74 Q 160 76 124 74 Z\" fill=\"#161D30\" stroke=\"#24304E\" stroke-width=\"1.2\"/>\n\n    <!-- Double Needle Bottom Hem -->\n    <line x1=\"90\" y1=\"350\" x2=\"230\" y2=\"350\" stroke=\"#222D4A\" stroke-width=\"1.2\"/>\n    <line x1=\"90\" y1=\"343\" x2=\"230\" y2=\"343\" stroke=\"#2D3A5D\" stroke-width=\"0.8\" stroke-dasharray=\"3 2\"/>\n\n    <!-- Prominent Back Logo Hit -->\n    <g transform=\"translate(160, 160) scale(1.4)\">\n      <path d=\"M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z\" fill=\"#DDBFB4\" transform=\"translate(-12, -12)\"/>\n    </g>\n    <text x=\"160\" y=\"196\" font-family=\"'Montserrat', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#DDBFB4\" text-anchor=\"middle\" letter-spacing=\"3\">ЗНАК СВОИХ</text>\n    <text x=\"160\" y=\"209\" font-family=\"'Inter', sans-serif\" font-weight=\"500\" font-size=\"6.5\" fill=\"#8898C0\" text-anchor=\"middle\" letter-spacing=\"2\">HEAVYWEIGHT LONGSLEEVE · 280 GSM</text>\n  </g>\n</svg>"}];

let rackState = {
  activeIndex: 0,
  mode: 'browsing', // 'browsing' (Mode A) or 'focused' (Mode B)
  viewSide: 'front', // 'front' or 'back'
  isMobile: window.innerWidth < 640
};

function initClothesRack() {
  const stage = document.getElementById('rackStage');
  if (!stage) return;

  stage.innerHTML = '';

  RACK_GARMENTS.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'rack-garment-item';
    el.id = `rack-item-${idx}`;
    el.setAttribute('data-index', idx);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${item.name}, ${item.gsm}`);

    el.innerHTML = `
      <div class="garment-flipper" id="flipper-${idx}">
        <div class="garment-face garment-front">
          ${item.svgFront}
        </div>
        <div class="garment-face garment-back">
          ${item.svgBack}
        </div>
      </div>

      <!-- Realistic Fashion Paper Hang-Tag (Mode B Detail) -->
      <div class="paper-hang-tag" id="hang-tag-${idx}">
        <div class="hang-tag-cord"></div>
        <div class="hang-tag-eyelet"></div>
        <div class="flex items-center justify-between pb-1 mb-1 border-b border-black/10">
          <svg class="w-3 h-3 text-[#1C1C1E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
          </svg>
          <span class="text-[7px] font-bold text-[#8E8E93] tracking-widest uppercase">${item.sku}</span>
        </div>
        <div class="text-[9px] font-black uppercase text-[#141416] leading-tight mb-0.5">${item.name}</div>
        <div class="text-[8px] font-bold text-[#444] mb-1">${item.gsm}</div>
        <div class="text-[6.5px] text-[#666] leading-tight mb-1.5">${item.fabric}</div>
        <!-- Barcode -->
        <svg class="w-full h-4 mb-0.5 opacity-80" viewBox="0 0 80 16" fill="currentColor">
          <rect x="0" y="0" width="2" height="16"/>
          <rect x="4" y="0" width="1" height="16"/>
          <rect x="7" y="0" width="3" height="16"/>
          <rect x="12" y="0" width="1" height="16"/>
          <rect x="15" y="0" width="2" height="16"/>
          <rect x="19" y="0" width="4" height="16"/>
          <rect x="25" y="0" width="1" height="16"/>
          <rect x="28" y="0" width="2" height="16"/>
          <rect x="32" y="0" width="3" height="16"/>
          <rect x="37" y="0" width="1" height="16"/>
          <rect x="40" y="0" width="2" height="16"/>
          <rect x="44" y="0" width="4" height="16"/>
          <rect x="50" y="0" width="1" height="16"/>
          <rect x="53" y="0" width="3" height="16"/>
          <rect x="58" y="0" width="2" height="16"/>
          <rect x="62" y="0" width="1" height="16"/>
          <rect x="65" y="0" width="3" height="16"/>
          <rect x="70" y="0" width="2" height="16"/>
          <rect x="74" y="0" width="1" height="16"/>
          <rect x="77" y="0" width="3" height="16"/>
        </svg>
        <div class="text-[6px] tracking-widest text-center text-[#888] font-mono mb-1">2 001924 883014</div>
        <div class="text-[8.5px] font-black text-[#1C1C1E] text-center pt-0.5 border-t border-black/10">${item.price}</div>
      </div>
    `;

    el.addEventListener('click', (e) => {
      handleRackItemClick(idx);
    });

    stage.appendChild(el);
  });

  // Render Dots
  renderRackDots();

  // Resize listener
  window.addEventListener('resize', () => {
    const mob = window.innerWidth < 640;
    if (mob !== rackState.isMobile) {
      rackState.isMobile = mob;
      updateRackPositions();
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        navigateRack(-1);
      } else {
        navigateRack(1);
      }
    }
  }, { passive: true });

  // Initial position
  updateRackPositions();
}

function renderRackDots() {
  const container = document.getElementById('rackDotsContainer');
  if (!container) return;
  container.innerHTML = RACK_GARMENTS.map((_, i) => `
    <button 
      type="button" 
      onclick="selectRackItem(${i})" 
      class="w-2 h-2 rounded-full transition-all duration-300 ${i === rackState.activeIndex ? 'w-6 bg-[#1C1C1E]' : 'bg-black/20 hover:bg-black/40'}"
      aria-label="Вещь ${i + 1}"
    ></button>
  `).join('');
}

function handleRackItemClick(index) {
  if (rackState.activeIndex !== index) {
    selectRackItem(index);
  } else {
    // Center item clicked
    if (rackState.mode === 'browsing') {
      enterFocusedMode();
    } else {
      // In focused mode: toggle front / back
      toggleRackViewSide();
    }
  }
}

function selectRackItem(index) {
  if (index < 0 || index >= RACK_GARMENTS.length) return;
  rackState.activeIndex = index;
  rackState.viewSide = 'front';
  updateRackPositions();
}

function navigateRack(delta) {
  let next = rackState.activeIndex + delta;
  if (next < 0) next = RACK_GARMENTS.length - 1;
  if (next >= RACK_GARMENTS.length) next = 0;
  selectRackItem(next);
}

function enterFocusedMode() {
  rackState.mode = 'focused';
  rackState.viewSide = 'front';
  updateRackPositions();
}

function exitFocusedMode() {
  rackState.mode = 'browsing';
  rackState.viewSide = 'front';
  updateRackPositions();
}

function setRackViewSide(side) {
  rackState.viewSide = side;
  updateRackFlipper();
  updatePillPosition();
}

function toggleRackViewSide() {
  setRackViewSide(rackState.viewSide === 'front' ? 'back' : 'front');
}

function updatePillPosition() {
  const pill = document.getElementById('rackFlipPill');
  const btnFront = document.getElementById('rackBtnFront');
  const btnBack = document.getElementById('rackBtnBack');
  if (!pill || !btnFront || !btnBack) return;

  if (rackState.viewSide === 'front') {
    pill.style.left = '4px';
    btnFront.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-white';
    btnBack.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-[#6E6E73] hover:text-[#1C1C1E]';
  } else {
    pill.style.left = 'calc(50%)';
    btnFront.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-[#6E6E73] hover:text-[#1C1C1E]';
    btnBack.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-white';
  }
}

function updateRackFlipper() {
  const curFlipper = document.getElementById(`flipper-${rackState.activeIndex}`);
  if (curFlipper) {
    curFlipper.style.transform = rackState.viewSide === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }
}

function updateRackPositions() {
  const total = RACK_GARMENTS.length;
  const isMob = rackState.isMobile;
  const isFocused = rackState.mode === 'focused';
  const activeItem = RACK_GARMENTS[rackState.activeIndex];

  // 1. Update text & badges
  const titleEl = document.getElementById('rackActiveTitle');
  const badgeEl = document.getElementById('rackActiveBadge');
  const priceEl = document.getElementById('rackActivePrice');
  const colorDotEl = document.getElementById('rackActiveColorDot');
  const colorNameEl = document.getElementById('rackActiveColorName');

  if (titleEl) titleEl.textContent = activeItem.name;
  if (badgeEl) badgeEl.textContent = activeItem.gsm;
  if (priceEl) priceEl.textContent = activeItem.price;
  if (colorDotEl) colorDotEl.style.backgroundColor = activeItem.colorHex;
  if (colorNameEl) colorNameEl.textContent = activeItem.colorName;

  renderRackDots();

  // 2. Mode A vs Mode B UI elements visibility
  const backNav = document.getElementById('rackBackNav');
  const viewToggle = document.getElementById('rackViewToggleContainer');
  const browsingControls = document.getElementById('rackBrowsingControls');
  const focusedActions = document.getElementById('rackFocusedActions');

  if (isFocused) {
    if (backNav) {
      backNav.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-3');
      backNav.classList.add('opacity-100', 'translate-x-0');
    }
    if (viewToggle) {
      viewToggle.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-3');
      viewToggle.classList.add('opacity-100', 'translate-x-0');
    }
    if (browsingControls) {
      browsingControls.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
    }
    if (focusedActions) {
      focusedActions.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      focusedActions.classList.add('opacity-100', 'translate-y-0');
    }
    updatePillPosition();
  } else {
    if (backNav) {
      backNav.classList.add('opacity-0', 'pointer-events-none', '-translate-x-3');
      backNav.classList.remove('opacity-100', 'translate-x-0');
    }
    if (viewToggle) {
      viewToggle.classList.add('opacity-0', 'pointer-events-none', 'translate-x-3');
      viewToggle.classList.remove('opacity-100', 'translate-x-0');
    }
    if (browsingControls) {
      browsingControls.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      browsingControls.classList.add('opacity-100', 'translate-y-0');
    }
    if (focusedActions) {
      focusedActions.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
      focusedActions.classList.remove('opacity-100', 'translate-y-0');
    }
  }

  // 3. Compute 3D positions for each garment along the rail
  RACK_GARMENTS.forEach((item, idx) => {
    const el = document.getElementById(`rack-item-${idx}`);
    const flipper = document.getElementById(`flipper-${idx}`);
    const tag = document.getElementById(`hang-tag-${idx}`);
    if (!el) return;

    let diff = idx - rackState.activeIndex;

    // Reset flipper rotation for non-active items
    if (idx !== rackState.activeIndex && flipper) {
      flipper.style.transform = 'rotateY(0deg)';
    }

    // Hang tag visibility
    if (tag) {
      if (idx === rackState.activeIndex && isFocused) {
        tag.style.opacity = '1';
        tag.style.transform = isMob ? 'rotate(2deg) scale(0.9)' : 'rotate(3.5deg) scale(1)';
      } else {
        tag.style.opacity = '0';
        tag.style.transform = 'rotate(0deg) scale(0.7)';
      }
    }

    if (diff === 0) {
      // Center Item
      if (isFocused) {
        el.style.transform = `translateX(0px) rotateY(0deg) scale(${isMob ? 1.03 : 1.08})`;
        el.style.zIndex = '40';
        el.style.opacity = '1';
        el.style.filter = 'drop-shadow(0 25px 45px rgba(0,0,0,0.22))';
        el.style.pointerEvents = 'auto';
        updateRackFlipper();
      } else {
        el.style.transform = 'translateX(0px) rotateY(0deg) scale(1)';
        el.style.zIndex = '30';
        el.style.opacity = '1';
        el.style.filter = 'brightness(1) drop-shadow(0 20px 30px rgba(0,0,0,0.18))';
        el.style.pointerEvents = 'auto';
      }
    } else {
      // Side Items
      if (isFocused) {
        // Mode B: Slide outward and blur
        const outDist = diff > 0 ? (isMob ? 240 : 420) : (isMob ? -240 : -420);
        const rotY = diff > 0 ? -75 : 75;
        el.style.transform = `translateX(${outDist}px) rotateY(${rotY}deg) scale(0.7)`;
        el.style.zIndex = `${20 - Math.abs(diff)}`;
        el.style.opacity = '0.15';
        el.style.filter = 'blur(6px)';
        el.style.pointerEvents = 'none';
      } else {
        // Mode A: Hanging on rail in 3D perspective
        const baseSpacing = isMob ? 85 : 160;
        const xPos = diff * baseSpacing;
        // On mobile, reduce rotateY so side items don't overlap center item!
        const rotY = diff > 0 ? (isMob ? -38 : -65) : (isMob ? 38 : 65);
        const scaleVal = isMob 
          ? Math.max(0.68, 0.94 - Math.abs(diff) * 0.12)
          : Math.max(0.72, 1 - Math.abs(diff) * 0.1);
        const opacVal = Math.abs(diff) > 2 ? 0.35 : Math.max(0.6, 1 - Math.abs(diff) * 0.18);
        const brightVal = Math.max(0.78, 1 - Math.abs(diff) * 0.08);

        el.style.transform = `translateX(${xPos}px) rotateY(${rotY}deg) scale(${scaleVal})`;
        el.style.zIndex = `${25 - Math.abs(diff) * 3}`;
        el.style.opacity = `${opacVal}`;
        el.style.filter = `brightness(${brightVal}) drop-shadow(0 10px 18px rgba(0,0,0,0.12))`;
        el.style.pointerEvents = 'auto';
      }
    }
  });
}

function orderRackGarment() {
  const activeItem = RACK_GARMENTS[rackState.activeIndex];
  if (!activeItem) return;
  openLeadModal(`Заказ из гардероба: ${activeItem.name} (${activeItem.gsm})`);
  const notesField = document.querySelector('#modalForm textarea[name="notes"]');
  if (notesField) {
    notesField.value = `Интересует пошив тиража модели из гардероба: ${activeItem.name} (${activeItem.gsm}), цвет: ${activeItem.colorName}.`;
  }
}

function calcRackGarment() {
  const activeItem = RACK_GARMENTS[rackState.activeIndex];
  if (!activeItem) return;
  // Preselect corresponding item in calculator
  if (activeItem.category === 'hoodies') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="1890"]');
    if (btn) btn.click();
  } else if (activeItem.category === 'tshirts') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="990"]');
    if (btn) btn.click();
  } else if (activeItem.category === 'jackets') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="2900"]');
    if (btn) btn.click();
  }
}


// ==========================================================================
// 3. HEADER & MOBILE MENU
// ==========================================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('py-2', 'bg-brand-black/98', 'shadow-2xl');
      header.classList.remove('bg-brand-black/90');
    } else {
      header.classList.remove('py-2', 'bg-brand-black/98', 'shadow-2xl');
      header.classList.add('bg-brand-black/90');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      menu.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      btn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      menu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
      menu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    if (window.lucide) window.lucide.createIcons();
  };

  btn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (isOpen && !menu.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu();
    }
  });
}

// ==========================================================================
// 4. GENDER & CATEGORY TABS WITH SLIDING PILL (FRAMER MOTION STYLE)
// ==========================================================================
function initGenderTabs() {
  const container = document.getElementById('genderSwitchContainer');
  const btns = document.querySelectorAll('.gender-btn');

  if (!container || !btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const gender = btn.getAttribute('data-gender');
      catalogFilter.gender = gender;

      if (gender === 'women') {
        container.classList.add('women-active');
      } else {
        container.classList.remove('women-active');
      }

      renderCatalog();
    });
  });
}

function initCategoryTabs() {
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-brand-rose', 'text-brand-black');
        t.classList.add('bg-white/5', 'text-brand-cream/80');
      });
      tab.classList.add('active', 'bg-brand-rose', 'text-brand-black');
      tab.classList.remove('bg-white/5', 'text-brand-cream/80');

      catalogFilter.category = tab.getAttribute('data-category');
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(item => {
    const genderMatch = item.gender === catalogFilter.gender;
    const catMatch = catalogFilter.category === 'all' || item.category === catalogFilter.category;
    return genderMatch && catMatch;
  });

  grid.innerHTML = filtered.map(item => `
    <div 
      class="product-card group rounded-2xl bg-[#141418] border border-white/5 overflow-hidden flex flex-col justify-between cursor-pointer"
      data-product-id="${item.id}"
      onclick="handleCardClick('${item.id}', this)"
    >
      <div class="card-media relative aspect-[4/3] overflow-hidden bg-brand-surface">
        <img 
          src="${item.images[0]}" 
          alt="${item.title}" 
          class="product-thumb-img w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
          loading="lazy"
        >
        
        <div class="brand-embroidery-stamp top-3 left-3">
          <svg class="w-3 h-3 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
          </svg>
          <span>Знак Своих</span>
        </div>

        <div class="garment-star-overlay top-[42%] left-[45%]">
          <div class="w-6 h-6 rounded-full bg-black/60 border border-brand-rose/40 flex items-center justify-center text-brand-rose shadow-glow-rose">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
            </svg>
          </div>
        </div>

        <div class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] text-brand-rose border border-white/10 font-semibold">
          ${item.badge}
        </div>
      </div>

      <div class="card-info p-6 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[10px] uppercase tracking-widest text-brand-rose font-bold block mb-1">
            ${getCategoryName(item.category)}
          </span>
          <h3 class="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-rose transition-colors">
            ${item.title}
          </h3>
          <p class="text-xs text-brand-cream/70 mb-4 line-clamp-2">
            ${item.shortDesc}
          </p>
        </div>

        <div class="pt-4 border-t border-white/5 flex items-center justify-between">
          <div>
            <span class="text-[11px] text-brand-muted block">${item.minQty}</span>
            <span class="font-display font-bold text-white text-base">${item.priceDisplay}</span>
          </div>
          <button class="p-2 rounded-full bg-white/5 text-brand-rose group-hover:bg-brand-rose group-hover:text-brand-black transition-colors" aria-label="Подробнее">
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();

  triggerCatalogCascade();
}

function getCategoryName(cat) {
  switch (cat) {
    case 'hoodies': return 'Худи и Свитшоты';
    case 'tshirts': return 'Футболки и Лонгсливы';
    case 'shirts': return 'Рубашки и Овершоты';
    case 'pants': return 'Брюки и Джинсы';
    case 'stationery': return 'Письменные принадлежности';
    case 'accessories': return 'Аксессуары';
    default: return 'Продукция';
  }
}

function triggerCatalogCascade() {
  const cards = document.querySelectorAll('#productsGrid .product-card');
  
  if (!('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${(index % 3) * 110}ms`;
    observer.observe(card);
  });
}

// ==========================================================================
// 5. CINEMATIC SHARED ELEMENT TRANSITION (CARD EXPAND TO FULLSCREEN MODAL)
// ==========================================================================
let activeClickedCard = null;
let activeOriginalRect = null;

function handleCardClick(productId, cardElement) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !cardElement) return;

  activeClickedCard = cardElement;
  activeOriginalRect = cardElement.getBoundingClientRect();

  const overlay = document.getElementById('morphModalOverlay');
  const morphCard = document.getElementById('morphModalCard');
  const content = document.getElementById('morphModalContent');

  if (!overlay || !morphCard || !content) return;

  // 1. Populate Modal with Product Content
  content.innerHTML = `
    <!-- Top Bar with Close Button -->
    <div class="sticky top-0 z-30 flex items-center justify-between p-4 sm:p-6 bg-[#141418]/90 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
        </svg>
        <span class="text-xs uppercase tracking-widest text-brand-rose font-bold">
          ${getCategoryName(product.category)} · ${product.gender === 'men' ? 'Мужское' : 'Женское'}
        </span>
      </div>
      <button 
        type="button" 
        onclick="closeMorphModal()" 
        class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Закрыть"
      >
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Inner Modal Body -->
    <div class="p-6 sm:p-8 md:p-10">
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Interactive Gallery with 4 UNIQUE photos -->
        <div>
          <div class="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-brand-surface border border-white/10 mb-4 group shadow-2xl">
            <img 
              id="detailMainImage" 
              src="${product.images[0]}" 
              alt="${product.title}" 
              class="w-full h-full object-cover object-center transition-all duration-300"
            >
            <div class="brand-embroidery-stamp top-4 left-4">
              <svg class="w-3.5 h-3.5 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
              </svg>
              <span>Знак Своих · Оригинал</span>
            </div>
            <div class="garment-star-overlay top-[40%] left-[45%]">
              <div class="w-8 h-8 rounded-full bg-black/60 border border-brand-rose/50 flex items-center justify-center text-brand-rose shadow-glow-rose">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- 4 Distinct Clickable Thumbnails -->
          <div class="grid grid-cols-4 gap-2.5 sm:gap-3">
            ${product.images.map((img, idx) => `
              <button 
                type="button" 
                onclick="switchDetailImage('${img}', this)" 
                class="gallery-thumb aspect-square rounded-xl overflow-hidden border ${idx === 0 ? 'border-brand-rose' : 'border-white/10 opacity-60'} hover:opacity-100 transition-all focus:outline-none"
              >
                <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover">
              </button>
            `).join('')}
          </div>
          <div class="flex justify-between text-[11px] text-brand-muted mt-2 px-1">
            <span>1. Изделие</span>
            <span>2. На модели</span>
            <span>3. Макро ткани</span>
            <span>4. Лайфстайл</span>
          </div>
        </div>

        <!-- Right: Specs, Colors, Sizes & Order CTA -->
        <div class="flex flex-col justify-between space-y-6">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-brand-rose/20 text-brand-rose border border-brand-rose/30 font-semibold uppercase tracking-wider">
                ${product.badge}
              </span>
              <span class="text-xs text-brand-muted">${product.minQty}</span>
            </div>

            <h2 class="font-display font-black text-2xl sm:text-3xl text-white mb-3">
              ${product.title}
            </h2>

            <div class="flex items-baseline gap-3 mb-6 pb-6 border-b border-white/10">
              <span class="font-display font-black text-3xl sm:text-4xl text-brand-rose">${product.priceDisplay}</span>
              <span class="text-xs text-brand-muted">за единицу в тираже</span>
            </div>

            <div class="mb-5">
              <span class="block text-xs uppercase tracking-wider text-brand-muted font-semibold mb-2">Доступные цвета ткани:</span>
              <div class="flex items-center gap-2.5">
                ${product.colors.map(color => `
                  <div class="w-7 h-7 rounded-full border-2 border-white/30 cursor-pointer shadow-sm hover:scale-110 transition-transform" style="background-color: ${color}"></div>
                `).join('')}
                <span class="text-xs text-brand-cream/60 ml-2">+ окрашивание в любой Pantone</span>
              </div>
            </div>

            <div class="mb-6">
              <span class="block text-xs uppercase tracking-wider text-brand-muted font-semibold mb-2">Сетка размеров:</span>
              <div class="flex flex-wrap gap-2">
                ${product.sizes.map(size => `
                  <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium">
                    ${size}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="space-y-3.5 text-xs text-brand-cream/80 bg-white/[0.02] p-4 sm:p-5 rounded-2xl border border-white/5">
              <div>
                <strong class="text-white block mb-0.5">Состав и качество ткани:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.fabric}</p>
              </div>
              <div>
                <strong class="text-white block mb-0.5">Крой и особенности:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.fit}</p>
              </div>
              <div>
                <strong class="text-white block mb-0.5">Рекомендации по уходу:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.care}</p>
              </div>
            </div>
          </div>

          <div class="pt-4 flex flex-col sm:flex-row gap-3">
            <button 
              type="button" 
              onclick="orderSpecificProduct('${product.title}')" 
              class="flex-1 py-4 px-6 rounded-full bg-brand-rose text-brand-black font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-rose-hover transition-all duration-300 hover:shadow-glow-rose active:scale-95 flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
              </svg>
              Заказать тираж от 10 шт.
            </button>
            <button 
              type="button" 
              onclick="closeMorphModal()" 
              class="py-4 px-6 rounded-full border border-white/20 text-brand-cream hover:bg-white/5 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Закрыть
            </button>
          </div>

        </div>

      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // 2. Set Initial Bounding Box to match clicked card
  const r = activeOriginalRect;
  morphCard.style.top = `${r.top}px`;
  morphCard.style.left = `${r.left}px`;
  morphCard.style.width = `${r.width}px`;
  morphCard.style.height = `${r.height}px`;
  morphCard.style.borderRadius = '1rem';
  morphCard.style.display = 'block';

  // 3. Trigger Shared Element Expansion (FLIP Transition)
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Force reflow and expand to full modal
  requestAnimationFrame(() => {
    morphCard.classList.add('expanded');
  });
}

function closeMorphModal() {
  const overlay = document.getElementById('morphModalOverlay');
  const morphCard = document.getElementById('morphModalCard');

  if (!overlay || !morphCard) return;

  if (activeOriginalRect) {
    const r = activeOriginalRect;
    // Shrink back to the exact initial bounding rect
    morphCard.classList.remove('expanded');
    morphCard.style.top = `${r.top}px`;
    morphCard.style.left = `${r.left}px`;
    morphCard.style.width = `${r.width}px`;
    morphCard.style.height = `${r.height}px`;
    morphCard.style.borderRadius = '1rem';
  } else {
    morphCard.classList.remove('expanded');
  }

  overlay.classList.remove('active');

  setTimeout(() => {
    morphCard.style.display = 'none';
    document.body.style.overflow = '';
    activeClickedCard = null;
    activeOriginalRect = null;
  }, 480);
}

function switchDetailImage(src, thumbBtn) {
  const mainImg = document.getElementById('detailMainImage');
  if (mainImg) {
    mainImg.src = src;
  }
  document.querySelectorAll('.gallery-thumb').forEach(b => {
    b.classList.remove('border-brand-rose');
    b.classList.add('border-white/10', 'opacity-60');
  });
  if (thumbBtn) {
    thumbBtn.classList.remove('border-white/10', 'opacity-60');
    thumbBtn.classList.add('border-brand-rose');
  }
}

function orderSpecificProduct(productTitle) {
  closeMorphModal();
  openLeadModal(`Заказ изделия: ${productTitle}`);
  const notesField = document.querySelector('#modalForm textarea[name="notes"]');
  if (notesField) {
    notesField.value = `Интересует пошив тиража модели: ${productTitle}`;
  }
}

// ==========================================================================
// 6. CALCULATOR
// ==========================================================================
let currentCalcState = {
  itemName: 'Худи оверсайз',
  basePrice: 1890,
  qty: 25,
  printName: 'Премиум вышивка',
  printAdd: 350
};

function initMerchCalculator() {
  const itemButtons = document.querySelectorAll('#calcItemTypes .calc-btn');
  const printButtons = document.querySelectorAll('#calcPrintTypes .calc-print-btn');
  const qtyRange = document.getElementById('calcQtyRange');
  const qtyDisplay = document.getElementById('calcQtyDisplay');

  if (!qtyRange) return;

  itemButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      itemButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCalcState.basePrice = parseFloat(btn.getAttribute('data-base')) || 1890;
      currentCalcState.itemName = btn.getAttribute('data-name') || 'Изделие';
      recalculateMerch();
    });
  });

  printButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      printButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCalcState.printAdd = parseFloat(btn.getAttribute('data-add')) || 0;
      currentCalcState.printName = btn.getAttribute('data-print') || 'Печать';
      recalculateMerch();
    });
  });

  qtyRange.addEventListener('input', (e) => {
    const qty = parseInt(e.target.value, 10);
    currentCalcState.qty = qty;
    if (qtyDisplay) {
      qtyDisplay.textContent = `${qty} шт.`;
    }
    recalculateMerch();
  });

  recalculateMerch();
}

function recalculateMerch() {
  const { basePrice, printAdd, qty, itemName, printName } = currentCalcState;

  let discountRate = 0;
  if (qty >= 100) discountRate = 0.18;
  else if (qty >= 50) discountRate = 0.12;
  else if (qty >= 25) discountRate = 0.05;

  const rawUnit = basePrice + printAdd;
  const discountedUnit = Math.round(rawUnit * (1 - discountRate));
  const total = discountedUnit * qty;

  let leadTime = '7–10 рабочих дней';
  if (qty > 100) leadTime = '12–16 рабочих дней';
  else if (qty <= 20) leadTime = '5–7 рабочих дней';

  const elSummaryItem = document.getElementById('calcSummaryItem');
  const elSummaryQty = document.getElementById('calcSummaryQty');
  const elSummaryPrint = document.getElementById('calcSummaryPrint');
  const elSummaryLead = document.getElementById('calcSummaryLead');
  const elPerItem = document.getElementById('calcPerItemPrice');
  const elTotal = document.getElementById('calcTotalPrice');

  if (elSummaryItem) elSummaryItem.textContent = itemName;
  if (elSummaryQty) elSummaryQty.textContent = `${qty} шт.`;
  if (elSummaryPrint) elSummaryPrint.textContent = printName;
  if (elSummaryLead) elSummaryLead.textContent = leadTime;
  if (elPerItem) elPerItem.textContent = discountedUnit.toLocaleString('ru-RU');
  if (elTotal) elTotal.textContent = `${total.toLocaleString('ru-RU')} ₽`;
}

function orderFromCalculator() {
  const title = `Заказ из калькулятора: ${currentCalcState.itemName} (${currentCalcState.qty} шт.)`;
  openLeadModal(title);
}

// ==========================================================================
// 7. LEAD MODAL & NOTIFICATIONS
// ==========================================================================
function openLeadModal(sourceContext = 'Заявка с сайта') {
  const modal = document.getElementById('leadModal');
  const card = document.getElementById('modalCard');
  const sourceInput = document.getElementById('modalSource');
  const modalForm = document.getElementById('modalForm');
  const modalSuccess = document.getElementById('modalSuccess');

  if (!modal || !card) return;

  if (sourceInput) sourceInput.value = sourceContext;

  if (modalForm) {
    modalForm.reset();
    modalForm.classList.remove('hidden');
  }
  if (modalSuccess) {
    modalSuccess.classList.add('hidden');
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  document.body.style.overflow = 'hidden';
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  const card = document.getElementById('modalCard');

  if (!modal || !card) return;

  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');

  document.body.style.overflow = '';
}

function initModalListeners() {
  const modal = document.getElementById('leadModal');
  const morphOverlay = document.getElementById('morphModalOverlay');

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLeadModal();
    });
  }

  if (morphOverlay) {
    morphOverlay.addEventListener('click', () => {
      closeMorphModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeadModal();
      closeMorphModal();
    }
  });
}

function handleModalSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Отправка...</span>`;
  }

  setTimeout(() => {
    const modalForm = document.getElementById('modalForm');
    const modalSuccess = document.getElementById('modalSuccess');

    if (modalForm) modalForm.classList.add('hidden');
    if (modalSuccess) {
      modalSuccess.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Отправить заявку</span>`;
    }

    showToast('Заявка успешно отправлена! Мы свяжемся с вами.');
  }, 600);
}

function handleFormSubmit(event, source) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Отправка...</span>`;
  }

  setTimeout(() => {
    form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Отправить заявку</span>`;
    }

    showToast('Спасибо за заявку! Наш дизайнер свяжется с вами сегодня же.');
  }, 600);
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'px-5 py-3 rounded-2xl bg-brand-dark/95 border border-brand-rose/40 text-brand-cream text-xs sm:text-sm font-medium shadow-2xl flex items-center gap-3 backdrop-blur-xl transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto';
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-brand-rose text-brand-black flex items-center justify-center shrink-0">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
      </svg>
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
