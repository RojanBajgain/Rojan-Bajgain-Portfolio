import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  User,
  Briefcase,
  Code,
  BookOpen,
  Server,
  Database,
  Monitor,
  Layers,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-[85vh] px-6">
      <div className="max-w-7xl mx-auto pt-8 md:pt-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div className="space-y-6 slide-in-left order-2 md:order-1">
            <div className="flex flex-wrap gap-2">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
                Flutter Developer
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                Ayata Incorporation
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Rojan <span className="text-primary">Bajgain</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Building cross-platform mobile applications with a focus on
              performance, scalability, and exceptional user experience. Based
              in Lalitpur, Nepal.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/about"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-button"
              >
                <span>About Me</span>
                <User size={16} />
              </Link>

              <Link
                to="/experience"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg transition-all hover:translate-y-[-2px]"
              >
                <span>Work</span>
                <Briefcase size={16} />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-secondary/50 rounded-lg transition-all hover:translate-y-[-2px]"
              >
                <span>Contact</span>
                <Mail size={16} />
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rojanbajgain123@gmail.com"
                className="p-2.5 rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-full hover:bg-secondary transition-colors"
              >
                <span className="text-sm font-medium">Resume</span>
                <Download size={16} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2 slide-in-right">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Rojan Bajgain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Snippet Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center slide-in-bottom">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-8">
              I'm a Flutter Developer with 7 months of experience, specializing
              in building high-performance and scalable cross-platform mobile
              applications. I'm passionate about creating clean, maintainable
              code that delivers exceptional user experiences.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-primary hover:underline gap-1"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Skills & Technologies Section - Enhanced */}
        <div
          className="mb-20 slide-in-bottom"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Core Skills */}
            <Card className="bg-gradient-to-br from-background to-secondary/20 border-secondary/40 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Flutter & Dart",
                    "Cross-platform development",
                    "Clean code architecture",
                    "UI/UX implementation",
                    "Performance optimization",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className="text-primary flex-shrink-0"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* State Management */}
            <Card className="bg-gradient-to-br from-background to-secondary/20 border-secondary/40 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Layers size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">State Management</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Provider",
                    "Bloc Pattern",
                    "State Architecture Design",
                    "Reactive Programming",
                    "WebSockets (Learning)",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className="text-primary flex-shrink-0"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Integration */}
            <Card className="bg-gradient-to-br from-background to-secondary/20 border-secondary/40 overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Server size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Integration</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "RESTful APIs",
                    "Firebase integration",
                    "Payment gateways (Khalti, E-sewa)",
                    "Push notifications",
                    "Database integration",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className="text-primary flex-shrink-0"
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills Badges */}
          <div className="bg-secondary/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Flutter", icon: <Code size={16} /> },
                { name: "Dart", icon: <Code size={16} /> },
                { name: "Provider", icon: <Layers size={16} /> },
                { name: "Bloc", icon: <Layers size={16} /> },
                { name: "RESTful APIs", icon: <Server size={16} /> },
                { name: "Firebase", icon: <Database size={16} /> },
                { name: "UI/UX Design", icon: <Monitor size={16} /> },
                { name: "Git & GitHub", icon: <Github size={16} /> },
                { name: "ClickUp", icon: <Briefcase size={16} /> },
                { name: "Responsive Design", icon: <Monitor size={16} /> },
              ].map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="px-3 py-2 text-sm flex items-center gap-1.5 hover:bg-secondary/80 transition-colors"
                >
                  {skill.icon}
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Carousel */}
        <div
          className="mb-16 slide-in-bottom"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Featured Projects
          </h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  title: "Attendance Management System",
                  description:
                    "Mobile application for staff attendance tracking with real-time notifications and reports.",
                  tech: ["Flutter", "Dart", "REST API", "Push Notifications"],
                },
                {
                  title: "Avyass Learning Platform",
                  description:
                    "Educational platform providing test series, mock tests and online exam preparation resources.",
                  tech: [
                    "Flutter",
                    "In-App Purchase",
                    "Khalti & E-sewa Integration",
                  ],
                },
              ].map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full bg-gradient-to-br from-background to-secondary/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#"
                          className="text-primary text-sm flex items-center gap-1 hover:underline"
                        >
                          View details <ExternalLink size={14} />
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </div>
          </Carousel>
        </div>

        {/* Internship Highlights Section - Updated */}
        <div
          className="my-20 max-w-4xl mx-auto slide-in-bottom"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Professional Growth
          </h2>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/30 overflow-hidden border-0">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                  <GraduationCap size={32} className="text-primary" />
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-semibold">
                      Flutter Development Journey
                    </h3>
                    <Badge variant="outline" className="whitespace-nowrap">
                      Started September 2023
                    </Badge>
                  </div>

                  <p className="text-lg mb-4">
                    Ayata Incorporation, Annamnagar
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Building my career in Flutter development with hands-on
                    experience in real-world projects. Focused on mobile app
                    architecture, state management, and creating exceptional
                    user experiences with scalable solutions.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Mobile app development fundamentals",
                      "UI/UX implementation practices",
                      "Code review participation",
                      "Debugging and testing",
                      "Version control with Git",
                      "Agile development methodology",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle
                          size={16}
                          className="text-primary flex-shrink-0"
                        />
                        <span className="text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/experience"
                      className="text-primary flex items-center gap-1 hover:underline"
                    >
                      View full experience <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div
          className="mt-24 mb-16 slide-in-bottom"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      BCA – Bachelor of Computer Application
                    </h3>
                    <p className="text-muted-foreground">
                      Nepalaya College (Tribhuvan University)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      2020 - Present
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Higher Secondary Education (Science)
                    </h3>
                    <p className="text-muted-foreground">
                      Kanjirowa National Higher Secondary School
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      2017 - 2020
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-24 mb-16 max-w-4xl mx-auto">
          <div
            className="bg-gradient-to-r from-primary/10 to-secondary/30 rounded-2xl p-8 md:p-12 text-center slide-in-bottom"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Looking for a Flutter developer who can bring your mobile app idea
              to life? I'm currently available for new opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:translate-y-[-2px] hover:shadow-button"
            >
              <span>Contact Me</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
