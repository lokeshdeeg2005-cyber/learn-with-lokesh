import { BookOpen, Calculator, Microscope, Globe, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ClassesSection = () => {
  const classesData = [
    {
      grades: "Classes 5-7",
      subjects: "All Core Subjects",
      icon: BookOpen,
      color: "bg-primary",
      description: "Mathematics, Science, English, Social Studies and other core subjects",
      features: ["Concept building", "Interactive learning", "Regular assessments"]
    },
    {
      grades: "Classes 8-12",
      subjects: "Mathematics Only",
      icon: Calculator,
      color: "bg-secondary",
      description: "Specialized mathematics coaching for higher grades",
      features: ["Advanced problem solving", "Board exam preparation", "Competitive exam focus"]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "One-on-One Sessions",
      description: "Personalized attention for maximum learning efficiency"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Schedule classes according to your convenience"
    },
    {
      icon: Globe,
      title: "Home Tuitions Only",
      description: "Comfortable learning environment at your home"
    }
  ];

  return (
    <section id="classes" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Classes Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tuition programs designed to meet the specific needs of each grade level
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        {/* Main Classes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {classesData.map((classInfo, index) => (
            <Card key={index} className="card-professional border-0 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 ${classInfo.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`${classInfo.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <classInfo.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{classInfo.grades}</CardTitle>
                <p className="text-lg font-semibold text-muted-foreground">{classInfo.subjects}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{classInfo.description}</p>
                <div className="space-y-3">
                  {classInfo.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-light p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-16 p-8 bg-accent-light rounded-2xl border-l-4 border-accent">
          <div className="flex items-start gap-4">
            <div className="bg-accent p-2 rounded-full">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-accent">Important Note</h4>
              <p className="text-muted-foreground">
                <strong>Only home tuitions are currently available.</strong> For detailed pricing, 
                timetable customization, and to discuss your specific learning needs, please contact 
                me directly. Each program is tailored to the individual student's requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;