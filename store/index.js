export const state = () => ({
  projects: {
    precast: [],
    tiltup: []
  },
  products: {
    endicott: [],
    metro: []
  }
});

export const getters = {
  getPrecastProjects: state => state.projects.precast,
  getSinglePrecastProject: state => projectSlug =>
    state.projects.precast.find(project => project.slug === projectSlug),
  getTiltUpProjects: state => state.projects.tiltup,
  getSingleTiltUpProject: state => projectSlug =>
    state.projects.tiltup.find(project => project.slug === projectSlug),
  getEndicottProducts: state => state.products.endicott,
  getEndicottProductsPaginated: state => page => {
    const start = page * 20;
    const end = start + 20;
    if (state.products.endicott.length > 0) {
      return state.products.endicott.slice(start, end);
    }
    return [];
  },
  getMetroProducts: state => state.products.metro,
  getMetroProductsPaginated: state => page => {
    const start = page * 20;
    const end = start + 20;
    if (state.products.metro.length > 0) {
      return state.products.metro.slice(start, end);
    }
    return [];
  }
};

export const mutations = {
  setPrecastProjects: (state, payload) => (state.projects["precast"] = payload),
  setTiltUpProjects: (state, payload) => (state.projects["tiltup"] = payload),
  setEndicottProducts: (state, payload) =>
    (state.products["endicott"] = payload),
  setMetroProducts: (state, payload) => (state.products["metro"] = payload)
};

export const actions = {
  fetchPrecastProjects({ commit }, payload) {
    commit("setPrecastProjects", payload);
  },
  fetchTiltUpProjects({ commit }, payload) {
    commit("setTiltUpProjects", payload);
  },
  fetchEndicottProducts({ commit }, payload) {
    commit("setEndicottProducts", payload);
  },
  fetchMetroProducts({ commit }, payload) {
    commit("setMetroProducts", payload);
  }
};
