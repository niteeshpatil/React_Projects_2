import { initStore } from "./store";
const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex((p) => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return { products: updatedProducts };
    },
  };
  initStore(actions, {
    products: [
      {
        id: "p6",
        title: "Wild black",
        description:
          "Make your day extra wild with this intense perfume which is an alluring blend of chocolate to uplift your mood throughout the day.",
        isFavorite: false,
      },
      {
        id: "p1",
        title: "Berriza",
        description:
          "This fragrance is set to complement your style and will make heads turn when you step out wearing it.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Miss Jasmine",
        description:
          "An unconventional fragrance of sweet jasmine is calming, this perfume accentuates a floral aroma and refreshes your senses.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Brewsta",
        description:
          "A bad day with this perfume is better than a good day without it !!!.",
        isFavorite: false,
      },
      {
        id: "p5",
        title: "Lavish Lavender",
        description:
          "The color and scent of relaxation, creativity, imagination and optimism.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Rosy",
        description:
          " An iconic bouquet of rose, capturing the essence of classic romance, this perfume essentially changes the way you think about the rose forever!!!.",
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;
