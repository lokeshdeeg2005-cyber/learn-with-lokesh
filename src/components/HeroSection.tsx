import heroImage from "@/assets/hero-education.jpg";
import heroImageMobile from "@/assets/hero-education-mobile.jpg";
import heroImageTablet from "@/assets/hero-education-tablet.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-secondary">
        {/* Desktop Background */}
        <img 
          src={heroImage} 
          alt="Professional education environment" 
          className="hidden lg:block w-full h-full object-contain object-center"
        />
        {/* Tablet Background */}
        <img 
          src={heroImageTablet} 
          alt="Professional education environment" 
          className="hidden md:block lg:hidden w-full h-full object-contain object-center"
        />
        {/* Mobile Background */}
        <img 
          src={heroImageMobile} 
          alt="Professional education environment" 
          className="block md:hidden w-full h-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-24 md:pt-28">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Lokesh Bansal</span>
          <span className="block text-accent">Tuition Classes</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto">
          Personalized Home Tuitions for Classes 5 to 12
          <span className="block mt-2 text-lg md:text-xl">
            Building Strong Concepts • Boosting Confidence • Academic Excellence
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="btn-hero text-lg px-8 py-4"
          >
            Book a Demo Class
          </Button>
          
          <a 
            href="https://wa.me/916395778549" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-hero-outline inline-flex items-center gap-2 text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
            </svg>
            WhatsApp Now
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 mb-16 grid grid-cols-2 gap-8 text-center relative">
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">Fresh</div>
            <div className="text-sm opacity-90">Start & Passion</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">100%</div>
            <div className="text-sm opacity-90">Dedication</div>
          </div>

          {/* Scroll indicator positioned between stats (grid-centered) */}
          <div className="col-span-2 flex justify-center -mt-6 z-20 pointer-events-none">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;