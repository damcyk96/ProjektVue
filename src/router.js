import { createRouter, createWebHistory } from 'vue-router';

import DeveloperDetail from './pages/developers/DeveloperDetail.vue';
import DevelopersList from './pages/developers/DevelopersList.vue';
import DeveloperRegistration from './pages/developers/DeveloperRegistration.vue';
import FeedbackDeveloper from './pages/feedbacks/FeedbackDeveloper.vue';
import FeedbacksReceived from './pages/feedbacks/FeedbacksReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/developers' },
    { path: '/developers', component: DevelopersList },
    {
      path: '/developers/:id',
      component: DeveloperDetail,
      name: 'developer',
      props: true,
      children: [
        { path: 'feedback', name: 'feedbackDev', component: FeedbackDeveloper } // /developers/c1/feedback
      ]
    },
    {
      path: '/register',
      component: DeveloperRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/feedbacks',
      component: FeedbacksReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    const result = store.getters.isAuthenticated;
    console.log(result);
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/developers');
  } else {
    next();
  }
});

export default router;
