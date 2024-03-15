"use client"
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Link from "next/link"

function EventCard() {
  
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

   
  //console.log(isError,isLoading,eventsData,featuredEvents)

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
          <section className="mx-auto px-8 py-8 lg:py-40">
          <h1 className="text-2xl font-semibold text-black capitalize lg:text-4xl py-6">Our Featured Events</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2'>
        
          { Object.values(featuredEvents).map((featuredEvent) => (
            
                <div
                key={featuredEvent._id}
                className="border rounded-lg overflow-hidden shadow flex flex-col"
              >
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-84 h-64 object-cover select-none"
                />
                <div className="p-4 flex-grow select-none">
                  <h3 className="text-lg font-semibold mb-2">{featuredEvent.title}</h3>
                  <p className="text-gray-600 max-w-96 mb-2 line-clamp-1">
                    {featuredEvent.content}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold">Date:</span>{" "}
                    {new Date(featuredEvent.date).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <p className="mb-1">
                    <span className="font-semibold">Location:</span>{" "}
                    {featuredEvent.location.title}
                  </p>
        
                </div>
                <div className="flex justify-between items-center">
                  <div className="select-none">
                    <span className="ml-2 text-m font-semibold">Rating:</span>{" "}
                    {featuredEvent.rating}/5 ⭐
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1 ml-1 select-none">
                      Starting from $
                      {featuredEvent.tickets.length > 0 ? featuredEvent.tickets[0].price : "N/A"}
                    </p>
                    {featuredEvent.availableSeats === 0 ? (
                      <button
                        className="mb-2 text-white mr-1 transition-colors duration-150 border-2 border-gray-400 bg-gray-400 cursor-not-allowed px-4 py-2 rounded-full"
                        disabled
                      >
                        Sold Out
                      </button>
                    ) : (
                      <Link href={`/events/${featuredEvent._id}`} legacyBehavior>
                        <button className="mr-1 text-orange-200 border-2 border-stone-800 hover:border-orange-200  transition-colors duration-150 bg-stone-800  hover:bg-white hover:text-stone-800  px-4 py-2 rounded-full">
                          View Details
                        </button>
                      </Link>
                    )}
                    
                  </div>
                </div>
              </div>

            ))
          }
          </div>
            </section>  
        ))
    }
    </>
  )
}

export default EventCard