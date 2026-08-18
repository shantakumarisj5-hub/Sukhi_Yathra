import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { TravelPackage } from "@/types/package";

interface PackageCardProps {
  travelPackage: TravelPackage;
}

export default function PackageCard({ travelPackage }: PackageCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white">
      <Link
        href={`/packages/${travelPackage.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={travelPackage.coverImage}
          alt={travelPackage.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#071F5B] backdrop-blur">
          {travelPackage.category}
        </span>
      </Link>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#071F5B]">
              {travelPackage.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={16} className="text-[#B97810]" />
                {travelPackage.duration}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-[#B97810]" />
                {travelPackage.location}
              </span>
            </div>
          </div>

          <Link
            href={`/packages/${travelPackage.slug}`}
            aria-label={`View ${travelPackage.title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#071F5B] text-white transition hover:bg-[#B97810]"
          >
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {travelPackage.shortDescription}
        </p>
      </div>
    </article>
  );
}