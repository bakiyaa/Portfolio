
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  assets: {
    'index.csr.html': {size: 518, hash: '12758731687764e902cf0a2c8db1cdc0d34d9dc12434ddc23132ae4c0e6ab84c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '350cc4689d5c165ada8cd66ad723421ab8691bae5e9a7b4826fdce5e4aad5a98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20849, hash: 'bbec04a8f2440e3a28b6b84357a7a2b00929c5fc47503c6d50e644e37f5cc284', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
