import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SpeciesShowcase() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Key Forest Species
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Native trees that form the backbone of Algeria's forest ecosystems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Aleppo Pine */}
          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-all hover:shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="/assets/generated/aleppo-pine.dim_600x400.png"
                alt="Aleppo Pine"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-forest-green text-white">Resilient</Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-forest-green mb-2">Aleppo Pine</h3>
              <p className="text-sm text-muted-foreground italic mb-4">(Pinus halepensis)</p>
              <p className="text-muted-foreground leading-relaxed">
                The <span className="font-semibold text-foreground">backbone of Algerian forests</span>, known for its 
                exceptional resilience to drought. This hardy species thrives in Mediterranean climates and plays a 
                crucial role in preventing soil erosion.
              </p>
            </CardContent>
          </Card>

          {/* Atlas Cedar */}
          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-all hover:shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="/assets/generated/atlas-cedar.dim_600x400.png"
                alt="Atlas Cedar"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-destructive text-white">Endangered</Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-forest-green mb-2">Atlas Cedar</h3>
              <p className="text-sm text-muted-foreground italic mb-4">(Cedrus atlantica)</p>
              <p className="text-muted-foreground leading-relaxed">
                A majestic, <span className="font-semibold text-foreground">endangered species</span> found in 
                high-altitude national parks like <span className="font-semibold text-foreground">Chréa and Theniet El Had</span>. 
                This iconic tree is a symbol of Algeria's mountain ecosystems.
              </p>
            </CardContent>
          </Card>

          {/* Cork Oak */}
          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-all hover:shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src="/assets/generated/cork-oak.dim_600x400.png"
                alt="Cork Oak"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-desert-sand text-forest-green">Economic Value</Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-forest-green mb-2">Cork Oak</h3>
              <p className="text-sm text-muted-foreground italic mb-4">(Quercus suber)</p>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Economically vital for the cork industry</span> and 
                essential for Mediterranean biodiversity. This species supports local economies while providing critical 
                habitat for wildlife.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
