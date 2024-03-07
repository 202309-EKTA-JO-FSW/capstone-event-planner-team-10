import React from 'react'
import Logo from './Logo'

function Header() {

   return (
    <>
      <header class="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between bg-background p-[2em] font-sans font-semibold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
        <nav class="container mx-auto px-6 py-3">
          <div class="flex items-center justify-between">
            <div class="text-white font-bold text-xl">
              <a href="#"><Logo/></a>
            </div>
            <div class="hidden md:block">
              <ul class="flex items-center space-x-8">
                <li><a href="#" class="text-white">About</a></li>
                <li><a href="#" class="text-white">Explore</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
                <li>
                  <button
                    class="middle none center mr-3 rounded-lg border border-slate-500 py-3 px-6 font-sans text-s uppercase transition-all hover:opacity-75 focus:ring focus:ring-grey-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                  >
                    sign-in
                  </button>
                </li>
              </ul>
            </div>
            <div class="md:hidden transition-all duration-500 ease-in">
              <button class="outline-none mobile-menu-button">
                <svg class="w-6 h-6 text-white" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mobile-menu hidden md:hidden">
            <ul class="mt-4 space-y-4">
              <li><a href="#" class="text-white">About</a></li>
              <li><a href="#" class="text-white">Explore</a></li>
              <li><a href="#" class="text-white">Contact</a></li>
              <li><a href="#" class="text-white">Sign-In</a></li>
            </ul>
          </div>
          
        </nav>
      </header>
    </>
  )

}

export default Header;
