export const state = () => ({
    thumbnailImageWidth: null,
    thumbnailImageHeight: null
});

export const getters = {
    getThumbnailImageWidth: state => state.thumbnailImageWidth,
    getThumbnailImageHeight: state => state.thumbnailImageHeight,
}

export const mutations = {
    setThumbnailData: (state, payload) => {
        state.thumbnailImageWidth = payload.width;
        state.thumbnailImageHeight = payload.height;
    }
}

export const actions = {
    updateThumbnailData({commit}, payload) {
        commit("setThumbnailData", payload)
    }
}