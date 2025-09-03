interface AdBannerProps {
  slot: string;
  className?: string;
  size: 'header' | 'inline' | 'sidebar' | 'anchor';
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export const AdBanner = ({ slot, className = "", size, mobileOnly, desktopOnly }: AdBannerProps) => {
  const getAdSize = () => {
    switch (size) {
      case 'header':
        return 'h-[90px] md:h-[90px]'; // 320x100 mobile, 728x90 desktop
      case 'inline':
        return 'h-[250px] w-[300px]'; // 300x250
      case 'sidebar':
        return 'h-[600px] w-[300px]'; // 300x600
      case 'anchor':
        return 'h-[50px]'; // Responsive mobile sticky
      default:
        return 'h-[250px]';
    }
  };

  const getResponsiveClass = () => {
    if (mobileOnly) return 'block md:hidden';
    if (desktopOnly) return 'hidden md:block';
    return '';
  };

  return (
    <div className={`${getResponsiveClass()} ${className}`}>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wide text-center">
          Advertisement
        </p>
        
        {/* AdSense placeholder - replace with actual AdSense code */}
        <div className={`bg-muted/20 border border-dashed border-border rounded-lg ${getAdSize()} flex items-center justify-center mx-auto`}>
          <div className="text-center space-y-1">
            <p className="text-muted-foreground font-medium text-sm">
              AdSense {size.charAt(0).toUpperCase() + size.slice(1)}
            </p>
            <p className="text-xs text-muted-foreground">
              Slot: {slot}
            </p>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          Ads help keep Save Pics free
        </p>
      </div>
    </div>
  );
};