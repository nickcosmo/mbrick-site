export const state = () => ({
  projects: []
});

export const getters = {
  getProjects: state => state.projects,
  getSingleProject: state => projectId =>
    state.projects.find(project => (project.id === projectId))
};

export const mutations = {
  setProjects: (state, payload) => (state.projects = payload)
};

export const actions = {
  fetchAllProjects({ commit }, payload) {
    commit("setProjects", payload);
  }
};
