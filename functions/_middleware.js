export async function onRequest(context) {
  const url = new URL(context.request.url);
  const host = url.hostname;

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
