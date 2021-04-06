export default {
  async projectForDeveloper(context, payload) {
    const developerId = context.rootGetters.userId;
    const newProject = {
      project: payload.project,
      from: payload.from,
      to: payload.to,
      position: payload.position
    };
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/${developerId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newProject)
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to adding a project.'
      );
      throw error;
    }

    newProject.id = responseData.name;
    newProject.developerId = payload.developerId;

    context.commit('addProject', newProject);
  },
  async fetchProjects(context) {
    const developerId = context.rootGetters.userId;
    //rozwiązać problem przekazywanego identyfikatora, na ten moment projekty są od użytkownika, ktory jest zalogowany, a nie w którego się kliknie
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/${developerId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch projects.'
      );
      throw error;
    }

    const projects = [];

    for (const key in responseData) {
      const project = {
        id: key,
        developerId: developerId,
        project: responseData[key].project,
        from: responseData[key].from,
        to: responseData[key].to,
        position: responseData[key].position
      };
      projects.push(project);
    }

    context.commit('setProjects', projects);
  }
};
