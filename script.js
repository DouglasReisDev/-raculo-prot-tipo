// ═══════════════════════════════════════════════
//  DADOS DOS PERFUMES
//  Para adicionar mais, copie o padrão abaixo:
//  {
//    id: N°,
//    name: "Nome do Perfume",
//    brand: "Marca",
//    notes: "inspirações olfativas aqui",
//    icon: "🧴",       ← emoji representativo
//    tags: ["verao", "dia"]   ← use: primavera | verao | outono | inverno | dia | noite
//      ["primavera","verao","outono", "inverno", "dia", "noite"]
//  },
// ═══════════════════════════════════════════════
const perfumes = [
   {
    id: 1,
    name: "Satin Body Oud",
    brand: "ABDUL SAMAD AL QURASH", 
    category: "Nicho",
    inspiredBy: null,
    notes: "bergamota,lavanda, flor de laranjeira, jasmin, mandarina, pêra, oud cedro, pachouli, vetiver, baunilha,âmbar",
    icon: "🍐🌼🪵",
    tags: ["primavera","outono", "inverno", "noite"]
  },
  {
    id: 2,
    name: "Modest une",
    brand: "Afnan",
    category: "CT Árabe",
    inspiredBy: "Dior Sauvage EDT",
    notes: "Bergamota, pimenta, lavanda, ambroxan, vetiver, cedro",
    icon: "🌊💨🌿",
    tags:["primavera","verao","outono","dia", "noite"]
  },
  {
    id: 3,
    name: "9.AM",
    brand: "Afnan",
    category: "CT Árabe",
    inspiredBy: "Bleu de Chanel + Y",
    notes: "limão, Hortelã, groselha preta , pimenta rosa, maçã, cedro, incenso, gengibre, sândalo, patchouli, jasmin",
    icon: "🍋🍏🫚",
    tags:["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 4,
    name: "Supremacy Collector's Edition Pour Homme",
    brand: "Afnan",
    category: "CT Árabe",
    inspiredBy: "Aventus Absolu - Creed",
    notes: "Abacaxi, bergamota, bétula, patchouli, almíscar, âmbar, musgo de carvalho, âmbar cinzento",
    icon: "🍍🌲👑",
    tags:["primavera","verao","outono", "dia", "noite"]
  },
  {
    id: 5,
    name: "Armani Code EDT - 2023",
    brand: "Armani",
    category: "Importado design",
    inspiredBy: null,
    notes: "Mandarina,Lavanda,Fava tonka, Cedro",
    icon: "🍋🪻💼",
    tags:["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 6,
    name: "Habanera Black",
    brand: "Aurora Scents",
    category: "CT Árabe",
    inspiredBy: "Vibrato + Tygar - Sospiro",
    notes: "Toranja,gengibre, bergamota,mandarina,cedro, jasmin, raiz de orris, rosa, almiscar, acorde amadeirado",
    icon: "🍊🫚🪵",
    tags: ["primavera","verao","outono", "dia", "noite"]
  },          // parei aqui a revisão 
  {
    id: 7,
    name: "Be Intense",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Y EDP Intense - Yves Saint Laurent",
    notes: "Maçã, salva, cedro, âmbar, almíscar branco, madeira",
    icon: "🍎🌿⚡",
    tags: ["primavera","verao","outono", "dia", "noite"]
  },
  {
    id: 8,
    name: "L'home Up",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Prada L'Homme Intense",
    notes: "Íris, âmbar, sálvia, cedro, sândalo, almíscar",
    icon: "🌸🪵💫",
    tags: ["primavera","outono", "inverno", "noite"]
  },
  {
    id: 9,
    name: "Lunnari",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Prada Luna Rossa",
    notes: "Lavanda, toranja, bergamota, almíscar, labdano, madeira",
    icon: "🌕💜🌿",
    tags: ["primavera","outono","inverno", "dia", "noite"]
  },
  {
    id: 10,
    name: "Audacity",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Imagination - Louis Vuitton",
    notes: "Cítrico, notas aquáticas, cedro, almíscar, âmbar cinza",
    icon: "💡🌊🍊",
    tags:["primavera","outono", "dia", "noite"]
  },
  {
    id: 11,
    name: "Boise Premium",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Cedrat Boise Intense - Mancera",
    notes: "Cedro, limão, almíscar, âmbar, sândalo, patchouli",
    icon: "🌲🍋🤎",
    tags: ["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 12,
    name: "Homme Exclusif",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Dior Homme Parfum",
    notes: "Cacau, íris, couro, madeira, âmbar, almíscar",
    icon: "🍫🌸🖤",
    tags:["outono","inverno","noite"]
  },
  {
    id: 13,
    name: "Le Homme Sport",
    brand: "Azza parfums",
    category: "Contratipo",
    inspiredBy: "Dior Homme Sport",
    notes: "Toranja, notas aquáticas, cedro, almíscar, madeira de lei",
    icon: "🏃💧🌿",
    tags: ["primavera","verao","outono","dia","noite"]
  },
  {
    id: 14,
    name: "L'Homme L'Eau",
    brand: "Vivant",
    category: "Contratipo",
    inspiredBy: "L'Homme L'Eau - Prada",
    notes: "Bergamota, íris, notas aquáticas, cedro, almíscar, notas frescas",
    icon: "💧🌸🌊",
    tags: ["primavera","verao","outono", "dia",]
  },
  
  {
    id: 15,
    name: "Homme",
    brand: "Dior",
    category: "Importado design",
    inspiredBy: null,
    notes: "Lavanda, íris, âmbar, couro, cedro, almíscar cinza",
    icon: "🌸🖤🌿",
    tags:["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 16,
    name: "Homme Sport",
    brand: "Dior",
    category: "Importado design",
    inspiredBy: null,
    notes: "Toranja, notas aquáticas, cedro, almíscar, gengibre",
    icon: "⚡💧🏋️",
    tags: ["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 17,
    name: "Homme Intense",
    brand: "Dior",
    category: "Importado design",
    inspiredBy: null,
    notes: "Íris, cacau, âmbar, madeira, almíscar, cedro",
    icon: "🌸🍫🌙",
    tags:["outono", "inverno", "noite"]
  },
  {
    id: 18,
    name: "PLATINE BLANC",
    brand: "French Avenue",
    category: "CT Árabe",
    inspiredBy: "Torino 21 - Xerjoff",
    notes: "Rosa, sândalo, baunilha, almíscar branco, âmbar, patchouli",
    icon: "⬜🌹✨",
    tags:["primavera","verao","outono","dia",]
  },
  {
    id: 19,
    name: "Liquid Brun",
    brand: "French Avenue",
    category: "CT Árabe",
    inspiredBy: "Althair - Parfums de Marly",
    notes: "Bergamota, couro, sândalo, âmbar, almíscar, cedro",
    icon: "🤎🌲💫",
    tags: ["outono", "inverno", "noite"]
  },
  {
    id: 20,
    name: "Vulcan Feu",
    brand: "French Avenue",
    category: "CT Árabe",
    inspiredBy: "God of Fire - Stéphane Humbert Lucas",
    notes: "Incenso, couro, oud, âmbar, madeira defumada, resina",
    icon: "🌋🔥🖤",
    tags:["primavera","verao","dia"]
  },
  {
    id: 21,
    name: "Royal Blend Nero",
    brand: "French Avenue",
    category: "CT Árabe",
    inspiredBy: "Angel Share - KILIAN",
    notes: "Conhaque, baunilha, carvalho, âmbar, almíscar, sândalo",
    icon: "🥃🌙👑",
    tags: ["outono", "inverno","noite"]
  },
    
  {
    id: 22,
    name: "Naxos",
    brand: "Xerjoff",
    category: "Nicho",
    inspiredBy: null,
    notes: "lavanda, bergamota, limão, mel, canela, cashmeran,jasmin sambac, folha de tabaco, baunilha,fava tonka",
    icon: "🍋🪻🍯",
    tags:["primavera","outono", "inverno","noite"]
  },
  {
    id: 23,
    name: "Lumen Blue",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Blue Talisman - Ex Nihilo",
    notes: "Bergamota, notas aquáticas, âmbar cinza, almíscar, cedro",
    icon: "💙🌊✨",
    tags:["primavera","verao","outono", "dia",]
  },
  {
    id: 24,
    name: "Turim",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Torino 21 - Xerjoff",
    notes: "Rosa, sândalo, baunilha, almíscar, âmbar, patchouli",
    icon: "🌹🕯️🤍",
    tags: ["primavera","verao","dia",]
  },
  {
    id: 25,
    name: "Taylor Made",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Tuxedo - Yves Saint Laurent",
    notes: "Íris, couro, sândalo, madeira, almíscar, âmbar",
    icon: "🎩🖤🌸",
    tags:["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 26,
    name: "Codex Supreme",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Armani Code EDP",
    notes: "Bergamota, especiados, couro, âmbar, madeira, almíscar",
    icon: "🌙📖🖤",
    tags: ["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 27,
    name: "The Real Commander",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Stronger With You Intensely - Armani",
    notes: "Caramelo, baunilha, sálvia, cedro, notas defumadas, almíscar",
    icon: "⚔️🍯🌙",
    tags: ["outono", "inverno", "noite"]
  },
  {
    id: 28,
    name: "Tersus Parfum",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Y EDP - Yves Saint Laurent",
    notes: "Maçã, salva, cedro, âmbar, almíscar, vetiver",
    icon: "🍎🌿💫",
    tags: ["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 29,
    name: "Lemon Vanilla e Wood",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Allure Edition Blanche - Chanel",
    notes: "Limão, baunilha, almíscar branco, cedro, âmbar, notas cítricas",
    icon: "🍋🤍🌲",
    tags:["primavera","verao","dia", "noite"]
  },
  {
    id: 30,
    name: "Códice d'horo",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Armani Code Absolu Gold",
    notes: "Bergamota, mel, couro, baunilha, sândalo, âmbar dourado",
    icon: "🏅🌙🍯",
    tags:["outono", "inverno","noite"]
  },
  {
    id: 31,
    name: "Dark Water",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Acqua di Gio Profumo - Armani",
    notes: "Notas aquáticas, incenso, patchouli, âmbar, almíscar, bergamota",
    icon: "🌊🖤🌿",
    tags: ["primavera","verao","outono", "dia", "noite"]
  },
  {
    id: 32,
    name: "Uomo di Lusso",
    brand: "In the Box",
    category: "Contratipo",
    inspiredBy: "Pour Homme EDP - Bvlgari",
    notes: "Bergamota, chá, sândalo, almíscar, âmbar, madeira",
    icon: "☕🌟🌲",
    tags:["primavera","verao","outono","dia"]
  },
  {
    id: 33,
    name: "L'Eau d'Issey",
    brand: "Issey Miyake",
    category: "Importado design",
    inspiredBy: null,
    notes: "Notas aquáticas, lótus, lírio do vale, âmbar cinza, almíscar, cedro",
    icon: "💧🌸🌊",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 34,
    name: "Bull 21",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "Torino 21 - Xerjoff",
    notes: "Rosa, sândalo, âmbar, baunilha, almíscar, patchouli",
    icon: "🐂🌹✨",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 35,
    name: "Macedonia",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "GYAN - Bvlgari",
    notes: "Notas verdes, vetiver, cedro, almíscar, âmbar, madeira",
    icon: "🌿🌲💚",
    tags: ["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 36,
    name: "Imperial",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "Millésime Impérial - Creed",
    notes: "Bergamota, íris, notas marinhas, almíscar, âmbar cinza, cedro",
    icon: "👑🌊💎",
    tags: ["primavera","verao","outono","dia","noite"]
  },
  {
    id: 37,
    name: "Versatility",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "Greenley - Parfums de Marly / Creed",
    notes: "Bergamota, maçã, cedro, vetiver, âmbar, almíscar",
    icon: "🍏🌿🔄",
    tags: ["primavera","verao","outono", "inverno", "dia"]
  },
  {
  id: 38,
  name: "Enock",
  brand: "Nuancielo",
  category: "Contratipo",
  inspiredBy: "Greenley - Parfums de Marly",
  notes: "maçã verde, bergamota, mandarina, petitgrain, cedro, cashmeran, musgo de carvalho, almíscar",
  icon: "🍏🌿🌳",
  tags: ["primavera","outono","dia","noite"]
},
  {
    id: 39,
    name: "Hiero",
    brand: "Thera Cosméticos",
    category: "Contratipo",
    inspiredBy: "CH Men EDT - Carolina Herrera",
    notes: "Sálvia, cedro, âmbar, almíscar, notas verdes, madeira",
    icon: "🌿🏛️💚",
    tags: ["primavera","outono", "inverno","noite"]
  },

  {
    id: 40,
    name: "Divinity Monkey",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "Hanuman - Boadicea",
    notes: "Rosa, oud, âmbar, sândalo, almíscar, especiado",
    icon: "🐒🌺🪵",
    tags: ["primavera","verao","outono","dia",]
  },
    
  {
    id: 41,
    name: "Imaginacion",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "Imagination - Louis Vuitton",
    notes: "Cítrico, notas aquáticas, cedro, almíscar, âmbar cinza",
    icon: "💭🌊🍋",
    tags: ["primavera","verao","outono","dia"]
  },
  {
    id: 42,
    name: "Sparkling Bouquet",
    brand: "J.A",
    category: "Contratipo",
    inspiredBy: "1861 Renaissance - Xerjoff",
    notes: "Bergamota, flores brancas, almíscar, âmbar, sândalo",
    icon: "💐✨🌟",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 43,
    name: "Le Male Le Parfum",
    brand: "Jean-Paul Gaultier",
    category: "Importado design",
    inspiredBy: null,
    notes: "Lavanda, baunilha, âmbar, almíscar, couro, notas quentes",
    icon: "💙🫙🌹",
    tags: ["primavera","outono", "inverno", "noite"]
  },
  
  {
  id: 44,
  name: "Tabac",
  brand: "Maison Alhambra",
  category: "contratipo",
  inspiredBy: "Tobacolor - Dior",
  notes: "Ameixa,Pêssego,Bergamota,Cítricos,Mel,Fumaça,Notas Orientais,Folha de Tabaco,Tabaco,Âmbar,Tabaco Branco",
  icon: "🍑🍯🚬🔥",
  tags: ["outono", "inverno", "noite"]
},
  {
    id: 45,
    name: "Dark Door Sport",
    brand: "Maison Alhambra",
    category: "CT Árabe",
    inspiredBy: "Dior Homme Sport 2021",
    notes: "Cítrico, toranja, notas aquáticas, cedro, almíscar, vetiver",
    icon: "🚪⚡💧",
    tags: ["primavera","verao","outono","dia"]
  },
 {
    id: 46,
    name: "Le Patron Intense",
    brand: "Valentino Viegas",
    category: "Contratipo",
    inspiredBy: "Boss Bottled Intense - Hugo Boss",
    notes: "Maçã, canela, baunilha, madeira, âmbar, almíscar",
    icon: "👔🍎🌙",
    tags:["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 47,
    name: "Kiris Royale",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Gin, zimbro, bergamota, almíscar, notas herbais, âmbar",   
    icon: "🍸👑🌿",
    tags: ["primavera","verao","outono", "inverno", "noite"]
  },
  {
    id: 48,
    name: "Rose Maraschino",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Rosa, cereja, licor, baunilha, almíscar, notas florais",
    icon: "🌹🍒🍹",
    tags: ["primavera","verao","outono", "inverno", "dia", "noite"]    // voltar aqui depois pra revisar o cheiro 
  },
  {
    id: 49,
    name: "Sex on the Peach",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Pêssego, laranja, baunilha, almíscar, notas frutadas, âmbar",
    icon: "🍑🍊✨",
    tags: ["verao","noite"]
  },
  {
    id: 50,
    name: "Jasmiña Colada",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Jasmin, coco, abacaxi, âmbar, almíscar, notas tropicais",
    icon: "🌺🥥🍍",
    tags:["outono","noite"]
  },
  {
    id: 51,
    name: "Vintage Bergamot",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Bergamota, chá Earl Grey, âmbar, almíscar, madeira, notas cítricas",
    icon: "🍋🫖🌿",
    tags: ["primavera","verao","outono","dia","noite"]
  },
  {
    id: 52,
    name: "Cuir Mojito",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Hortelã, limão, couro, âmbar, almíscar, notas verdes",
    icon: "🍹🌿👜",
    tags: ["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  {
    id: 53,
    name: "Caipiroud",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Limão, cachaça, oud, âmbar, almíscar, notas resinosas",
    icon: "🍋🇧🇷🪵",
    tags:["primavera","verao","dia", "noite"]
  },
  {
    id: 54,
    name: "Musk Mule",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Almíscar, gengibre, limão, âmbar, notas especiadas, madeira",
    icon: "🫏🌶️🤍",
    tags:["primavera","verao","outono", "inverno", "dia"]
  },
  {
    id: 55,
    name: "Tobacognac",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Tabaco, conhaque, baunilha, âmbar, couro, notas amadeiradas",
    icon: "🍷🚬🤎",
    tags: ["outono", "inverno", "noite"]
  },
  {
    id: 56,
    name: "Scotchouli",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Whisky, patchouli, âmbar, almíscar, couro, notas defumadas",
    icon: "🥃🌱🖤",
    tags: ["outono","inverno","noite"]
  },
  {
    id: 57,
    name: "Oud Fashioned",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Oud, bourbon, baunilha, âmbar, almíscar, couro",
    icon: "🥃🪵🌙",
    tags:["outono","inverno","noite"]
  },
  {
    id: 58,
    name: "Ambre Bourbon",
    brand: "Mixologist",
    category: "Nicho",
    inspiredBy: null,
    notes: "Âmbar, bourbon, baunilha, almíscar, madeira, notas quentes",
    icon: "🧡🥃✨",
    tags: ["outono","inverno","noite"]
  },
  {
    id: 59,
    name: "Homem Essence",
    brand: "Natura",
    category: "Nacional",
    inspiredBy: null,
    notes: "Bergamota, notas verdes, sândalo, almíscar, cedro, âmbar",
    icon: "🌿🇧🇷💚",
    tags: ["primavera","outono", "inverno", "dia", "noite"]
  },
{
  id: 60,
  name: "Everest",
  brand: "Nuancielo",
  category: "Contratipo",
  inspiredBy: "Silver Mountain Water - Creed",
  notes: "bergamota, mandarina, chá verde, groselha preta, almíscar, sândalo, petitgrain",
  icon: "🏔️❄️🌿",
  tags: ["primavera", "verao", "dia"]
},

{
    id: 61,
    name: "Ayael",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Musk Therapy - Initio Parfums",
    notes: "Almíscar, sândalo, âmbar, baunilha, notas quentes, almíscar branco",
    icon: "🤍☁️✨",
    tags: ["primavera","verao","outono","dia"]
  },
  {
    id: 62,
    name: "Alpha",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Allure Homme Sport - Chanel",
    notes: "Notas aquáticas, cedro, almíscar, âmbar cinza, bergamota, madeira",
    icon: "⚡🌊💪",
    tags: ["primavera","verao","outono", "dia", "noite"]
  },
  {
    id: 63,
    name: "MONDÉ PARALLÈLE",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Solo Loewe",
    notes: "Tomilho, âmbar, rosewood, almíscar, madeira, notas herbais",
    icon: "🌎🌿🌙",
    tags: ["primavera","verao","outono", "dia", "noite"]
  },
  {
    id: 64,
    name: "Hills",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "The One - Dolce & Gabbana",
    notes: "Cardamomo, gengibre, cedro, âmbar, almíscar, sândalo",
    icon: "🏔️🌿🧡",
    tags: ["primavera","outono", "inverno", "noite"]
  },
  {
    id: 65,
    name: "Zion Sanctum",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Code Parfum - Armani",
    notes: "Bergamota, couro, âmbar, almíscar, sândalo, notas quentes",
    icon: "🏛️🖤💫",
    tags: ["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 66,
    name: "Eclat Vanille",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Vanilla 28 - Kayali",
    notes: "Baunilha, âmbar, almíscar, sândalo, notas doces, benjoin",
    icon: "🍦🤍🌙",
    tags: ["outono", "inverno","noite"]
  },
  {
    id: 67,
    name: "Alfa Leggera",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Allure Homme Sport Eau Extrême - Chanel",
    notes: "Bergamota, vetiver, cedro, almíscar, âmbar cinza, notas frescas",
    icon: "🏎️🌿💨",
    tags: ["primavera","verao","outono", "dia"]
  },
  {
    id: 68,
    name: "Dream on Infinity",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Imagination - Louis Vuitton",
    notes: "Cítrico, notas aquáticas, cedro, âmbar cinza, almíscar, madeira",
    icon: "🌠💭🌊",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 69,
    name: "Ocean Pour Homme",
    brand: "Valentino Viegas",
    category: "Contratipo",
    inspiredBy: "Ocean EDP - Prada",
    notes: "Notas marinhas, bergamota, âmbar cinza, almíscar, cedro, madeira",
    icon: "🌊🏄💙",
    tags: ["primavera","verao","outono","dia", "noite"]
  },

  {
    id: 70,
    name: "Heaven",
    brand: "Valentino Viegas",
    category: "Contratipo",
    inspiredBy: "Imagination - Louis Vuitton",
    notes: "Cítrico, notas aquáticas, cedro, âmbar cinza, almíscar, leveza",
    icon: "😇🌤️💫",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 71,
    name: "EDAH",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "ANI - Nishane",
    notes: "Rosa, oud, sândalo, âmbar, almíscar, notas orientais",
    icon: "🌹🪵🌟",
    tags: ["primavera","outono", "inverno", "noite"]
  },
  {
    id: 72,
    name: "Xclusif Oud",
    brand: "Orientica",
    category: "CT Árabe",
    inspiredBy: "Layton - Parfums de Marly",
    notes: "Oud, maçã, baunilha, âmbar, sândalo, especiado",
    icon: "🪵👑🍎",
    tags:["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 73,
    name: "Invictus Intense",
    brand: "Paco Rabanne",
    category: "Importado design",
    inspiredBy: null,
    notes: "Toranja, patchouli, incenso, âmbar cinza, almíscar, madeira",
    icon: "⚡🏆🌊",
    tags: ["primavera","verao","outono","dia", "noite"]
  },
  {
    id: 74,
    name: "Avant Garde",
    brand: "Riiffs",
    category: "CT Árabe",
    inspiredBy: "Prada L'Homme",
    notes: "Íris, sálvia, cedro, almíscar, âmbar, notas frescas",
    icon: "🎨🌿💙",
    tags: ["primavera","verao","outono","dia"]
  },
    
  {
    id: 75,
    name: "Aron",
    brand: "Sacratu",
    category: "Nacional",
    inspiredBy: null,
    notes: "Notas autoral, madeira, almíscar, âmbar, notas únicas",
    icon: "🌿🇧🇷⭐",
    tags:["primavera","verao", "dia"]
  },
  {
    id: 76,
    name: "Volcano",
    brand: "Thera Cosméticos",
    category: "Contratipo",
    inspiredBy: "Polo Blue EDT - Ralph Lauren",
    notes: "Melão, notas aquáticas, cedro, almíscar, âmbar cinza, madeira",
    icon: "🌋💧🔵",
    tags: ["primavera","verao","dia"]
  },
  {
    id: 77,
    name: "Hazor",
    brand: "Thera Cosméticos",
    category: "Contratipo",
    inspiredBy: "Armani Code EDT",
    notes: "Bergamota, anís, couro, almíscar, âmbar, madeira",
    icon: "🌑🌿🖤",
    tags:["primavera","outono", "inverno", "dia", "noite"]
  },
  {
    id: 78,
    name: "Drago",
    brand: "Thera Cosméticos",
    category: "Contratipo",
    inspiredBy: "Dior Homme Sport (antigo)",
    notes: "Toranja, notas cítricas, cedro, almíscar, âmbar, frescor",
    icon: "🐉💧🌿",
    tags:["primavera","verao","dia"]
  },
  {
    id: 79,
    name: "Fadin",
    brand: "Thera Cosméticos",
    category: "Contratipo",
    inspiredBy: "212 Heroes - Carolina Herrera",
    notes: "Bergamota, notas aquáticas, vetiver, almíscar, âmbar, cedro",
    icon: "🦸💙🌊",
    tags: ["primavera","verao","outono","dia", "noite"]
  },
  {
    id: 80,
    name: "Mead",
    brand: "Nuancielo",
    category: "Contratipo",
    inspiredBy: "Naxos - Xerjoff",
    notes: "cítricos,lavanda, jasmin,tabaco, canela, baunilha, ",
    icon: "🌿🪵🍯",
    tags: ["primavera","inverno" ,"outono","noite"]
  },
  
  {
  id: 81,
  name: "Un Jardin sur le Nil",
  brand: "Hermès",
  category: "Importado design",
  inspiredBy:"null",
  notes: "manga verde, toranja, tomate, lótus, junco, incenso, íris, almíscar",
  icon: "🌿🥭🌊",
  tags: ["primavera", "verao", "dia"]
  },
   
  {
    id: 82,
    name: "Armani Code EDT Vintage",
    brand: "Armani",
    category: "Importado design",
    inspiredBy: null,
    notes: "Mandarina,Lavanda,Fava tonka, Cedro",
    icon: "🍋🪻💼",
    tags:["primavera","verao","outono", "inverno", "dia", "noite"]
  },
  
  {
  id: 83,
  name: "Bossa",
  brand: "Granado",
  category: "Nacional",
  inspiredBy: null,
  notes:"limão, Petiigrain, mandarina,leite de coco , notas oceanicas,jasmim-manga,almiscar,cashmeran",
  icon: "🌊🍋🥥",
  tags: ["primavera","verao", "dia"]
},

{
  id: 84,
  name: "figo confit",
  brand: "Granado",
  category: "Nacional",
  inspiredBy: null,
  notes:"Figo, Davana e Ameixa,Cashmeran,Cedro,tãmara,ládano",
  icon: "🍂🍁✨",
  tags: ["outono", "inverno", "dia", "noite"]
},

{
  id: 85,
  name: "Ébène",
  brand: "Maison Alhambra",
  category: "contratipo",
  inspiredBy: "Babycat - Yves Saint Laurent",
  notes: "Elemi,Cravo,Artemísia,Olíbano,Madeira Guaiac,Baunilha,Benjoim,Âmbar,Almíscar",
  icon: "🌿🍦🪵",
  tags: ["outono", "inverno", "noite"]
},
  {
  id: 86,
  name: "Lemon Premium",
  brand: "Azza Parfums",
  category: "contratipo",
  inspiredBy: "Lemon Line - Mancera",
  notes: "Limão,Laranja,Lavanda,Flores Brancas,Gerânio,Âmbar,Almíscar Branco,Musgo de Carvalho",
  icon: "🍋🍊🪻",
  tags: ["primavera", "verao", "dia"]
  },
  {
    id: 87,
    name: "àcqua de Gio Profumo",
    brand: "Armani",
    category: "Importado design",
    inspiredBy: null,
    notes: "Notas aquáticas, incenso, patchouli, âmbar, almíscar, bergamota",
    icon: "🌊🖤🌿",
    tags:["primavera","verao","outono", "dia", "noite"]
  },
  
  {
  id: 88,
  name: "Velvet Cedar",
  brand: "Maison Viegas",
  category: "contratipo",
  inspiredBy: "Cedar Chic - Carolina Herrera",
  notes: "Aldeídos,Bergamota,Flor de Laranjeira,Almíscar Branco,Cedro",
  icon: "🫧🍊🌸",
  tags: ["primavera", "verao", "outono", "dia"]
},


  // falta adiconar velvet cedar e limon line

  
  // ── ADICIONE SEUS PERFUMES AQUI ──────────────
  // Exemplo comentado:
  // {
  //   id:N° ,
  //   name: "La Vie Est Belle",
  //   brand: "Lancôme",
  //   category: XXXXX
  //   inspiredby:XXXXX 
  //   notes: "Íris, pralinê, baunilha, patchouli",
  //   icon: "💜",
  //   tags: ["outono", "inverno", "dia", "noite"]
  // },
];

// ─── estado ───────────────────────────────────
const activeFilters = new Set();
let visibleIds = [];

// ─── build cards ──────────────────────────────
const grid = document.getElementById('grid');
const emptyState = document.getElementById('emptyState');

function buildCards() {
  perfumes.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = p.id;
    card.dataset.tags = p.tags.join(',');

    card.innerHTML = `
      <span class="card-number">${String(i + 1).padStart(2, '0')}</span>
      <span class="card-icon">${p.icon}</span>
      <h2 class="card-name">${p.name}</h2>
      <p class="card-brand">${p.brand}</p>
      <p class="card-notes">${p.notes}</p>
      <div class="card-tags">
        ${p.tags.map(t => `<span class="tag tag-${t}">${tagLabel(t)}</span>`).join('')}
      </div>
    `;

    grid.insertBefore(card, emptyState);
  });
}

function tagLabel(t) {
  const map = { primavera: 'Primavera', verao: 'Verão', outono: 'Outono',
                inverno: 'Inverno', dia: 'Dia', noite: 'Noite' };
  return map[t] || t;
}

// ─── logica do filtro ─────────────────────────────
function applyFilters() {
  const cards = grid.querySelectorAll('.card[data-id]');
  visibleIds = [];

  cards.forEach(card => {
    const tags = card.dataset.tags.split(',');
    const show = activeFilters.size === 0 ||
                 [...activeFilters].every(f => tags.includes(f));
    card.classList.toggle('hidden', !show);
    card.classList.remove('winner');
    const badge = card.querySelector('.winner-badge');
    if (badge) badge.remove();
    if (show) visibleIds.push(parseInt(card.dataset.id));
  });

  const count = visibleIds.length;
  document.getElementById('visibleCount').textContent = count;
  emptyState.classList.toggle('visible', count === 0);

  const btn = document.getElementById('btnSortear');
  btn.disabled = count === 0;
  document.getElementById('sortearHint').textContent =
    count === 0 ? 'Nenhum perfume visível'
    : count === 1 ? 'Apenas 1 perfume visível'
    : `Sorteie entre ${count} perfumes visíveis`;
}

// ─── botões filtro ───────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.cat;
    if (activeFilters.has(cat)) {
      activeFilters.delete(cat);
      btn.classList.remove('active');
    } else {
      activeFilters.add(cat);
      btn.classList.add('active');
    }
    applyFilters();
  });
});

// ─── sortear ──────────────────────────────────
let spinInterval = null;
let currentWinnerId = null;

function sortear() {
  if (visibleIds.length === 0) return;

  // Remove winner visual anterior
  document.querySelectorAll('.card.winner').forEach(c => {
    c.classList.remove('winner');
    const b = c.querySelector('.winner-badge');
    if (b) b.remove();
  });

  const visibleCards = [...document.querySelectorAll('.card[data-id]:not(.hidden)')];
  if (visibleCards.length === 0) return;

  // Animação de roleta
  let flips = 0;
  const total = 16 + Math.floor(Math.random() * 10);

  spinInterval = setInterval(() => {
    visibleCards.forEach(c => c.classList.remove('spinning'));
    const random = visibleCards[Math.floor(Math.random() * visibleCards.length)];
    random.classList.add('spinning');
    flips++;

    if (flips >= total) {
      clearInterval(spinInterval);
      visibleCards.forEach(c => c.classList.remove('spinning'));

      const winnerId = visibleIds[Math.floor(Math.random() * visibleIds.length)];
      currentWinnerId = winnerId;
      const winnerCard = grid.querySelector(`.card[data-id="${winnerId}"]`);

      winnerCard.classList.add('winner');
      const badge = document.createElement('div');
      badge.className = 'winner-badge';
      badge.textContent = '✦ Sorteado';
      winnerCard.insertBefore(badge, winnerCard.firstChild);

      winnerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setTimeout(() => openModal(winnerId), 600);
    }
  }, 80);
}

document.getElementById('btnSortear').addEventListener('click', sortear);

// ─── modal ────────────────────────────────────
function openModal(id) {
  const p = perfumes.find(p => p.id === id);
  if (!p) return;

  document.getElementById('modalIcon').textContent = p.icon;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalNotes').textContent = p.notes;
  document.getElementById('modalTags').innerHTML =
    p.tags.map(t => `<span class="tag tag-${t}">${tagLabel(t)}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('btnFechar').addEventListener('click', closeModal);
document.getElementById('btnSortearNovamente').addEventListener('click', () => {
  closeModal();
  setTimeout(sortear, 300);
});
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

// ─── init ─────────────────────────────────────
buildCards();
applyFilters();
