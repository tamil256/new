import React from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ArrowRight, TrendingUp, Award, Clock } from 'lucide-react';

function App() {
  const featuredProducts = [
    {
      title: "Sony WH-1000XM4 Wireless Headphones",
      description: "Industry-leading noise canceling with Dual Noise Sensor technology",
      price: "$348.00",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800",
      affiliateLink: "https://amzn.to/42MwCVa" // Replace with actual Amazon affiliate link
    },
    {
      title: "Kindle Paperwhite",
      description: "Now with a 6.8\" display and thinner borders, adjustable warm light",
      price: "$139.99",
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=800",
      affiliateLink: "#" // Replace with actual Amazon affiliate link
    },
    {
      title: "Instant Pot Duo Plus",
      description: "9-in-1 Electric Pressure Cooker, Sterilizer, Slow Cooker, Rice Cooker",
      price: "$119.95",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&q=80&w=800",
      affiliateLink: "#" // Replace with actual Amazon affiliate link
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-500 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Discover the Best Deals on Amazon</h1>
            <p className="text-xl mb-8">We curate the top products and best deals so you don't have to.</p>
            <a href="#featured" className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Explore Deals <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Best Sellers</h3>
                <p className="text-gray-600">Discover top-rated products loved by thousands</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Verified Reviews</h3>
                <p className="text-gray-600">Honest reviews from real customers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Daily Updates</h3>
                <p className="text-gray-600">Fresh deals and discounts every day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Never Miss a Deal</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for daily updates on the best Amazon deals</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About DealFinder</h3>
              <p className="text-sm">We help you find the best deals on Amazon. Our recommendations are carefully curated to ensure you get the best value for your money.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Today's Deals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>© 2024 DealFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
