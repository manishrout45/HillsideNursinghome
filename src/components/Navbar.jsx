// Navbar.jsx
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/service",
      dropdown: true,
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

const serviceLinks = [
  {
    name: "On-site Lab & Pathology",
    slug: "lab-pathology",
  },
  {
    name: "Advanced Ambulance Service",
    slug: "ambulance-service",
  },
  {
    name: "Advanced Modular OTs",
    slug: "modular-ots",
  },
  {
    name: "Dedicated ICU",
    slug: "dedicated-icu",
  },
  {
    name: "Special Fee Consultation for Sr. Citizens",
    slug: "senior-citizen-consultation",
  },
  {
    name: "Full-Time Surgical Assistance",
    slug: "surgical-assistance",
  },
];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f3f3f3]/95 backdrop-blur-md shadow-lg shadow-black/10">
        <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <NavLink to="/" className="m-2">
            <img
              src="/assets/images/logo/logo.png"
              alt="Hillside Nursing Home"
              className="h-16 w-auto"
            />
          </NavLink>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden items-center gap-12 lg:flex">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="group relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[#84C221]"
                          : "text-[#262626] hover:text-[#84C221]"
                      }`
                    }
                  >
                    {item.name}
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </NavLink>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full invisible mt-6 w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl opacity-0 transition-all duration-300 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
                    <div className="py-2">
                      {serviceLinks.map((service) => (
                        <NavLink
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="block px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-lime-50 hover:text-[#84C221]"
                        >
                          {service.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[15px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#84C221]"
                        : "text-[#262626] hover:text-[#84C221]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden h-[42px] items-center justify-center rounded-xl bg-[#84C221] px-8 font-medium text-white transition-all duration-300 hover:bg-[#6da61a] hover:shadow-lg lg:flex"
          >
            Get Started
          </NavLink>

          {/* ================= Mobile Toggle ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[#84C221] transition lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[700px] border-t border-gray-200"
              : "max-h-0"
          }`}
        >
          <div className="bg-white px-6 py-6">
            <div className="flex flex-col gap-5">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="flex w-full items-center justify-between text-[15px] font-medium text-[#262626]"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? "max-h-96 mt-4" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 flex flex-col gap-3 border-l border-gray-200 pl-4">
                        {serviceLinks.map((service) => (
                          <NavLink
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="text-sm text-gray-600 transition hover:text-[#84C221]"
                          >
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-[#84C221]"
                          : "text-[#262626] hover:text-[#84C221]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex h-11 items-center justify-center rounded-xl bg-[#84C221] font-medium text-white transition hover:bg-[#6da61a]"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-[84px]" />
    </>
  );
}