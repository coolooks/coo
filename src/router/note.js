import layout from '@/layout';

export default [
  {
    path: '/note',
    name: 'note',
    redirect: { name: 'note-detail' },
    component: layout,
    children: [
      {
        path: 'detail',
        name: 'note-detail',
        component: () => import('@/views/detail')
      },
    ],
  },
]