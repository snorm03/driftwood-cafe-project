import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-heading text-paper mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif text-paper mb-4">Driftwood Cafe</h3>
            <p className="text-paper text-opacity-80 text-sm">
              A cozy corner where coffee meets community.
              Serving warmth in every cup since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-paper mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-paper text-opacity-80 hover:text-accent-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-paper text-opacity-80 hover:text-accent-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-paper text-opacity-80 hover:text-accent-gold transition-colors text-sm">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-paper text-opacity-80 hover:text-accent-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-paper mb-4">Visit Us</h4>
            <div className="text-paper text-opacity-80 text-sm space-y-2">
              <p>123 Coastal Drive</p>
              <p>Seaside Town, ST 12345</p>
              <p className="pt-2">Mon - Fri: 7am - 7pm</p>
              <p>Sat - Sun: 8am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-paper border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-paper text-opacity-60 text-sm">
            &copy; {new Date().getFullYear()} Driftwood Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
