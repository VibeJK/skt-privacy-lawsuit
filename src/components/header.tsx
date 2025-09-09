"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeTd9yGOdt59W0wH19-8V0ULpmLwP1tB3qd1km-drXz9aH-kQ/viewform?usp=header",
      "_blank"
    );
  };

  const menuItems = [
    { label: "참여 안내", sectionId: "participation-guide" },
    { label: "사건 개요", sectionId: "incident-timeline" },
    { label: "소송 참여", sectionId: "lawsuit-participation" },
    { label: "FAQ", sectionId: "faq-section" },
    { label: "변호사 소개", sectionId: "lawyer-introduction" },
    { label: "문의", sectionId: "application-form" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="https://hwaumlaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/law-firm-logo.jpg"
                alt="법률사무소 화음"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-axencis-5 hover:text-axencis-2 font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={openGoogleForm}
              className="bg-axencis-2 hover:bg-axencis-3 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              참여 신청서 작성
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-axencis-5 hover:text-axencis-2 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-axencis-4">
            <nav className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-4 py-2 text-axencis-5 hover:text-axencis-2 hover:bg-axencis-4 hover:bg-opacity-20 font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={openGoogleForm}
                  className="w-full bg-axencis-2 hover:bg-axencis-3 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  참여 신청서 작성
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}