import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

export const Navigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white text-lg font-bold">ॐ</span>
              </div>
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-xl font-bold bg-gradient-sacred bg-clip-text text-transparent">
              {t('title')}
            </div>
            <Badge variant="secondary" className="hidden sm:block">
              2025
            </Badge>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Services
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Live Map
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Support
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              About
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};