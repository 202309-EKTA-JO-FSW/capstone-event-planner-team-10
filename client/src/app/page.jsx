import Test from "./components/Test";
import EventCard from "./components/homepageComponents/EventCard";
import Hero from "./components/homepageComponents/Hero";
import FeaturedEvents from "./components/homepageComponents/FeaturedEvents";
import Contact from "./components/homepageComponents/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm font-sans">
        <Hero/>
        <EventCard/>
        <FeaturedEvents/>
        <Contact/>

      </div>
    </main>
  );
}
