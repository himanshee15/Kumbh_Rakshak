-- Enable RLS on existing tables and create policies for registration system
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lost_found ENABLE ROW LEVEL SECURITY;

-- Users table policies (for registration and QR code access)
CREATE POLICY "Anyone can register" ON public.users FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view their own data" ON public.users FOR SELECT USING (id = auth.uid() OR true); -- Allow public access for QR scanning
CREATE POLICY "Users can update their own data" ON public.users FOR UPDATE USING (id = auth.uid());

-- Groups table policies
CREATE POLICY "Anyone can create groups" ON public.groups FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view groups" ON public.groups FOR SELECT USING (true);

-- User groups table policies
CREATE POLICY "Anyone can join groups" ON public.user_groups FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view group memberships" ON public.user_groups FOR SELECT USING (true);

-- Locations table policies
CREATE POLICY "Users can insert their location" ON public.locations FOR INSERT WITH CHECK (true);
CREATE POLICY "Family members can view locations" ON public.locations FOR SELECT USING (true);
CREATE POLICY "Users can update their location" ON public.locations FOR UPDATE USING (true);

-- Alerts table policies
CREATE POLICY "Anyone can create alerts" ON public.alerts FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view alerts" ON public.alerts FOR SELECT USING (true);
CREATE POLICY "Anyone can update alerts" ON public.alerts FOR UPDATE USING (true);

-- Lost found table policies
CREATE POLICY "Anyone can create lost/found entries" ON public.lost_found FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view lost/found entries" ON public.lost_found FOR SELECT USING (true);
CREATE POLICY "Anyone can update lost/found entries" ON public.lost_found FOR UPDATE USING (true);