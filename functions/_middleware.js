// Tijdelijk: nexum-realestate.com serveert een placeholder in plaats van de demo.
// Terugdraaien: verwijder OFFLINE_HOSTS, OFFLINE_PAGE en het offline-blok in onRequest.
const OFFLINE_HOSTS = new Set(['nexum-realestate.com', 'www.nexum-realestate.com']);

const OFFLINE_PAGE = "<!DOCTYPE html>\n<html lang=\"nl\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"robots\" content=\"noindex, nofollow\">\n<title>Nexum. \u2014 Tijdelijk offline</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n  *,*::before,*::after{box-sizing:border-box}\n  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;\n       font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;\n       background:#f8fafc;color:#334155;padding:24px;line-height:1.6}\n  .card{max-width:560px;width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:16px;\n        padding:48px 44px;box-shadow:0 1px 2px rgba(15,23,42,.04)}\n  .logo{font-size:28px;font-weight:700;letter-spacing:-.03em;color:#0f172a;margin:0 0 32px}\n  .logo span{color:#14b8a6}\n  .rule{width:40px;height:3px;background:#14b8a6;border-radius:2px;margin:0 0 24px}\n  h1{font-size:24px;font-weight:600;letter-spacing:-.02em;color:#0f172a;margin:0 0 16px}\n  p{margin:0 0 16px;font-size:16px}\n  .muted{color:#64748b;font-size:14px}\n  a{color:#0d9488;text-decoration:none;font-weight:500}\n  a:hover{text-decoration:underline}\n  footer{margin-top:32px;padding-top:24px;border-top:1px solid #e2e8f0}\n  @media (max-width:480px){.card{padding:32px 24px}h1{font-size:20px}}\n</style>\n</head>\n<body>\n  <main class=\"card\">\n    <p class=\"logo\">Nexum<span>.</span></p>\n    <div class=\"rule\"></div>\n    <h1>Deze site is tijdelijk offline</h1>\n    <p>Nexum bouwt de digitale transactierail voor de Nederlandse woningmarkt. Onze publieke site wordt op dit moment opnieuw ingericht en is daarom even niet beschikbaar.</p>\n    <p>Vragen, of interesse in samenwerking? Neem gerust contact op via <a href=\"mailto:hello@nexum-realestate.com\">hello@nexum-realestate.com</a>.</p>\n    <footer class=\"muted\">Nexum Real Estate B.V. \u2014 Nederland</footer>\n  </main>\n</body>\n</html>\n";

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname;

  // Placeholder voor nexum-realestate.com (alle paden)
  if (OFFLINE_HOSTS.has(host)) {
    return new Response(OFFLINE_PAGE, {
      status: 503,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
        'x-robots-tag': 'noindex, nofollow',
        'retry-after': '604800',
      },
    });
  }

  // bybrickq.nl → bybrickq.com (301)
  if (host === 'bybrickq.nl' || host === 'www.bybrickq.nl') {
    return Response.redirect('https://bybrickq.com' + url.pathname + url.search, 301);
  }

  // bybrickq.com root → consumer portal (301)
  if ((host === 'bybrickq.com' || host === 'www.bybrickq.com') && url.pathname === '/') {
    return Response.redirect('https://bybrickq.com/consumer', 301);
  }

  return context.next();
}
