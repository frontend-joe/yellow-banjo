import * as PhotoService from "../http/PhotoService";

const themeLight = {
  id: "light",
  colorPrimary: "#ff0062",
  colorBackground: "#ebebeb",
  colorText: "#000000",
  colorCard: "#ffffff",
  colorNav: "rgba(255, 255, 255, 0.34)",
  colorBorder: "#ebebeb",
};

const themeDark = {
  id: "dark",
  colorPrimary: "#ff0062",
  colorBackground: "#1a1a1a",
  colorText: "#ffffff",
  colorCard: "#333232",
  colorNav: "rgba(0, 0, 0, 0.60)",
  colorBorder: "#888888",
};

const state = {
  app: {
    likedImages: [],
    images: [],
    theme: themeLight,
  },
};

const getters = {
  app: (state) => state.app,
};

const actions = {
  loadImages({ commit }, client_id) {
    PhotoService.list({ client_id })
      .then((res) => {
        commit("setImages", res.data);
      })
      .catch(console.error);
  },

  toggleTheme({ commit }) {
    if (state.app.theme.id === "dark") {
      commit("setTheme", { ...themeLight });
    } else {
      commit("setTheme", { ...themeDark });
    }
  },

  toggleImageLiked({ commit }, image) {
    const likeImagesCopy = [...state.app.likedImages];

    if (likeImagesCopy.includes(image)) {
      const imageIndex = likeImagesCopy.findIndex(
        (image) => image.id === image
      );
      likeImagesCopy.splice(imageIndex, 1);
    } else {
      likeImagesCopy.push(image);
    }

    commit("setLikedImages", likeImagesCopy);
  },
};

const mutations = {
  setLikedImages: (state, likedImages) => (state.app.likedImages = likedImages),
  setImages: (state, images) => (state.app.images = images),
  setTheme: (state, theme) => (state.app.theme = theme),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
