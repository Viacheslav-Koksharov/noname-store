import { useUserContext } from '../../context/userContext.js';
import { FaShoppingCart } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import {
  NavigationStyled,
  LinkStyled,
  ButtonAccount,
  ButtonCart,
  Text,
  LogOutButton,
  ContainerCounter,
  ItemsCounter,
} from './UserMenu.styled';
// import { ModalContext } from '../../context/ModalContextProvider';
// import { BasketContext } from '../../context/BasketContextProvider';
// import CustomModal from '../CustomModal';
// import Cart from '../Cart';
import '../../index.css';

const UserMenu = () => {
  const { user, logoutUser } = useUserContext();
  // const { openModal } = useContext(ModalContext);
  // const { basketItems } = useContext(BasketContext);
  return (
    <NavigationStyled>
      <Text>
        welcome,
        <br />
        {user.displayName}!
      </Text>
      <LinkStyled to={`/account`}>
        <ButtonAccount>
          <VscAccount className="IconAccount" />
        </ButtonAccount>
      </LinkStyled>
      <ButtonCart>
        <FaShoppingCart className="IconCart" />
        <ContainerCounter>
          <ItemsCounter>0</ItemsCounter>
        </ContainerCounter>
      </ButtonCart>
      <LogOutButton type="button" onClick={logoutUser}>
        Log out
      </LogOutButton>
    </NavigationStyled>
  );
};

export default UserMenu;
