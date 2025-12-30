import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/sub-template-vite'),
  routes,
});

export default router;
