export default {
  addFeedback(state, payload) {
    state.feedbacks.push(payload);
  },
  setFeedbacks(state, payload) {
    state.feedbacks = payload;
  }
};
