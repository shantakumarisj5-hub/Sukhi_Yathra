import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#071F5B]"
    >
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071F5B]/95 via-[#071F5B]/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5B51B]">
          {destination.region}
        </p>

        <div className="mt-2 flex items-end justify-between gap-4">
          <h3 className="text-3xl font-black tracking-tight">
            {destination.name}
          </h3>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#071F5B]">
            <ArrowUpRight size={19} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-blue-100">
          {destination.shortDescription}
        </p>
      </div>
    </Link>
  );
}