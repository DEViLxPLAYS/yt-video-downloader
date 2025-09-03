import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ThumbnailGrid } from "@/components/ThumbnailGrid";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AdSection } from "@/components/AdSection";
import { BottomAnchorAd } from "@/components/BottomAnchorAd";
import { Footer } from "@/components/Footer";
import { fetchThumbnails } from "@/utils/youtubeApi";
import { useToast } from "@/components/ui/use-toast";

interface ThumbnailData {
  url: string;
  quality: string;
  resolution: string;
  width: number;
  height: number;
}

interface VideoDownloadLink {
  quality: string;
  url: string;
  format: string;
  filesize?: string;
}

interface VideoData {
  title: string;
  thumbnails: ThumbnailData[];
  downloadLinks: VideoDownloadLink[];
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const { toast } = useToast();

  const handleUrlSubmit = async (url: string) => {
    setIsLoading(true);
    setVideoData(null);
    setCurrentVideoUrl(url);

    try {
      const data = await fetchThumbnails(url);
      setVideoData(data);
      toast({
        title: "Success!",
        description: "Thumbnails loaded successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch thumbnails. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection 
          onUrlSubmit={handleUrlSubmit} 
          isLoading={isLoading}
          videoData={videoData}
          currentVideoUrl={currentVideoUrl}
        />
        
        <BenefitsSection />
        
        
        <AdSection />
      </main>
      
      <Footer />
      <BottomAnchorAd />
    </div>
  );
};

export default Index;
