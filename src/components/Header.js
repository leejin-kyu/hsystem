"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/data/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = siteContent;

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-cyan-700 hover:to-sky-700 transition-all duration-300">
            {header.logo}
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
            >
              {header.menu.home}
            </Link>
            <Link
              href="/about"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
            >
              {header.menu.about}
            </Link>
            <Link
              href="/business"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
            >
              {header.menu.business}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-full font-bold hover:from-blue-700 hover:via-cyan-700 hover:to-sky-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {header.menu.contact}
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link
              href="/"
              className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {header.menu.home}
            </Link>
            <Link
              href="/about"
              className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {header.menu.about}
            </Link>
            <Link
              href="/business"
              className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {header.menu.business}
            </Link>
            <Link
              href="/contact"
              className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white rounded-full font-bold hover:from-blue-700 hover:via-cyan-700 hover:to-sky-700 transition-all shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {header.menu.contact}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
