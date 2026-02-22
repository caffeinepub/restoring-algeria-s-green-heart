import { Leaf } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-green/95 backdrop-blur-sm border-b border-forest-green-light/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-desert-sand rounded-full p-2">
              <Leaf className="w-6 h-6 text-forest-green" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Algeria Green Initiative</h1>
              <p className="text-xs text-desert-sand">Restoring Our Future</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('crisis')}
              className="text-white hover:text-desert-sand transition-colors text-sm font-medium"
            >
              The Crisis
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-white hover:text-desert-sand transition-colors text-sm font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('volunteer')}
              className="text-white hover:text-desert-sand transition-colors text-sm font-medium"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-white hover:text-desert-sand transition-colors text-sm font-medium"
            >
              Learn More
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
