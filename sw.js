/* sw.js — deixa o Diário do Motorista funcionando sem internet.
   Ao publicar uma versão nova do app, troque VERSAO: o celular baixa os arquivos novos
   na próxima abertura com internet. Os DADOS não ficam aqui (ficam no localStorage) e
   não são afetados pela troca de versão. */
const VERSAO = 'diario-v1.0.1';
const ARQUIVOS = ['./', './index.html', './manifest.webmanifest', './icone-192.png', './icone-512.png',
  './icone-maskable-512.png', './apple-touch-icon.png', './favicon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Letra Inter (Google Fonts): usa a cópia guardada; se não tiver, busca e guarda.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSAO).then(c => c.match(req).then(r => r || fetch(req).then(resp => { c.put(req, resp.clone()); return resp; }).catch(() => r))));
    return;
  }
  if (url.origin !== location.origin) return;

  // Página: tenta a rede (para pegar versão nova), cai na cópia guardada sem internet.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(resp => { if (resp.ok) { const copia = resp.clone(); caches.open(VERSAO).then(c => c.put('./index.html', copia)); } return resp; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Demais arquivos: cópia guardada primeiro.
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
