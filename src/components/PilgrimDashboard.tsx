import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Users2, 
  MapPin, 
  Search, 
  AlertCircle, 
  QrCode, 
  Activity,
  Bell,
  Users,
  Navigation,
  Heart,
  Phone,
  Camera,
  MessageCircle
} from "lucide-react";

interface PilgrimDashboardProps {
  onBack: () => void;
}

export const PilgrimDashboard = ({ onBack }: PilgrimDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="text-xl font-semibold">🕉️ Pilgrim Portal</div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gradient-primary text-white">RK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="bg-gradient-sacred text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-16 w-16 border-4 border-white/20">
              <AvatarFallback className="bg-white/10 text-white text-xl">RK</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Welcome, Ram Kumar</h1>
              <p className="text-white/80">Family Group Leader • ID: MK2025001234</p>
              <Badge className="mt-1 bg-white/20 text-white border-white/30">
                Verified Pilgrim
              </Badge>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Users2 className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-white/80">Family Members</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">2.1 km</div>
                <div className="text-sm text-white/80">From Ganga Ghat</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Activity className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">All Safe</div>
                <div className="text-sm text-white/80">Family Status</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="map">Live Map</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="help">Help</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Access essential services instantly</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col bg-gradient-primary hover:shadow-divine">
                  <Search className="h-6 w-6 mb-2" />
                  Lost & Found
                </Button>
                <Button className="h-20 flex-col bg-gradient-sacred hover:shadow-sacred" variant="secondary">
                  <AlertCircle className="h-6 w-6 mb-2" />
                  Report Issue
                </Button>
                <Button className="h-20 flex-col bg-gradient-gold hover:shadow-gold" variant="outline">
                  <QrCode className="h-6 w-6 mb-2" />
                  My QR Code
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <Phone className="h-6 w-6 mb-2" />
                  Emergency
                </Button>
              </CardContent>
            </Card>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Sacred Schedule</CardTitle>
                <CardDescription>Auspicious times and crowd predictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <div className="font-semibold">Brahma Muhurta</div>
                    <div className="text-sm text-muted-foreground">Best time for holy dip</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">4:30 - 6:00 AM</div>
                    <Badge variant="secondary" className="text-xs">Low Crowd</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                  <div>
                    <div className="font-semibold">Sunset Aarti</div>
                    <div className="text-sm text-muted-foreground">Evening prayers</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-orange-600">6:15 - 7:00 PM</div>
                    <Badge variant="destructive" className="text-xs">High Crowd</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Live Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <div className="font-medium text-green-800">All family members are safe and accounted for</div>
                    <div className="text-sm text-green-600">Last updated: 2 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <div className="font-medium text-blue-800">Low crowd density at Ganga Ghat 3</div>
                    <div className="text-sm text-blue-600">Perfect time for holy dip - 15 min walk</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Family Group - Kumar Family
                </CardTitle>
                <CardDescription>Track and manage your family members</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Family Members */}
                {[
                  { name: "Ram Kumar", role: "Leader", status: "online", location: "Sector 5, Tent 124" },
                  { name: "Sita Kumar", role: "Member", status: "online", location: "Sector 5, Tent 124" },
                  { name: "Arjun Kumar", role: "Member", status: "away", location: "Ganga Ghat 2" },
                  { name: "Lakshmi Devi", role: "Elder", status: "online", location: "Sector 5, Tent 124" },
                  { name: "Ravi Kumar", role: "Member", status: "online", location: "Food Court Area" }
                ].map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-sm capitalize">{member.status}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{member.location}</div>
                    </div>
                  </div>
                ))}
                
                <Button className="w-full bg-gradient-primary hover:shadow-divine">
                  <Users2 className="h-4 w-4 mr-2" />
                  Add Family Member
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="h-5 w-5 mr-2" />
                  Live Mahakumbh Map
                </CardTitle>
                <CardDescription>Real-time crowd density and family locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <div className="text-lg font-semibold mb-2">Interactive Map Loading...</div>
                    <div className="text-sm text-muted-foreground">Real-time crowd data and family tracking</div>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm">Low Crowd</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm">Medium Crowd</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm">High Crowd</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Family Members</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lost & Found</CardTitle>
                  <CardDescription>Report or search for lost items and people</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Search className="h-4 w-4 mr-2" />
                    Report Lost Item
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Search Found Items
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    24 items found today • 18 reunited with owners
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Support & Help</CardTitle>
                  <CardDescription>Get assistance from volunteers and authorities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gradient-primary hover:shadow-divine">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Support
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Helpline
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Average response time: 2-3 minutes
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="help" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Help & Support</CardTitle>
                <CardDescription>Get help with common questions and issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">How to track family members?</h3>
                    <p className="text-sm text-muted-foreground">Go to Family tab to see real-time locations of all registered family members.</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">What if I lose my phone?</h3>
                    <p className="text-sm text-muted-foreground">Contact any volunteer with your Aadhar card. They can scan your QR code to access your details.</p>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Emergency contacts</h3>
                    <p className="text-sm text-muted-foreground">Police: 100 | Medical: 108 | Fire: 101 | Mahakumbh Helpline: 1800-xxx-xxxx</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <Button className="w-full bg-gradient-primary hover:shadow-divine">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Support Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};