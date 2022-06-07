import layout from '@/layout';

export default [
  {
    path: '/about',
    name: 'about',
    component: layout,
    children: [
      {
        path: 'list',
        name: 'about-list',
      },
    ],
  },
]