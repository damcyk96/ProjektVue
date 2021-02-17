import { createRouter, createWebHistory } from 'vue-router';

import DeveloperDetail from './pages/developers/DeveloperDetail.vue';
import DevelopersList from './pages/developers/DevelopersList.vue';
import DeveloperRegistration from './pages/developers/DeveloperRegistration.vue';
import FeedbackDeveloper from './pages/feedbacks/FeedbackDeveloper.vue';
import FeedbacksReceived from './pages/feedbacks/FeedbacksReceived.vue';
import NotFound from './pages/NotFound.vue';

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
    { path: '/register', component: DeveloperRegistration },
    { path: '/feedbacks', component: FeedbacksReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
