// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>📍 123 Charity Lane, New York, NY 10001</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@dwar.org</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">🌐</a>
              <a href="#" className="hover:text-blue-400">🐦</a>
              <a href="#" className="hover:text-pink-500">📸</a>
              <a href="#" className="hover:text-blue-600">🔗</a>
            </div>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and impact stories.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center py-4 bg-gray-800">
          <p>© 2025 D-WAR. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  