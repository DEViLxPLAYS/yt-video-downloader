import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { AdBanner } from "@/components/AdBanner";

interface ThumbnailData {
  url: string;
  quality: string;
  resolution: string;
  width: number;
  height: number;
}


interface ThumbnailGridProps {
  thumbnails: ThumbnailData[];
  downloadLinks: never[];
  videoTitle?: string;
  videoUrl: string;
}

export const ThumbnailGrid = ({ thumbnails, downloadLinks, videoTitle, videoUrl }: ThumbnailGridProps) => {
  const { toast } = useToast();

  const downloadThumbnail = async (thumbnailUrl: string, quality: string) => {
    try {
      const response = await fetch(thumbnailUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `youtube-thumbnail-${quality}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Download Started",
        description: `${quality} thumbnail download initiated`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to download thumbnail. Please try again.",
        variant: "destructive",
      });
    }
  };


  const openOriginalVideo = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="w-full py-8 md:py-12 px-3 md:px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="metallic-card p-4 md:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Available Downloads</h3>
                  {videoTitle && (
                    <p className="text-muted-foreground text-sm break-words line-clamp-2 pr-2">{videoTitle}</p>
                  )}
                </div>
                <Button
                  onClick={openOriginalVideo}
                  variant="outline"
                  className="gap-2 w-full sm:w-auto flex-shrink-0"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="truncate">View Video</span>
                </Button>
              </div>

              {/* Thumbnails Section */}
              <div className="mb-8 md:mb-12">
                <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="truncate">Thumbnail Downloads</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {thumbnails.map((thumbnail, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-border bg-card/30 hover:bg-card/50 transition-all duration-300 hover:shadow-metallic"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={thumbnail.url}
                          alt={`${thumbnail.quality} thumbnail`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      
                      <div className="p-3 md:p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="min-w-0 flex-1">
                            <h5 className="font-semibold text-sm uppercase tracking-wide truncate">
                              {thumbnail.quality}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {thumbnail.width} × {thumbnail.height}
                            </p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-xs text-muted-foreground">
                              {thumbnail.resolution}
                            </p>
                          </div>
                        </div>
                        
                        <Button
                          onClick={() => downloadThumbnail(thumbnail.url, thumbnail.quality)}
                          variant="download"
                          className="w-full gap-2 text-sm"
                        >
                          <Download className="h-4 w-4" />
                          <span className="truncate">Download {thumbnail.quality}</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="mt-6 md:mt-8 text-center">
                <p className="text-sm text-muted-foreground px-2">
                  All downloads are fetched directly from YouTube in their original quality
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Ad (Desktop Only) */}
          <div className="lg:w-[320px] lg:flex-shrink-0">
            <AdBanner 
              slot="sidebar-ad" 
              size="sidebar"
              desktopOnly
              className="sticky top-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};