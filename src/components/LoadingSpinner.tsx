import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({ message = "Fetching thumbnails..." }: LoadingSpinnerProps) => {
  return (
    <section className="w-full py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="metallic-card p-12 text-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>
              <div className="relative p-4 rounded-full bg-gradient-primary">
                <Loader2 className="h-8 w-8 text-primary-foreground animate-spin" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{message}</h3>
              <p className="text-muted-foreground">
                Please wait while we fetch the thumbnails...
              </p>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-primary animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};