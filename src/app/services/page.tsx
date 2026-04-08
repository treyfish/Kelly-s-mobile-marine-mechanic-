import { SERVICES } from "@/lib/constants";
import ServiceIcon from "@/components/ServiceIcon";
import BrandTicker from "@/components/BrandTicker";
import WaveDivider from "@/components/WaveDivider";
import Link from "next/link";

export const metadata = {
  title: "Services | Kelly's Mobile Marine Service",
  description: "Full range of mobile marine mechanic services: engine repair, electrical, rigging, GPS, fuel systems, and more. Serving Cedar Key, FL.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-0 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h1 className="font-oswald text-navy text-4xl sm:text-5xl font-bold uppercase mb-3">
            Our Services
          </h1>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            From routine maintenance to major repairs — Kelly brings the shop to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-navy/10 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="text-teal mb-4 group-hover:scale-110 transition-transform">
                <ServiceIcon name={service.icon} className="w-12 h-12" />
              </div>
              <h2 className="font-oswald text-navy text-lg font-bold uppercase mb-2">
                {service.title}
              </h2>
              <p className="text-navy/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/book"
            className="inline-block bg-gold hover:bg-gold/90 text-navy font-oswald font-bold px-10 py-4 rounded text-lg uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] min-h-[48px]"
          >
            Book Your Service
          </Link>
        </div>
      </div>

      <WaveDivider fill="#f5f5f5" />
      <div className="bg-[#f5f5f5]">
        <BrandTicker />
      </div>
    </div>
  );
}
