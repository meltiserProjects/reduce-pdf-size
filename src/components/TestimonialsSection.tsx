import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sterlyn Newkirk",
    date: "May 27, 2025",
    text: "Spent hours trying to reduce a very large PDF assignment that I wasn't able to upload. Used this extension and had it reduced and uploaded in less than 5 minutes. Thank you!!!",
    rating: 5
  },
  {
    name: "Chanason Maklai",
    date: "May 10, 2025",
    text: "It's very good! Simple and effective.",
    rating: 5
  },
  {
    name: "Giuseppe della chiara",
    date: "Jan 1, 2025",
    text: "Perfect! Astoundingly simple to use.",
    rating: 5
  },
  {
    name: "Alina Grigoryeva",
    date: "Dec 23, 2024",
    text: "Very simple and useful app, thank you!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full border border-border shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.8 out of 5</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Based on 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
