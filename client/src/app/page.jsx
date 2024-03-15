import EventCard from "./components/homePageComponent/EventCard";
import Hero from "./components/homePageComponent/Hero";
import FeaturedEvents from "./components/homePageComponent/FeaturedEvents"; 
import Contact from "./components/homePageComponent/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full items-center justify-between text-sm font-sans">
        <Hero/>
        <EventCard/>
        <FeaturedEvents/>
        <Contact/>
      </div>
    </main>
  );
}
