import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Now | Kelly's Mobile Marine Service",
  description: "Book your mobile marine service appointment. Kelly will confirm within 2 hours.",
};

export default function BookPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-oswald text-navy text-4xl sm:text-5xl font-bold uppercase mb-3">
            Book Your Service
          </h1>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Fill out the form below and Kelly will confirm your appointment within 2 hours.
          </p>
        </div>
        <BookingForm />
      </div>
    </div>
  );
}
