"use client"
import events from "../api/events"
import React, { useState, useEffect } from 'react'

function EventCard() {
  
    const [eventy, setEvents] = useState([])
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
/*
  useEffect(() => {
    try {
      setIsLoading(true)
      async function getEvents() {
        const response = await events.get('/events')
        setEvents(response.data)
      }
      getEvents()
    } catch (error) {
      setIsError(true)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  console.log(isError,isLoading,eventy)
*/
  return( 
    <>
    {
        isLoading? (
            <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-full">
                <div className="flex space-x-2 animate-pulse">
                    <p>isLoading</p>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
            </div>
        ) : (   
        isError ? (
            <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">500</p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">{error}</p>
                    <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Whoops, something went wrong on our servers.</p>
                </div>
            </div>
        ):(
              <section class="py-10 px-4">
              <div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <article class="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <a href="#">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Photo" />
                      <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="ml-1 text-sm text-slate-400">4.9</span>
                      </div>
                    </div>
            
                    <div class="mt-1 p-3">
                      <h2 class="text-slate-700">More Colorful</h2>
                      <p class="mt-1 text-sm text-slate-400">Hotel</p>
            
                      <div class="mt-3 flex items-end justify-between">
                          <p class="text-lg font-bold text-stone-700">From $50</p>
                          <a href="javascript:void(0)" class="w-7 h-7 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-orange-300">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            </span>
                          </a>
                      </div>
                    </div>
                  </a>
                </article>
            
                <article class="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <a href="#">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Photo" />
                      <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="ml-1 text-sm text-slate-400">3.9</span>
                      </div>
                    </div>
            
                    <div class="mt-1 p-3">
                      <h2 class="text-slate-700">The Hilton Hotel</h2>
                      <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
            
                      <div class="mt-3 flex items-end justify-between">
                          <p class="text-lg font-bold text-stone-700">$35</p>
                          <a href="javascript:void(0)" class="w-7 h-7 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-orange-300">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            </span>
                          </a>
                      </div>
                    </div>
                  </a>
                </article>
            
                <article class="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <a href="#">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="https://images.unsplash.com/photo-1505224628533-c4fc42c389e0?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Photo" />
                      <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="ml-1 text-sm text-slate-400">4.1</span>
                      </div>
                    </div>
            
                    <div class="mt-1 p-3">
                      <h2 class="text-slate-700">Gamescom</h2>
                      <p class="mt-1 text-sm text-slate-400">Tokyo, Japan</p>
            
                      <div class="mt-3 flex items-end justify-between">
                          <p class="text-lg font-bold text-stone-700">From $28</p>
                          <a href="javascript:void(0)" class="w-7 h-7 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-orange-300">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            </span>
                          </a>
                      </div>
                    </div>
                  </a>
                </article>
                <article class="rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                  <a href="#">
                    <div class="relative flex items-end overflow-hidden rounded-xl">
                      <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotel Photo" />
                      <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="ml-1 text-sm text-slate-400">4</span>
                      </div>
                    </div>
            
                    <div class="mt-1 p-3">
                      <h2 class="text-slate-700">The Hilton Hotel</h2>
                      <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
            
                      <div class="mt-3 flex items-end justify-between">
                          <p class="text-lg font-bold text-stone-700">$50</p>
                          <a href="javascript:void(0)" class="w-7 h-7 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-orange-300">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                            </span>
                          </a>
                      </div>
                    </div>
                  </a>
                </article>
                </div>
            </section>
        ))
    }
    </>
  )
}

export default EventCard