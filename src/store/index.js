import { createStore } from 'vuex';

import developersModule from './modules/developers/index.js';
import feedbackModule from './modules/feedbacks/index';

const store = createStore({
  modules: {
    developers: developersModule,
    feedback: feedbackModule
  },
  state() {
    return {
      userId: 'c6'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
