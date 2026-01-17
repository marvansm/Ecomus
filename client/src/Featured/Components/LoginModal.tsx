"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import api from "@/services/api";
import { toast } from "react-hot-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToRegister,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.PostData("/auth/login", { email, password });

      localStorage.setItem("userToken", res.token);
      localStorage.setItem("userData", JSON.stringify(res.user));

      toast.success(`Welcome back, ${res.user.name}!`);
      onClose();
      window.location.reload();
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Login failed. Check your credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

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
          Log in
        </h2>

        {error && (
          <p className="text-red-500 mb-4 text-[14px] font-medium">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              className="w-full h-14 px-5 border border-gray-200 rounded-sm focus:border-black outline-none transition-colors text-[16px] placeholder:text-gray-400"
              placeholder="Password *"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-6 pt-2">
            <button
              type="button"
              className="text-[14px] text-gray-500 hover:text-black border-b border-gray-400 w-fit pb-0.5 transition-colors"
            >
              Forgot your password?
            </button>

            <div className="flex items-center gap-8 mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`w-[200px] h-14 bg-black text-white font-bold text-[16px] transition-all hover:bg-[#db1215] flex items-center justify-center rounded-sm ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>

              <button
                type="button"
                onClick={onSwitchToRegister}
                className="group flex items-center gap-1 text-[14px] font-bold text-black border-b border-black pb-0.5 hover:text-[#db1215] hover:border-[#db1215] transition-all"
              >
                New customer? Create your account <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
