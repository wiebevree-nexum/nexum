'use strict';

const translations = {
  en: {
    // --- Navigation ---
    'nav.products': 'Products',
    'nav.bybrickq': 'By Brickq',
    'nav.rental': 'Rental market',
    'nav.investment': 'Investment market',
    'nav.soon': 'coming soon',
    'nav.how': 'How it works',
    'nav.about': 'About',
    'nav.demo-cta': 'Request a demo',
    'nav.mobile.consumer': 'Buyers & sellers',
    'nav.mobile.banking': 'Banks',
    'nav.mobile.notary': 'Notaries',
    'nav.mobile.realtor': 'Agents',

    // --- Hero ---
    'hero.headline.pre': 'The transaction rail for\u00a0',
    'hero.headline.accent': 'Dutch real estate',
    'hero.subheading': 'Nexum connects buyers, sellers, agents, banks and notaries in one verified, transparent transaction \u2014 from first bid to final deed.',
    'hero.cta-primary': 'Request a demo',
    'hero.cta-secondary': 'See how it works',
    'hero.mockup.title': 'Live bidding',
    'hero.mockup.address': 'Keizersgracht 482, Amsterdam',
    'hero.mockup.bid1.name': 'M. van der Berg',
    'hero.mockup.bid1.amount': '\u20ac 785,000',
    'hero.mockup.bid1.status': 'Verified',
    'hero.mockup.bid2.name': 'J. Smits',
    'hero.mockup.bid2.amount': '\u20ac 772,500',
    'hero.mockup.bid2.status': 'Verified',
    'hero.mockup.bid3.name': 'L. de Groot',
    'hero.mockup.bid3.amount': '\u20ac 760,000',
    'hero.mockup.bid3.status': 'Verified',
    'hero.mockup.label': 'Transparent \u00b7 Auditable \u00b7 Blockchain-anchored',

    // --- Stats ---
    'stats.market-label': 'Transactions per year',
    'stats.stakeholders-label': 'Addressable market',
    'stats.notary-label': 'Savings on buyer costs',
    'stats.bank-label': 'Faster closing time',

    // --- Products ---
    'products.headline': 'Built for every transaction',
    'products.subheadline': 'One platform. All stakeholders. Every step of the transaction \u2014 handled.',
    'products.tab.bybrickq': 'By Brickq',
    'products.tab.rental': 'Rental market',
    'products.tab.investment': 'Investment market',
    'products.bybrickq.badge': 'First product',
    'products.bybrickq.headline': 'By Brickq \u2014 transparent residential transactions',
    'products.bybrickq.body': 'The centralized platform for buying and selling residential property in the Netherlands. Verified bidding, mortgage auctions, and notarial automation \u2014 all in one place.',
    'products.stab.buyers': 'Buyers',
    'products.stab.sellers': 'Sellers',
    'products.stab.agents': 'Agents',
    'products.stab.banks': 'Banks',
    'products.stab.notaries': 'Notaries',
    'products.stab.buyers.promise': 'Bid with certainty through a pre-verified budget. 100% transparent bidding process. Buyer costs reduced from 8% to 1.5%.',
    'products.stab.sellers.promise': 'Live transparent bid overview. Financing certainty per bid. 35% faster transaction cycle.',
    'products.stab.agents.promise': '50% more efficient workflow. More leads through a public performance score.',
    'products.stab.banks.promise': 'Pre-validated KYC dossiers. \u20ac\u00a01,000+ cost saving per transaction.',
    'products.stab.notaries.promise': '70% less administrative work. Receive pre-filled documents. KNB and Kadaster integrations.',
    'products.mockup.label': 'By Brickq \u2014 platform preview',
    'products.soon.label': 'Coming soon',
    'products.soon.desc': 'We are building this module. Stay informed.',
    'products.rental.title': 'Rental market',
    'products.investment.title': 'Investment market',

    // --- How it works ---
    'how.headline': 'How it works',
    'how.subheadline': 'From first contact to final deed \u2014 one continuous, verified flow.',
    'how.step1.num': '01',
    'how.step1.title': 'Verified profile',
    'how.step1.desc': 'Buyers verify their identity via iDIN and connect financial data via Ockto. One profile, valid across every Nexum transaction.',
    'how.step2.num': '02',
    'how.step2.title': 'Transparent bidding',
    'how.step2.desc': 'Every bid is logged immutably. Buyers see the full bid log in real time. No hidden bids, no information asymmetry.',
    'how.step3.num': '03',
    'how.step3.title': 'Mortgage auction',
    'how.step3.desc': 'Banks compete live for the buyer\u2019s mortgage. Time-to-Yes under 5 minutes. Financing certainty before the sale is final.',
    'how.step4.num': '04',
    'how.step4.title': 'Digital deed',
    'how.step4.desc': 'The notary receives a pre-filled dossier. AI populates the deed template. Blockchain anchors the final transfer. Done.',

    // --- Stakeholders ---
    'stakeholders.headline': 'A solution for every stakeholder',
    'stakeholders.subheadline': 'Nexum does not compete with any party in the chain. It makes every party better at what they already do.',
    'stakeholders.buyers.name': 'Buyers',
    'stakeholders.buyers.promise': 'Transparent bidding, verified status, and a mortgage in under 3 minutes.',
    'stakeholders.buyers.link': 'View portal',
    'stakeholders.sellers.name': 'Sellers',
    'stakeholders.sellers.promise': 'Live bid log, blockchain-anchored property token, and financing certainty per bid.',
    'stakeholders.sellers.link': 'View portal',
    'stakeholders.agents.name': 'Agents',
    'stakeholders.agents.promise': 'Agent Accuracy Index, Certified Partner badge, and 35% fewer transaction delays.',
    'stakeholders.agents.link': 'View portal',
    'stakeholders.banks.name': 'Banks',
    'stakeholders.banks.promise': 'Pre-validated KYC dossiers and Time-to-Yes under 5 minutes.',
    'stakeholders.banks.link': 'View portal',
    'stakeholders.notaries.name': 'Notaries',
    'stakeholders.notaries.promise': '70% less admin. AI-prefilled deed templates. KNB and Kadaster integrations.',
    'stakeholders.notaries.link': 'View portal',

    // --- Testimonials ---
    'testimonials.headline': 'What our partners say',
    'testimonials.q1.text': '"The pre-validated dossiers are a genuine step forward. Our advisors spend their time advising, not chasing documents."',
    'testimonials.q1.name': 'M. de Vries',
    'testimonials.q1.role': 'Mortgage adviser, ABN AMRO',
    'testimonials.q2.text': '"The Agent Accuracy Index changed how we operate. Clients now choose us because our track record is publicly verifiable."',
    'testimonials.q2.name': 'R. Janssen',
    'testimonials.q2.role': 'Senior agent, Makelaarsland',
    'testimonials.q3.text': '"Seventy percent less administrative work per deed is not an estimate \u2014 it is what we measured in our pilot."',
    'testimonials.q3.name': 'A. Bakker',
    'testimonials.q3.role': 'Notary, Bakker & Partners',

    // --- Demo modal ---
    'modal.label': 'Request a demo',
    'modal.title': "Let\u2019s connect",
    'modal.desc': 'Send us a message and we will get back to you as soon as possible.',
    'modal.field.name': 'Name *',
    'modal.field.company': 'Company / Role',
    'modal.field.email': 'Email address *',
    'modal.field.message': 'Message',
    'modal.submit': 'Send request',

    // --- CTA ---
    'cta.headline': 'Ready to join the transaction rail?',
    'cta.subheadline': 'Whether you are a bank, notary, agent, or investor \u2014 Nexum is being built as the national standard. Get in early.',
    'cta.button': 'Request a demo',

    // --- Footer ---
    'footer.consumer': 'Buyers & sellers',
    'footer.banking': 'Banks',
    'footer.notary': 'Notaries',
    'footer.realtor': 'Agents',
    'footer.copyright': '\u00a9 2025 Nexum Real Estate B.V.',
    'footer.tagline': 'The transaction rail for Dutch real estate.',
  },

  nl: {
    // --- Navigatie ---
    'nav.products': 'Producten',
    'nav.bybrickq': 'By Brickq',
    'nav.rental': 'Huurmarkt',
    'nav.investment': 'Beleggingsmarkt',
    'nav.soon': 'binnenkort',
    'nav.how': 'Hoe het werkt',
    'nav.about': 'Over ons',
    'nav.demo-cta': 'Demo aanvragen',
    'nav.mobile.consumer': 'Kopers & verkopers',
    'nav.mobile.banking': 'Banken',
    'nav.mobile.notary': 'Notarissen',
    'nav.mobile.realtor': 'Makelaars',

    // --- Hero ---
    'hero.headline.pre': 'De transactierail voor\u00a0',
    'hero.headline.accent': 'de Nederlandse woningmarkt',
    'hero.subheading': 'Nexum verbindt kopers, verkopers, makelaars, banken en notarissen in \u00e9\u00e9n geverifieerde, transparante transactie \u2014 van eerste bod tot notari\u00eble akte.',
    'hero.cta-primary': 'Demo aanvragen',
    'hero.cta-secondary': 'Bekijk hoe het werkt',
    'hero.mockup.title': 'Live biedingen',
    'hero.mockup.address': 'Keizersgracht 482, Amsterdam',
    'hero.mockup.bid1.name': 'M. van der Berg',
    'hero.mockup.bid1.amount': '\u20ac\u00a0785.000',
    'hero.mockup.bid1.status': 'Geverifieerd',
    'hero.mockup.bid2.name': 'J. Smits',
    'hero.mockup.bid2.amount': '\u20ac\u00a0772.500',
    'hero.mockup.bid2.status': 'Geverifieerd',
    'hero.mockup.bid3.name': 'L. de Groot',
    'hero.mockup.bid3.amount': '\u20ac\u00a0760.000',
    'hero.mockup.bid3.status': 'Geverifieerd',
    'hero.mockup.label': 'Transparant \u00b7 Controleerbaar \u00b7 Blockchain-verankerd',

    // --- Statistieken ---
    'stats.market-label': 'Transacties per jaar',
    'stats.stakeholders-label': 'Adresseerbare markt',
    'stats.notary-label': 'Besparing Kosten Koper',
    'stats.bank-label': 'Snellere closing time',

    // --- Producten ---
    'products.headline': 'Gebouwd voor elke transactie',
    'products.subheadline': '\u00c9\u00e9n platform. Alle stakeholders. Elke stap van de transactie \u2014 afgedekt.',
    'products.tab.bybrickq': 'By Brickq',
    'products.tab.rental': 'Huurmarkt',
    'products.tab.investment': 'Beleggingsmarkt',
    'products.bybrickq.badge': 'Eerste product',
    'products.bybrickq.headline': 'By Brickq \u2014 transparante particuliere vastgoedtransacties',
    'products.bybrickq.body': 'Het gecentraliseerde platform voor koop en verkoop van woningen in Nederland. Geverifieerd bieden, hypotheekveiling en notari\u00eble automatisering \u2014 alles op \u00e9\u00e9n plek.',
    'products.stab.buyers': 'Kopers',
    'products.stab.sellers': 'Verkopers',
    'products.stab.agents': 'Makelaars',
    'products.stab.banks': 'Banken',
    'products.stab.notaries': 'Notarissen',
    'products.stab.buyers.promise': 'Bied met zekerheid door vooraf geverifieerd budget. 100% transparant biedproces. Van 8% naar 1,5% kosten koper.',
    'products.stab.sellers.promise': 'Live inzichtelijke biedingen. Financieringszekerheid per bod. 35% snellere transactiecyclus.',
    'products.stab.agents.promise': '50% effici\u00ebntere workflow. Meer leads d.m.v. performance score.',
    'products.stab.banks.promise': 'Pre-gevalideerde KYC-dossiers. \u20ac\u00a01.000+ kostenbesparing per transactie.',
    'products.stab.notaries.promise': '70% minder administratief werk. Pre-filled documenten ontvangen. KNB- en Kadasterintegraties.',
    'products.mockup.label': 'By Brickq \u2014 platform preview',
    'products.soon.label': 'Binnenkort',
    'products.soon.desc': 'We bouwen deze module. Blijf op de hoogte.',
    'products.rental.title': 'Huurmarkt',
    'products.investment.title': 'Beleggingsmarkt',

    // --- Hoe het werkt ---
    'how.headline': 'Hoe het werkt',
    'how.subheadline': 'Van eerste contact tot notari\u00eble akte \u2014 \u00e9\u00e9n doorgaande, geverifieerde flow.',
    'how.step1.num': '01',
    'how.step1.title': 'Geverifieerd profiel',
    'how.step1.desc': 'Kopers verifi\u00ebren hun identiteit via iDIN en koppelen financi\u00eble data via Ockto. \u00c9\u00e9n profiel, geldig bij elke Nexum-transactie.',
    'how.step2.num': '02',
    'how.step2.title': 'Transparant bieden',
    'how.step2.desc': 'Elk bod wordt onveranderlijk vastgelegd. Kopers zien het volledige biedlogboek in realtime. Geen verborgen biedingen, geen informatieasymmetrie.',
    'how.step3.num': '03',
    'how.step3.title': 'Hypotheekveiling',
    'how.step3.desc': 'Banken concurreren live om de hypotheek van de koper. Time-to-Yes onder 5 minuten. Financieringszekerheid v\u00f3\u00f3r de definitieve gunning.',
    'how.step4.num': '04',
    'how.step4.title': 'Digitale akte',
    'how.step4.desc': 'De notaris ontvangt een vooringevuld dossier. AI vult het aktesjabloon in. Blockchain verankert de definitieve overdracht. Klaar.',

    // --- Stakeholders ---
    'stakeholders.headline': 'Een oplossing voor elke stakeholder',
    'stakeholders.subheadline': 'Nexum concurreert niet met een partij in de keten. Het maakt elke partij beter in wat ze al doen.',
    'stakeholders.buyers.name': 'Kopers',
    'stakeholders.buyers.promise': 'Transparant biedproces, geverifieerde status en hypotheek binnen 3 minuten.',
    'stakeholders.buyers.link': 'Bekijk portal',
    'stakeholders.sellers.name': 'Verkopers',
    'stakeholders.sellers.promise': 'Live biedlogboek, blockchain-verankerd objecttoken en financieringszekerheid per bod.',
    'stakeholders.sellers.link': 'Bekijk portal',
    'stakeholders.agents.name': 'Makelaars',
    'stakeholders.agents.promise': 'Agent Accuracy Index, Certified Partner badge en 35% minder transactievertraging.',
    'stakeholders.agents.link': 'Bekijk portal',
    'stakeholders.banks.name': 'Banken',
    'stakeholders.banks.promise': 'Pre-gevalideerde KYC-dossiers en Time-to-Yes onder 5 minuten.',
    'stakeholders.banks.link': 'Bekijk portal',
    'stakeholders.notaries.name': 'Notarissen',
    'stakeholders.notaries.promise': '70% minder administratie. AI-vooringevulde aktesjablonen. KNB- en Kadasterintegraties.',
    'stakeholders.notaries.link': 'Bekijk portal',

    // --- Testimonials ---
    'testimonials.headline': 'Wat onze partners zeggen',
    'testimonials.q1.text': '"De pre-gevalideerde dossiers zijn een echte stap vooruit. Onze adviseurs besteden hun tijd aan adviseren, niet aan het najagen van documenten."',
    'testimonials.q1.name': 'M. de Vries',
    'testimonials.q1.role': 'Hypotheekadviseur, ABN AMRO',
    'testimonials.q2.text': '"De Agent Accuracy Index veranderde hoe wij werken. Cli\u00ebnten kiezen ons nu omdat ons trackrecord publiek verifieerbaar is."',
    'testimonials.q2.name': 'R. Janssen',
    'testimonials.q2.role': 'Senior makelaar, Makelaarsland',
    'testimonials.q3.text': '"Zeventig procent minder administratief werk per akte is geen schatting \u2014 het is wat we maten in onze pilot."',
    'testimonials.q3.name': 'A. Bakker',
    'testimonials.q3.role': 'Notaris, Bakker & Partners',

    // --- Demo modal ---
    'modal.label': 'Demo aanvragen',
    'modal.title': 'Laten we kennismaken',
    'modal.desc': 'Stuur ons een bericht en we nemen zo snel mogelijk contact op.',
    'modal.field.name': 'Naam *',
    'modal.field.company': 'Bedrijf / Rol',
    'modal.field.email': 'E-mailadres *',
    'modal.field.message': 'Bericht',
    'modal.submit': 'Demo aanvragen',

    // --- CTA ---
    'cta.headline': 'Klaar om deel te worden van de transactierail?',
    'cta.subheadline': 'Of je nu bank, notaris, makelaar of investeerder bent \u2014 Nexum wordt de nationale standaard. Kom vroeg aan boord.',
    'cta.button': 'Demo aanvragen',

    // --- Footer ---
    'footer.consumer': 'Kopers & verkopers',
    'footer.banking': 'Banken',
    'footer.notary': 'Notarissen',
    'footer.realtor': 'Makelaars',
    'footer.copyright': '\u00a9 2025 Nexum Real Estate B.V.',
    'footer.tagline': 'De transactierail voor de Nederlandse woningmarkt.',
  }
};

