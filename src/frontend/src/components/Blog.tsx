import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Loader2 } from 'lucide-react';
import type { BlogPost } from '../backend';

const BLOG_TITLES = [
  'How to plant in arid soil',
  'The Importance of Mycorrhizae in Algerian Reforestation',
];

export default function Blog() {
  const { actor, isFetching: actorFetching } = useActor();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const { data: blogPost, isLoading } = useQuery<BlogPost>({
    queryKey: ['blogPost', selectedPost],
    queryFn: async () => {
      if (!actor || !selectedPost) throw new Error('Actor not initialized or no post selected');
      return actor.getBlogPost(selectedPost);
    },
    enabled: !!actor && !actorFetching && !!selectedPost,
  });

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Educational Resources
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn the science and techniques behind successful reforestation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {!selectedPost ? (
            <div className="grid md:grid-cols-2 gap-6">
              {BLOG_TITLES.map((title) => (
                <Card
                  key={title}
                  className="border-2 border-forest-green/20 hover:border-forest-green/40 transition-all hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedPost(title)}
                >
                  <CardHeader>
                    <div className="bg-forest-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-forest-green" />
                    </div>
                    <CardTitle className="text-xl text-forest-green">{title}</CardTitle>
                    <CardDescription className="text-base">
                      Click to read this educational article
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-forest-green text-forest-green hover:bg-forest-green hover:text-white"
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-2 border-forest-green/20">
              <CardHeader>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedPost(null)}
                  className="w-fit mb-4 text-forest-green hover:text-forest-green-dark"
                >
                  ← Back to Articles
                </Button>
                <CardTitle className="text-3xl text-forest-green">{selectedPost}</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-forest-green" />
                  </div>
                ) : blogPost ? (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {blogPost.content}
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">Article not found</p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
