import React from 'react';
import { useUserContext } from '../../context/userContext.js';
import PublicNav from '../PublicNav';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu';
import { NavigationStyled, ListStyled } from './Navigation.styled';

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <NavigationStyled>
      <ListStyled>
        <PublicNav />
        {user ? <UserMenu /> : <AuthNav />}
      </ListStyled>
    </NavigationStyled>
  );
};

export default Navigation;
