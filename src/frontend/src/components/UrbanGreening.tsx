import { Building2, Thermometer, Leaf } from 'lucide-react';

export default function UrbanGreening() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
              Urban Greening Initiative
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bringing nature back to Algeria's cities through progressive legislation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-forest-green/5 rounded-2xl p-8 border-2 border-forest-green/20">
              <div className="bg-forest-green/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-4">Green Ratio Laws</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                New legislation requiring <span className="font-semibold text-foreground">"green ratios"</span> in 
                urban development ensures that every new construction project includes designated green spaces, 
                rooftop gardens, or tree planting zones.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These progressive policies are transforming how cities grow, prioritizing ecological balance 
                alongside urban expansion.
              </p>
            </div>

            <div className="bg-desert-sand/10 rounded-2xl p-8 border-2 border-desert-sand/30">
              <div className="bg-desert-sand/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Thermometer className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-2xl font-bold text-forest-green mb-4">Combating Heat Islands</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Urban areas experience the <span className="font-semibold text-foreground">"heat island" effect</span>, 
                where concrete and asphalt absorb and radiate heat, making cities significantly hotter than 
                surrounding rural areas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strategic tree planting and green infrastructure help cool urban environments, improving quality 
                of life for residents.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-forest-green to-forest-green-dark rounded-2xl p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 rounded-full p-4 flex-shrink-0">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Focus Cities</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Major urban centers like <span className="font-semibold text-desert-sand">Algiers and Oran</span> are 
                  leading the way in implementing these green initiatives. These cities serve as models for sustainable 
                  urban development across North Africa.
                </p>
                <p className="text-white/90 leading-relaxed">
                  By integrating nature into the urban fabric, Algeria is creating healthier, more livable cities 
                  for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
