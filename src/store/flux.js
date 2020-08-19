const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      addFavorite: (name) => {
        const store = getStore();
        let newFavorite = [name];
        let updatedStore = store.favorites.concat(newFavorite);
        setStore({ ...store, favorites: updatedStore });
      },

      deleteFavorite: (name) => {
        const store = getStore();
        let returnArr = store.favorites.filter((element, index) => {
          return name !== element.name;
        });
        setStore({ favorites: returnArr });
      },
    },
  };
};

export default getState;
