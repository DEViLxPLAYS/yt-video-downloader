import { Zap, Download, Play, Search } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Save Pics?</h3>
          <p className="text-lg text-muted-foreground">Discover the powerful features that make Save Pics the best choice for YouTube content</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">Download thumbnails instantly without any delays or processing time</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Download className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Multiple Formats</h4>
              <p className="text-muted-foreground">Get thumbnails in HD, medium, and standard resolutions for any use case</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Play className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Video Downloads</h4>
              <p className="text-muted-foreground">Download full videos in various qualities alongside thumbnails</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <Search className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">No Registration</h4>
              <p className="text-muted-foreground">Start downloading immediately without creating accounts or signing up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};