"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Added for your logo
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Processing", href: "#processing" },
    { name: "Engineering", href: "#engineering" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md py-4 border-slate-200 shadow-sm" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area - Updated to use your logo.png */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 overflow-hidden">
            <Image 
              src="/logo.png" 
              alt="Quantum Metals Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-quantum-slate font-black uppercase tracking-tighter text-2xl md:text-3xl italic">
              Quantum<span className="text-quantum-red">Metals</span>
            </span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              Nonie & Company Group
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Increased font size for readability */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-quantum-slate hover:text-quantum-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-quantum !py-3 !px-6 !text-[10px] flex items-center gap-2">
            <Globe size={14} /> Global Vision
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-quantum-slate p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black uppercase tracking-widest text-quantum-slate hover:text-quantum-red"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-quantum w-full justify-center flex items-center gap-3">
            <Globe size={18} /> Global Vision
          </button>
        </div>
      )}
    </nav>
  );
}