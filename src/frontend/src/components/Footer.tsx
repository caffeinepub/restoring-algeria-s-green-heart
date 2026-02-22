import { Leaf } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

        <div className="border-t border-white/20 pt-8">
          <div className="text-center mb-4">
            <p className="text-white/80">
              © {currentYear} Algeria Green Initiative. All rights reserved.
            </p>
          </div>
          
          {/* Contributors Section */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-desert-sand mb-2">Contributors</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/80 text-sm">
              <span>Youcef Senassia</span>
              <span className="hidden sm:inline">•</span>
              <span>Hamo Abdou</span>
              <span className="hidden sm:inline">•</span>
              <span>Hosam Chaili</span>
              <span className="hidden sm:inline">•</span>
              <span>Yasser Belbahir</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
