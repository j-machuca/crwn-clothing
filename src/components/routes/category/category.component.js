import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../../product-card/product-card.component";

import { selectCategoriesMap } from "../../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const c = category[0].toUpperCase() + category.substring(1);

  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[c]);

  useEffect(() => {
    setProducts(categoriesMap[c]);
  }, [category, categoriesMap, c]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
