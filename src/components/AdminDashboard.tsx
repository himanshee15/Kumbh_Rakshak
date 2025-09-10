import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Shield, 
  Users, 
  AlertTriangle, 
  QrCode, 
  Search,
  MapPin,
  Activity,
  Bell,
  Settings,
  Eye,
  UserCheck,
  MessageSquare,
  BarChart3,
  Camera,
  Phone,
  Navigation,
  Clock,
  CheckCircle
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

export const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [scanResult, setScanResult] = useState<any>(null);

  const mockScanPilgrim = () => {
    setScanResult({
      name: "Ram Kumar",
      aadhar: "XXXX-XXXX-1234",
      phone: "+91-98765-43210",
      family: ["Sita Kumar", "Arjun Kumar", "Lakshmi Devi", "Ravi Kumar"],
      location: "Sector 5, Tent 124",
      status: "Safe",
      registrationDate: "2025-01-15",
      emergencyContact: "+91-98765-43211"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Shield className="h-5 w-5 text-primary" />
            <div className="text-xl font-semibold">Admin Control Center</div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-gradient-primary text-white">
              Officer ID: ADM001
            </Badge>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gradient-sacred text-white">AK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Status Bar */}
      <section className="bg-gradient-sacred text-white p-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                <div className="text-xl font-bold">1.2M</div>
                <div className="text-xs text-white/80">Active Pilgrims</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <AlertTriangle className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
                <div className="text-xl font-bold">23</div>
                <div className="text-xs text-white/80">Active Issues</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Search className="h-6 w-6 mx-auto mb-2 text-green-400" />
                <div className="text-xl font-bold">5</div>
                <div className="text-xs text-white/80">Lost & Found</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-4 text-center">
                <Activity className="h-6 w-6 mx-auto mb-2 text-blue-400" />
                <div className="text-xl font-bold">98.7%</div>
                <div className="text-xs text-white/80">System Health</div>
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
            <TabsTrigger value="scanner">QR Scanner</TabsTrigger>
            <TabsTrigger value="crowd">Crowd Map</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Administrative tools and emergency functions</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col bg-gradient-primary hover:shadow-divine">
                  <QrCode className="h-6 w-6 mb-2" />
                  Scan QR Code
                </Button>
                <Button className="h-20 flex-col bg-gradient-sacred hover:shadow-sacred" variant="secondary">
                  <AlertTriangle className="h-6 w-6 mb-2" />
                  Report Emergency
                </Button>
                <Button className="h-20 flex-col bg-gradient-gold hover:shadow-gold" variant="outline">
                  <Eye className="h-6 w-6 mb-2" />
                  Monitor Crowd
                </Button>
                <Button className="h-20 flex-col" variant="outline">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Broadcast Alert
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest system events and actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Family reunion successful</div>
                      <div className="text-sm text-green-600">Kumar family - Sector 5 • 5 min ago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <QrCode className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-blue-800">QR Code verification</div>
                      <div className="text-sm text-blue-600">Officer ID: POL234 • 12 min ago</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-800">Minor medical assistance</div>
                      <div className="text-sm text-yellow-600">Ganga Ghat 2 • 18 min ago</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Live Crowd Status</CardTitle>
                  <CardDescription>Real-time density monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Ganga Ghat 1</span>
                      <span className="text-red-600">High (89%)</span>
                    </div>
                    <Progress value={89} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Ganga Ghat 2</span>
                      <span className="text-yellow-600">Medium (65%)</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Ganga Ghat 3</span>
                      <span className="text-green-600">Low (23%)</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Food Court Area</span>
                      <span className="text-yellow-600">Medium (58%)</span>
                    </div>
                    <Progress value={58} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scanner" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <QrCode className="h-5 w-5 mr-2" />
                    QR Code Scanner
                  </CardTitle>
                  <CardDescription>Scan pilgrim Aadhar QR codes for instant verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <div className="text-lg font-semibold mb-2">Position QR Code Here</div>
                        <div className="text-sm text-muted-foreground">Camera will auto-scan</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-divine"
                      onClick={mockScanPilgrim}
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      Simulate QR Scan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {scanResult && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserCheck className="h-5 w-5 mr-2 text-green-600" />
                      Pilgrim Details
                    </CardTitle>
                    <CardDescription>Verified information from Aadhar database</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-gradient-primary text-white text-xl">
                          {scanResult.name.split(' ').map((n: string) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xl font-bold">{scanResult.name}</div>
                        <div className="text-sm text-muted-foreground">Aadhar: {scanResult.aadhar}</div>
                        <Badge className="mt-1 bg-green-100 text-green-800">Verified</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-muted-foreground">{scanResult.phone}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-muted-foreground">{scanResult.location}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Status</div>
                        <div className="text-green-600 font-medium">{scanResult.status}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Registration</div>
                        <div className="text-muted-foreground">{scanResult.registrationDate}</div>
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold mb-2">Family Members ({scanResult.family.length})</div>
                      <div className="space-y-1">
                        {scanResult.family.map((member: string, index: number) => (
                          <div key={index} className="text-sm p-2 bg-muted/30 rounded flex justify-between">
                            <span>{member}</span>
                            <Badge variant="outline" className="text-xs">Safe</Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        Locate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="crowd" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="h-5 w-5 mr-2" />
                  Real-time Crowd Monitoring
                </CardTitle>
                <CardDescription>Live density heatmap and crowd flow analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <div className="text-lg font-semibold mb-2">Live Crowd Heatmap</div>
                    <div className="text-sm text-muted-foreground">Real-time density visualization</div>
                  </div>
                </div>

                {/* Crowd Statistics */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-red-600">4</div>
                      <div className="text-sm text-red-700">High Density Areas</div>
                    </CardContent>
                  </Card>
                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-600">7</div>
                      <div className="text-sm text-yellow-700">Medium Density Areas</div>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 bg-green-50">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">12</div>
                      <div className="text-sm text-green-700">Low Density Areas</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Active Issues & Reports
                </CardTitle>
                <CardDescription>Manage and resolve pilgrim issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: "ISS001", type: "Lost Person", priority: "High", location: "Ganga Ghat 1", time: "5 min ago", status: "In Progress" },
                  { id: "ISS002", type: "Medical", priority: "Medium", location: "Sector 3", time: "12 min ago", status: "Resolved" },
                  { id: "ISS003", type: "Lost Item", priority: "Low", location: "Food Court", time: "18 min ago", status: "Pending" },
                  { id: "ISS004", type: "Crowd Control", priority: "High", location: "Main Entrance", time: "22 min ago", status: "Active" }
                ].map((issue, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline" className="text-xs">{issue.id}</Badge>
                        <span className="font-medium">{issue.type}</span>
                        <Badge 
                          variant={issue.priority === 'High' ? 'destructive' : issue.priority === 'Medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {issue.priority}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {issue.location} • {issue.time}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={issue.status === 'Resolved' ? 'default' : 'secondary'}
                        className={issue.status === 'Resolved' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {issue.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Statistics</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>New Registrations</span>
                    <span className="font-bold text-primary">+2,340</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Issues Resolved</span>
                    <span className="font-bold text-green-600">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>QR Scans</span>
                    <span className="font-bold text-blue-600">8,920</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lost & Found Matches</span>
                    <span className="font-bold text-purple-600">24</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Performance</CardTitle>
                  <CardDescription>Technical health monitoring</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Server Uptime</span>
                      <span className="text-green-600">99.8%</span>
                    </div>
                    <Progress value={99.8} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Database Performance</span>
                      <span className="text-green-600">97.2%</span>
                    </div>
                    <Progress value={97.2} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Network Stability</span>
                      <span className="text-yellow-600">85.4%</span>
                    </div>
                    <Progress value={85.4} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};