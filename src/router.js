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
      props: true,
      children: [
        { path: 'feedback', component: FeedbackDeveloper } // /developers/c1/feedback
      ]
    },
    {
      path: '/register',
      component: DeveloperRegistration,
      meta: { requirestAuth: true }
    },
    {
      path: '/feedbacks',
      component: FeedbacksReceived,
      meta: { requirestAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requirestUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requirestAuth && store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requirestUnauth && store.getters.isAuthenticated) {
    next('/developers');
  } else {
    next();
  }
});

export default router;