/**
 * Apply a language to the page.
 * Updates all [data-i18n] elements and stores the preference.
 * @param {string} lang - 'en' or 'nl'
 */
function setLanguage(lang) {
  if (!translations[lang]) return;

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable text nodes
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Store preference
  try {
    localStorage.setItem('nexum-lang-override', lang);
  } catch (e) {}

  // Update URL (clean routing — base-path aware for subpath deployments)
  try {
    var cur = window.location.pathname;
    // Strip trailing /nl or /nl/ to get the base path
    var base = cur.replace(/\/nl\/?$/, '');
    if (!base.endsWith('/')) base += '/';
    var targetPath = lang === 'nl' ? base + 'nl' : base;
    if (cur !== targetPath) {
      history.pushState(null, '', targetPath);
    }
  } catch (e) {}

  // Update active state on all lang switcher buttons
  document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
    var btnLang = btn.getAttribute('data-lang-btn');
    btn.classList.toggle('lang-active', btnLang === lang);
  });
}

/**
 * Determine the initial language and apply it.
 * Priority: localStorage override > URL path > default (en)
 */
function initLanguage() {
  var override = null;
  try { override = localStorage.getItem('nexum-lang-override'); } catch (e) {}

  var path = window.location.pathname;
  var lang = override || (path.startsWith('/nl') ? 'nl' : 'en');

  // Silently apply without pushing to history on init
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
    btn.classList.toggle('lang-active', btn.getAttribute('data-lang-btn') === lang);
  });
}
