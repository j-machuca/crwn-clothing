import CATEGORIES_ACTION_TYPES from "./category.types";

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  actions = {}
) => {
  const { type, payload } = actions;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
