export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 w-full border-b border-gray-200 bg-white">
      <div className="px-5 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a
              href="#"
              className="flex items-center text-xl font-bold lg:ml-2.5"
            >
              <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                className="mr-2 h-6"
                alt="Windster Logo"
              />
              <span className="self-center whitespace-nowrap text-teal-700">
                SDQ DEMO
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 rounded-full"
              src="https://avatar.iran.liara.run/public/35"
              alt="Neil image"
            />
            <p className="text-slate-700 font-medium">SangDQ</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
