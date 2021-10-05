export const state = () => ({
  projects: {
    precast: [],
    tiltup: []
  }
});

export const getters = {
  getPrecastProjects: state => state.projects.precast,
  getSinglePrecastProject: state => projectId =>
    state.projects.precast.find(project => project.id === projectId),
  getTiltUpProjects: state => state.projects.tiltup,
  getSingleTiltUpProject: state => projectId =>
    state.projects.tiltup.find(project => project.id === projectId)
};

export const mutations = {
  setPrecastProjects: (state, payload) => (state.projects["precast"] = payload),
  setTiltUpProjects: (state, payload) => (state.projects["tiltup"] = payload)
};

export const actions = {
  fetchPrecastProjects({ commit }, payload) {
    commit("setPrecastProjects", payload);
  },
  fetchTiltUpProjects({ commit }, payload) {
    commit("setTiltUpProjects", payload);
  }
};
