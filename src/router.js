import { createRouter, createWebHistory } from 'vue-router';

import DeveloperDetail from './pages/developers/DeveloperDetail.vue';
import DevelopersList from './pages/developers/DevelopersList.vue';
import DeveloperRegistration from './pages/developers/DeveloperRegistration.vue';
import DeveloperEditing from './pages/developers/DeveloperEditing.vue';
import DeveloperDelete from './pages/developers/DeveloperDelete.vue';
import FeedbackDeveloper from './components/feedbacks/FeedbackDeveloper.vue';
import AddProjectForDeveloper from './pages/projects/AddProjectForDeveloper.vue';
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
        { path: 'feedback', name: 'feedbackDev', component: FeedbackDeveloper }, // /developers/c1/feedback
        { path: 'delete', name: 'deleteDev', component: DeveloperDelete }
      ]
    },
    {
      path: '/register',
      component: DeveloperRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit',
      component: DeveloperEditing,
      meta: { requiresAuth: true }
    },
    {
      path: '/projects',
      component: AddProjectForDeveloper,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/developers');
  } else {
    next();
  }
});

export default router;
