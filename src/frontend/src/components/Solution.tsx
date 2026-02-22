import { Shield, Ruler, Calendar, Globe } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-forest-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Green Dam: A Living Shield
          </h2>
          <p className="text-xl text-desert-sand leading-relaxed">
            Le Barrage Vert — Algeria's monumental ecological defense against the advancing Sahara
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/generated/green-dam-aerial.dim_1200x600.png"
              alt="Aerial view of the Green Dam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-desert-sand rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Ruler className="w-6 h-6 text-forest-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Massive Scale</h3>
            <p className="text-desert-sand">
              <span className="text-2xl font-bold text-white">1,500 km</span> long and{' '}
              <span className="text-2xl font-bold text-white">20 km</span> wide
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-desert-sand rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-forest-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Historic Project</h3>
            <p className="text-desert-sand">
              Originally launched in the <span className="text-white font-semibold">1970s</span>, now being revitalized
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-desert-sand rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-forest-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Biological Shield</h3>
            <p className="text-desert-sand">
              Protecting against the Sahara's northern expansion
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-desert-sand rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-forest-green" />
            </div>
            <h3 className="text-xl font-bold mb-2">Climate Impact</h3>
            <p className="text-desert-sand">
              Essential for continental climate stability
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-white/90">
            The Green Dam is more than a reforestation project—it's a massive green belt acting as a biological 
            shield against desertification. This ambitious initiative plays a crucial role in maintaining regional 
            climate patterns and protecting agricultural lands from the encroaching desert.
          </p>
        </div>
      </div>
    </section>
  );
}
