import { REVIEWS } from "@/lib/constants";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-oswald text-navy text-3xl sm:text-4xl font-bold text-center uppercase mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-navy/5 rounded-lg p-6 sm:p-8"
            >
              <Stars count={review.rating} />
              <p className="text-navy/80 mb-4 italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-oswald text-navy font-bold uppercase tracking-wider">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
