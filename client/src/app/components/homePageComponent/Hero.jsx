import React from "react";

export default function Hero(){
    return(

        <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Concert event" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
  
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ddbe66] to-[#37ab9a] opacity-20" ></div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ddbe66] to-[#37ab9a] opacity-20" ></div>
            </div>
            <div class="mx-auto max-w-7xl px-10 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                <p class="mt-6 text-lg leading-8 text-gray-100">Your primary destination for tickets to events and concerts! With easy ticket purchasing for all of your favorite live events, we are here to make you smile. </p>
                </div>
                <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col-reverse">
                    <dt class="text-base leading-7 text-gray-300">Partners around the world</dt>
                    <dd class="text-2xl font-bold leading-9 tracking-tight text-white">56</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                    <dt class="text-base leading-7 text-gray-300">Saled Tickets Last year</dt>
                    <dd class="text-2xl font-bold leading-9 tracking-tight text-white">360+</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                    <dt class="text-base leading-7 text-gray-300">Events Every Week</dt>
                    <dd class="text-2xl font-bold leading-9 tracking-tight text-white">35</dd>
                    </div>
                    <div class="flex flex-col-reverse">
                    <dt class="text-base leading-7 text-gray-300">Fun To Have</dt>
                    <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
                    </div>
                </dl>
                </div>
            </div>
        </div>
)


       
}