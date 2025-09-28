import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Lokesh Bansal Tuition Classes</h3>
            <p className="text-primary-light leading-relaxed">
              Providing quality education and personalized attention to help students 
              achieve their academic goals since 2018.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+916395778549" className="hover:text-accent transition-colors">
                  +91 6395778549
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:lokeshdeeg2005@gmail.com" className="hover:text-accent transition-colors">
                  lokeshdeeg2005@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Dariba Mohalla, Deeg 321203</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>• Mathematics Tuition (Classes 5-12)</li>
              <li>• Science & Other Subjects (Classes 5-7)</li>
              <li>• Home Tuition Services</li>
              <li>• Exam Preparation</li>
              <li>• Concept Building Sessions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-light text-center md:text-left">
            &copy; 2025 Lokesh Bansal Tuition Classes. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2 text-primary-light">
            Made with <Heart className="w-4 h-4 text-accent" /> for Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;