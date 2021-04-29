export default {
  async feedbackDeveloper(context, payload) {
    const newFeedback = {
      supervisor: payload.supervisor,
      message: payload.message,
      project: payload.project,
      date: payload.date
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
  }
  // async deleteDeveloper(id) {
  //   const response = await fetch(
  //     `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/${payload.developerId}/${payload.project}/feedbacks/${payload.feedbackId}.json`,
  //     {
  //       method: 'DELETE',
  //       body: JSON.stringify(id)
  //     }
  //   );
  //   //TO DO - PRZEMYŚLEĆ, JAK TO ODŚWIEŻYĆ MĄDRZE
  //   if (!response.ok) {
  //     // error ...
  //   }
  // }
};
