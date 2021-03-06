export default {
  async registerDeveloper(context, data) {
    const userId = context.rootGetters.userId;
    const developerData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
      privilege: data.privilege
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/developers/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(developerData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerDeveloper', {
      ...developerData,
      id: userId
    });
  },
  async updateDeveloper(context, data) {
    const userId = context.rootGetters.userId;
    const developerData = {
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/developers/${userId}.json`,
      {
        method: 'PATCH',
        body: JSON.stringify(developerData)
      }
    );
    //TO DO - PRZEMYŚLEĆ, JAK TO ODŚWIEŻYĆ MĄDRZE
    if (!response.ok) {
      // error ...
    }
  },
  async deleteDeveloper(id) {
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/developers/${id}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(id)
      }
    );
    //TO DO - PRZEMYŚLEĆ, JAK TO ODŚWIEŻYĆ MĄDRZE
    if (!response.ok) {
      // error ...
    }
  },
  async loadDevelopers(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://vueprojekt-b49c1-default-rtdb.europe-west1.firebasedatabase.app/developers.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const developers = [];
    for (const key in responseData) {
      const developer = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
        privilege: responseData[key].privilege
      };
      developers.push(developer);
    }
    context.commit('setDevelopers', developers);
    context.commit('setFetchTimestamp');
  }
};
