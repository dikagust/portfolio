export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#34353C]">
        <div className="max-lg:collapse max-w-6xl mx-auto px-6 py-4">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar text-white">
            <div className="navbar-start">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <button className="btn btn-ghost text-xl text-white">DK</button>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <button>About</button>
                </li>
                <li>
                  <button>Portfolio</button>
                </li>
                <li>
                  <button>Contact</button>
                </li>
              </ul>
            </div>
            <div className="navbar-end text-black">
              <input
                type="text"
                placeholder="Search"
                className="input w-64 lg:w-auto"
              />
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1">
            <ul className="menu text-white">
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Portfolio</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
