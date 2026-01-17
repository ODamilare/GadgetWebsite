"use client";

export function FooterSection() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Column — Company Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">Sephiroth</h1>
          <p className="text-gray-400 text-sm max-w-xs">
            Your ultimate marketplace for buying, selling, and trading the latest gadgets. Discover, connect, and trade with confidence.
          </p>
        </div>

        {/* Products Column */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Products & Marketplace</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition hover:underline">New Gadgets</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Refurbished Devices</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Gaming Gear</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Trade Offers</a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Support & Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Warranty & Repairs</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Trade-In Program</a></li>
          </ul>
        </div>

        {/* Legal & Connect Column */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Legal & Connect</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-white transition hover:underline">Contact Us</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-gray-800 pt-6 max-w-7xl mx-auto px-6 text-gray-500 text-xs space-y-2 text-center md:text-left">
        <p>© 2026 Sephiroth. All rights reserved. All content, images, and trademarks are property of their respective owners.</p>
        <p>United States | <a href="#" className="hover:text-white transition hover:underline">Legal</a> | <a href="#" className="hover:text-white transition hover:underline">Privacy Policy</a> | <a href="#" className="hover:text-white transition hover:underline">Site Map</a></p>
      </div>
    </footer>
  );
}
