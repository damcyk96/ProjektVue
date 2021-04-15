export default {
  feedbacks(state) {
    return state.feedbacks;
  },
  hasFeedbacks(_, getters) {
    return getters.feedbacks && getters.feedbacks.length > 0;
  }
};
