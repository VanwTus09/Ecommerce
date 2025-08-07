import { Navigation, HeroSection, CallToActionSection, Footer, FeaturesSection, DestinationsSection } from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D9EFF7] to-[#9BBBFC]">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;