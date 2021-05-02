
import React  from 'react';
import { bool, func } from 'prop-types';
import {
  Hamburger,
  HamburgerLine
} from "./BurgerStyle";

const Burger = ({ open, setOpen }) => {
    return (
      <Hamburger open={open} onClick={() => setOpen(!open)}>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
    )
  }
  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
export default Burger;