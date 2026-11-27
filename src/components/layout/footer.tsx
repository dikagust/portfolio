import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative flex min-h-60 w-full flex-col justify-center bg-[#2F3238] px-6 py-20 sm:px-10 md:px-16 lg:px-20">
      {/* Social Media */}
      <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center gap-3 px-4 sm:gap-5 md:gap-8">
        <span className="h-0.5 flex-1 bg-[#F7CD74]" />

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-2xl text-white transition-colors hover:text-[#F7CD74] sm:text-3xl md:text-4xl"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl text-white transition-colors hover:text-[#F7CD74] sm:text-3xl md:text-4xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/6281388996902"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-2xl text-white transition-colors hover:text-[#F7CD74] sm:text-3xl md:text-4xl"
        >
          <FaWhatsapp />
        </a>

        <span className="h-0.5 flex-1 bg-[#F7CD74]" />
      </div>

      {/* Footer Content */}
      <div className="mx-auto w-full max-w-7xl text-center">
        <h1 className="pt-6 font-serif text-xl font-bold leading-relaxed text-[#F7CD74] sm:text-2xl md:text-3xl lg:text-4xl">
          " Thank You For Visiting My Portfolio "
        </h1>

        <p className="mt-6 text-sm text-gray-400 sm:text-base">
          © {new Date().getFullYear()} Dika Agustian. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
