
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Index from "./pages/Index";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);

export default App;
