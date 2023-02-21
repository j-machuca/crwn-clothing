import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector([selectCategories], (state) =>
  state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title] = items;
    return acc;
  }, {})
);

// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title] = items;
//     return acc;
//   }, {});
