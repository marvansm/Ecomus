"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer bg-white pt-20 pb-8 border-t border-gray-100">
      <div className="max-w-[1540px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & Contact Column */}
          <div className="flex flex-col gap-8">
            <Link href="/">
              <Image
                src="https://themesflat.co/html/ecomus/images/logo/logo@2x.png"
                alt="Ecomus"
                width={136}
                height={40}
                className="mb-8"
              />
            </Link>
            <div className="flex flex-col gap-4 text-[14px] leading-relaxed text-gray-900">
              <p>
                Address: 1234 Fashion Street, Suite 567,
                <br />
                New York, NY 10001
              </p>
              <p>
                Email: <span className="font-medium">info@fashionshop.com</span>
              </p>
              <p>
                Phone: <span className="font-medium">(212) 555-1234</span>
              </p>
              <Link
                href="/directions"
                className="flex items-center gap-1.5 font-bold border-b border-black w-fit pb-0.5 mt-2 hover:text-[#db1215] hover:border-[#db1215] transition-all"
              >
                Get direction <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={18} />, label: "facebook" },
                { icon: <Twitter size={18} />, label: "twitter" },
                { icon: <Instagram size={18} />, label: "instagram" },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.84.12-.94.42-1.62 1.27-1.77 2.26-.01.03-.02.06-.02.09.01.67.4 1.34.93 1.75.77.6 1.83.75 2.74.37.71-.3 1.16-.94 1.25-1.67.07-2.13.03-4.27.03-6.41V.02z" />
                    </svg>
                  ),
                  label: "tiktok",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121C10.145 23.901 11.059 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                  ),
                  label: "pinterest",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={`#${social.label}`}
                  className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-[17px] font-bold text-black mb-8">Help</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-gray-900 font-medium">
              {[
                "Privacy Policy",
                "Returns + Exchanges",
                "Shipping",
                "Terms & Conditions",
                "FAQ's",
                "Compare",
                "My Wishlist",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
                    className="hover:text-[#db1215] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-[17px] font-bold text-black mb-8">About us</h4>
            <ul className="flex flex-col gap-4 text-[14px] text-gray-900 font-medium">
              {["Our Story", "Visit Our Store", "Contact Us", "Account"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.replace(/\s+/g, "-").toLowerCase()}`}
                      className="hover:text-[#db1215] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Sign Up Column */}
          <div>
            <h4 className="text-[17px] font-bold text-black mb-8">
              Sign Up for Email
            </h4>
            <p className="text-[14px] leading-relaxed text-gray-900 mb-8 max-w-[300px]">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>
            <div className="relative flex mb-8">
              <input
                type="email"
                placeholder="Enter your email...."
                className="w-full h-14 bg-white border border-gray-100 px-6 text-[14px] focus:outline-none focus:border-black transition-colors"
                id="footer-email-input"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-sm text-[14px] font-bold flex items-center gap-2 hover:bg-[#db1215] transition-colors">
                Subscribe <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Currency & Language */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-2 cursor-pointer text-[14px] font-bold text-black group">
                <span className="flex items-center gap-1.5 border-b border-transparent group-hover:border-black pb-0.5">
                  <svg width="18" height="14" viewBox="0 0 16 12" fill="none">
                    <rect width="16" height="12" fill="#F0F0F0" />
                    <path
                      d="M0 0H16V1.33333H0V0ZM0 2.66667H16V4H0V2.66667ZM0 5.33333H16V6.66667H0V5.33333ZM0 8H16V9.33333H0V8ZM0 10.6667H16V12H0V10.6667Z"
                      fill="#D80027"
                    />
                    <path d="M0 0H8.53333V6.4H0V0Z" fill="#2E52B2" />
                  </svg>
                  USD
                </span>
                <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-2 cursor-pointer text-[14px] font-bold text-black group">
                <span className="border-b border-transparent group-hover:border-black pb-0.5">
                  English
                </span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-gray-400">
            © 2025 Ecomus Store. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            {[
              "https://themesflat.co/html/ecomus/images/payments/img-1.png",
              "https://themesflat.co/html/ecomus/images/payments/img-2.png",
              "https://themesflat.co/html/ecomus/images/payments/img-3.png",
              "https://themesflat.co/html/ecomus/images/payments/img-4.png",
              "https://themesflat.co/html/ecomus/images/payments/img-5.png",
            ].map((img, idx) => (
              <div key={idx} className="h-4 w-auto flex items-center px-1">
                <img
                  src={img}
                  alt="payment"
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
