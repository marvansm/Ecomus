"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isMounted && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-100 flex items-center justify-center transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}
    >
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-[700px] bg-white rounded-md shadow-2xl p-16 transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-black hover:scale-110 transition-transform duration-200"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <h2 className="text-[32px] font-medium text-black mb-10 text-left">
          Register
        </h2>
        <form className="space-y-5">
          <div className="relative">
            <input
              type="text"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="First name"
              required
            />
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="Last name"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="Email *"
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="Password *"
              required
            />
          </div>

          <div className="flex items-center gap-8 mt-10">
            <button
              type="submit"
              className="w-[200px] h-14 bg-black text-white font-bold text-[16px] transition-all hover:bg-[#db1215] flex items-center justify-center rounded-sm"
            >
              Register
            </button>

            <button
              type="button"
              onClick={onSwitchToLogin}
              className="group flex items-center gap-1 text-[14px] font-bold text-black border-b border-black pb-0.5 hover:text-[#db1215] hover:border-[#db1215] transition-all"
            >
              Already have an account? Log in here <ArrowUpRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
