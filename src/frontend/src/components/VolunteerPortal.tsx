import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Users, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';

export default function VolunteerPortal() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [eventId, setEventId] = useState('');
  const [treeId, setTreeId] = useState('');

  const signUpMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.signUpForEvent(id);
    },
    onSuccess: () => {
      toast.success('Successfully signed up for the event!');
      setEventId('');
      queryClient.invalidateQueries({ queryKey: ['userEvents'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to sign up for event');
    },
  });

  const adoptTreeMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.adoptTree(id);
    },
    onSuccess: () => {
      toast.success('Tree adopted successfully! Thank you for your contribution.');
      setTreeId('');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to adopt tree');
    },
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (eventId.trim()) {
      signUpMutation.mutate(eventId.trim());
    }
  };

  const handleAdoptTree = (e: React.FormEvent) => {
    e.preventDefault();
    if (treeId.trim()) {
      adoptTreeMutation.mutate(treeId.trim());
    }
  };

  return (
    <section id="volunteer" className="py-20 bg-muted/30">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join the movement to restore Algeria's forests—every action counts
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src="/assets/generated/volunteers-planting.dim_800x500.png"
              alt="Volunteers planting trees"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Be Part of the Solution</h3>
              <p className="text-desert-sand">Together, we can restore Algeria's green heart</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="events" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="events" className="text-lg">
              <Users className="w-5 h-5 mr-2" />
              Join Events
            </TabsTrigger>
            <TabsTrigger value="adopt" className="text-lg">
              <Heart className="w-5 h-5 mr-2" />
              Adopt a Tree
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            <Card className="border-2 border-forest-green/20">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-green">Sign Up for Planting Events</CardTitle>
                <CardDescription className="text-base">
                  Join local reforestation events and make a direct impact in your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventId" className="text-base">Event ID</Label>
                    <Input
                      id="eventId"
                      placeholder="Enter event ID (e.g., event-001)"
                      value={eventId}
                      onChange={(e) => setEventId(e.target.value)}
                      className="text-base"
                      disabled={signUpMutation.isPending}
                    />
                    <p className="text-sm text-muted-foreground">
                      Contact your local environmental office for upcoming event IDs
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-forest-green hover:bg-forest-green-dark text-white text-lg py-6"
                    disabled={signUpMutation.isPending || !eventId.trim()}
                  >
                    {signUpMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Signing Up...
                      </>
                    ) : (
                      'Sign Up for Event'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="adopt">
            <Card className="border-2 border-forest-green/20">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-green">Adopt a Tree Digitally</CardTitle>
                <CardDescription className="text-base">
                  Support reforestation efforts by adopting a tree and tracking its growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdoptTree} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="treeId" className="text-base">Tree ID</Label>
                    <Input
                      id="treeId"
                      placeholder="Enter tree ID (e.g., tree-001)"
                      value={treeId}
                      onChange={(e) => setTreeId(e.target.value)}
                      className="text-base"
                      disabled={adoptTreeMutation.isPending}
                    />
                    <p className="text-sm text-muted-foreground">
                      Each tree has a unique identifier for tracking and monitoring
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-desert-sand hover:bg-desert-sand-dark text-forest-green text-lg py-6 font-semibold"
                    disabled={adoptTreeMutation.isPending || !treeId.trim()}
                  >
                    {adoptTreeMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Adopting...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Adopt This Tree
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
