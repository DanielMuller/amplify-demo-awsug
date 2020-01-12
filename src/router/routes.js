
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/auth',
        name: 'auth',
        component: () => import('pages/Auth.vue')
      },
      {
        path: '/addAlbum',
        name: 'addAlbum',
        component: () => import('pages/AddAlbum.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/album/:id',
        name: 'album',
        component: () => import('pages/Album.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
