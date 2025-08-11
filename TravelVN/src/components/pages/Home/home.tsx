import { CallToActionSection, DestinationsSection, FeaturesSection, Footer, HeroSection, Navigation } from "@/components/Home";

const Home = () =>{
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
export default Home;