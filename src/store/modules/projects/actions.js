export default {
  async projectForDeveloper(context, payload) {
    const newProject = {
      project: payload.project,
      from: payload.from,
      to: payload.to
    };
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/${payload.developerId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newProject)
      }
    );
    console.log(response);
    const responseData = await response.json();
    console.log(responseData);

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
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/projects/mSwhhWKD9XbJdYKagYqtMdzfsh62.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch feedbacks.'
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
        to: responseData[key].to
      };
      projects.push(project);
    }

    context.commit('setProjects', projects);
  }
};
