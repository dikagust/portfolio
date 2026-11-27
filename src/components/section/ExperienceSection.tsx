const experiences = [
  {
    year: "2026",
    title: "Fullstack Developer",
    company: "Scottech, Toledo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
  },
  {
    year: "2026",
    title: "Backend Developer",
    company: "Acme Corp, Jakarta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
  },
];

export default function ExperienceSection() {
  return (
    
<section className="relative min-h-[50vh] w-full bg-[#45464B] px-6 py-16 text-white sm:px-10 md:px-16 md:py-20 lg:px-20">

  {/* Heading */}
  <h1 className="mb-12 font-serif text-3xl font-bold tracking-wide drop-shadow-lg sm:text-4xl md:mb-16 md:text-5xl">
    Experience
  </h1>

  {/* Timeline */}
  <div className="relative mx-auto max-w-4xl">

    {/* Timeline Line */}
    <div className="absolute bottom-2 left-4 top-2 w-0.5 bg-white sm:left-5 md:left-24" />

    {experiences.map((exp) => (
      <div key={exp.year + exp.title} className="relative flex gap-5 pb-14 last:pb-0 sm:gap-8 md:pb-16">

        {/* Year Label */}
        <div className="relative z-10 w-10 shrink-0 sm:w-12 md:w-20">
          <div
            className="inline-block bg-[#5B5D60] px-3 py-2 text-base font-semibold sm:px-4 sm:text-xl md:text-2xl"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
            }}
          >
            {exp.year}
          </div>
        </div>

        {/* Timeline Dot */}
        <div className="absolute left-4 top-2 z-20 -translate-x-1/2 sm:left-5 md:left-24">
          <div className="h-5 w-5 rounded-full bg-[#F5C46A] shadow-[0_0_25px_rgba(245,196,106,0.6)] sm:h-6 sm:w-6" />
        </div>

        {/* Experience Content */}
        <div className="min-w-0 flex-1 pl-2 sm:pl-4 md:pl-6">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            {exp.title}
          </h2>

          <h3 className="mt-2 text-base sm:text-lg md:text-xl">
            {exp.company}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base md:mt-4 md:text-lg lg:text-xl">
            {exp.description}
          </p>
        </div>

      </div>
    ))}
  </div>
</section>

  );
}
