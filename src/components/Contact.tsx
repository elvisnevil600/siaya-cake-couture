import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message is too long")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    
    // Create WhatsApp message
    const message = `Hello! I'm interested in ordering a cake.%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/254727252010?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Opening WhatsApp",
      description: "Your message has been prepared. Complete sending it on WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order your perfect cake? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+254 727 252010</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/254727252010" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:beckycakes@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  beckycakes@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Bondo, Siaya County</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Input
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your cake needs..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Inquiry via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
