
import { useState } from "react";
import { Check, MapPin, Mail, Phone, Send, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] px-6">
      <div className="max-w-7xl mx-auto pt-12">
        <div className="max-w-5xl mx-auto fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="slide-in-left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out for collaboration, opportunities, or just to say hello!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">Lalitpur, Nepal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:rojanbajgain123@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        rojanbajgain123@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+9779848092969" className="text-muted-foreground hover:text-primary transition-colors">
                        +977 9848092969
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* <div className="pt-6 space-y-4">
                  <h3 className="font-medium">Working Hours</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <Card className="overflow-hidden border-secondary/50 hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <h4 className="text-sm font-medium">Weekdays</h4>
                            <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden border-secondary/50 hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <h4 className="text-sm font-medium">Weekends</h4>
                            <p className="text-sm text-muted-foreground">By appointment</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div> */}
                
                {/* <div className="pt-6">
                  <h3 className="font-medium mb-3">Connect</h3>
                  <a 
                    href="https://calendly.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-secondary rounded-lg text-sm hover:bg-secondary/80 transition-colors gap-2"
                  >
                    <span>Schedule a Meeting</span>
                    <ExternalLink size={16} />
                  </a>
                </div> */}
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="bg-secondary/30 backdrop-blur-sm p-6 md:p-8 rounded-xl">
                <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-primary/10 text-primary rounded-lg p-4 flex items-center gap-2 my-8">
                    <Check className="w-5 h-5" />
                    <span>Your message has been sent successfully!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:shadow-button disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
