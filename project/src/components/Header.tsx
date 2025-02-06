import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8" />
            <h1 className="text-2xl font-bold">DealFinder</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>
          </div>

          <nav>
            <ul className="flex gap-6">
              <li><a href="#deals" className="hover:text-amber-200 transition-colors">Today's Deals</a></li>
              <li><a href="#categories" className="hover:text-amber-200 transition-colors">Categories</a></li>
              <li><a href="#reviews" className="hover:text-amber-200 transition-colors">Reviews</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}