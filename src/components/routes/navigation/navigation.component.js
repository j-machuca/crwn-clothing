import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsCartOpen } from "../../../store/cart/cart.selector";

// Components

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

// Selectors

import { selectCurrentUser } from "../../../store/user/user.selector";

// Utils
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

// Assets
import { ReactComponent as Logo } from "../../../assets/img/crown.svg";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
