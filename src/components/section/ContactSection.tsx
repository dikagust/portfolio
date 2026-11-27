import { AiOutlineMail } from "react-icons/ai";
import { FiPhone, FiMapPin } from "react-icons/fi";

export function ContactSection() {
  return (
    <section className="relative min-h-[50vh] w-full bg-[#45464B] px-6 py-16 sm:px-10 md:px-16 md:py-20 lg:px-20">
      {/* Heading */}
      <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center gap-3 px-4 sm:gap-6">
        <span className="h-0.5 flex-1 bg-[#F7CD74]" />
        <h1 className="shrink-0 font-serif text-2xl font-bold leading-none tracking-wide text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
          Contact Me
        </h1>
        <span className="h-0.5 flex-1 bg-[#F7CD74]" />
      </div>

      {/* Contact Cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 justify-items-center gap-4 pt-8 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {/* Email */}
        <div className="card h-20 w-full max-w-sm bg-[#2F3238] shadow-sm">
          <div className="card-body flex-row items-center justify-center gap-3 p-4 sm:gap-4">
            <AiOutlineMail className="shrink-0 text-3xl text-white sm:text-4xl" />
            <h2 className="card-title break-all text-sm text-[#F7CD74] sm:text-base md:text-lg">
              dika.agustn@gmail.com
            </h2>
          </div>
        </div>

        {/* Phone */}
        <div className="card h-20 w-full max-w-sm bg-[#2F3238] shadow-sm">
          <div className="card-body flex-row items-center justify-center gap-3 p-4 sm:gap-4">
            <FiPhone className="shrink-0 text-3xl text-white sm:text-4xl" />
            <h2 className="card-title text-base text-[#F7CD74] sm:text-lg">
              0813 8899 6902
            </h2>
          </div>
        </div>

        {/* Location */}
        <div className="card h-20 w-full max-w-sm bg-[#2F3238] shadow-sm sm:col-span-2">
          <div className="card-body flex-row items-center justify-center gap-3 p-4 sm:gap-4">
            <FiMapPin className="shrink-0 text-3xl text-white sm:text-4xl" />
            <h2 className="card-title text-base text-[#F7CD74] sm:text-lg">
              DKI Jakarta, Indonesia
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
