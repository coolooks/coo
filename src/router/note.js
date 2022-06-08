import layout from '@/layout';

export default [
  {
    path: '/note',
    name: 'note',
    redirect: { name: 'note-index' },
    component: layout,
    children: [
      {
        path: 'index',
        name: 'note-index',
        meta: { noSidebar: true },
        component: () => import('@/views/note/index')
      },
      {
        path: ':id',
        name: 'note-article',
        props: true,
        component: () => import('@/views/article')
      },
    ],
  },
]