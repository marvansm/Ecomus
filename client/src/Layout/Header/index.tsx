"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import LoginModal from "@/Featured/Components/LoginModal";
import RegisterModal from "@/Featured/Components/RegisterModal";
import CartDrawer from "@/Featured/Components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { LogOut, User as UserIcon } from "lucide-react";
import { toast } from "react-hot-toast";

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUser(null);
    toast.success("Logged out successfully");

    window.location.reload();
  };

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="relative flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <div className="flex items-center gap-6 text-[12px] font-semibold text-black">
          <div className="flex items-center gap-1.5 cursor-pointer">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect width="16" height="12" fill="#F0F0F0" />
              <path
                d="M0 0H16V1.33333H0V0ZM0 2.66667H16V4H0V2.66667ZM0 5.33333H16V6.66667H0V5.33333ZM0 8H16V9.33333H0V8ZM0 10.6667H16V12H0V10.6667Z"
                fill="#D80027"
              />
              <path d="M0 0H8.53333V6.4H0V0Z" fill="#2E52B2" />
            </svg>
            <span>USD</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2.5 4L5 6.5L7.5 4"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer">
            <span>English</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2.5 4L5 6.5L7.5 4"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-[30px] font-bold tracking-tighter text-black"
          >
            <Image
              src="https://themesflat.co/html/ecomus/images/logo/logo@2x.png"
              alt=""
              width={136}
              height={100}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2 text-black">
          <div className="p-2 cursor-pointer">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {user ? (
            <div className="flex items-center gap-4 ml-2">
              <Link
                href="/profile"
                className="flex items-center gap-2 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-black font-bold text-[13px] uppercase tracking-wider group-hover:bg-black group-hover:text-white transition-all">
                  {user.name[0]}
                  {user.sirname[0]}
                </div>
                <span className="text-[13px] font-bold hidden md:block group-hover:text-[#db1215] transition-colors">
                  {user.name}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 hover:text-[#db1215] transition-colors"
                title="Logout"
              >
                <LogOut size={20} strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            <div className="p-2 cursor-pointer" onClick={openLogin}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          )}

          <div className="p-2 cursor-pointer relative">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="absolute top-1.5 right-1 w-4 h-4 rounded-full bg-[#db1215] text-white text-[9px] flex items-center justify-center font-bold">
              0
            </span>
          </div>
          <div
            className="p-2 cursor-pointer relative"
            onClick={() => setIsCartOpen(true)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M8 8V4a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="absolute top-1.5 right-1 w-4 h-4 rounded-full bg-[#db1215] text-white text-[9px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      <nav className="flex justify-center bg-white">
        <ul className="flex items-center gap-10 py-5 text-[15px] font-semibold text-black">
          {["Home", "Shop", "Products", "Pages", "Blog"].map((item) => (
            <li
              key={item}
              className="flex items-center gap-1 cursor-pointer hover:text-[#db1215] transition-colors"
            >
              <span>{item}</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2.5 4L5 6.5L7.5 4"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          ))}
          <li className="cursor-pointer hover:text-[#db1215] transition-colors">
            Buy now
          </li>
        </ul>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeModals}
        onSwitchToRegister={openRegister}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeModals}
        onSwitchToLogin={openLogin}
      />

      <CartDrawer />
    </header>
  );
};

export default Header;
