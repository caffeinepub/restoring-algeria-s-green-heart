import { Target, TreePine, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function NationalPlan() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            National Reforestation Plan
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A state-led initiative to plant billions of trees over the next decade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-forest-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">Ambitious Goal</h3>
              <p className="text-muted-foreground text-center">
                Planting <span className="font-semibold text-foreground">billions of trees</span> to restore and expand forest cover
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-desert-sand/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">Timeline</h3>
              <p className="text-muted-foreground text-center">
                A comprehensive <span className="font-semibold text-foreground">decade-long</span> commitment to ecological restoration
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-colors">
            <CardContent className="pt-6">
              <div className="bg-forest-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-3 text-center">Focus Species</h3>
              <p className="text-muted-foreground text-center">
                High-value native species selected for maximum ecological impact
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto bg-forest-green/5 rounded-2xl p-8 border-2 border-forest-green/20">
          <h3 className="text-2xl font-bold text-forest-green mb-6 text-center">Priority Species</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="bg-forest-green/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-forest-green" />
              </div>
              <div>
                <h4 className="font-bold text-forest-green">Aleppo Pine</h4>
                <p className="text-sm text-muted-foreground">Drought-resistant backbone species</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="bg-forest-green/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-forest-green" />
              </div>
              <div>
                <h4 className="font-bold text-forest-green">Cork Oak</h4>
                <p className="text-sm text-muted-foreground">Economically vital for cork industry</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
              <div className="bg-forest-green/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <TreePine className="w-6 h-6 text-forest-green" />
              </div>
              <div>
                <h4 className="font-bold text-forest-green">Atlas Cedar</h4>
                <p className="text-sm text-muted-foreground">Endangered high-altitude species</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
