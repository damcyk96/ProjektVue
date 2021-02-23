import { createStore } from 'vuex';

import developersModule from './modules/developers/index.js';
import feedbackModule from './modules/feedbacks/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    developers: developersModule,
    feedback: feedbackModule,
    auth: authModule
  }
});

export default store;
