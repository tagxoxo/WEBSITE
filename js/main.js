/* Millennium Insurance — site interactions, EN/ES language support, scroll reveals */

document.documentElement.classList.add("js");

/* ============================================================
   Translations
   ============================================================ */
const I18N = {
  en: {
    "topbar.serving": "Serving Clarksville, TN since 1995 &middot; Tambi&eacute;n Hablamos Espa&ntilde;ol",
    "nav.home": "Home",
    "nav.personal": "Personal Insurance",
    "nav.business": "Business Insurance",
    "nav.quote": "Get a Quote",

    "hero.kicker": "Independent Agency &middot; Serving Customers Since 1995",
    "hero.title": "Coverage built for the way <em>your life</em> actually works.",
    "hero.lede":
      "Millennium Insurance is a Clarksville, Tennessee agency that has served our neighbors since 1995. We shop top-rated carriers on your behalf, so you get protection that fits your needs and your budget.",
    "hero.espanol": "Tambi&eacute;n Hablamos Espa&ntilde;ol",
    "hero.cta.quote": "Get a Quote",
    "hero.cta.explore": "Explore Personal Insurance",

    "home.what.kicker": "What we do",
    "home.what.title": "One agency, every angle of protection",
    "home.what.sub": "Personal and business coverage &mdash; all under one roof.",
    "home.c1.title": "Personal Insurance",
    "home.c1.body": "Home, auto, renters, umbrella, watercraft, and life &mdash; tailored packages for individuals and families in Tennessee.",
    "home.c1.link": "Explore &rarr;",
    "home.c2.title": "Business Insurance",
    "home.c2.body": "Protect your business, your team, and everything you've built with coverage designed for Tennessee companies.",
    "home.c2.link": "Explore &rarr;",
    "home.c3.title": "Fast, Friendly Quotes",
    "home.c3.body": "Tell us a little about yourself and a licensed Clarksville agent will follow up with real options, not spam.",
    "home.c3.link": "Start now &rarr;",

    "stats.1n": "1995",
    "stats.1l": "Serving customers since",
    "stats.2n": "30+",
    "stats.2l": "Carriers we shop for you",
    "stats.3n": "4,800",
    "stats.3l": "Households protected",
    "stats.4n": "24/7",
    "stats.4l": "Claims support",

    "cta.title": "Insurance that lets you focus on <em>living</em>, not worrying.",
    "cta2.title": "Ready for coverage that <em>works as hard</em> as you do?",

    "pi.title": "Personal Insurance",
    "pi.lede":
      "Life moves quickly, and the right coverage should keep up. Since 1995, our Clarksville agents have built personal insurance packages around your home, your vehicles, and the people who count on you &mdash; at a price that respects your budget.",
    "pi.cta.try": "Try the Interactive Graphic",

    "int.kicker": "Interactive Graphic",
    "int.title": "Take a coverage tour of this home",
    "int.sub": "Click the gold markers to see how each part of your world maps to a coverage in your policy.",
    "panel.kicker0": "Coverage Tour",
    "panel.title0": "Click a marker to begin",
    "panel.body0":
      "Each numbered gold marker highlights a part of everyday life that a Millennium Insurance policy can protect. Select one to learn what the coverage does and why it matters here in Clarksville.",
    "panel.hint": "Tip: use Tab and Enter to explore with a keyboard.",
    "panel.cta": "Get a Quote",

    "spec.kicker": "Our Insurance Specialties",
    "spec.title": "Coverage for every corner of your life",
    "spec.sub": "As an independent agency serving Clarksville since 1995, we compare options from many carriers to match you with the right protection.",
    "spec.link": "Get a quote &rarr;",

    "biz.title": "Business Insurance",
    "biz.lede":
      "From Main Street storefronts to growing companies, we've protected Clarksville businesses since 1995. The right business insurance keeps one bad day &mdash; a lawsuit, a fire, a data breach &mdash; from undoing years of hard work.",
    "biz.int.title": "Take a coverage tour of this business",
    "biz.int.sub": "Click the gold markers to see how each part of a working business maps to a coverage in your policy.",
    "biz.panel.body0":
      "Each numbered gold marker highlights a part of running a business that a Millennium Insurance policy can protect. Select one to learn what the coverage does and why it matters for Clarksville companies.",
    "biz.spec.kicker": "Business Coverages",
    "biz.spec.title": "Protection for every side of your business",
    "biz.spec.sub": "We build coverage packages around how your business actually operates &mdash; and adjust them as you grow.",

    "quote.kicker": "Request a Quote",
    "quote.title": "It only takes a minute to get started",
    "quote.s1t": "Tell us about yourself",
    "quote.s1b": "Fill out the short form and a licensed Clarksville agent will reach out &mdash; usually the same business day.",
    "quote.s2t": "Review your options",
    "quote.s2b": "We shop multiple carriers and walk you through the trade-offs in plain language.",
    "quote.s3t": "Get covered",
    "quote.s3b": "Pick the policy that fits and enjoy the peace of mind that comes with real protection.",
    "quote.visit":
      "Rather talk it through in person? Stop by our office at 100 Riverbend Way, Suite 210, Clarksville, TN 37040, or call <a href=\"tel:9315550142\" style=\"color:#b8952c; font-weight:600;\">(931) 555-0142</a>. Tambi&eacute;n hablamos espa&ntilde;ol.",

    "form.title": "Request an Insurance Quote",
    "form.first": "First name",
    "form.last": "Last name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.zip": "ZIP code",
    "form.coverage": "What would you like a quote for?",
    "opt.home": "Home Insurance",
    "opt.auto": "Auto Insurance",
    "opt.renters": "Renters Insurance",
    "opt.umbrella": "Umbrella Insurance",
    "opt.watercraft": "Watercraft Insurance",
    "opt.life": "Life Insurance",
    "opt.business": "Business Insurance",
    "bopt.liability": "General Liability",
    "bopt.property": "Commercial Property",
    "bopt.auto": "Business Auto",
    "bopt.workers": "Workers' Compensation",
    "bopt.cyber": "Cyber Liability",
    "bopt.prof": "Professional Liability",
    "bopt.other": "Something else",
    "form.notes": "Anything we should know?",
    "form.submit": "Send My Request",
    "form.sending": "Sending&hellip;",
    "form.note": "We'll only use your information to respond to your request.",
    "form.success": "Request received &mdash; we'll be in touch!",
    "form.error": "Something went wrong sending your request. Please try again, or call us at (931) 555-0142.",

    "footer.about":
      "An independent insurance agency proudly serving Clarksville, Tennessee since 1995. Tambi&eacute;n hablamos espa&ntilde;ol.",
    "footer.coverages": "Coverages",
    "footer.company": "Company",
    "footer.visit": "Visit Us",
    "footer.rights": "&copy; 2026 Millennium Insurance. All rights reserved. Serving customers since 1995.",
    "footer.licensed": "Licensed in the State of Tennessee",

    "cov.home": "Home Insurance",
    "cov.auto": "Auto Insurance",
    "cov.renters": "Renters Insurance",
    "cov.umbrella": "Umbrella Insurance",
    "cov.watercraft": "Watercraft Insurance",
    "cov.life": "Life Insurance",
    "cov.business": "Business Insurance",
  },

  es: {
    "topbar.serving": "Sirviendo a Clarksville, TN desde 1995 &middot; We Also Speak English",
    "nav.home": "Inicio",
    "nav.personal": "Seguros Personales",
    "nav.business": "Seguros de Negocios",
    "nav.quote": "Cotizar",

    "hero.kicker": "Agencia Independiente &middot; Sirviendo Clientes Desde 1995",
    "hero.title": "Cobertura dise\u00f1ada para la forma en que <em>su vida</em> realmente funciona.",
    "hero.lede":
      "Millennium Insurance es una agencia de Clarksville, Tennessee que ha servido a nuestra comunidad desde 1995. Comparamos aseguradoras de primer nivel por usted, para que obtenga protecci\u00f3n que se ajuste a sus necesidades y a su presupuesto.",
    "hero.espanol": "Tambi\u00e9n Hablamos Espa\u00f1ol",
    "hero.cta.quote": "Cotizar Ahora",
    "hero.cta.explore": "Explorar Seguros Personales",

    "home.what.kicker": "Lo que hacemos",
    "home.what.title": "Una agencia, protecci\u00f3n desde todos los \u00e1ngulos",
    "home.what.sub": "Cobertura personal y de negocios \u2014 todo bajo un mismo techo.",
    "home.c1.title": "Seguros Personales",
    "home.c1.body": "Hogar, auto, inquilinos, sombrilla, embarcaciones y vida \u2014 paquetes a la medida para individuos y familias en Tennessee.",
    "home.c1.link": "Explorar &rarr;",
    "home.c2.title": "Seguros de Negocios",
    "home.c2.body": "Proteja su negocio, su equipo y todo lo que ha construido con cobertura dise\u00f1ada para empresas de Tennessee.",
    "home.c2.link": "Explorar &rarr;",
    "home.c3.title": "Cotizaciones R\u00e1pidas y Amables",
    "home.c3.body": "Cu\u00e9ntenos un poco sobre usted y un agente licenciado de Clarksville le responder\u00e1 con opciones reales, no spam.",
    "home.c3.link": "Comenzar &rarr;",

    "stats.1n": "1995",
    "stats.1l": "Sirviendo clientes desde",
    "stats.2n": "30+",
    "stats.2l": "Aseguradoras que comparamos",
    "stats.3n": "4,800",
    "stats.3l": "Hogares protegidos",
    "stats.4n": "24/7",
    "stats.4l": "Apoyo con reclamos",

    "cta.title": "Seguros que le permiten enfocarse en <em>vivir</em>, no en preocuparse.",
    "cta2.title": "\u00bfListo para una cobertura que <em>trabaje tan duro</em> como usted?",

    "pi.title": "Seguros Personales",
    "pi.lede":
      "La vida avanza r\u00e1pido, y la cobertura correcta debe mantener el paso. Desde 1995, nuestros agentes de Clarksville han creado paquetes de seguros personales alrededor de su hogar, sus veh\u00edculos y las personas que dependen de usted \u2014 a un precio que respeta su presupuesto.",
    "pi.cta.try": "Probar el Gr\u00e1fico Interactivo",

    "int.kicker": "Gr\u00e1fico Interactivo",
    "int.title": "Haga un recorrido de cobertura por este hogar",
    "int.sub": "Haga clic en los marcadores dorados para ver c\u00f3mo cada parte de su mundo se conecta con una cobertura de su p\u00f3liza.",
    "panel.kicker0": "Recorrido de Cobertura",
    "panel.title0": "Haga clic en un marcador para comenzar",
    "panel.body0":
      "Cada marcador dorado numerado destaca una parte de la vida diaria que una p\u00f3liza de Millennium Insurance puede proteger. Seleccione uno para conocer qu\u00e9 hace la cobertura y por qu\u00e9 importa aqu\u00ed en Clarksville.",
    "panel.hint": "Consejo: use Tab y Enter para explorar con el teclado.",
    "panel.cta": "Cotizar Ahora",

    "spec.kicker": "Nuestras Especialidades",
    "spec.title": "Cobertura para cada rinc\u00f3n de su vida",
    "spec.sub": "Como agencia independiente sirviendo a Clarksville desde 1995, comparamos opciones de muchas aseguradoras para encontrar la protecci\u00f3n adecuada para usted.",
    "spec.link": "Cotizar &rarr;",

    "biz.title": "Seguros de Negocios",
    "biz.lede":
      "Desde tiendas locales hasta empresas en crecimiento, hemos protegido a los negocios de Clarksville desde 1995. El seguro de negocios correcto evita que un mal d\u00eda \u2014 una demanda, un incendio, una filtraci\u00f3n de datos \u2014 borre a\u00f1os de trabajo duro.",
    "biz.int.title": "Haga un recorrido de cobertura por este negocio",
    "biz.int.sub": "Haga clic en los marcadores dorados para ver c\u00f3mo cada parte de un negocio en marcha se conecta con una cobertura de su p\u00f3liza.",
    "biz.panel.body0":
      "Cada marcador dorado numerado destaca una parte de administrar un negocio que una p\u00f3liza de Millennium Insurance puede proteger. Seleccione uno para conocer qu\u00e9 hace la cobertura y por qu\u00e9 importa para las empresas de Clarksville.",
    "biz.spec.kicker": "Coberturas de Negocios",
    "biz.spec.title": "Protecci\u00f3n para cada aspecto de su negocio",
    "biz.spec.sub": "Creamos paquetes de cobertura seg\u00fan c\u00f3mo opera realmente su negocio \u2014 y los ajustamos a medida que crece.",

    "quote.kicker": "Solicite una Cotizaci\u00f3n",
    "quote.title": "Solo toma un minuto comenzar",
    "quote.s1t": "Cu\u00e9ntenos sobre usted",
    "quote.s1b": "Complete el formulario corto y un agente licenciado de Clarksville se comunicar\u00e1 \u2014 generalmente el mismo d\u00eda h\u00e1bil.",
    "quote.s2t": "Revise sus opciones",
    "quote.s2b": "Comparamos m\u00faltiples aseguradoras y le explicamos las diferencias en lenguaje claro.",
    "quote.s3t": "Obtenga su cobertura",
    "quote.s3b": "Elija la p\u00f3liza que le convenga y disfrute la tranquilidad que viene con protecci\u00f3n real.",
    "quote.visit":
      "\u00bfPrefiere conversarlo en persona? Vis\u00edtenos en 100 Riverbend Way, Suite 210, Clarksville, TN 37040, o llame al <a href=\"tel:9315550142\" style=\"color:#b8952c; font-weight:600;\">(931) 555-0142</a>. Nuestro equipo habla espa\u00f1ol.",

    "form.title": "Solicitar una Cotizaci\u00f3n de Seguro",
    "form.first": "Nombre",
    "form.last": "Apellido",
    "form.email": "Correo electr\u00f3nico",
    "form.phone": "Tel\u00e9fono",
    "form.zip": "C\u00f3digo postal",
    "form.coverage": "\u00bfQu\u00e9 le gustar\u00eda cotizar?",
    "opt.home": "Seguro de Hogar",
    "opt.auto": "Seguro de Auto",
    "opt.renters": "Seguro de Inquilinos",
    "opt.umbrella": "Seguro Sombrilla",
    "opt.watercraft": "Seguro de Embarcaciones",
    "opt.life": "Seguro de Vida",
    "opt.business": "Seguro de Negocios",
    "bopt.liability": "Responsabilidad General",
    "bopt.property": "Propiedad Comercial",
    "bopt.auto": "Auto Comercial",
    "bopt.workers": "Compensaci\u00f3n Laboral",
    "bopt.cyber": "Responsabilidad Cibern\u00e9tica",
    "bopt.prof": "Responsabilidad Profesional",
    "bopt.other": "Otra cosa",
    "form.notes": "\u00bfAlgo que debamos saber?",
    "form.submit": "Enviar Mi Solicitud",
    "form.sending": "Enviando&hellip;",
    "form.note": "Solo usaremos su informaci\u00f3n para responder a su solicitud.",
    "form.success": "\u00a1Solicitud recibida \u2014 nos comunicaremos pronto!",
    "form.error": "Hubo un problema al enviar su solicitud. Int\u00e9ntelo de nuevo o ll\u00e1menos al (931) 555-0142.",

    "footer.about":
      "Una agencia de seguros independiente sirviendo con orgullo a Clarksville, Tennessee desde 1995. Tambi\u00e9n hablamos espa\u00f1ol.",
    "footer.coverages": "Coberturas",
    "footer.company": "Compa\u00f1\u00eda",
    "footer.visit": "Vis\u00edtenos",
    "footer.rights": "&copy; 2026 Millennium Insurance. Todos los derechos reservados. Sirviendo clientes desde 1995.",
    "footer.licensed": "Con licencia en el Estado de Tennessee",

    "cov.home": "Seguro de Hogar",
    "cov.auto": "Seguro de Auto",
    "cov.renters": "Seguro de Inquilinos",
    "cov.umbrella": "Seguro Sombrilla",
    "cov.watercraft": "Seguro de Embarcaciones",
    "cov.life": "Seguro de Vida",
    "cov.business": "Seguro de Negocios",
  },
};

