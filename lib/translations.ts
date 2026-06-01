export type Locale = string

export type Translation = {
  chooseCountry: string
  allCountries: string
  casinosRanked: (count: number) => string
  tableHeaders: {
    casino: string
    rating: string
    minDeposit: string
    bonus: string
  }
  visitCasino: string
  noLink: string
  noCasinos: string
  disclaimer: string
  footerDisclaimer: string
  footerDisclaimer2: (url: string) => string
  popup: {
    firstName: string
    email: string
    joinNow: string
    legal: string
  }
  regions: {
    europe: string
    'north-america': string
    'south-america': string
    asia: string
    oceania: string
    africa: string
  }
}

const translations: Record<string, Translation> = {
  en: {
    chooseCountry: 'Choose Your Country',
    allCountries: '← All Countries',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : 's'} reviewed & ranked`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Rating',
      minDeposit: 'Min. Deposit',
      bonus: 'Bonus',
    },
    visitCasino: 'Visit Casino',
    noLink: 'No link',
    noCasinos: 'No casinos listed yet.',
    disclaimer: '18+ | New customers only. T&Cs apply. Play responsibly. BeGambleAware.org',
    popup: {
      firstName: 'First Name',
      email: 'Email Address',
      joinNow: 'Join Now',
      legal: 'By signing up you agree to receive promotional emails. Unsubscribe anytime.',
    },
    footerDisclaimer: '18+ | Play Responsibly. MaxWinMania is an independent casino comparison site. We do not operate any gambling services. Casino offers and bonuses are subject to change — always check the operator\'s website for the latest terms and conditions. Gambling can be addictive. Please play responsibly and only bet what you can afford to lose.',
    footerDisclaimer2: (url) => `If you or someone you know has a gambling problem, help is available at ${url}.`,
    regions: {
      europe: 'Europe',
      'north-america': 'North America',
      'south-america': 'South America',
      asia: 'Asia',
      oceania: 'Oceania',
      africa: 'Africa',
    },
  },

  fr: {
    chooseCountry: 'Choisissez Votre Pays',
    allCountries: '← Tous les Pays',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : 's'} évalué${n === 1 ? '' : 's'} et classé${n === 1 ? '' : 's'}`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Note',
      minDeposit: 'Dépôt Min.',
      bonus: 'Bonus',
    },
    visitCasino: 'Visiter le Casino',
    noLink: 'Aucun lien',
    noCasinos: 'Aucun casino répertorié pour le moment.',
    disclaimer: '18+ | Nouveaux clients uniquement. Conditions générales applicables. Jouez de manière responsable.',
    popup: {
      firstName: 'Prénom',
      email: 'Adresse e-mail',
      joinNow: "S'inscrire",
      legal: "En vous inscrivant, vous acceptez de recevoir des e-mails promotionnels. Désabonnez-vous à tout moment.",
    },
    footerDisclaimer: '18+ | Jouez de manière responsable. MaxWinMania est un site de comparaison de casinos indépendant. Nous n\'exploitons aucun service de jeux d\'argent. Les offres et bonus des casinos sont susceptibles d\'être modifiés — vérifiez toujours le site de l\'opérateur pour les dernières conditions. Le jeu peut créer une dépendance. Jouez de manière responsable et ne misez que ce que vous pouvez vous permettre de perdre.',
    footerDisclaimer2: (url) => `Si vous ou quelqu'un que vous connaissez a un problème de jeu, de l'aide est disponible sur ${url}.`,
    regions: {
      europe: 'Europe',
      'north-america': 'Amérique du Nord',
      'south-america': 'Amérique du Sud',
      asia: 'Asie',
      oceania: 'Océanie',
      africa: 'Afrique',
    },
  },

  es: {
    chooseCountry: 'Elige Tu País',
    allCountries: '← Todos los Países',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : 's'} evaluado${n === 1 ? '' : 's'} y clasificado${n === 1 ? '' : 's'}`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Puntuación',
      minDeposit: 'Depósito Mín.',
      bonus: 'Bono',
    },
    visitCasino: 'Visitar Casino',
    noLink: 'Sin enlace',
    noCasinos: 'Aún no hay casinos en la lista.',
    disclaimer: '18+ | Solo nuevos clientes. Se aplican términos y condiciones. Juega responsablemente.',
    popup: {
      firstName: 'Nombre',
      email: 'Correo electrónico',
      joinNow: 'Unirse ahora',
      legal: 'Al registrarte aceptas recibir correos promocionales. Cancela tu suscripción en cualquier momento.',
    },
    footerDisclaimer: '18+ | Juega con responsabilidad. MaxWinMania es un sitio de comparación de casinos independiente. No operamos ningún servicio de juego. Las ofertas y bonos de los casinos están sujetos a cambios — consulta siempre el sitio del operador para conocer los términos y condiciones más recientes. El juego puede crear adicción. Juega de forma responsable y solo apuesta lo que puedas permitirte perder.',
    footerDisclaimer2: (url) => `Si tú o alguien que conoces tiene un problema con el juego, puedes encontrar ayuda en ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'América del Norte',
      'south-america': 'América del Sur',
      asia: 'Asia',
      oceania: 'Oceanía',
      africa: 'África',
    },
  },

  de: {
    chooseCountry: 'Wähle Dein Land',
    allCountries: '← Alle Länder',
    casinosRanked: (n) => `${n} Casino${n === 1 ? '' : 's'} bewertet und eingestuft`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Bewertung',
      minDeposit: 'Mindesteinzahlung',
      bonus: 'Bonus',
    },
    visitCasino: 'Casino Besuchen',
    noLink: 'Kein Link',
    noCasinos: 'Noch keine Casinos aufgeführt.',
    disclaimer: '18+ | Nur für Neukunden. Es gelten die AGB. Bitte verantwortungsvoll spielen.',
    popup: {
      firstName: 'Vorname',
      email: 'E-Mail-Adresse',
      joinNow: 'Jetzt beitreten',
      legal: 'Mit der Anmeldung stimmst du dem Erhalt von Werbe-E-Mails zu. Jederzeit abmeldbar.',
    },
    footerDisclaimer: '18+ | Spiele verantwortungsvoll. MaxWinMania ist eine unabhängige Casino-Vergleichsseite. Wir betreiben keine Glücksspieldienste. Angebote und Boni können sich ändern — bitte prüfe stets die Webseite des Betreibers für aktuelle Bedingungen.',
    footerDisclaimer2: (url) => `Wenn du oder jemand den du kennst ein Glücksspielproblem hat, findest du Hilfe unter ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Nordamerika',
      'south-america': 'Südamerika',
      asia: 'Asien',
      oceania: 'Ozeanien',
      africa: 'Afrika',
    },
  },

  da: {
    chooseCountry: 'Vælg Dit Land',
    allCountries: '← Alle Lande',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : 'er'} anmeldt og rangeret`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Vurdering',
      minDeposit: 'Min. Indskud',
      bonus: 'Bonus',
    },
    visitCasino: 'Besøg Casino',
    noLink: 'Intet link',
    noCasinos: 'Ingen casinoer opført endnu.',
    disclaimer: '18+ | Kun nye kunder. Vilkår og betingelser gælder. Spil ansvarligt.',
    popup: {
      firstName: 'Fornavn',
      email: 'E-mailadresse',
      joinNow: 'Tilmeld dig',
      legal: 'Ved at tilmelde dig accepterer du at modtage reklame-e-mails. Afmeld til enhver tid.',
    },
    footerDisclaimer: '18+ | Spil ansvarligt. MaxWinMania er et uafhængigt casino-sammenligningssite. Vi driver ingen spilletjenester. Casinotilbud og bonusser kan ændres — tjek altid operatørens hjemmeside for de seneste vilkår.',
    footerDisclaimer2: (url) => `Hvis du eller nogen du kender har et spilleproblem, kan hjælp findes på ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Nordamerika',
      'south-america': 'Sydamerika',
      asia: 'Asien',
      oceania: 'Oceanien',
      africa: 'Afrika',
    },
  },

  sv: {
    chooseCountry: 'Välj Ditt Land',
    allCountries: '← Alla Länder',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : 'n'} granskade och rankade`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Betyg',
      minDeposit: 'Min. Insättning',
      bonus: 'Bonus',
    },
    visitCasino: 'Besök Casino',
    noLink: 'Ingen länk',
    noCasinos: 'Inga casinon listade ännu.',
    disclaimer: '18+ | Endast nya kunder. Villkor gäller. Spela ansvarsfullt.',
    popup: {
      firstName: 'Förnamn',
      email: 'E-postadress',
      joinNow: 'Gå med nu',
      legal: 'Genom att registrera dig godkänner du att ta emot reklamutskick. Avregistrera dig när som helst.',
    },
    footerDisclaimer: '18+ | Spela ansvarsfullt. MaxWinMania är en oberoende casinojämförelsesite. Vi driver inga speltjänster. Erbjudanden och bonusar kan ändras — kontrollera alltid operatörens webbplats för de senaste villkoren.',
    footerDisclaimer2: (url) => `Om du eller någon du känner har ett spelproblem finns hjälp på ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Nordamerika',
      'south-america': 'Sydamerika',
      asia: 'Asien',
      oceania: 'Oceanien',
      africa: 'Afrika',
    },
  },

  nl: {
    chooseCountry: 'Kies Jouw Land',
    allCountries: '← Alle Landen',
    casinosRanked: (n) => `${n} casino${n === 1 ? '' : "'s"} beoordeeld en gerangschikt`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Beoordeling',
      minDeposit: 'Min. Storting',
      bonus: 'Bonus',
    },
    visitCasino: 'Bezoek Casino',
    noLink: 'Geen link',
    noCasinos: 'Nog geen casino\'s vermeld.',
    disclaimer: '18+ | Alleen nieuwe klanten. Algemene voorwaarden zijn van toepassing. Speel verantwoord.',
    popup: {
      firstName: 'Voornaam',
      email: 'E-mailadres',
      joinNow: 'Nu aanmelden',
      legal: 'Door je aan te melden ga je akkoord met het ontvangen van promotionele e-mails. Op elk moment afmelden.',
    },
    footerDisclaimer: '18+ | Speel verantwoord. MaxWinMania is een onafhankelijke casinovergelijkingssite. Wij bieden geen gokdiensten aan. Aanbiedingen en bonussen kunnen wijzigen — controleer altijd de website van de aanbieder voor de laatste voorwaarden.',
    footerDisclaimer2: (url) => `Als jij of iemand die je kent een gokprobleem heeft, is er hulp beschikbaar op ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Noord-Amerika',
      'south-america': 'Zuid-Amerika',
      asia: 'Azië',
      oceania: 'Oceanië',
      africa: 'Afrika',
    },
  },

  it: {
    chooseCountry: 'Scegli Il Tuo Paese',
    allCountries: '← Tutti i Paesi',
    casinosRanked: (n) => `${n} casino recensit${n === 1 ? 'o' : 'i'} e classificat${n === 1 ? 'o' : 'i'}`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Valutazione',
      minDeposit: 'Dep. Minimo',
      bonus: 'Bonus',
    },
    visitCasino: 'Visita il Casino',
    noLink: 'Nessun link',
    noCasinos: 'Nessun casino ancora elencato.',
    disclaimer: '18+ | Solo nuovi clienti. Si applicano termini e condizioni. Gioca responsabilmente.',
    popup: {
      firstName: 'Nome',
      email: 'Indirizzo e-mail',
      joinNow: 'Iscriviti ora',
      legal: 'Registrandoti accetti di ricevere e-mail promozionali. Disiscriviti in qualsiasi momento.',
    },
    footerDisclaimer: '18+ | Gioca responsabilmente. MaxWinMania è un sito di confronto casino indipendente. Non gestiamo servizi di gioco d\'azzardo. Le offerte e i bonus dei casino sono soggetti a modifiche — verifica sempre il sito dell\'operatore per i termini aggiornati. Il gioco può creare dipendenza. Gioca responsabilmente e scommetti solo ciò che puoi permetterti di perdere.',
    footerDisclaimer2: (url) => `Se tu o qualcuno che conosci ha un problema con il gioco d'azzardo, puoi trovare aiuto su ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Nord America',
      'south-america': 'Sud America',
      asia: 'Asia',
      oceania: 'Oceania',
      africa: 'Africa',
    },
  },

  pl: {
    chooseCountry: 'Wybierz Swój Kraj',
    allCountries: '← Wszystkie Kraje',
    casinosRanked: (n) => `${n} kasyno${n === 1 ? '' : n < 5 ? 'a' : 'w'} ocenion${n === 1 ? 'e' : 'ych'} i sklasyfikowan${n === 1 ? 'e' : 'ych'}`,
    tableHeaders: {
      casino: 'Kasyno',
      rating: 'Ocena',
      minDeposit: 'Min. Depozyt',
      bonus: 'Bonus',
    },
    visitCasino: 'Odwiedź Kasyno',
    noLink: 'Brak linku',
    noCasinos: 'Brak kasyn na liście.',
    disclaimer: '18+ | Tylko nowi klienci. Obowiązują regulamin i warunki. Graj odpowiedzialnie.',
    popup: {
      firstName: 'Imię',
      email: 'Adres e-mail',
      joinNow: 'Dołącz teraz',
      legal: 'Rejestrując się, zgadzasz się na otrzymywanie e-maili promocyjnych. Możesz zrezygnować w dowolnym momencie.',
    },
    footerDisclaimer: '18+ | Graj odpowiedzialnie. MaxWinMania to niezależna strona porównująca kasyna. Nie prowadzimy żadnych usług hazardowych. Oferty i bonusy kasyn mogą ulec zmianie — zawsze sprawdzaj stronę operatora w celu uzyskania aktualnych warunków. Hazard może uzależniać. Graj odpowiedzialnie i stawiaj tylko tyle, na ile możesz sobie pozwolić.',
    footerDisclaimer2: (url) => `Jeśli Ty lub ktoś, kogo znasz, ma problem z hazardem, pomoc jest dostępna na ${url}.`,
    regions: {
      europe: 'Europa',
      'north-america': 'Ameryka Północna',
      'south-america': 'Ameryka Południowa',
      asia: 'Azja',
      oceania: 'Oceania',
      africa: 'Afryka',
    },
  },
}

  tr: {
    chooseCountry: 'Ülkenizi Seçin',
    allCountries: '← Tüm Ülkeler',
    casinosRanked: (n) => `${n} casino incelendi ve sıralandı`,
    tableHeaders: {
      casino: 'Casino',
      rating: 'Puan',
      minDeposit: 'Min. Yatırım',
      bonus: 'Bonus',
    },
    visitCasino: 'Casinoyu Ziyaret Et',
    noLink: 'Bağlantı yok',
    noCasinos: 'Henüz casino listelenmedi.',
    disclaimer: '18+ | Yalnızca yeni müşteriler. Şartlar ve koşullar geçerlidir. Sorumlu oynayın.',
    footerDisclaimer: '18+ | Sorumlu oynayın. MaxWinMania bağımsız bir casino karşılaştırma sitesidir. Herhangi bir kumar hizmeti işletmiyoruz. Casino teklifleri ve bonusları değişebilir — güncel şartlar için her zaman operatörün web sitesini kontrol edin. Kumar bağımlılık yapabilir. Sorumlu oynayın ve yalnızca kaybetmeyi göze alabileceğiniz miktarda bahis yapın.',
    footerDisclaimer2: (url) => `Siz veya tanıdığınız birinin kumar sorunu varsa ${url} adresinden yardım alabilirsiniz.`,
    popup: {
      firstName: 'Ad',
      email: 'E-posta Adresi',
      joinNow: 'Hemen Katıl',
      legal: 'Kaydolarak tanıtım e-postaları almayı kabul ediyorsunuz. İstediğiniz zaman abonelikten çıkabilirsiniz.',
    },
    regions: {
      europe: 'Avrupa',
      'north-america': 'Kuzey Amerika',
      'south-america': 'Güney Amerika',
      asia: 'Asya',
      oceania: 'Okyanusya',
      africa: 'Afrika',
    },
  },
}

export function getTranslation(locale?: string): Translation {
  if (!locale) return translations.en
  return translations[locale] ?? translations.en
}
