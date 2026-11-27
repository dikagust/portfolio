export default function HeroSection() {
  return (
    <section className="relative min-h-187.5 overflow-hidden bg-[#34353C] text-white shadow-[0_8px_20px_rgba(0,0,0,0.25)] md:min-h-screen">
      {/* Foto Profile */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end">
        <img
          src="/foto-dika.png"
          alt="Foto Dika"
          className="h-auto w-[75%] max-w-162.5 object-contain object-bottom opacity-90 sm:w-[65%] md:w-[55%] lg:w-[52%] xl:w-[48%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-187.5 max-w-350 items-center px-6 py-16 sm:px-10 md:min-h-screen md:px-16 lg:px-20">
        <div className="w-full max-w-2xl text-left">
          <h1 className="text-4xl font-bold text-amber-500 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Dika Agustian
          </h1>

          <h2 className="pt-3 text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl">
            Fullstack Developer
          </h2>

          <p className="max-w-3xl py-5 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            Building modern, responsive, and scalable web applications with
            passion and purpose
          </p>

          <a
            href="https://wa.me/6281388996902"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-warning"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
