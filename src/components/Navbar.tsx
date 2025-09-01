'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  UserGroupIcon, 
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-white">NixiaPlay</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <HomeIcon className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/mlbb"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <ShieldCheckIcon className="w-4 h-4" />
                <span>Mobile Legends</span>
              </Link>
              <Link
                href="/roblox"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <CubeIcon className="w-4 h-4" />
                <span>Roblox</span>
              </Link>
              <Link
                href="/community"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <UserGroupIcon className="w-4 h-4" />
                <span>Community</span>
              </Link>
              <Link
                href="/admin"
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2"
              >
                <Cog6ToothIcon className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/mlbb"
              className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <ShieldCheckIcon className="w-5 h-5" />
              <span>Mobile Legends</span>
            </Link>
            <Link
              href="/roblox"
              className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <CubeIcon className="w-5 h-5" />
              <span>Roblox</span>
            </Link>
            <Link
              href="/community"
              className="text-gray-300 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <UserGroupIcon className="w-5 h-5" />
              <span>Community</span>
            </Link>
            <Link
              href="/admin"
              className="bg-purple-600 hover:bg-purple-700 text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Cog6ToothIcon className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
