export const AdSection = () => {
  return (
    <section className="w-full py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="metallic-card p-6 text-center">
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Advertisement
            </p>
            
            {/* AdSense placeholder - replace with actual AdSense code */}
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-12 min-h-[200px] flex items-center justify-center">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground font-medium">
                  AdSense Ad Placement
                </p>
                <p className="text-sm text-muted-foreground">
                  Replace this with your Google AdSense code
                </p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Ads help keep Save Pics free for everyone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};