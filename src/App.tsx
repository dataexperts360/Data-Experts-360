import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import ServicePage from "./pages/ServicePage";
import AmbassadorProgram from "./pages/AmbassadorProgram";
import BecomeDataAmbassador from "./pages/BecomeDataAmbassador";
import DataAmbassadors from "./pages/DataAmbassadors";
import TrainerApply from "./pages/TrainerApply";
import OurTrainers from "./pages/OurTrainers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          
          {/* Services */}
          <Route path="/services/web-application" element={<ServicePage />} />
          <Route path="/services/mobile-application" element={<ServicePage />} />
          <Route path="/services/digital-marketing" element={<ServicePage />} />
          <Route path="/services/project-management" element={<ServicePage />} />
          <Route path="/services/agri-business" element={<ServicePage />} />
          <Route path="/services/data-science-ai" element={<ServicePage />} />
          <Route path="/services/quality-assurance" element={<ServicePage />} />
          <Route path="/services/environmental-services" element={<ServicePage />} />
          
          {/* Join Programs */}
          <Route path="/join/ambassador-program" element={<AmbassadorProgram />} />
          <Route path="/join/become-data-ambassador" element={<BecomeDataAmbassador />} />
          <Route path="/join/data-ambassadors" element={<DataAmbassadors />} />
          
          {/* Trainer */}
          <Route path="/trainer/apply" element={<TrainerApply />} />
          <Route path="/trainer/our-trainers" element={<OurTrainers />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
