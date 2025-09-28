import { User, Award, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Hi, I'm Lokesh Bansal</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A dedicated educator with over 5 years of experience in providing 
                  personalized home tuitions. I specialize in creating a supportive 
                  learning environment that helps students excel academically.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-secondary p-3 rounded-full">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">My Approach</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in building strong conceptual foundations rather than 
                  rote learning. My teaching methodology focuses on understanding 
                  core principles and applying them to solve problems effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-accent p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Results</h4>
                <p className="text-muted-foreground leading-relaxed">
                  My students consistently show remarkable improvement in their 
                  academic performance, with 95% achieving their target grades 
                  and gaining confidence in their studies.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-professional text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Conceptual Learning</h4>
              <p className="text-muted-foreground text-sm">
                Focus on understanding fundamentals rather than memorization
              </p>
            </div>

            <div className="card-professional text-center">
              <User className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Personal Attention</h4>
              <p className="text-muted-foreground text-sm">
                One-on-one sessions tailored to each student's learning pace
              </p>
            </div>

            <div className="card-professional text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Goal-Oriented</h4>
              <p className="text-muted-foreground text-sm">
                Strategic planning to achieve specific academic targets
              </p>
            </div>

            <div className="card-professional text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Proven Success</h4>
              <p className="text-muted-foreground text-sm">
                Track record of consistent student improvement and success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;