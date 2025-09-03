import { Button } from "@/components/ui/button";
import { Heart, Download } from "lucide-react";

// Logo URLs
const etcLogo = "https://i.postimg.cc/BQdLXLS7/Chat-GPT-Image-Aug-29-2025-01-50-31-AM.png";
const electricalPoweredLogo = "https://i.postimg.cc/y8KJmD5f/Chat-GPT-Image-Sep-3-2025-04-20-07-PM.png";
export const Header = () => {
  return <>
      <header className="w-full py-3 md:py-4 px-3 md:px-4 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Download className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              <div className="min-w-0">
                <h1 className="text-lg md:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">Save Pics</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">YouTube Thumbnail Downloader</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <Button variant="ghost" size="sm" className="gap-2 flex-shrink-0">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Support</span>
              </Button>
              
              <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground min-w-0">
                <span className="whitespace-nowrap">Powered by</span>
                <div className="flex items-center gap-1 min-w-0">
                  <img src={etcLogo} alt="Electronic Tech Cyber Logo" className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-primary whitespace-nowrap">Electronic Tech Cyber</span>
                </div>
                <span>/</span>
                <div className="flex items-center gap-1 min-w-0">
                  <img src={electricalPoweredLogo} alt="Electrical Powered Logo" className="h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-primary whitespace-nowrap">Electrical Powered</span>
                </div>
              </div>
              
              {/* Mobile logos */}
              <div className="lg:hidden flex items-center gap-1">
                <img src={etcLogo} alt="Electronic Tech Cyber Logo" className="h-5 w-5" />
                <img src={electricalPoweredLogo} alt="Electrical Powered Logo" className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>;
};