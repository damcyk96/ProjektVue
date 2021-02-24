export default {
  async feedbackDeveloper(context, payload) {
    const newFeedback = {
      developerId: payload.developerId,
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/feedbacks/${payload.developerId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newFeedback)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send feedback.'
      );
      throw error;
    }

    newFeedback.id = responseData.name;
    newFeedback.developerId = payload.developerId;

    context.commit('addFeedback', newFeedback);
  },
  async fetchFeedbacks(context) {
    const developerId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-85e9e.firebaseio.com/feedbacks/${developerId}.json?auth=${token}`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch feedbacks.'
      );
      throw error;
    }

    const feedbacks = [];

    for (const key in responseData) {
      const feedback = {
        id: key,
        developerId: developerId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      feedbacks.push(feedback);
    }

    context.commit('setFeedbacks', feedbacks);
  }
};
