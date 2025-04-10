
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PixelButton from "@/components/PixelButton";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center animate-pixel-fade max-w-md mx-auto">
          <h1 className="font-pixel text-7xl text-retro-red mb-6">404</h1>
          <h2 className="font-pixel text-2xl text-retro-white mb-4">GAME OVER</h2>
          <p className="font-retro text-xl text-retro-light mb-8">
            The pixel realm you're looking for doesn't exist... yet.
          </p>
          <div className="pixel-card p-6 mb-8">
            <p className="font-retro text-lg text-retro-light">
              Press Start to return to the main screen
            </p>
          </div>
          <PixelButton 
            variant="primary" 
            size="lg"
            className="flex items-center justify-center gap-2 mx-auto"
            onClick={() => window.location.href = "/"}
          >
            <ArrowLeft className="w-5 h-5" /> Return to Home
          </PixelButton>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
