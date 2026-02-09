"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`fixed w-full z-50 transition-all duration-300 border-b-4 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-4 border-quantum-red shadow-lg" 
          : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-5 group">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src="/logo.png" 
              alt="Quantum Metals Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-quantum-slate font-black uppercase tracking-tighter text-3xl md:text-4xl italic leading-none">
              Quantum<span className="text-quantum-red">Metals</span>
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em] mt-1">
              Nonie & Company Group
            </span>
          </div>
        </Link>

        {/* Large Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-black uppercase tracking-widest text-quantum-slate hover:text-quantum-red transition-all"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-quantum flex items-center gap-3 !py-4 !px-8">
            <Globe size={18} /> Global Vision
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-quantum-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b-8 border-quantum-red p-10 flex flex-col gap-8 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black uppercase tracking-widest text-quantum-slate"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}