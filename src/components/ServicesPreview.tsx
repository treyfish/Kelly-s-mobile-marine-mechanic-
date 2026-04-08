import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-oswald text-navy text-3xl sm:text-4xl font-bold text-center uppercase mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="bg-navy/5 hover:bg-teal/10 rounded-lg p-4 sm:p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md group min-h-[48px]"
            >
              <div className="text-teal mb-3 flex justify-center group-hover:scale-110 transition-transform">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-oswald text-navy text-sm sm:text-base font-bold uppercase">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
