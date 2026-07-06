
// Navbar.jsx
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true, dropdown: true },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
    { name: "Pages", dropdown: true },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f3f3f3]/95 backdrop-blur-md shadow-lg shadow-black/10">
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <div className="m-2">
            <img
              src="/assets/images/logo/logo.png"
              alt="Hillside Nursing Home"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-12 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-300 ${
                  item.active
                    ? "text-[#84C221]"
                    : "text-[#262626] hover:text-[#84C221]"
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden h-[42px] items-center justify-center rounded-xl bg-[#84C221] px-8 font-medium text-white transition-all duration-300 hover:bg-[#6da61a] hover:shadow-lg lg:flex">
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[#84C221] lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[400px] border-t border-gray-200"
              : "max-h-0"
          }`}
        >
          <div className="bg-white px-6 py-6">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center gap-1 text-[15px] font-medium ${
                    item.active
                      ? "text-[#84C221]"
                      : "text-[#262626]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
              ))}

              <button className="mt-2 h-11 rounded-xl bg-[#84C221] font-medium text-white transition hover:bg-[#6da61a]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-[84px]" />
    </>
  );
}

