import layout from '@/layout';

export default [
  {
    path: '/record',
    name: 'record',
    redirect: { name: 'record-list' },
    component: layout,
    children: [
      {
        path: 'list',
        name: 'record-list',
        component: () => import('@/views/record/list')
      },
    ],
  },
]