import React from 'react';
import { ModalProvider } from '../../context/ModalContextProvider';
import { useUserContext } from '../../context/userContext.js';
import PublicNav from '../PublicNav';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu';
import { NavigationStyled, ListStyled } from './Navigation.styled';

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <ModalProvider>
      <NavigationStyled>
        <ListStyled>
          <PublicNav />
          {user ? <UserMenu /> : <AuthNav />}
        </ListStyled>
      </NavigationStyled>
    </ModalProvider>
  );
};

export default Navigation;