/* ============================================================
   Interactive coverage graphic data (bilingual)
   ============================================================ */
const COVERAGES = {
  /* ---------- Personal (home scene) ---------- */
  home: {
    en: {
      kicker: "Marker 1 · The House",
      title: "Home Insurance",
      body: "Your home is likely your largest investment. Home insurance helps rebuild or repair after fire, storms, theft, and more — and protects you if a guest is injured on your property.",
      points: [
        "Dwelling and roof repair or rebuild",
        "Personal property inside the home",
        "Personal liability protection",
        "Loss of use / temporary housing",
      ],
    },
    es: {
      kicker: "Marcador 1 · La Casa",
      title: "Seguro de Hogar",
      body: "Su hogar es probablemente su mayor inversión. El seguro de hogar ayuda a reconstruir o reparar después de incendios, tormentas, robos y más — y lo protege si un invitado se lesiona en su propiedad.",
      points: [
        "Reparación o reconstrucción de la vivienda y el techo",
        "Bienes personales dentro del hogar",
        "Protección de responsabilidad personal",
        "Pérdida de uso / vivienda temporal",
      ],
    },
  },
  auto: {
    en: {
      kicker: "Marker 2 · The Driveway",
      title: "Auto Insurance",
      body: "Tennessee requires liability coverage, but the right auto policy goes further — protecting your vehicle, your passengers, and your finances after an accident.",
      points: [
        "Liability for injury and property damage",
        "Collision and comprehensive coverage",
        "Uninsured / underinsured motorist",
        "Roadside assistance and rental options",
      ],
    },
    es: {
      kicker: "Marcador 2 · La Entrada",
      title: "Seguro de Auto",
      body: "Tennessee exige cobertura de responsabilidad, pero la póliza de auto correcta va más allá — protegiendo su vehículo, sus pasajeros y sus finanzas después de un accidente.",
      points: [
        "Responsabilidad por lesiones y daños a la propiedad",
        "Cobertura de colisión y cobertura amplia",
        "Conductor sin seguro / con seguro insuficiente",
        "Asistencia en carretera y opciones de auto de alquiler",
      ],
    },
  },
  renters: {
    en: {
      kicker: "Marker 3 · Inside the Home",
      title: "Renters Insurance",
      body: "Your landlord's policy covers the building — not your belongings. Renters insurance protects everything you own inside, plus your liability, for just a few dollars a month.",
      points: [
        "Furniture, electronics, and clothing",
        "Theft and fire protection",
        "Personal liability coverage",
        "Temporary housing if your unit is damaged",
      ],
    },
    es: {
      kicker: "Marcador 3 · Dentro del Hogar",
      title: "Seguro de Inquilinos",
      body: "La póliza de su arrendador cubre el edificio — no sus pertenencias. El seguro de inquilinos protege todo lo que posee adentro, más su responsabilidad, por solo unos dólares al mes.",
      points: [
        "Muebles, electrónicos y ropa",
        "Protección contra robo e incendio",
        "Cobertura de responsabilidad personal",
        "Vivienda temporal si su unidad sufre daños",
      ],
    },
  },
  watercraft: {
    en: {
      kicker: "Marker 4 · The Boat",
      title: "Watercraft Insurance",
      body: "Weekends on the Cumberland River deserve worry-free coverage. Watercraft insurance protects your boat on the water, on the trailer, and in storage.",
      points: [
        "Hull and motor damage",
        "Liability on the water",
        "Trailer and equipment coverage",
        "Uninsured boater protection",
      ],
    },
    es: {
      kicker: "Marcador 4 · El Bote",
      title: "Seguro de Embarcaciones",
      body: "Los fines de semana en el río Cumberland merecen cobertura sin preocupaciones. El seguro de embarcaciones protege su bote en el agua, en el remolque y en almacenamiento.",
      points: [
        "Daños al casco y al motor",
        "Responsabilidad en el agua",
        "Cobertura de remolque y equipo",
        "Protección contra navegantes sin seguro",
      ],
    },
  },
  life: {
    en: {
      kicker: "Marker 5 · The Family",
      title: "Life Insurance",
      body: "Life insurance isn't about you — it's about the people who depend on you. Term and whole life options help ensure your family's plans stay on track no matter what.",
      points: [
        "Income replacement for your family",
        "Mortgage and debt payoff",
        "College funding for children",
        "Affordable term and permanent options",
      ],
    },
    es: {
      kicker: "Marcador 5 · La Familia",
      title: "Seguro de Vida",
      body: "El seguro de vida no se trata de usted — se trata de las personas que dependen de usted. Las opciones de vida a término y vida entera ayudan a que los planes de su familia sigan adelante pase lo que pase.",
      points: [
        "Reemplazo de ingresos para su familia",
        "Pago de hipoteca y deudas",
        "Fondos universitarios para los hijos",
        "Opciones accesibles a término y permanentes",
      ],
    },
  },
  umbrella: {
    en: {
      kicker: "Marker 6 · Over Everything",
      title: "Umbrella Insurance",
      body: "An umbrella policy adds an extra layer of liability protection above your home and auto limits — often a million dollars or more for less than you'd expect.",
      points: [
        "Extends home and auto liability limits",
        "Protects savings and future earnings",
        "Covers legal defense costs",
        "Surprisingly affordable peace of mind",
      ],
    },
    es: {
      kicker: "Marcador 6 · Sobre Todo lo Demás",
      title: "Seguro Sombrilla",
      body: "Una póliza sombrilla añade una capa adicional de protección de responsabilidad por encima de los límites de su hogar y auto — a menudo un millón de dólares o más por menos de lo que imagina.",
      points: [
        "Extiende los límites de responsabilidad de hogar y auto",
        "Protege sus ahorros e ingresos futuros",
        "Cubre costos de defensa legal",
        "Tranquilidad sorprendentemente accesible",
      ],
    },
  },

  /* ---------- Business (storefront scene) ---------- */
  bizProperty: {
    en: {
      kicker: "Marker 1 · The Building",
      title: "Commercial Property",
      body: "Your building, equipment, and inventory are the backbone of your business. Commercial property insurance helps you repair, replace, and reopen after fire, storms, or theft.",
      points: [
        "Building, signage, and fixtures",
        "Equipment and inventory",
        "Business interruption income",
        "Fire, storm, and theft protection",
      ],
    },
    es: {
      kicker: "Marcador 1 · El Edificio",
      title: "Propiedad Comercial",
      body: "Su edificio, equipo e inventario son la columna vertebral de su negocio. El seguro de propiedad comercial le ayuda a reparar, reemplazar y reabrir después de incendios, tormentas o robos.",
      points: [
        "Edificio, letreros e instalaciones",
        "Equipo e inventario",
        "Ingresos por interrupción del negocio",
        "Protección contra incendio, tormenta y robo",
      ],
    },
  },
  bizLiability: {
    en: {
      kicker: "Marker 2 · The Front Door",
      title: "General Liability",
      body: "Every customer who walks through your door brings opportunity — and risk. General liability covers injuries on your premises and damage your operations cause to others.",
      points: [
        "Customer slip-and-fall injuries",
        "Damage to others' property",
        "Products and completed operations",
        "Legal defense costs",
      ],
    },
    es: {
      kicker: "Marcador 2 · La Puerta Principal",
      title: "Responsabilidad General",
      body: "Cada cliente que cruza su puerta trae oportunidades — y riesgos. La responsabilidad general cubre lesiones en su local y daños que sus operaciones causen a terceros.",
      points: [
        "Lesiones de clientes por resbalones y caídas",
        "Daños a la propiedad de terceros",
        "Productos y operaciones completadas",
        "Costos de defensa legal",
      ],
    },
  },
  bizAuto: {
    en: {
      kicker: "Marker 3 · The Van",
      title: "Business Auto",
      body: "Whether it's one delivery van or a whole fleet, vehicles used for work need their own coverage — personal auto policies typically exclude business use.",
      points: [
        "Company-owned vehicles and fleets",
        "Liability for work-related accidents",
        "Employees driving for the business",
        "Tools and equipment in transit",
      ],
    },
    es: {
      kicker: "Marcador 3 · La Camioneta",
      title: "Auto Comercial",
      body: "Ya sea una camioneta de reparto o una flota completa, los vehículos de trabajo necesitan su propia cobertura — las pólizas de auto personales normalmente excluyen el uso comercial.",
      points: [
        "Vehículos y flotas de la empresa",
        "Responsabilidad por accidentes de trabajo",
        "Empleados que conducen para el negocio",
        "Herramientas y equipo en tránsito",
      ],
    },
  },
  bizWorkers: {
    en: {
      kicker: "Marker 4 · The Crew",
      title: "Workers' Compensation",
      body: "Your team keeps the business running. Workers' comp covers medical care and lost wages if an employee is hurt on the job — and helps you meet Tennessee requirements.",
      points: [
        "Medical care for workplace injuries",
        "Lost wage replacement",
        "Employer liability protection",
        "Helps meet Tennessee requirements",
      ],
    },
    es: {
      kicker: "Marcador 4 · El Equipo",
      title: "Compensación Laboral",
      body: "Su equipo mantiene el negocio en marcha. La compensación laboral cubre atención médica y salarios perdidos si un empleado se lesiona en el trabajo — y le ayuda a cumplir los requisitos de Tennessee.",
      points: [
        "Atención médica por lesiones laborales",
        "Reemplazo de salarios perdidos",
        "Protección de responsabilidad del empleador",
        "Ayuda a cumplir los requisitos de Tennessee",
      ],
    },
  },
  bizCyber: {
    en: {
      kicker: "Marker 5 · The Office",
      title: "Cyber Liability",
      body: "If you store customer information or take payments online, a data breach can be devastating. Cyber liability helps cover response costs, notifications, and recovery.",
      points: [
        "Data breach response costs",
        "Customer notification and credit monitoring",
        "Ransomware and cyber extortion response",
        "Liability from compromised data",
      ],
    },
    es: {
      kicker: "Marcador 5 · La Oficina",
      title: "Responsabilidad Cibernética",
      body: "Si almacena información de clientes o recibe pagos en línea, una filtración de datos puede ser devastadora. La responsabilidad cibernética ayuda a cubrir costos de respuesta, notificaciones y recuperación.",
      points: [
        "Costos de respuesta a filtraciones de datos",
        "Notificación a clientes y monitoreo de crédito",
        "Respuesta a ransomware y extorsión cibernética",
        "Responsabilidad por datos comprometidos",
      ],
    },
  },
  bizProfessional: {
    en: {
      kicker: "Marker 6 · The Advisor",
      title: "Professional Liability",
      body: "If clients pay you for expertise, advice, or services, professional liability (E&O) protects you when a mistake — or an accusation of one — leads to a claim.",
      points: [
        "Errors and omissions in your work",
        "Negligence claims from clients",
        "Legal defense costs",
        "Contract and service disputes",
      ],
    },
    es: {
      kicker: "Marcador 6 · El Asesor",
      title: "Responsabilidad Profesional",
      body: "Si los clientes le pagan por experiencia, asesoría o servicios, la responsabilidad profesional (E&O) lo protege cuando un error — o una acusación de uno — genera un reclamo.",
      points: [
        "Errores y omisiones en su trabajo",
        "Reclamos de negligencia de clientes",
        "Costos de defensa legal",
        "Disputas de contratos y servicios",
      ],
    },
  },
  bizUmbrella: {
    en: {
      kicker: "Marker 7 · Over the Business",
      title: "Commercial Umbrella",
      body: "One large claim can exceed your policy limits. A commercial umbrella adds an extra layer of liability protection over your other business coverages.",
      points: [
        "Extends liability limits across policies",
        "Protects business assets from large claims",
        "Covers legal defense beyond base limits",
        "Cost-effective added security",
      ],
    },
    es: {
      kicker: "Marcador 7 · Sobre el Negocio",
      title: "Sombrilla Comercial",
      body: "Un solo reclamo grande puede superar los límites de su póliza. Una sombrilla comercial añade una capa adicional de protección de responsabilidad sobre sus otras coberturas de negocio.",
      points: [
        "Extiende los límites de responsabilidad entre pólizas",
        "Protege los activos del negocio contra reclamos grandes",
        "Cubre defensa legal más allá de los límites base",
        "Seguridad adicional a buen costo",
      ],
    },
  },
};

