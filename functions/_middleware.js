// Cloudflare Pages middleware: canonicalize www.vvlfgng.dev to the apex.
// Runs on every request at Cloudflare's edge before the static asset is served.
// Latency overhead is negligible (<10ms typical).

export const onRequest = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.vvlfgng.dev') {
    url.hostname = 'vvlfgng.dev';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
