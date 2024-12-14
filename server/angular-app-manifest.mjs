
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  assets: {
    'index.csr.html': {size: 518, hash: 'b51fd931a0ff9efd60d047bf1e538cedf7511c3b7686a96557a182e99beee134', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '30e3eb01f6537193d5d89885e8cbcbda13c88a00027ad557f654d5f257565a1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20849, hash: '4af12cb663872f04108b8e28ad52bb2e432ba102387fd7009b70af9620950ae3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
