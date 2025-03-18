
import { ArrowRight, Award, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[85vh] px-6">
      <div className="max-w-7xl mx-auto pt-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 fade-in">About Me</h1>
          
          <div className="space-y-8 slide-in-bottom">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Flutter developer with 7 months of specialized experience in building cross-platform mobile applications. 
              My development approach focuses on creating high-performance, scalable solutions with exceptional user experiences.
            </p>
            
            <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Professional Summary
              </h2>
              <ul className="space-y-3 list-disc pl-5">
                <li className="text-muted-foreground">
                  7 months of experience as a Flutter Developer, specializing in building high-performance and scalable
                  cross-platform mobile applications.
                </li>
                <li className="text-muted-foreground">
                  Proficient in Agile development methodologies and experienced in collaborating with cross-functional
                  teams to deliver seamless and user-friendly mobile solutions.
                </li>
                <li className="text-muted-foreground">
                  Skilled in Flutter, Dart, Provider, Bloc for state management, and integrating RESTful APIs to ensure
                  smooth backend communication.
                </li>
                <li className="text-muted-foreground">
                  Passionate about writing clean, maintainable, and efficient code while focusing on UI/UX design, responsiveness, and performance optimization.
                </li>
                <li className="text-muted-foreground">
                  Currently expanding knowledge in WebSockets and advanced state management techniques to
                  enhance real-time features and app scalability.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4 py-1">
                  <h3 className="font-medium">BCA – Bachelor of Computer Application</h3>
                  <p className="text-muted-foreground">Nepalaya College (Tribhuvan University), Kathmandu, Nepal</p>
                  <p className="text-sm text-muted-foreground mt-1">2020-Present</p>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-4 py-1">
                  <h3 className="font-medium">Higher Secondary Education (Science)</h3>
                  <p className="text-muted-foreground">Kanjirowa National Higher Secondary School, Balkumari, Kathmandu, Nepal</p>
                  <p className="text-sm text-muted-foreground mt-1">2017-2020</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Frameworks & Languages</h3>
                  <p className="text-muted-foreground">Dart, Flutter</p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">State Management</h3>
                  <p className="text-muted-foreground">Bloc, Provider (Exploring WebSockets)</p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">API Integration</h3>
                  <p className="text-muted-foreground">RESTful APIs</p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Database Management</h3>
                  <p className="text-muted-foreground">Firebase</p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Version Control</h3>
                  <p className="text-muted-foreground">Git, GitHub</p>
                </div>
                
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Project Management</h3>
                  <p className="text-muted-foreground">ClickUp</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Link
                to="/experience"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-button"
              >
                <span>View My Experience</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
