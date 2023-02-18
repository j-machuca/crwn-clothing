import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../../store/categories/category.selector";

import CategoryPreview from "../../category-preview/category-preview.component";

// import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
