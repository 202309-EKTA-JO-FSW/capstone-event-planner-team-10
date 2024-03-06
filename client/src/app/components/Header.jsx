import React from 'react'
import Logo from './Logo';
/*import { NavLink, useLocation } from "@remix-run/react"


const NavLinks = () => {
    return (
      <>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/explore" >Explor </NavLink>
        <NavLink to="/Contact" >Contact </NavLink>

      </>
    );
  };*/

function Header() {
   return (
    <header className="sticky top-0 z-[20] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Logo />
    </header>
   )

}

export default Header;
