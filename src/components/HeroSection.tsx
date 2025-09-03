import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Zap, Play } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AdBanner } from "@/components/AdBanner";
import { ThumbnailGrid } from "@/components/ThumbnailGrid";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface ThumbnailData {
  url: string;
  quality: string;
  resolution: string;
  width: number;
  height: number;
}

interface VideoData {
  title: string;
  thumbnails: ThumbnailData[];
  downloadLinks: any[];
}

interface HeroSectionProps {
  onUrlSubmit: (url: string) => void;
  isLoading?: boolean;
  videoData?: VideoData | null;
  currentVideoUrl?: string;
}

export const HeroSection = ({ onUrlSubmit, isLoading, videoData, currentVideoUrl }: HeroSectionProps) => {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const validateYouTubeUrl = (url: string) => {
    const patterns = [
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtu\.be\/([^?]+)/,
      /youtube\.com\/embed\/([^?]+)/
    ];
    return patterns.some(pattern => pattern.test(url));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a YouTube video URL",
        variant: "destructive",
      });
      return;
    }

    if (!validateYouTubeUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube video URL",
        variant: "destructive",
      });
      return;
    }

    onUrlSubmit(url);
  };

  return (
    <section className="w-full py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Download YouTube
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Thumbnails & Videos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get high-quality YouTube video thumbnails and download videos in multiple resolutions. 
            Fast, free, and no watermarks.
          </p>
        </div>

        <div className="metallic-card p-4 md:p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="url"
                placeholder="Paste YouTube video URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pr-14 text-base md:text-lg py-3 md:py-4"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10"
                disabled={isLoading}
                variant="default"
              >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-primary" />
                <span>Multiple Resolutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4 text-primary" />
                <span>Video Downloads</span>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p className="px-4">Supports: youtube.com/watch?v=*, youtu.be/*, and embedded URLs</p>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="mt-8">
            <LoadingSpinner />
          </div>
        )}

        {/* Thumbnail Results */}
        {videoData && !isLoading && (
          <div className="mt-8">
            <ThumbnailGrid
              thumbnails={videoData.thumbnails}
              downloadLinks={[]}
              videoTitle={videoData.title}
              videoUrl={currentVideoUrl || ""}
            />
          </div>
        )}

        {/* Inline Ad Below Results */}
        <div className="mt-12 px-4">
          <AdBanner 
            slot="inline-ad" 
            size="inline" 
            className="flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};