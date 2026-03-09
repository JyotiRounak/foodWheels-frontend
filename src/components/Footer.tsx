
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 p-4 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-500 mb-3">🍔 FoodWheels</h3>
            <p className="text-gray">Your one-stop shop for quality food delivery.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-500 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-500 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Home</a></li>
              <li><a href="/products" className="text-gray-500 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Products</a></li>
              <li><a href="/contact" className="text-gray-500 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-gray mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-gray hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">FAQ</a></li>
              <li><a href="/shipping" className="text-gray hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Shipping</a></li>
              <li><a href="/returns" className="text-gray hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500">Returns</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray mb-3">Contact</h4>
            <p className="text-gray">Email: support@foodwheels.com</p>
            <p className="text-gray">Phone: +91 98765 43210</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray">
            © {new Date().getFullYear()} FoodWheels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
