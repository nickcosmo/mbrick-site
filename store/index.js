export const state = () => ({
  projects: {
    precast: [],
    tiltup: []
  },
  products: {
    thinBrick: []
  }
});

export const getters = {
  getPrecastProjects: state => state.projects.precast,
  getSinglePrecastProject: state => projectId =>
    state.projects.precast.find(project => project.id === projectId),
  getTiltUpProjects: state => state.projects.tiltup,
  getSingleTiltUpProject: state => projectId =>
    state.projects.tiltup.find(project => project.id === projectId),
  getThinBrickProducts: state => state.products.thinBrick,
  getThinBrickProductsPaginated: state => page => {
    const start = page * 20;
    const end = start + 20;
    return state.products.thinBrick.slice(start, end);
  }
};

export const mutations = {
  setPrecastProjects: (state, payload) => (state.projects["precast"] = payload),
  setTiltUpProjects: (state, payload) => (state.projects["tiltup"] = payload),
  setThinBrickProducts: (state, payload) =>
    (state.products["thinBrick"] = payload)
};

export const actions = {
  fetchPrecastProjects({ commit }, payload) {
    commit("setPrecastProjects", payload);
  },
  fetchTiltUpProjects({ commit }, payload) {
    commit("setTiltUpProjects", payload);
  },
  fetchThinBrickProducts({ commit }, payload) {
    commit("setThinBrickProducts", payload);
  }
};
