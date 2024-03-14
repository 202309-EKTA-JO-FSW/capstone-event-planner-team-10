"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Link from "next/link";


function FeaturedEvents(){
    const [eventsData, setEvents] = useState([])
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [featuredEvents, setFeaturedEvents] = useState({});

  useEffect(() => {
    async function getEvents() {
    try {
      setIsLoading(true)
      const response = await axios.get('http://localhost:3001/user/events')
      setEvents(response.data.events)
      setFeaturedEvents(response.data.events.filter(event => event.featured));
      } catch (error) {
      setIsError(true)
      setError(error)
      } finally {
      setIsLoading(false)
    }
  }
  getEvents()
  }, [])

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
            <section className="py-10 px-4">
            <h1 className="text-2xl font-semibold text-black capitalize lg:text-4xl py-6">Check Our Events</h1>
                <div class="container mx-auto p-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="grid gap-4">
                       
                        <div className='sm:w-1/2 relative'>
                            <h3 class="absolute bottom-0 left-0 p-6 text-xl font-semibold 5 text-black z-4">The Decorated Ways</h3>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
                            alt=""
                            />
                        </div>
                        </div>
                        <div class="grid gap-4">
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
                            alt=""
                            />
                        </div>
                        </div>
                        <div class="grid gap-4">
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
                            alt=""
                            />
                        </div>
                        </div>
                        <div class="grid gap-4">
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://staticimg.amarujala.com/assets/images/2020/01/13/750x506/kashi-vishwanath-mandir-varanasi_1578924152.png?w=700&dpr=2.0"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/800px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg"
                            alt=""
                            />
                        </div>
                        <div>
                            <img
                            class="h-auto max-w-full rounded-lg"
                            src="https://upload.wikimedia.org/wikipedia/commons/2/25/Chet_Singh_Ghat_in_Varanasi.jpg"
                            alt=""
                            />
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        ))
    }
    </>
  )

}

export default FeaturedEvents