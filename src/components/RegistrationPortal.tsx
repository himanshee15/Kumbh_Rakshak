import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, QrCode, MapPin } from 'lucide-react';
import QRCode from 'qrcode';

interface RegistrationPortalProps {
  onBack: () => void;
}

export const RegistrationPortal: React.FC<RegistrationPortalProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    aadhar: '',
    mobile: '',
    dob: '',
    familyId: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateQRCode = async (userId: string, userData: any) => {
    const qrData = JSON.stringify({
      id: userId,
      name: userData.name,
      aadhar: userData.aadhar,
      mobile: userData.mobile,
      dob: userData.dob,
      timestamp: new Date().toISOString()
    });
    
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(qrData, {
        width: 256,
        margin: 2,
        color: {
          dark: '#FF6B00',
          light: '#FFFFFF'
        }
      });
      return qrCodeDataUrl;
    } catch (error) {
      console.error('QR Code generation error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.aadhar || !formData.mobile || !formData.dob) {
        throw new Error('Please fill all required fields');
      }

      // Insert user data
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert({
          name: formData.name,
          aadhar: formData.aadhar,
          mobile: formData.mobile,
          dob: formData.dob
        })
        .select()
        .single();

      if (userError) throw userError;

      // Handle family grouping if family ID provided
      if (formData.familyId.trim()) {
        // Check if family group exists
        let { data: existingGroup } = await supabase
          .from('groups')
          .select('id')
          .eq('name', formData.familyId)
          .single();

        let groupId = existingGroup?.id;

        // Create group if it doesn't exist
        if (!existingGroup) {
          const { data: newGroup, error: groupError } = await supabase
            .from('groups')
            .insert({ name: formData.familyId })
            .select()
            .single();

          if (groupError) throw groupError;
          groupId = newGroup.id;
        }

        // Add user to group
        const { error: userGroupError } = await supabase
          .from('user_groups')
          .insert({
            user_id: userData.id,
            group_id: groupId
          });

        if (userGroupError) throw userGroupError;
      }

      // Generate QR code
      const qrCodeDataUrl = await generateQRCode(userData.id, userData);
      
      // Update user with QR code URL
      const { error: updateError } = await supabase
        .from('users')
        .update({ qr_code_url: qrCodeDataUrl })
        .eq('id', userData.id);

      if (updateError) throw updateError;

      setQrCodeUrl(qrCodeDataUrl);
      
      toast({
        title: "Registration Successful!",
        description: "Your QR code has been generated successfully.",
      });

    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : 'Something went wrong',
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (qrCodeUrl) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-md mx-auto mt-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <QrCode className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl bg-gradient-sacred bg-clip-text text-transparent">
                Registration Complete!
              </CardTitle>
              <CardDescription>
                Your unique QR code for Kumbh Rakshak
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="bg-white p-4 rounded-lg border">
                <img 
                  src={qrCodeUrl} 
                  alt="Your QR Code" 
                  className="mx-auto"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Save this QR code for:</p>
                <ul className="space-y-1">
                  <li>• Quick identification at checkpoints</li>
                  <li>• Family member verification</li>
                  <li>• Emergency contact access</li>
                  <li>• Location tracking services</li>
                </ul>
              </div>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.download = `kumbh-rakshak-qr-${formData.name}.png`;
                  link.href = qrCodeUrl;
                  link.click();
                }}
                className="w-full"
              >
                Download QR Code
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto mt-8">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl bg-gradient-sacred bg-clip-text text-transparent">
              {t('registration')}
            </CardTitle>
            <CardDescription>
              Enter your details to generate your unique QR code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t('name')}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="aadhar">{t('aadharNumber')}</Label>
                <Input
                  id="aadhar"
                  name="aadhar"
                  type="text"
                  placeholder="12-digit Aadhar number"
                  value={formData.aadhar}
                  onChange={handleInputChange}
                  maxLength={12}
                  pattern="[0-9]{12}"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">{t('mobileNumber')}</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dob">{t('dateOfBirth')}</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="familyId">{t('familyId')} (Optional)</Label>
                <Input
                  id="familyId"
                  name="familyId"
                  type="text"
                  placeholder="Enter family group ID"
                  value={formData.familyId}
                  onChange={handleInputChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-divine transition-all duration-300"
                disabled={loading}
              >
                {loading ? 'Generating...' : t('generateQR')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};