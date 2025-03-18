import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <div className="min-h-[85vh] px-6">
      <div className="max-w-7xl mx-auto pt-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Work Experience
          </h1>

          <div className="mt-8 space-y-12 slide-in-bottom">
            <div className="relative">
              <div className="absolute top-0 left-[11px] bottom-0 w-[2px] bg-primary/20"></div>

              {/* Professional Experience */}
              <div className="relative pl-10 mb-12">
                <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">Flutter Developer</h2>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>January 2024 - Present</span>
                  </div>
                </div>

                <p className="text-lg mb-4">Ayata Incorporation, Anamnagar</p>

                <div className="space-y-8">
                  <div className="bg-secondary/30 p-6 rounded-xl">
                    <h3 className="text-lg font-medium mb-3">
                      Attendance Management System (AMS)
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Developed and maintained the Attendance Management System (AMS) mobile application, providing a seamless user experience for staff.",
                        "Integrated RESTful APIs for real-time data fetching, authentication, and attendance tracking.",
                        "Implemented push notifications for timeoff updates, payroll updates, and Event, Holidays & Notice notification.",
                        "Optimized app performance and UI responsiveness, reducing load times and improving smooth animations.",
                        "Collaborated with backend developers, UI/UX designers, and QA teams to ensure seamless integration and a high-quality user experience.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BadgeCheck className="min-w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/30 p-6 rounded-xl">
                    <h3 className="text-lg font-medium mb-3">Avyass</h3>
                    <ul className="space-y-2">
                      {[
                        "Developed a mobile application which provides a platform for students to access test series, test questions, mock tests and online exam preparation books booking.",
                        "Implemented secure in-app purchases for users to buy mock test questions such as Khalti & E-sewa.",
                        "Designed an intuitive UI/UX, ensuring ease of navigation and smooth user interaction.",
                        "Integrated RESTful APIs to fetch test questions and manage user progress.",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BadgeCheck className="min-w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship Experience */}
              <div className="relative pl-10 mb-12">
                <div className="absolute top-1 left-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-secondary-foreground" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">
                    Flutter Development Intern
                  </h2>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>September 2024 - December 2024</span>
                  </div>
                </div>

                <p className="text-lg mb-4">
                  Ayata Incorporation, Kathmandu, Nepal
                </p>

                <div className="bg-secondary/30 p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-3">
                    Learning & Development
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Gained hands-on experience in Flutter development by working on real-world projects under senior developers' guidance.",
                      "Learned fundamental principles of mobile app architecture, state management, and UI/UX implementation.",
                      "Collaborated with the design team to implement responsive user interfaces and engage in the app development lifecycle.",
                      "Participated in code reviews and agile development processes, learning best practices for clean code and version control.",
                      "Assisted in debugging and performance optimization of existing applications.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <BadgeCheck className="min-w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <div className="space-y-6">
                <div className="bg-secondary/30 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">
                      BCA – Bachelor of Computer Application
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2020 - Present</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Nepalaya College (Tribhuvan University), Kathmandu, Nepal
                  </p>
                </div>

                <div className="bg-secondary/30 p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">
                      Higher Secondary Education (Science)
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2017 - 2020</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Kanjirowa National Higher Secondary School, Balkumari,
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-button"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
