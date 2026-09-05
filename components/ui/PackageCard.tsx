import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Phone,
  Tag,
} from "lucide-react";
import { TravelPackage } from "@/types/package";
import { siteConfig } from "@/data/site";

interface PackageCardProps {
  travelPackage: TravelPackage;
}

export default function PackageCard({ travelPackage }: PackageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(16,42,67,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(16,42,67,0.16)]">
      <Link
        href={`/packages/${travelPackage.slug}`}
        className="relative block h-60 shrink-0 overflow-hidden"
      >
        <Image
          src={travelPackage.coverImage}
          alt={travelPackage.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {travelPackage.price && (
          <span className="absolute bottom-4 right-4 rounded-xl bg-white px-3 py-2 text-sm font-black text-[#071F5B] shadow-md">
            {travelPackage.price.replace(" per person", " PP")}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#B97810]">
          {travelPackage.category} Yatra
        </p>

        <h3 className="mt-2 min-h-[64px] text-2xl font-black leading-tight tracking-tight text-[#071F5B]">
          {travelPackage.title}
        </h3>

        <div className="mt-5 grid min-h-[120px] grid-cols-[1.15fr_0.85fr] border-b border-slate-200 pb-4">
          <div className="border-r border-slate-200 pr-3">
            <div className="flex items-start gap-2 text-sm font-medium leading-5 text-slate-600">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#B97810]">
                <MapPin size={16} />
              </span>

              <span className="line-clamp-3">{travelPackage.location}</span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#B97810]">
                <CalendarDays size={16} />
              </span>

              <span>{travelPackage.duration}</span>
            </div>
          </div>

          <div className="flex flex-col justify-start pl-4">
            {travelPackage.oldPrice ? (
              <p className="text-sm text-slate-400 line-through">
                {travelPackage.oldPrice}
              </p>
            ) : (
              <p className="h-5 text-sm" />
            )}

            {travelPackage.price && (
              <p className="mt-1 text-[1.65rem] font-black leading-none tracking-tight text-[#071F5B]">
                {travelPackage.price.replace(" per person", "")}
                <span className="ml-1 text-sm font-semibold text-slate-500">
                  /PP
                </span>
              </p>
            )}

            {travelPackage.availability && (
              <span className="mt-3 line-clamp-2 w-fit rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-bold leading-4 text-emerald-700">
                {travelPackage.availability}
              </span>
            )}
          </div>
        </div>

        <div className="flex min-h-[64px] items-center justify-center py-4">
          {travelPackage.departureDates ? (
            <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold leading-5 text-slate-600">
              <Tag size={16} className="shrink-0 text-[#B97810]" />
              <span>{travelPackage.departureDates}</span>
            </p>
          ) : (
            <p className="text-center text-sm font-semibold text-slate-500">
              Dates available on enquiry
            </p>
          )}
        </div>

        <p className="line-clamp-2 min-h-[48px] text-sm leading-6 text-slate-600">
          {travelPackage.shortDescription}
        </p>

        <div className="mt-5 grid grid-cols-[130px_1fr] gap-3">
          <a
            href={siteConfig.phoneLink}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#D98267] bg-white text-sm font-bold text-[#B97810] transition hover:bg-orange-50"
          >
            <Phone size={17} />
            Call
          </a>

          <Link
            href={`/packages/${travelPackage.slug}`}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#071F5B] text-sm font-bold text-white transition hover:bg-[#123e91]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}