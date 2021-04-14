export default {
  async feedbackDeveloper(context, payload) {
    const newFeedback = {
      supervisor: payload.supervisor,
      message: payload.message,
      project: payload.project
    };
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/${payload.developerId}/${payload.project}/feedbacks.json`,
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
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/feedbacks/mSwhhWKD9XbJdYKagYqtMdzfsh62.json`
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
        supervisor: responseData[key].supervisor,
        message: responseData[key].message
      };
      feedbacks.push(feedback);
    }

    context.commit('setFeedbacks', feedbacks);
  }
};
