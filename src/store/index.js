import { createStore } from 'vuex';

import developersModule from './modules/developers/index.js';
import feedbackModule from './modules/feedbacks/index.js';
import authModule from './modules/auth/index.js';
import filteringModule from './modules/filters/index.js';

const store = createStore({
  modules: {
    developers: developersModule,
    feedback: feedbackModule,
    auth: authModule,
    filters: filteringModule
  }
});

export default store;
