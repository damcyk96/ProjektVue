export default {
  feedbacks(state, _, _2, rootGetters) {
    const developerId = rootGetters.userId;
    return state.feedbacks.filter(req => req.developerId === developerId);
  },
  hasFeedbacks(_, getters) {
    return getters.feedbacks && getters.feedbacks.length > 0;
  }
};
