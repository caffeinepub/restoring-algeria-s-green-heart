import { Flame, Thermometer, Axe, Mountain } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Crisis() {
  return (
    <section id="crisis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            The Deforestation Crisis
          </h2>
          <Alert className="bg-destructive/10 border-destructive/30 mb-8">
            <AlertTitle className="text-2xl font-bold text-destructive mb-2">
              Loss of 30,000+ hectares annually
            </AlertTitle>
            <AlertDescription className="text-lg text-destructive/90">
              Algeria's forests are under severe threat from multiple interconnected factors
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Wildfires */}
          <div className="bg-card rounded-lg p-8 border-2 border-destructive/20 hover:border-destructive/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-destructive/10 rounded-full p-3 flex-shrink-0">
                <Flame className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green mb-2">Wildfires</h3>
                <p className="text-sm text-muted-foreground mb-3">The Most Immediate Threat</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Between 2021 and 2024, massive fires destroyed thousands of hectares, particularly in the 
              <span className="font-semibold text-foreground"> Kabylie and El Tarf regions</span>. These devastating 
              blazes have become increasingly frequent and intense.
            </p>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src="/assets/generated/wildfire-crisis.dim_800x500.png"
                alt="Wildfire damage in Algerian forests"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Climatic Stress */}
          <div className="bg-card rounded-lg p-8 border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-desert-sand/30 rounded-full p-3 flex-shrink-0">
                <Thermometer className="w-8 h-8 text-forest-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green mb-2">Climatic Stress</h3>
                <p className="text-sm text-muted-foreground mb-3">Extreme Heat & Drought</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Prolonged droughts and heatwaves <span className="font-semibold text-foreground">often exceeding 45°C</span> weaken 
              indigenous trees, making them susceptible to pests and disease. Climate change is intensifying these conditions, 
              creating a vicious cycle of forest degradation.
            </p>
          </div>

          {/* Human Impact */}
          <div className="bg-card rounded-lg p-8 border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-forest-green/10 rounded-full p-3 flex-shrink-0">
                <Axe className="w-8 h-8 text-forest-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green mb-2">Human Impact</h3>
                <p className="text-sm text-muted-foreground mb-3">Illegal Logging & Overgrazing</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Illegal logging for charcoal and uncontrolled livestock grazing (overgrazing) prevents the natural regrowth 
              of young saplings. These unsustainable practices strip forests of their regenerative capacity.
            </p>
          </div>

          {/* Soil Erosion */}
          <div className="bg-card rounded-lg p-8 border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-desert-sand/30 rounded-full p-3 flex-shrink-0">
                <Mountain className="w-8 h-8 text-forest-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-forest-green mb-2">Soil Erosion</h3>
                <p className="text-sm text-muted-foreground mb-3">Land Degradation</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As trees are lost, the fertile topsoil is washed away by rare but torrential rains, leading to severe 
              land degradation. This creates barren landscapes unable to support new forest growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
