import { MapPin, Trees, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Algeria's Ecological Challenge
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Algeria, the largest country in Africa, faces a unique ecological challenge. While its northern territory 
            is home to rich Mediterranean forests, the southern vastness is dominated by the Sahara. Currently, the 
            forest cover stands at approximately 4.1 million hectares.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-forest-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">Geographic Diversity</h3>
              <p className="text-muted-foreground text-center">
                Mediterranean forests in the north, vast Sahara in the south—a land of contrasts requiring tailored solutions
              </p>
            </CardContent>
          </Card>

          <Card className="border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-desert-sand/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">4.1 Million Hectares</h3>
              <p className="text-muted-foreground text-center">
                Current forest cover that must be protected and expanded to ensure ecological balance
              </p>
            </CardContent>
          </Card>

          <Card className="border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-forest-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">Dual Mission</h3>
              <p className="text-muted-foreground text-center">
                Protecting existing biodiversity in the north and expanding the Green Dam in steppe regions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
