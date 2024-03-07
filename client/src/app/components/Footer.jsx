import React from 'react'
import Logo from './Logo'

function Footer (){
    return (
        <>
            <section class="bg-black">
                <div class="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center items-center justify-center">
                        
                        <h1
                        class="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-xl text-3xl lg:text-4xl"
                        >
                        <span class="inline md:block">Reach Us</span>
                        <span
                            class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:inline-block"
                        >Don't miss<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-red-300"> any event</span> </span>
                        </h1>
                        
                    </div>
            </section>
            
            <footer class="bg-black pb-2">
                <div class="flex flex-col items-center gap-6 mb-8 py-3">
                    <Logo />
                    <div class="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                        <a href="#" class="text-white-800 hover:text-orange-200 font-sans font-semibold uppercase">About</a>
                        <a href="#" class="text-white-800 hover:text-orange-200 font-sans font-semibold uppercase">Explore</a>
                        <a href="#" class="text-white-800 hover:text-orange-200 font-sans font-semibold uppercase">contact</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer