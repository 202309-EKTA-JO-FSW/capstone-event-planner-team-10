"use client"
import events from "../api/events"
import React, { useState, useEffect } from 'react'

function EventCard() {
    const [eventy, setEvents] = useState([])
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

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

  return( 
    <>
    <h1 className ="text-white"> hello for events carrd </h1>
    {
        isLoading? (
            <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
                <div className="flex space-x-2 animate-pulse">
                    <p>isLoading</p>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
            </div>
        ) : (   
        isError? (
            <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
                <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                    <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">500</p>
                    <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">{error}</p>
                    <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Whoops, something went wrong on our servers.</p>
                </div>
            </div>
        ):(<h2>Done</h2>))
    }
    </>
  )
}

export default EventCard