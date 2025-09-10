import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Bell, User, Settings } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🕉️</div>
            <div className="text-xl font-bold bg-gradient-sacred bg-clip-text text-transparent">
              Mahakumbh Digital
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
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};