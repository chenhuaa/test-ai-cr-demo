import { RouteRecordRaw } from 'vue-router';
import resize from '@/views/pages/resize.vue'
import flight from '@/views/pages/flight.vue'
import card from '@/views/pages/card.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/resize',
    name: 'resize',
    component: resize,
    children: []
  },
  {
    path: '/flight',
    name: 'flight',
    component: flight,
    children: []
  },
  {
    path: '/card',
    name: 'card',
    component: card,
    children: []
  }
];
