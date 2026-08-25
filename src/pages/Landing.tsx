import { motion } from "framer-motion";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  Users,
  Instagram,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Bus,
  Truck,
  CarFront,
  Heart,
  Award,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Car,
    title: "Local Travel",
    desc: "Reliable local city travel with experienced drivers. Airport transfers, daily commutes, and city rides.",
  },
  {
    icon: Globe,
    title: "Outstation Travel",
    desc: "Comfortable outstation trips across Tamil Nadu and beyond. One-way and round-trip packages available.",
  },
  {
    icon: Users,
    title: "Family & Group Tours",
    desc: "Special group and family tour packages. Wedding, pilgrimage, and holiday tour arrangements.",
  },
  {
    icon: Clock,
    title: "Airport Transfers",
    desc: "Punctual airport pickup and drop services. Track your flight timings and reach on time.",
  },
  {
    icon: Shield,
    title: "Corporate Travel",
    desc: "Professional corporate travel solutions for companies. Monthly packages and employee transport.",
  },
  {
    icon: Star,
    title: "Tour Packages",
    desc: "Curated tour packages for hill stations, temples, beaches, and weekend getaways at best prices.",
  },
];

const fleet = [
  {
    icon: CarFront,
    title: "Sedan",
    capacity: "4 Seater",
    models: "Swift Dzire, Etios, City",
    features: ["AC", "Comfortable Seats", "Luggage Space", "Experienced Driver"],
  },
  {
    icon: Truck,
    title: "SUV",
    capacity: "7 Seater",
    models: "Innova, Ertiga, Carens",
    features: ["Spacious", "AC", "Large Boot", "GPS Tracking"],
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    capacity: "9 / 12 Seater",
    models: "Force Traveller, Minibus",
    features: ["Pushback Seats", "AC", "Music System", "Ample Space"],
  },
  {
    icon: Bus,
    title: "Large Coach",
    capacity: "56 Seater",
    models: "Multi-Axle, AC Bus",
    features: ["Luxury Seats", "AC & Pushback", "Washroom", "Entertainment"],
  },
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Tour Destinations" },
  { value: "24/7", label: "Customer Support" },
];

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Vishnu Travels
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Services", "Fleet", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-5"
                asChild
              >
                <a href="https://wa.me/9025336238" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Book Now
                </a>
              </Button>
            </div>
            <a
              href="https://wa.me/9025336238"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden"
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full">
                <MessageCircle className="w-4 h-4 mr-1" />
                Book
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground border border-accent/20 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">6+ Years of Trusted Service</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Travel with{" "}
                <span className="text-primary">Comfort</span>{" "}
                &{" "}
                <span className="text-accent">Safety</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Vishnu Travels provides safe, reliable, and comfortable travel
                services across Tamil Nadu. From sedans to 56-seater coaches,
                we have the right vehicle for every journey.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-7"
                  asChild
                >
                  <a href="https://wa.me/9025336238?text=Hi%20Vishnu%20Travels%2C%20I%20would%20like%20to%20book%20a%20vehicle" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 border-border/60"
                  asChild
                >
                  <a href="tel:+9025336238">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">No Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Experienced Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">24/7 Available</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Decorative vehicle illustration */}
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Car className="w-16 h-16 text-primary" />
                    </div>
                    <div className="flex justify-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Truck className="w-8 h-8 text-accent" />
                    </div>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Bus className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating stat card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">4.9 Rating</p>
                      <p className="text-xs text-muted-foreground">500+ Reviews</p>
                    </div>
                  </div>
                </motion.div>
                {/* Floating stat card 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">100% Safe</p>
                      <p className="text-xs text-muted-foreground">Verified Drivers</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border/50 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...stagger} transition={{ ...stagger.transition, delay: i * 0.1 }} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-border/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                      <Car className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-2xl font-bold">Vishnu</p>
                    <p className="text-muted-foreground">Founder & Owner</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg border border-border/50 p-5">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-bold">6 Years</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Trusted Travel Partner Since 2019
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Hi, I'm <strong className="text-foreground">Vishnu</strong>, the founder of
                Vishnu Travels. With over <strong className="text-foreground">6 years of experience</strong> in
                the travel industry, we are committed to providing safe, comfortable,
                and affordable travel services to our customers.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We offer a wide range of vehicles from compact sedans to luxurious
                56-seater coaches, catering to solo travelers, families, corporate
                groups, and large parties. Our experienced and verified drivers
                ensure a smooth and enjoyable journey every time.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Shield, text: "Verified & Licensed" },
                  { icon: Clock, text: "On-Time Guarantee" },
                  { icon: Star, text: "Premium Service" },
                  { icon: MapPin, text: "Pan Tamil Nadu" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-white rounded-full"
                asChild
              >
                <a href="tel:+9025336238">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Travel Services
            </h2>
            <p className="mt-4 text-muted-foreground">
              From local city rides to outstation tours, we provide comprehensive
              travel solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Our Fleet
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Choose Your Ride
            </h2>
            <p className="mt-4 text-muted-foreground">
              Well-maintained vehicles for every occasion — from intimate family
              trips to large group tours.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((vehicle, i) => (
              <motion.div
                key={vehicle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <vehicle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{vehicle.title}</h3>
                    <p className="text-primary font-semibold text-sm mt-1">
                      {vehicle.capacity}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 mb-4">
                      {vehicle.models}
                    </p>
                    <ul className="space-y-1.5">
                      {vehicle.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 lg:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Ready for Your Next Journey?
              </h2>
              <p className="mt-4 text-white/80 max-w-lg mx-auto text-lg">
                Contact us now for the best rates and a hassle-free travel experience.
                We're just a call or WhatsApp message away.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-7 font-semibold"
                  asChild
                >
                  <a href="https://wa.me/9025336238?text=Hi%2C%20I%20need%20a%20travel%20quote" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-7"
                  asChild
                >
                  <a href="tel:+9025336238">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 90253 36238
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out to us via phone, WhatsApp, or email. We're always happy
              to help with your travel plans.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "+91 90253 36238",
                link: "tel:+9025336238",
                desc: "Call us anytime",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+91 90253 36238",
                link: "https://wa.me/9025336238",
                desc: "Chat with us",
              },
              {
                icon: Mail,
                title: "Email",
                value: "vishnutourandtravels16@gmail.com",
                link: "mailto:vishnutourandtravels16@gmail.com",
                desc: "Write to us",
              },
              {
                icon: Instagram,
                title: "Instagram",
                value: "@etios_lover_tn25",
                link: "https://www.instagram.com/etios_lover_tn25?igsi=NXJxYzltc3ZyZmN2",
                desc: "Follow us",
              },
            ].map((contact, i) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold">{contact.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 mb-3">
                      {contact.desc}
                    </p>
                    <a
                      href={contact.link}
                      target={contact.link.startsWith("http") ? "_blank" : undefined}
                      rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-primary hover:underline break-all"
                    >
                      {contact.value}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Vishnu Travels
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Safe, reliable, and affordable travel services. Serving customers
                across Tamil Nadu with 6+ years of experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Services", "Fleet", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  +91 90253 36238
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="break-all">vishnutourandtravels16@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  Tamil Nadu, India
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://wa.me/9025336238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/etios_lover_tn25?igsi=NXJxYzltc3ZyZmN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="tel:+9025336238"
                  className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vishnu Travels. All rights reserved.
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
