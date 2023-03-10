import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// components
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// Actions
import { fetchCategoriesAsync } from "../../../store/categories/category.action";

// Styles
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
