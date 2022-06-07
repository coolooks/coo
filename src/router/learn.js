import layout from '@/layout';

export default [
  {
    path: '/learn',
    name: 'learn',
    redirect: { name: 'learn-list' },
    component: layout,
    children: [
      {
        path: 'list',
        name: 'learn-list',
        component: () => import('@/views/note/list')
      },
    ],
  },
]