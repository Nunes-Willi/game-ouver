import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcaoView from '../views/AcaoView.vue'
import PlataformaView from '../views/PlataformaView.vue'
import TerrorView from '../views/TerrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/acao',
      name: 'acao',
      component: AcaoView
    },

    {
      path: '/terror',
      name: 'terror',
      component: TerrorView
    },
    
    {
      path: '/plataforma',
      name: 'plataforma',
      component: PlataformaView
    },
  ]
});

export default router;
