import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  MapPin,
  MessageCircle,
  Tag,
  Users,
  X,
} from "lucide-react";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/ui/EnquiryForm";
import PackageMediaCarousel from "@/components/ui/PackageMediaCarousel";
import { getPackageBySlug, packages } from "@/data/packages";
import { whatsappLink } from "@/data/site";

interface PackageDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return packages.map((travelPackage) => ({
    slug: travelPackage.slug,
  }));
}

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const { slug } = await params;
  const travelPackage = getPackageBySlug(slug);

  if (!travelPackage) {
    notFound();
  }

  return (
    <main>
      <section className="bg-[#071F5B] py-7 text-white">
        <Container>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-100 transition hover:text-[#F5B51B]"
          >
            <ArrowLeft size={17} />
            Back to Yatra Packages
          </Link>
        </Container>
      </section>

      <section className="bg-[#F8FAFC] pb-16 pt-10 sm:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <PackageMediaCarousel
                title={travelPackage.title}
                images={travelPackage.gallery}
                video={travelPackage.video}
              />

              <div className="mt-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B97810]">
                  {travelPackage.category} Yatra
                </p>

                <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight text-[#071F5B] sm:text-5xl">
                  {travelPackage.title}
                </h1>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={18} className="text-[#B97810]" />
                    {travelPackage.duration}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin size={18} className="text-[#B97810]" />
                    {travelPackage.location}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {travelPackage.oldPrice && (
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      {travelPackage.oldPrice}
                    </span>
                  )}

                  {travelPackage.price && (
                    <span className="rounded-full bg-[#F5B51B] px-4 py-2 text-sm font-black text-[#071F5B]">
                      {travelPackage.price}
                    </span>
                  )}

                  {travelPackage.availability && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                      {travelPackage.availability}
                    </span>
                  )}
                </div>

                {travelPackage.departureDates && (
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F5B51B]/40 bg-[#FFF9E8] p-4">
                    <Tag
                      size={20}
                      className="mt-0.5 shrink-0 text-[#B97810]"
                    />

                    <div>
                      <p className="font-black text-[#071F5B]">
                        Departure information
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {travelPackage.departureDates}
                      </p>
                    </div>
                  </div>
                )}

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                  {travelPackage.description}
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-[1.75rem] bg-[#071F5B] p-6 text-white sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#F5B51B]">
                  Interested in this Yatra?
                </p>

                <h2 className="mt-3 text-2xl font-black leading-tight">
                  Get complete package details and availability.
                </h2>

                <div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-blue-100">Duration</span>
                    <span className="font-bold text-white">
                      {travelPackage.duration}
                    </span>
                  </div>

                  {travelPackage.price && (
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-blue-100">Package cost</span>
                      <span className="font-black text-[#F5B51B]">
                        {travelPackage.price}
                      </span>
                    </div>
                  )}

                  {travelPackage.departureDates && (
                    <div className="flex items-start justify-between gap-4">
                      <span className="shrink-0 text-blue-100">Dates</span>
                      <span className="text-right font-bold text-white">
                        {travelPackage.departureDates}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <EnquiryForm
                  packageName={travelPackage.title}
                  title={`Enquire about ${travelPackage.title}`}
                />
              </div>

              <a
                href={whatsappLink(
                  `Hello Sukhi Yatra Holidays, I am interested in the ${travelPackage.title} package. Please share availability and complete details.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-bold text-white transition hover:bg-[#1ead57]"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#071F5B]">
                Journey highlights
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {travelPackage.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4"
                  >
                    <Check
                      size={19}
                      className="mt-0.5 shrink-0 text-[#B97810]"
                    />

                    <p className="font-semibold leading-6 text-slate-700">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="mt-14 text-3xl font-black tracking-tight text-[#071F5B]">
                Day-by-day itinerary
              </h2>

              <div className="mt-6 space-y-4">
                {travelPackage.itinerary.map((item) => (
                  <article
                    key={item.day}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-[#B97810]">
                      {item.day}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-[#071F5B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <div className="rounded-[1.75rem] bg-[#F4F2EC] p-7">
                <h2 className="text-2xl font-black text-[#071F5B]">
                  What&apos;s included
                </h2>

                <ul className="mt-5 space-y-3">
                  {travelPackage.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-6 text-slate-700"
                    >
                      <Check
                        size={19}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
                <h2 className="text-2xl font-black text-[#071F5B]">
                  Not included
                </h2>

                <ul className="mt-5 space-y-3">
                  {travelPackage.exclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-6 text-slate-700"
                    >
                      <X
                        size={19}
                        className="mt-0.5 shrink-0 text-rose-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-[#F5B51B]/45 bg-[#FFF9E8] p-7">
                <Users size={25} className="text-[#B97810]" />

                <h2 className="mt-4 text-2xl font-black text-[#071F5B]">
                  Need help with your group?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Contact Sukhi Yatra Holidays for current availability,
                  boarding information, senior-citizen guidance and package
                  confirmation.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-[#071F5B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123e91]"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}