/* ============================================================
   Specialties grid data (bilingual)
   ============================================================ */
const SPECIALTY_SETS = {
  personal: [
    {
      icon: "\u2302",
      en: { name: "Home Insurance", desc: "Protect the place you call home, inside and out." },
      es: { name: "Seguro de Hogar", desc: "Proteja el lugar que llama hogar, por dentro y por fuera." },
    },
    {
      icon: "\u26FD",
      en: { name: "Auto Insurance", desc: "Coverage for daily drivers, commuters, and everything between." },
      es: { name: "Seguro de Auto", desc: "Cobertura para conductores diarios y todo lo demás." },
    },
    {
      icon: "\u{1F511}",
      en: { name: "Renters Insurance", desc: "Your landlord covers the building — this covers your life inside it." },
      es: { name: "Seguro de Inquilinos", desc: "Su arrendador cubre el edificio — esto cubre su vida adentro." },
    },
    {
      icon: "\u2602",
      en: { name: "Umbrella Insurance", desc: "Extra liability protection above your other policies." },
      es: { name: "Seguro Sombrilla", desc: "Protección adicional de responsabilidad sobre sus otras pólizas." },
    },
    {
      icon: "\u2693",
      en: { name: "Watercraft Insurance", desc: "Boats, jet skis, and pontoons on Tennessee waters." },
      es: { name: "Seguro de Embarcaciones", desc: "Botes, motos acuáticas y pontones en las aguas de Tennessee." },
    },
    {
      icon: "\u2665",
      en: { name: "Life Insurance", desc: "Security for the people who count on you most." },
      es: { name: "Seguro de Vida", desc: "Seguridad para las personas que más dependen de usted." },
    },
  ],
  business: [
    {
      icon: "\u2616",
      en: { name: "Commercial Property", desc: "Your building, equipment, and inventory — protected and rebuildable." },
      es: { name: "Propiedad Comercial", desc: "Su edificio, equipo e inventario — protegidos y recuperables." },
    },
    {
      icon: "\u2696",
      en: { name: "General Liability", desc: "Covers injuries on your premises and damage your work causes to others." },
      es: { name: "Responsabilidad General", desc: "Cubre lesiones en su local y daños que su trabajo cause a terceros." },
    },
    {
      icon: "\u26FD",
      en: { name: "Business Auto", desc: "Company vehicles and fleets, covered for work use." },
      es: { name: "Auto Comercial", desc: "Vehículos y flotas de la empresa, cubiertos para uso laboral." },
    },
    {
      icon: "\u2695",
      en: { name: "Workers' Compensation", desc: "Care for your team when they're hurt on the job." },
      es: { name: "Compensación Laboral", desc: "Cuidado para su equipo cuando se lesionan en el trabajo." },
    },
    {
      icon: "\u26A1",
      en: { name: "Cyber Liability", desc: "Response and recovery when data breaches strike." },
      es: { name: "Responsabilidad Cibernética", desc: "Respuesta y recuperación ante filtraciones de datos." },
    },
    {
      icon: "\u270E",
      en: { name: "Professional Liability", desc: "E&O protection when your advice or services are challenged." },
      es: { name: "Responsabilidad Profesional", desc: "Protección E&O cuando cuestionan su asesoría o servicios." },
    },
    {
      icon: "\u2602",
      en: { name: "Commercial Umbrella", desc: "An extra layer of liability above your business policies." },
      es: { name: "Sombrilla Comercial", desc: "Una capa extra de responsabilidad sobre sus pólizas de negocio." },
    },
  ],
};

/* ============================================================
   Language state
   ============================================================ */
let lang = localStorage.getItem("mi-lang") || "en";
let currentCoverage = null;

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || "";
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.textContent = lang === "en" ? "Español" : "English";
    btn.setAttribute(
      "aria-label",
      lang === "en" ? "Ver este sitio en español" : "View this site in English"
    );
  });
  renderSpecialties();
  renderPanel();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    lang = lang === "en" ? "es" : "en";
    localStorage.setItem("mi-lang", lang);
    applyLang();
  });
});

/* ---------- Mobile nav ---------- */
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}

/* ---------- Interactive coverage panel ---------- */
const panelKicker = document.getElementById("panelKicker");
const panelTitle = document.getElementById("panelTitle");
const panelBody = document.getElementById("panelBody");
const panelPoints = document.getElementById("panelPoints");
const panelCta = document.getElementById("panelCta");
const hotspots = document.querySelectorAll(".hotspot");

function renderPanel() {
  if (!panelTitle) return;
  if (!currentCoverage) return; // intro text handled via data-i18n
  const data = COVERAGES[currentCoverage][lang];
  panelKicker.textContent = data.kicker;
  panelTitle.textContent = data.title;
  panelBody.textContent = data.body;
  panelPoints.innerHTML = data.points.map((p) => `<li>${p}</li>`).join("");
  panelPoints.hidden = false;
  panelCta.hidden = false;
  panelCta.innerHTML = t("panel.cta");
}

