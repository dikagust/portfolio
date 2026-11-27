export default function SkillsSection() {
  return (
    <>
      <div className="bg-[#2F3238] text-white">
        <div className="flex justify-center mb-5">
          <h1 className="font-serif text-5xl font-bold">My Skills</h1>
        </div>

        {/* Skills Cards Baris 1 */}
        <div className="flex flex-wrap justify-center gap-6 pt-10 shadow-sm">
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-20 pt-15">
              <img
                src="./../public/react.png"
                alt="React"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">React JS</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-20 pt-15">
              <img
                src="./../public/typescript.png"
                alt="TypeScript"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">TypeScript</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-20 pt-15">
              <img
                src="./../public/javascript.png"
                alt="Javascript"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Javascript</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center gap-2 px-20 pt-15">
              <img
                src="./../public/html.png"
                alt="HTML"
                className="rounded-xl"
              />
              <img src="./../public/css.png" alt="CSS" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">HTML & CSS</h2>
            </div>
          </div>
        </div>

        {/* Skills Cards Baris 2 */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 shadow-sm">
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-20 pt-15">
              <img
                src="./../public/postgresql.png"
                alt="PostgreSQL"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">PostgreSQL</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-18 pt-16">
              <img
                src="./../public/MySQL.png"
                alt="MySQL"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">MySQL</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-18 pt-18">
              <img
                src="./../public/tailwind-css.png"
                alt="Tailwind CSS"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Tailwind CSS</h2>
            </div>
          </div>
          <div className="card bg-gray-600 w-60 h-60">
            <figure className="justify-center px-20 pt-15">
              <img src="./../public/git.png" alt="Git" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Git Source Control</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
