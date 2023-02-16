import { ShopItemContainer, Body, BackgroundImage } from "./shop-item.styles";

const ShopItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <ShopItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </ShopItemContainer>
  );
};

export default ShopItem;
