import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../../store/categories/category.selector";

// Components
import CategoryPreview from "../../category-preview/category-preview.component";
import Spinner from "../../spinner/spinner.component";

// import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
