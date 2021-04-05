import { createStore } from 'vuex';

import developersModule from './modules/developers/index.js';
import feedbackModule from './modules/feedbacks/index.js';
import authModule from './modules/auth/index.js';
import filteringModule from './modules/filters/index.js';
import projectsModule from './modules/projects/index';

const store = createStore({
  modules: {
    developers: developersModule,
    feedbacks: feedbackModule,
    auth: authModule,
    filters: filteringModule,
    projects: projectsModule
  }
});

export default store;
