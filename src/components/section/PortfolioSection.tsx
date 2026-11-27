const portfolios = [
  { title: "React JS", image: "/react.png" },
  { title: "TypeScript", image: "/typescript.png" },
  { title: "JavaScript", image: "/javascript.png" },
  { title: "React JS", image: "/react.png" },
  { title: "TypeScript", image: "/typescript.png" },
  { title: "JavaScript", image: "/javascript.png" },
];

export default function PortfolioSection() {
  return (
    <section className="w-full bg-[#2F3238] px-6 pb-20 pt-20 text-white sm:px-10 md:px-16 md:pb-28 md:pt-28 lg:px-20">
      {/* Heading */}
      <div className="mb-10 text-center sm:mb-12 md:mb-16">
        <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
          My Portfolio
        </h1>
      </div>

      {/* Portfolio Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolios.map((portfolio, index) => (
          <div
            key={`${portfolio.title}-${index}`}
            className="card w-full max-w-sm bg-gray-600 shadow-md transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <figure className="flex h-64 items-center justify-center p-10 sm:h-72">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="h-full w-full rounded-xl object-contain"
              />
            </figure>

            {/* Content */}
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl text-white sm:text-2xl">
                {portfolio.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 flex justify-center md:mt-16">
        <button className="btn btn-active btn-warning btn-md text-black sm:btn-lg">
          View More
        </button>
      </div>
    </section>
  );
}
