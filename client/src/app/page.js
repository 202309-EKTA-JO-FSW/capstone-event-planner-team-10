import Test from "./components/Test";
import EventCard from "./components/EventCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <EventCard />
      </div>
    </main>
  );
}
