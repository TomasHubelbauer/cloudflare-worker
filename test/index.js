addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  kv.put('date-and-time', new Date().toISOString());
  return new Response('Hello! KV: ' + await kv.get('date-and-time'), {
    headers: { 'content-type': 'text/plain' },
  })
}
