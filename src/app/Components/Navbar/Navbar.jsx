'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-bold text-xl"><Link href='/'>Student Portal</Link></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/addstudents/addboys" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === '/addstudents/addboys' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75'
                }`}
              >
                Boys Registration
              </Link>

              <Link 
                href="/allstudents/boys" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === '/allstudents/boys' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75'
                }`}
              >
                All Boys
              </Link>

              <Link 
                href="/allstudents/girls" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === '/allstudents/girls' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75'
                }`}
              >
                All Girls
              </Link>
              
              <Link 
                href="/addstudents/addgirls" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  pathname === '/addstudents/addgirls' 
                    ? 'bg-white text-purple-600 shadow-md' 
                    : 'text-white hover:bg-purple-500 hover:bg-opacity-75'
                }`}
              >
                Girls Registration
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/addstudents/addboys" 
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              pathname === '/addstudents/addboy' 
                ? 'bg-white text-indigo-600' 
                : 'text-white hover:bg-indigo-500 hover:bg-opacity-75'
            }`}
          >
            Boys Registration
          </Link>
          
          <Link 
            href="/addstudents/addgirls" 
            className={`block px-3 py-2 rounded-md text-base font-medium w-full ${
              pathname === '/addstudents/addgirls' 
                ? 'bg-white text-purple-600' 
                : 'text-white hover:bg-purple-500 hover:bg-opacity-75'
            }`}
          >
            Girls Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;