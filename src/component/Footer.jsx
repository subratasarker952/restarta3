import { Link } from "react-router-dom";
import { Facebook, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-20 border-t">
      <div className="container mx-auto px-4 py-12">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-primary">HERO.IO</h2>
            <p className="text-sm mt-3 text-gray-500">
              Discover amazing apps and tools to boost your productivity,
              entertainment and daily life.
            </p>

            <div className="flex gap-4 mt-4">
              <a className="hover:text-primary">
                <Facebook size={20} />
              </a>
              <a className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a className="hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/apps" className="hover:text-primary">Apps</Link></li>
              <li><Link to="/installation" className="hover:text-primary">Installation</Link></li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="font-semibold mb-4">Apps</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary">Top Apps</Link></li>
              <li><Link className="hover:text-primary">New Apps</Link></li>
              <li><Link className="hover:text-primary">Trending Apps</Link></li>
              <li><Link className="hover:text-primary">Popular Downloads</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-primary">Contact</Link></li>
              <li><Link className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary">Terms of Service</Link></li>
              <li><Link className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} AppStore. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;