import React from 'react'
import Logo from './Logo'

function Footer (){
    return (
        
            <footer class="bg-black pb-2">
                <div class="flex flex-col items-center gap-6 mb-8 py-3">
                    <Logo />
                    <div class="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-grey-100">
                        <a href="#" class="text-white hover:text-orange-200 font-sans font-semibold uppercase">About  |</a>
                        <a href="/events" class="text-white hover:text-orange-200 font-sans font-semibold uppercase">Explore  |</a>
                        <a href="#contact-us" class="text-white hover:text-orange-200 font-sans font-semibold uppercase">contact</a>
                    </div>
                </div>
            </footer>
    )
}

export default Footer