hotspots.forEach((spot) => {
  const key = spot.dataset.key;
  const select = () => {
    hotspots.forEach((h) => h.classList.remove("active"));
    spot.classList.add("active");
    currentCoverage = key;
    renderPanel();
  };
  spot.addEventListener("click", select);
  spot.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select();
    }
  });
});

/* ---------- Specialties grid ---------- */
function renderSpecialties() {
  const grid = document.getElementById("specialtyCards");
  if (!grid) return;
  const set = SPECIALTY_SETS[grid.dataset.set] || SPECIALTY_SETS.personal;
  grid.innerHTML = set
    .map((s) => {
      const d = s[lang] || s.en;
      return `
    <a class="card" href="#quote">
      <div class="card-icon">${s.icon}</div>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <span class="card-link">${t("spec.link")}</span>
    </a>`;
    })
    .join("");
}

/* ---------- Quote form (Formspree AJAX) ---------- */
const form = document.getElementById("quoteForm");
if (form) {
  const btn = form.querySelector("button[type=submit]");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = t("form.sending");
    status.hidden = true;
    status.classList.remove("is-error", "is-success");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        btn.innerHTML = t("form.success");
        status.innerHTML = t("form.success");
        status.classList.add("is-success");
        status.hidden = false;
        // Button stays disabled to prevent duplicate submissions.
      } else {
        throw new Error("formspree-error");
      }
    } catch {
      btn.disabled = false;
      btn.innerHTML = t("form.submit");
      status.innerHTML = t("form.error");
      status.classList.add("is-error");
      status.hidden = false;
    }
  });
}

/* ---------- Scroll-triggered reveal animations ---------- */
const revealEls = document.querySelectorAll("section > .container, .stats-band > .container");
revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

/* ---------- Init ---------- */
applyLang();
