import layout from '@/layout';

export default [
  {
    path: '/about',
    name: 'about',
    component: layout,
    redirect: { name: 'about-index' },
    children: [
      {
        path: 'index',
        name: 'about-index',
        meta: { noSidebar: true },
        component: () => import('@/views/about/index')
      },
    ],
  },
]