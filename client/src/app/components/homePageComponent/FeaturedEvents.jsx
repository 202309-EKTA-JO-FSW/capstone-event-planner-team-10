"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";



function FeaturedEvents(){
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [uniqueGenres, setUniqueGenres] = useState([])

  useEffect(() => {
    async function getEvents() {
    try {
      setIsLoading(true)
      const uniqueGenresMap = {}
      const response = await axios.get('http://localhost:3001/user/events')
      response.data.events.forEach(event => {
                if (!uniqueGenresMap[event.genre.name]) {
                    uniqueGenresMap[event.genre.name] = event.image
                }
            })
        const uniqueGenres = Object.entries(uniqueGenresMap).map(([genre, image]) => ({ genre, image }))
        setUniqueGenres(uniqueGenres)
      } catch (error) {
      setIsError(true)
      setError(error)
      } finally {
      setIsLoading(false)
    }
  }
  getEvents()
  }, [])
  //console.log(uniqueGenres)

  return( 
    <>
    {
        isLoading? (
            <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-full">
                <div className="flex space-x-2 animate-pulse">
                    <p>Loading</p>
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
            <section class="container mx-auto px-8 pb-8 lg:pb-40 lg:m-0">
                <h2 class="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Check Our Events Genres</h2>
                <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                {uniqueGenres.map(({ genre, image }, index)=>(
                    <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[20rem] items-end overflow-hidden rounded-xl" key= {index}><img src={image} alt={genre} class="absolute inset-0 h-full w-full object-cover object-center" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="p-6 relative flex flex-col justify-end">
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">{genre}</h4>
                    </div>
                    </div>
                ))}

                </div>
            </section>
        ))}

        </>

  )
  
}

export default FeaturedEvents