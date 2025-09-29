import { Phone, Mail, MapPin, MessageCircle, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6395778549",
      action: "tel:+916395778549",
      description: "Call for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Quick Chat",
      action: "https://wa.me/916395778549",
      description: "Fast response guaranteed"
    },
    {
      icon: Mail,
      title: "Email",
      content: "lokeshdeeg2005@gmail.com",
      action: "mailto:lokeshdeeg2005@gmail.com",
      description: "Detailed inquiries welcome"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dariba Mohalla, Deeg 321203",
      action: "#",
      description: "Home tuition service area"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Usually respond within 2 hours"
    },
    {
      icon: Star,
      title: "Free Consultation",
      description: "Discuss your child's needs at no cost"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your child's academic journey? Get in touch for a free consultation
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-professional border-0 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-primary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-lg mb-2">{method.content}</p>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    {method.action !== "#" && (
                      <Button asChild className="w-full">
                        <a 
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : undefined}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.title === "WhatsApp" ? "Chat Now" : 
                           method.title === "Phone" ? "Call Now" : "Send Email"}
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Features & CTA */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="card-professional border-0">
              <CardHeader>
                <CardTitle className="text-center text-xl">Why Choose Me?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-accent p-2 rounded-full">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="card-professional border-0 bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Book Your Demo Class</h3>
                <p className="mb-6 opacity-90">
                  Experience my teaching methodology with a free demo session
                </p>
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="https://wa.me/916395778549" target="_blank" rel="noopener noreferrer">
                    Book Free Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Excel in Your Studies?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful students who have improved their grades with personalized tuition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="https://wa.me/916395778549" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              <a href="tel:+916395778549">
                <Phone className="w-5 h-5 mr-2" />
                Call Direct
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;