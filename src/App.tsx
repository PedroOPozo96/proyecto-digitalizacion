
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import SistemasLinux from "./pages/servicios/SistemasLinux";
import BasesDeDatos from "./pages/servicios/BasesDeDatos";
import Redes from "./pages/servicios/Redes";
import Capacitacion from "./pages/servicios/Capacitacion";
import Seguridad from "./pages/servicios/Seguridad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/sistemas-linux" element={<SistemasLinux />} />
          <Route path="/servicios/bases-de-datos" element={<BasesDeDatos />} />
          <Route path="/servicios/redes" element={<Redes />} />
          <Route path="/servicios/capacitacion" element={<Capacitacion />} />
          <Route path="/servicios/seguridad" element={<Seguridad />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
