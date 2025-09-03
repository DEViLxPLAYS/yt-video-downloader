import { Heart, Globe, Zap } from "lucide-react";

// Logo URLs
const etcLogo = "https://i.postimg.cc/BQdLXLS7/Chat-GPT-Image-Aug-29-2025-01-50-31-AM.png";
const electricalPoweredLogo = "https://i.postimg.cc/y8KJmD5f/Chat-GPT-Image-Sep-3-2025-04-20-07-PM.png";
export const Footer = () => {
  return <footer className="w-full border-t border-border bg-card/30 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={etcLogo} alt="ETC Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-primary">Electronic Tech Cyber</h3>
                <p className="text-sm text-muted-foreground">Where Technology Becomes Art</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building world-class digital solutions from software and apps to games, design, and web experiences trusted by clients worldwide. We specialize in AI-powered technology solutions that transform your business.
            </p>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Digital Innovation Leaders</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={electricalPoweredLogo} alt="Electrical Powered Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold text-primary">Electrical Powered</h3>
                <p className="text-sm text-muted-foreground">Clean Energy Solutions</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium solar solutions tailored to your needs. From residential homes to large-scale industrial installations, we deliver clean energy that cuts your electricity bills by up to 90%.
            </p>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Sustainable Power Solutions</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 order-2 md:order-1">
              <img src={etcLogo} alt="ETC" className="h-6 w-6" />
              <span className="text-sm text-muted-foreground">© 2024 Parent Company</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground order-1 md:order-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for creators</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};