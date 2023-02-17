import { ShopItemContainer, Body, BackgroundImage } from "./shop-item.styles";
import { useNavigate } from "react-router-dom";

const ShopItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <ShopItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </ShopItemContainer>
  );
};

export default ShopItem;
