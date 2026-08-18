import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] md:hidden">
      <a
        href={siteConfig.phoneLink}
        className="flex items-center justify-center gap-2 rounded-l-xl bg-[#071F5B] px-4 py-3 text-sm font-bold text-white"
      >
        <Phone size={18} />
        Call Now
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 rounded-r-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}