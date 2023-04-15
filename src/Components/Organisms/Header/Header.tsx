import React, { useState } from 'react';
import { CenterContainer, Logo, MainWrapper, Popup, SideContainer } from './Header.styles';
import tile from '../../../assets/images/tile.png';
import list from '../../../assets/images/list.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Display } from './Header.types';
import { SideBarState } from '../../../App.types';
import { setDisplay } from '../../../Redux/slices/displaySlice';
import { setIsVisible } from '../../../Redux/slices/sideBarSlice';
import Burger from '../../Molecules/Burger/Burger';

const Header = () => {
  const display = useSelector<Display>((state) => state.display.display);
  const isSideBarVisible = useSelector<SideBarState>((state) => state.barVisibility.isVisible);

  const dispatch = useDispatch();

  const HandleViewToggle = () => {
    if (display === 'tile') {
      dispatch(setDisplay('list'));
    } else {
      dispatch(setDisplay('tile'));
    }
  };

  const handleOpenSideBar = () => {
    if (isSideBarVisible === false) {
      dispatch(setIsVisible(true));
    } else {
      dispatch(setIsVisible(false));
    }
  };

  return (
    <MainWrapper>
      <SideContainer>
        <Logo />
        <Burger handleOpenSideBar={handleOpenSideBar} />
        <button onClick={handleOpenSideBar}>WYBIERZ KRAJ</button>
      </SideContainer>
      <CenterContainer>
        <button onClick={HandleViewToggle}>{display === 'tile' ? <img src={tile} /> : <img src={list} />}</button>
        <Popup />
      </CenterContainer>
    </MainWrapper>
  );
};

export default Header;
