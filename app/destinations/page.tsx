import Container from "@/components/ui/Container";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  const domesticDestinations = destinations.filter(
    (destination) => destination.region === "Domestic",
  );

  const internationalDestinations = destinations.filter(
    (destination) => destination.region === "International",
  );

  return (
    <main>
      <section className="bg-[#F4F2EC] py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
            Find your next favourite place
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#071F5B] sm:text-6xl lg:text-7xl">
            Places that make every journey feel special.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From India&apos;s sacred routes and peaceful landscapes to vibrant
            international escapes, discover places worth exploring.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-black tracking-tight text-[#071F5B]">
            Explore India
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domesticDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-black tracking-tight text-[#071F5B]">
            Explore the world
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {internationalDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}