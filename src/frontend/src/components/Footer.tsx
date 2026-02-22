import { Heart, Leaf } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'algeria-reforestation';

  return (
    <footer className="bg-forest-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-desert-sand rounded-full p-2">
                <Leaf className="w-6 h-6 text-forest-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Algeria Green Initiative</h3>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Working together to restore Algeria's forests and combat desertification for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-desert-sand">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('crisis');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  The Crisis
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('solution');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Green Dam Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('volunteer');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-desert-sand">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Algeria Green Initiative. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-desert-sand hover:text-white font-semibold transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
