import layout from '@/layout';

export default [
  {
    path: '/learn',
    name: 'learn',
    redirect: { name: 'learn-index' },
    component: layout,
    children: [
      {
        path: 'index',
        name: 'learn-index',
        meta: { noSidebar: true },
        component: () => import('@/views/learn/index')
      },
      {
        path: ':id',
        name: 'learn-article',
        props: true,
        component: () => import('@/views/article')
      },
    ],
  },
]