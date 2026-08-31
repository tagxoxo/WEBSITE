/* Millennium Insurance — site interactions, EN/ES language support, scroll animations */

/* ============================================================
   Translations
   ============================================================ */
const I18N = {
  en: {
    "nav.home": "Home",
    "nav.personal": "Personal Insurance",
    "nav.highrisk": "SR-22 & High-Risk",
    "nav.sr22": "SR-22 Bond",
    "nav.coverageforall": "Coverage for All",
    "nav.lowdown": "Low Down Payment Auto",
    "nav.business": "Business Insurance",
    "nav.quote": "Get a Quote",

    "hero.title": "Protecting Clarksville families for over <em>30 years.</em>",
    "hero.lede":
      "Independent agency since 1995. We shop the best rates and coverage from top insurance companies so you don't have to.",
    "hero.espanol": "Tambi&eacute;n Hablamos Espa&ntilde;ol",
    "hero.cta.quote": "Get a Quote",
    "hero.cta.call": "Call (931) 647-2434",
    "landing.headline1": "Insurance for Clarksville.",
    "landing.headline2": "Coverage for real life.",
    "landing.address": "313 Dover Rd, Clarksville, TN 37042",
    "landing.officeLabel": "OUR CLARKSVILLE OFFICE",
    "landing.coverageLine": "Auto \u2022 Home \u2022 Renters \u2022 Business",
    "landing.b1": "Local Clarksville agency",
    "landing.b2": "Personal service from real agents",
    "landing.b3": "Come visit us in person",
    "landing.b4": "English & Espa\u00f1ol",
    "landing.phoneCta":
      "Need a quote ASAP? Call <a href=\"tel:9316472434\">(931) 647-2434</a>",
    "cta.smsConsent":
      "By providing your phone number and clicking submit, you agree to receive non-marketing and marketing text messages from Millennium Insurance, including automated communications. Consent is not a condition of any purchase. Msg &amp; data rates may apply. Msg frequency varies. Reply STOP to opt out, HELP for help. View our <a href=\"privacy-policy.html\">Privacy Policy</a> for details.",
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
    "stats.2n": "10+",
    "stats.2l": "Carriers shop for you",
    "stats.3n": "4,800+",
    "stats.3l": "Households protected",
    "stats.4n": "100%",
    "stats.4l": "Local service",

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
      "Rather talk it through in person? Stop by our office at 313 Dover Rd, Clarksville, TN 37042, or call <a href=\"tel:9316472434\">(931) 647-2434</a>. Tambi&eacute;n hablamos espa&ntilde;ol.",

    "form.title": "Request an Insurance Quote",
    "form.first": "First name",
    "form.last": "Last name",
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
    "form.error": "Something went wrong sending your request. Please try again, or call us at (931) 647-2434.",

    "footer.about":
      "An independent insurance agency proudly serving Clarksville, Tennessee since 1995. Tambi&eacute;n hablamos espa&ntilde;ol.",
    "footer.coverages": "Coverages",
    "footer.company": "Company",
    "footer.visit": "Visit Us",
    "footer.rights": "&copy; 2026 Millennium Insurance. All rights reserved. Serving customers since 1995.",
    "footer.licensed": "Licensed in the State of Tennessee",
    "footer.privacy": "Privacy Policy",

    "cov.home": "Home Insurance",
    "cov.auto": "Auto Insurance",
    "cov.renters": "Renters Insurance",
    "cov.umbrella": "Umbrella Insurance",
    "cov.watercraft": "Watercraft Insurance",
    "cov.life": "Life Insurance",
    "cov.business": "Business Insurance",

    "sr22.pageTitle": "SR-22 Bond Clarksville, TN | Millennium Insurance",
    "sr22.meta":
      "Need an SR-22 in Clarksville? Millennium Insurance files same-day. Serving high-risk drivers since 1995. Call (931) 647-2434. Tambi\u00e9n hablamos espa\u00f1ol.",
    "sr22.title": "SR-22 Bond in Clarksville, TN",
    "sr22.lede":
      "Need an SR-22 filing fast? Millennium Insurance helps Clarksville drivers get back on the road with same-day filing and real agents who know Tennessee requirements.",
    "sr22.h2.what": "What is an SR-22?",
    "sr22.p.what":
      "An SR-22 is not insurance itself &mdash; it is a certificate your insurer files with the state to prove you carry the minimum liability coverage Tennessee requires. If the state asks for an SR-22, you need an active auto policy and a timely filing to keep or restore your driving privileges.",
    "sr22.h2.when": "When Tennessee requires an SR-22",
    "sr22.p.whenIntro": "Common reasons drivers in Clarksville need an SR-22 include:",
    "sr22.li.dui": "DUI or DWI conviction",
    "sr22.li.reckless": "Reckless driving or serious moving violations",
    "sr22.li.suspension": "License suspension or reinstatement after a lapse",
    "sr22.li.uninsured": "At-fault accident while uninsured",
    "sr22.h2.filing": "Same-day filing at our Clarksville office",
    "sr22.p.filing":
      "When you bind a qualifying policy with Millennium Insurance, we file your SR-22 with the state the same business day &mdash; no waiting on mail or wondering if it went through. Stop by 313 Dover Rd or call and we will walk you through exactly what you need.",
    "sr22.h2.duration": "How long you will need it",
    "sr22.p.duration":
      "In Tennessee, SR-22 requirements typically last three to five years, depending on your situation. You must keep continuous coverage the entire time. A lapse can reset the clock and extend the requirement.",
    "sr22.callout.cost":
      "Most drivers are surprised: the SR-22 filing fee is usually modest, and the overall cost is often lower than people expect when they work with an agency that specializes in high-risk auto.",
    "sr22.h2.bilingual": "Local help, in English and Spanish",
    "sr22.p.bilingual":
      "Our bilingual agents have helped Clarksville drivers with SR-22 filings since 1995. We explain the process in plain language, shop multiple carriers, and stay with you until your filing is confirmed.",
    "sr22.quote.title": "Get your SR-22 bond quote today",
    "sr22.notes.placeholder": "SR-22 filing needed",

    "cfa.pageTitle": "Coverage for All Clarksville, TN | Millennium Insurance",
    "cfa.meta":
      "Auto, home, renters, and business insurance for every Clarksville family. Millennium Insurance finds coverage for all situations. Call (931) 647-2434.",
    "cfa.title": "Coverage for All in Clarksville, TN",
    "cfa.lede":
      "Whatever your situation, Millennium Insurance helps Clarksville families and drivers find the right protection &mdash; auto, home, renters, and business.",
    "cfa.h2.who": "Insurance for every situation",
    "cfa.p.whoIntro":
      "Clean record or complicated history, first-time buyer or longtime homeowner &mdash; we work with people across Clarksville and the Fort Campbell area. Common reasons clients come to us include:",
    "cfa.li.auto": "Auto insurance for every driver and household",
    "cfa.li.home": "Home and renters coverage",
    "cfa.li.business": "Business insurance for local companies",
    "cfa.li.tickets": "Tickets, accidents, or a gap in coverage",
    "cfa.li.budget": "Flexible payment options on a tight budget",
    "cfa.li.new": "New drivers, military families, and first-time buyers",
    "cfa.h2.specialize": "Real agents, not a call center",
    "cfa.p.specialize":
      "When you call Millennium Insurance, a licensed Clarksville agent listens to your full picture &mdash; not just a checkbox on a website. We explain your options in plain language and help you understand what you are buying.",
    "cfa.h2.shop": "We shop multiple carriers for you",
    "cfa.p.shop":
      "As an independent agency, we compare rates and coverage from many carriers &mdash; not just one company's menu. That means better odds of finding a policy that fits your life and your budget.",
    "cfa.callout.since":
      "Since 1995, we have helped thousands of Clarksville-area households get covered. No matter where you are starting from, coverage for all starts with a conversation.",
    "cfa.h2.bilingual": "English and Spanish-speaking agents",
    "cfa.p.bilingual":
      "Tambi\u00e9n hablamos espa\u00f1ol. Visit us at 313 Dover Rd, Clarksville, TN 37042, or call (931) 647-2434 to speak with an agent who will treat your situation with respect.",
    "cfa.quote.title": "Find coverage that fits your life",
    "cfa.notes.placeholder": "Tell us what you need covered",

    "ldp.pageTitle": "Low Down Payment Auto Insurance Clarksville, TN | Millennium Insurance",
    "ldp.meta":
      "Need car insurance with a low or no down payment in Clarksville? Millennium Insurance offers flexible payment options. Call (931) 647-2434.",
    "ldp.title": "Low Down Payment Auto Insurance in Clarksville, TN",
    "ldp.lede":
      "Need to get covered today without a big upfront payment? Millennium Insurance offers flexible auto insurance options for Clarksville drivers who need coverage now &mdash; not next week.",
    "ldp.h2.flexible": "Flexible payment plans",
    "ldp.p.flexible":
      "Not everyone can put down a large deposit on day one. We work with carriers that offer low down payment and installment billing options, so you can bind coverage and spread the cost over monthly payments that fit your budget.",
    "ldp.h2.cash": "Cash payment options available",
    "ldp.p.cash":
      "Prefer to pay in person? You can visit our office at 313 Dover Rd and pay with cash or other methods your carrier accepts. Our agents walk you through exactly what is due today and what comes later &mdash; no surprises.",
    "ldp.h2.fortcampbell": "Built for Fort Campbell and Clarksville families",
    "ldp.p.fortcampbell":
      "We understand tight timelines and tight budgets. Whether you are military, between jobs, or just need coverage before the DMV appointment tomorrow, we help Fort Campbell-area service members and local families find auto insurance they can start right away.",
    "ldp.callout.sameDay":
      "No need to wait &mdash; come in same day and drive covered. Many policies can be bound the same business day with minimal money down.",
    "ldp.h2.bilingual": "Bilingual agents ready to help",
    "ldp.p.bilingual":
      "Tambi\u00e9n hablamos espa\u00f1ol. Call (931) 647-2434 or stop by our Clarksville office and a real agent will explain your payment options, compare carriers, and get you on the road with proof of insurance in hand.",
    "ldp.quote.title": "Ask about low down payment options",
    "ldp.notes.placeholder": "Looking for low down payment options",
  },

  es: {
    "nav.home": "Inicio",
    "nav.personal": "Seguros Personales",
    "nav.highrisk": "SR-22 y Alto Riesgo",
    "nav.sr22": "Fianza SR-22",
    "nav.coverageforall": "Cobertura para Todos",
    "nav.lowdown": "Auto con Pago Bajo",
    "nav.business": "Seguros de Negocios",
    "nav.quote": "Cotizar",

    "hero.title": "Protegiendo a familias de Clarksville por m\u00e1s de <em>30 a\u00f1os.</em>",
    "hero.lede":
      "Agencia independiente desde 1995. Comparamos las mejores tarifas y coberturas de las principales aseguradoras para que usted no tenga que hacerlo.",
    "hero.espanol": "Tambi\u00e9n Hablamos Espa\u00f1ol",
    "hero.cta.quote": "Cotizar Ahora",
    "hero.cta.call": "Llame al (931) 647-2434",
    "landing.headline1": "Seguros para Clarksville.",
    "landing.headline2": "Cobertura para la vida real.",
    "landing.address": "313 Dover Rd, Clarksville, TN 37042",
    "landing.officeLabel": "Nuestra oficina en Clarksville",
    "landing.coverageLine": "Auto \u2022 Hogar \u2022 Inquilinos \u2022 Negocios",
    "landing.b1": "Agencia local en Clarksville",
    "landing.b2": "Atenci\u00f3n personal de agentes reales",
    "landing.b3": "Vis\u00edtenos en persona",
    "landing.b4": "Ingl\u00e9s y Espa\u00f1ol",
    "landing.phoneCta":
      "\u00bfNecesita una cotizaci\u00f3n urgentemente? Llame al <a href=\"tel:9316472434\">(931) 647-2434</a>",
    "cta.smsConsent":
      "Al proporcionar su n\u00famero de tel\u00e9fono y hacer clic en enviar, usted acepta recibir mensajes de texto promocionales y no promocionales de Millennium Insurance, incluidas comunicaciones automatizadas. El consentimiento no es una condici\u00f3n para ninguna compra. Pueden aplicarse tarifas de mensajes y datos. La frecuencia de los mensajes var\u00eda. Responda STOP para cancelar, HELP para obtener ayuda. Consulte nuestra <a href=\"privacy-policy.html\">Pol\u00edtica de Privacidad</a> para m\u00e1s detalles.",
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
    "stats.2n": "10+",
    "stats.2l": "Aseguradoras compiten por usted",
    "stats.3n": "4,800+",
    "stats.3l": "Hogares protegidos",
    "stats.4n": "100%",
    "stats.4l": "Servicio local",

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
      "\u00bfPrefiere conversarlo en persona? Vis\u00edtenos en 313 Dover Rd, Clarksville, TN 37042, o llame al <a href=\"tel:9316472434\">(931) 647-2434</a>. Nuestro equipo habla espa\u00f1ol.",

    "form.title": "Solicitar una Cotizaci\u00f3n de Seguro",
    "form.first": "Nombre",
    "form.last": "Apellido",
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
    "form.error": "Hubo un problema al enviar su solicitud. Int\u00e9ntelo de nuevo o ll\u00e1menos al (931) 647-2434.",

    "footer.about":
      "Una agencia de seguros independiente sirviendo con orgullo a Clarksville, Tennessee desde 1995. Tambi\u00e9n hablamos espa\u00f1ol.",
    "footer.coverages": "Coberturas",
    "footer.company": "Compa\u00f1\u00eda",
    "footer.visit": "Vis\u00edtenos",
    "footer.rights": "&copy; 2026 Millennium Insurance. Todos los derechos reservados. Sirviendo clientes desde 1995.",
    "footer.licensed": "Con licencia en el Estado de Tennessee",
    "footer.privacy": "Pol\u00edtica de Privacidad",

    "cov.home": "Seguro de Hogar",
    "cov.auto": "Seguro de Auto",
    "cov.renters": "Seguro de Inquilinos",
    "cov.umbrella": "Seguro Sombrilla",
    "cov.watercraft": "Seguro de Embarcaciones",
    "cov.life": "Seguro de Vida",
    "cov.business": "Seguro de Negocios",

    "sr22.pageTitle": "Fianza SR-22 Clarksville, TN | Millennium Insurance",
    "sr22.meta":
      "\u00bfNecesita un SR-22 en Clarksville? Millennium Insurance lo presenta el mismo d\u00eda. Sirviendo conductores de alto riesgo desde 1995. Llame al (931) 647-2434. Tambi\u00e9n hablamos espa\u00f1ol.",
    "sr22.title": "Fianza SR-22 en Clarksville, TN",
    "sr22.lede":
      "\u00bfNecesita presentar un SR-22 r\u00e1pido? Millennium Insurance ayuda a los conductores de Clarksville a volver a la carretera con presentaci\u00f3n el mismo d\u00eda y agentes reales que conocen los requisitos de Tennessee.",
    "sr22.h2.what": "\u00bfQu\u00e9 es un SR-22?",
    "sr22.p.what":
      "Un SR-22 no es un seguro en s\u00ed &mdash; es un certificado que su aseguradora presenta al estado para demostrar que usted cumple con la cobertura m\u00ednima de responsabilidad que exige Tennessee. Si el estado solicita un SR-22, necesita una p\u00f3liza de auto activa y una presentaci\u00f3n oportuna para mantener o recuperar sus privilegios de manejo.",
    "sr22.h2.when": "Cu\u00e1ndo Tennessee exige un SR-22",
    "sr22.p.whenIntro": "Razones comunes por las que los conductores en Clarksville necesitan un SR-22:",
    "sr22.li.dui": "Condena por DUI o DWI",
    "sr22.li.reckless": "Manejo imprudente o infracciones graves de tr\u00e1nsito",
    "sr22.li.suspension": "Suspensi\u00f3n de licencia o restablecimiento despu\u00e9s de una interrupci\u00f3n",
    "sr22.li.uninsured": "Accidente con culpa sin seguro",
    "sr22.h2.filing": "Presentaci\u00f3n el mismo d\u00eda en nuestra oficina de Clarksville",
    "sr22.p.filing":
      "Cuando usted contrata una p\u00f3liza calificada con Millennium Insurance, presentamos su SR-22 ante el estado el mismo d\u00eda h\u00e1bil &mdash; sin esperar correo ni preguntarse si se proces\u00f3. Vis\u00edtenos en 313 Dover Rd o ll\u00e1menos y le explicaremos exactamente lo que necesita.",
    "sr22.h2.duration": "Cu\u00e1nto tiempo lo necesitar\u00e1",
    "sr22.p.duration":
      "En Tennessee, los requisitos de SR-22 suelen durar de tres a cinco a\u00f1os, seg\u00fan su situaci\u00f3n. Debe mantener cobertura continua todo el tiempo. Una interrupci\u00f3n puede reiniciar el plazo y extender el requisito.",
    "sr22.callout.cost":
      "La mayor\u00eda de los conductores se sorprenden: la tarifa de presentaci\u00f3n del SR-22 suele ser modesta, y el costo total a menudo es menor de lo que esperan cuando trabajan con una agencia especializada en auto de alto riesgo.",
    "sr22.h2.bilingual": "Ayuda local, en ingl\u00e9s y espa\u00f1ol",
    "sr22.p.bilingual":
      "Nuestros agentes biling\u00fces han ayudado a conductores de Clarksville con presentaciones de SR-22 desde 1995. Explicamos el proceso en un lenguaje claro, comparamos varias aseguradoras y permanecemos con usted hasta confirmar su presentaci\u00f3n.",
    "sr22.quote.title": "Obtenga su cotizaci\u00f3n de fianza SR-22 hoy",
    "sr22.notes.placeholder": "Necesito presentaci\u00f3n de SR-22",

    "cfa.pageTitle": "Cobertura para Todos Clarksville, TN | Millennium Insurance",
    "cfa.meta":
      "Seguro de auto, hogar, inquilinos y negocios para cada familia de Clarksville. Millennium Insurance encuentra cobertura para todas las situaciones. Llame al (931) 647-2434.",
    "cfa.title": "Cobertura para Todos en Clarksville, TN",
    "cfa.lede":
      "Sea cual sea su situaci\u00f3n, Millennium Insurance ayuda a familias y conductores de Clarksville a encontrar la protecci\u00f3n adecuada &mdash; auto, hogar, inquilinos y negocios.",
    "cfa.h2.who": "Seguros para cada situaci\u00f3n",
    "cfa.p.whoIntro":
      "Historial limpio o complicado, comprador por primera vez o propietario de larga data &mdash; trabajamos con personas en todo Clarksville y el \u00e1rea de Fort Campbell. Razones comunes por las que nos visitan:",
    "cfa.li.auto": "Seguro de auto para cada conductor y hogar",
    "cfa.li.home": "Cobertura de hogar e inquilinos",
    "cfa.li.business": "Seguro de negocios para empresas locales",
    "cfa.li.tickets": "Multas, accidentes o una interrupci\u00f3n de cobertura",
    "cfa.li.budget": "Opciones de pago flexibles con presupuesto ajustado",
    "cfa.li.new": "Conductores nuevos, familias militares y compradores por primera vez",
    "cfa.h2.specialize": "Agentes reales, no un centro de llamadas",
    "cfa.p.specialize":
      "Cuando llama a Millennium Insurance, un agente licenciado de Clarksville escucha su situaci\u00f3n completa &mdash; no solo una casilla en un sitio web. Explicamos sus opciones en un lenguaje claro y le ayudamos a entender lo que est\u00e1 comprando.",
    "cfa.h2.shop": "Comparamos varias aseguradoras por usted",
    "cfa.p.shop":
      "Como agencia independiente, comparamos tarifas y coberturas de muchas aseguradoras &mdash; no solo el men\u00fa de una compa\u00f1\u00eda. Eso significa mejores posibilidades de encontrar una p\u00f3liza que se ajuste a su vida y presupuesto.",
    "cfa.callout.since":
      "Desde 1995, hemos ayudado a miles de hogares del \u00e1rea de Clarksville a obtener cobertura. No importa desde d\u00f3nde empiece, la cobertura para todos comienza con una conversaci\u00f3n.",
    "cfa.h2.bilingual": "Agentes que hablan ingl\u00e9s y espa\u00f1ol",
    "cfa.p.bilingual":
      "Tambi\u00e9n hablamos espa\u00f1ol. Vis\u00edtenos en 313 Dover Rd, Clarksville, TN 37042, o llame al (931) 647-2434 para hablar con un agente que tratar\u00e1 su situaci\u00f3n con respeto.",
    "cfa.quote.title": "Encuentre cobertura que se ajuste a su vida",
    "cfa.notes.placeholder": "Cu\u00e9ntenos qu\u00e9 necesita cubrir",

    "ldp.pageTitle": "Seguro de Auto con Pago Bajo Clarksville, TN | Millennium Insurance",
    "ldp.meta":
      "\u00bfNecesita seguro de auto con pago bajo o sin enganche en Clarksville? Millennium Insurance ofrece opciones de pago flexibles. Llame al (931) 647-2434.",
    "ldp.title": "Seguro de Auto con Pago Bajo en Clarksville, TN",
    "ldp.lede":
      "\u00bfNecesita cobertura hoy sin un pago inicial grande? Millennium Insurance ofrece opciones flexibles de seguro de auto para conductores de Clarksville que necesitan cobertura ahora &mdash; no la pr\u00f3xima semana.",
    "ldp.h2.flexible": "Planes de pago flexibles",
    "ldp.p.flexible":
      "No todos pueden hacer un dep\u00f3sito grande el primer d\u00eda. Trabajamos con aseguradoras que ofrecen pago inicial bajo y facturaci\u00f3n en cuotas, para que pueda contratar cobertura y distribuir el costo en pagos mensuales que se ajusten a su presupuesto.",
    "ldp.h2.cash": "Opciones de pago en efectivo disponibles",
    "ldp.p.cash":
      "\u00bfPrefiere pagar en persona? Puede visitar nuestra oficina en 313 Dover Rd y pagar en efectivo u otros m\u00e9todos que acepte su aseguradora. Nuestros agentes le explican exactamente lo que debe hoy y lo que viene despu\u00e9s &mdash; sin sorpresas.",
    "ldp.h2.fortcampbell": "Hecho para familias de Fort Campbell y Clarksville",
    "ldp.p.fortcampbell":
      "Entendemos plazos y presupuestos ajustados. Ya sea militar, entre empleos o simplemente necesita cobertura antes de la cita en el DMV ma\u00f1ana, ayudamos a miembros del servicio del \u00e1rea de Fort Campbell y familias locales a encontrar seguro de auto que puedan iniciar de inmediato.",
    "ldp.callout.sameDay":
      "No tiene que esperar &mdash; venga el mismo d\u00eda y maneje con cobertura. Muchas p\u00f3lizas pueden contratarse el mismo d\u00eda h\u00e1bil con poco dinero inicial.",
    "ldp.h2.bilingual": "Agentes biling\u00fces listos para ayudar",
    "ldp.p.bilingual":
      "Tambi\u00e9n hablamos espa\u00f1ol. Llame al (931) 647-2434 o visite nuestra oficina en Clarksville y un agente real le explicar\u00e1 sus opciones de pago, comparar\u00e1 aseguradoras y lo pondr\u00e1 en camino con comprobante de seguro en mano.",
    "ldp.quote.title": "Pregunte por opciones de pago bajo",
    "ldp.notes.placeholder": "Busco opciones de pago bajo",
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
    const value = t(el.dataset.i18n);
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (el.tagName === "TITLE") {
      el.textContent = value;
    } else {
      el.innerHTML = value;
    }
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
    refreshScrollAnimations();
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

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".nav-dropdown.open").forEach((dropdown) => {
    dropdown.classList.remove("open");
    const toggle = dropdown.querySelector(".nav-dropdown-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
});

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

/* ---------- AOS scroll animations (Wilshire-style) ---------- */
function setAOS(el, animation, delay = 0) {
  if (!el) return;
  el.setAttribute("data-aos", animation);
  el.setAttribute("data-aos-duration", "600");
  if (delay) el.setAttribute("data-aos-delay", String(delay));
}

function applyAOSAnimations() {
  const landingCopy = document.querySelector(".landing-hero-copy");
  const landingForm = document.querySelector(".landing-quote-form");
  if (landingCopy) setAOS(landingCopy, "fade-up");
  if (landingForm) setAOS(landingForm, "fade-up", 100);

  const heroCopy = document.querySelector(".hero h1");
  const heroArt = document.querySelector(".hero-art-wrap, .hero-art");
  if (heroCopy) setAOS(heroCopy, "fade-up");
  if (heroArt) setAOS(heroArt, "fade-up", 100);

  document.querySelectorAll(".page-hero .container").forEach((el) => {
    setAOS(el, "fade-up");
  });

  document.querySelectorAll(".section-head").forEach((el) => {
    setAOS(el, "fade");
  });

  document.querySelectorAll(".card").forEach((el) => {
    setAOS(el, "fade-up");
  });

  document.querySelectorAll(".stats-band .container > div").forEach((el) => {
    setAOS(el, "fade");
  });

  document.querySelectorAll(".step").forEach((el) => {
    setAOS(el, "fade-up");
  });

  document.querySelectorAll(".interactive-wrap > .scene-frame").forEach((el) => {
    setAOS(el, "fade-up");
  });
  document.querySelectorAll(".interactive-wrap > .coverage-panel").forEach((el) => {
    setAOS(el, "fade-up", 100);
  });

  document.querySelectorAll(".quote-form").forEach((el) => {
    setAOS(el, "fade-up");
  });

  document.querySelectorAll(".cta-banner .container").forEach((el) => {
    setAOS(el, "fade");
  });

  document.querySelectorAll(".site-footer .container").forEach((el) => {
    setAOS(el, "fade");
  });
}

function initScrollAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  applyAOSAnimations();

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      once: true,
      offset: 80,
      easing: "ease-out",
      disable: reducedMotion,
    });
  }
}

function refreshScrollAnimations() {
  applyAOSAnimations();
  if (typeof AOS !== "undefined") AOS.refresh();
}

/* ---------- Init ---------- */
applyLang();
initScrollAnimations();
