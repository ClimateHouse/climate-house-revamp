import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClimateHouse from "./pages/ClimateHouse";
import AtelierPage from "./pages/AtelierPage";
import BibliothequePage from "./pages/BibliothequePage";
import EvenementPage from "./pages/EvenementPage";
import CofondateursPage from "./pages/CofondateursPage";
import ColocatairesPage from "./pages/ColocatairesPage";
import CommunautePage from "./pages/CommunautePage";
import CGU from "./pages/CGU";
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
          <Route path="/climate-house" element={<ClimateHouse />} />
          <Route path="/atelier" element={<AtelierPage />} />
          <Route path="/bibliotheque" element={<BibliothequePage />} />
          <Route path="/evenement" element={<EvenementPage />} />
          <Route path="/cofondateurs" element={<CofondateursPage />} />
          <Route path="/colocataires" element={<ColocatairesPage />} />
          <Route path="/communaute" element={<CommunautePage />} />
          <Route path="/cgu" element={<CGU />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
