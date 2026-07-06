// Footer.jsx

import {
  Facebook,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  HeartPulse,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f5f97] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid gap-10 py-8 md:grid-cols-3">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <img
                src="/assets/images/logo/logoW.png"
                alt="Nursinga Logo"
                className="h-16 w-auto"
              />
            </div>

            <p className="max-w-[250px] text-[15px] leading-7 text-white/90">
              Hillside Nursing Home is committed to providing compassionate,
              high-quality healthcare through experienced doctors, modern medical
              facilities, and patient-centered care for every individual.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-[#1f5f97]"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-[26px] font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-[15px]">
              <a href="#" className="transition hover:text-gray-200">
                Home
              </a>

              <a href="#" className="transition hover:text-gray-200">
                Contact
              </a>

              <a href="#" className="transition hover:text-gray-200">
                About
              </a>

              <a href="#" className="transition hover:text-gray-200">
                Blog
              </a>

              <a href="#" className="transition hover:text-gray-200">
                Services
              </a>

              <a href="#" className="transition hover:text-gray-200">
                FAQs
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-[26px] font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-[15px]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0" size={18} />
                <span>Plaza Y Floor, 1 Street, XYZ</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>yourname@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+123-456-7890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/30 py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-[13px] text-white/90 lg:flex-row">
            <p>
              Copyright © 2023 Hillside Nursinghome. All Rights Reserved.
            </p>

            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <span>|</span>

              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </div>

            <p>Powered by: MarcadsPro.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}