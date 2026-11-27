const dots = [
  { left: "left-2", top: "top-5", size: "h-5 w-5" },
  { left: "left-12", top: "top-5", size: "h-4 w-4" },
  { left: "left-24", top: "top-5", size: "h-6 w-6" },
  { left: "left-2", top: "top-24", size: "h-5 w-5" },
  { left: "left-12", top: "top-24", size: "h-5 w-5" },
  { left: "left-24", top: "top-24", size: "h-5 w-5" },
];

export default function TestimonialSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2E3138] py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Dot Decoration */}
      {dots.map((d, i) => (
        <span
          key={i}
          className={`absolute ${d.left} ${d.top} ${d.size} rounded-full bg-[#F7CD74]/40`}
        />
      ))}

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 md:gap-16 md:px-16 lg:grid-cols-2 lg:px-20">
        {/* Left: Testimonial Content */}
        <div className="relative z-10">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Testimonial
          </h2>

          {/* Quote */}
          <div className="mt-12 flex items-start gap-4 sm:mt-16 sm:gap-6 md:mt-20">
            <span className="mt-3 h-0.5 w-12 shrink-0 bg-[#F7CD74] sm:w-16 md:w-24" />

            <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
              <span className="text-[#F7CD74]">The design quality,</span>{" "}
              flexibility, documentation and support are all absolutely{" "}
              <span className="text-[#F7CD74]">excellent</span>. I buy the Avada
              theme for all my clients, knowing that whatever they require,
              Avada will be able to deliver.
            </p>
          </div>

          {/* Name & Position */}
          <div className="mt-10 pl-16 sm:mt-12 sm:pl-20 md:pl-28">
            <h3 className="font-serif text-xl font-bold text-white sm:text-2xl md:text-3xl">
              Josef Sharon
            </h3>

            <div className="mt-3 flex items-center gap-3 text-base text-gray-400 sm:text-lg md:text-xl">
              <span className="h-0.5 w-6 bg-[#F7CD74] sm:w-8" />
              CEO, Omisoft
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative mx-auto h-80 w-full max-w-md sm:h-96 md:h-112 lg:h-128 lg:max-w-none">
          <div className="absolute inset-0 rounded-l-3xl bg-[#F7CD74] sm:rounded-l-4xl" />

          <img
            src="/foto-dika.png"
            alt="Josef Sharon"
            className="absolute bottom-0 left-1/2 h-full max-w-full -translate-x-1/2 object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
