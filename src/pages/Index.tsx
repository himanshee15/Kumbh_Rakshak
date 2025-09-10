import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { PilgrimDashboard } from "@/components/PilgrimDashboard";
import { AdminDashboard } from "@/components/AdminDashboard";
import { RegistrationPortal } from "@/components/RegistrationPortal";
import { VoiceSearch } from "@/components/VoiceSearch";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/mahakumbh-hero.jpg";
import { Users, MapPin, Search, Shield, QrCode, Map, UserPlus, AlertCircle } from "lucide-react";
const Index = () => {
  const {
    t
  } = useLanguage();
  const [currentView, setCurrentView] = useState<'home' | 'pilgrim' | 'admin' | 'register'>('home');
  if (currentView === 'register') {
    return <RegistrationPortal onBack={() => setCurrentView('home')} />;
  }
  if (currentView === 'pilgrim') {
    return <PilgrimDashboard onBack={() => setCurrentView('home')} />;
  }
  if (currentView === 'admin') {
    return <AdminDashboard onBack={() => setCurrentView('home')} />;
  }
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-sacred opacity-80" />
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-gradient-gold text-foreground font-semibold text-lg px-6 py-2">Mahakumbh 2025 Digital Platform</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            {t('subtitle').split(', ')[0]}, <br />
            <span className="bg-gradient-divine bg-clip-text text-transparent">
              {t('subtitle').split(', ')[1]}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-divine transition-all duration-300 text-lg px-8 py-4" onClick={() => setCurrentView('register')}>
              <UserPlus className="mr-2 h-5 w-5" />
              {t('register')}
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4" onClick={() => setCurrentView('pilgrim')}>
              <MapPin className="mr-2 h-5 w-5" />
              {t('pilgrimPortal')}
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4" onClick={() => setCurrentView('admin')}>
              <Shield className="mr-2 h-5 w-5" />
              {t('adminAccess')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sacred bg-clip-text text-transparent">
              Divine Technology for Sacred Gathering
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness cutting-edge AI and real-time tracking to ensure every pilgrim's journey is safe, connected, and blessed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-divine transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('aiFamilyGrouping')}</CardTitle>
                <CardDescription>
                  Intelligent family member linking with facial recognition and Aadhar integration for seamless group management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-sacred transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-sacred flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('liveTracking')}</CardTitle>
                <CardDescription>
                  Real-time location sharing within family groups with privacy controls and emergency alerts for peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('lostFound')}</CardTitle>
                <CardDescription>
                  AI-powered matching system for lost items and people with instant notifications and photo recognition.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-divine transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Map className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('crowdDensity')}</CardTitle>
                <CardDescription>
                  Real-time crowd visualization with heatmaps to find less crowded paths and optimal visit times.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-sacred transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-sacred flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('qrSystem')}</CardTitle>
                <CardDescription>
                  Secure QR code generation for instant identity verification and family details access for authorities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{t('issueResolution')}</CardTitle>
                <CardDescription>
                  24/7 support system with AI chatbot and direct connection to volunteers and police for immediate assistance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-sacred">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Serving Millions of Devotees</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">12M+</div>
              <div className="text-lg opacity-90">Expected Pilgrims</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">5K+</div>
              <div className="text-lg opacity-90">Volunteers & Police</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">99.9%</div>
              <div className="text-lg opacity-90">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-sacred bg-clip-text text-transparent">
            Begin Your Digital Pilgrimage
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of devotees in experiencing the most technologically advanced Mahakumbh ever organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-divine transition-all duration-300" onClick={() => setCurrentView('register')}>
              <UserPlus className="mr-2 h-5 w-5" />
              {t('register')}
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10" onClick={() => setCurrentView('admin')}>
              <Shield className="mr-2 h-5 w-5" />
              {t('adminAccess')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white text-lg font-bold">ॐ</span>
              </div>
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold bg-gradient-sacred bg-clip-text text-transparent ml-3">
              {t('title')}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Blessed by tradition, powered by technology
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Government of India Initiative</span>
            <span>•</span>
            <span>Secure & Private</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </footer>
      
      <VoiceSearch />
    </div>;
};
export default Index;