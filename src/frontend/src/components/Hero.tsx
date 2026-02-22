import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('executive-summary');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/atlas-mountains-hero.dim_1920x1080.png"
          alt="Atlas Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/80 via-forest-green/60 to-forest-green/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Restoring Algeria's<br />Green Heart
        </h1>
        <p className="text-xl md:text-2xl text-desert-sand mb-8 max-w-3xl mx-auto">
          Join the movement to protect 4.1 million hectares of forest and expand the Green Dam against desertification
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-desert-sand text-forest-green hover:bg-desert-sand-dark font-semibold text-lg px-8"
            onClick={() => {
              const element = document.getElementById('volunteer');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Take Action Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-forest-green font-semibold text-lg px-8"
            onClick={scrollToNext}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
}
