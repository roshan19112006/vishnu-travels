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
  CheckCircle2,
  Bus,
  Truck,
  CarFront,
  Heart,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Camera,
  ChevronRight,
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
    title: "Local & City Travel",
    desc: "Airport transfers, daily commutes, and on-demand city rides with experienced, verified drivers.",
  },
  {
    icon: Globe,
    title: "Outstation Trips",
    desc: "One-way and round-trip packages across Tamil Nadu and beyond, tailored to your schedule.",
  },
  {
    icon: Users,
    title: "Family & Group Tours",
    desc: "Wedding parties, pilgrimages, holiday tours, and family outings — vehicles for every group size.",
  },
  {
    icon: Clock,
    title: "Airport Transfers",
    desc: "Punctual pickup and drop services with flight-tracking support so you never miss a departure.",
  },
  {
    icon: Shield,
    title: "Corporate Travel",
    desc: "Monthly packages and employee transport solutions built for companies that value reliability.",
  },
  {
    icon: Star,
    title: "Curated Tour Packages",
    desc: "Hill stations, temples, beaches, and weekend getaways — all-inclusive packages at competitive rates.",
  },
];

const fleet = [
  {
    icon: CarFront,
    title: "Sedan",
    capacity: "4 Seater",
    models: "Swift Dzire, Etios, City",
    features: ["Air-Conditioned", "Comfortable Seating", "Luggage Space", "Experienced Driver"],
  },
  {
    icon: Truck,
    title: "SUV",
    capacity: "7 Seater",
    models: "Innova, Ertiga, Carens",
    features: ["Spacious Interior", "Air-Conditioned", "Large Boot", "GPS Tracking"],
  },
  {
    icon: Bus,
    title: "Tempo Traveller",
    capacity: "9 / 12 Seater",
    models: "Force Traveller, Mini Bus",
    features: ["Pushback Seats", "Air-Conditioned", "Music System", "Ample Legroom"],
  },
  {
    icon: Bus,
    title: "Large Coach",
    capacity: "56 Seater",
    models: "Multi-Axle, AC Bus",
    features: ["Luxury Seating", "AC & Pushback", "On-board Washroom", "Entertainment System"],
  },
];

const reviews = [
  {
    name: "Karthik R.",
    location: "Chennai",
    rating: 5,
    text: "Booked an Innova for a family pilgrimage to Madurai. The vehicle was spotless, the driver was courteous and punctual, and the entire journey was seamless. Will definitely book again.",
  },
  {
    name: "Priya S.",
    location: "Coimbatore",
    rating: 5,
    text: "We hired a 12-seater tempo traveller for our office trip to Ooty. Spacious, well-maintained, and the driver knew every route perfectly. Excellent value for money.",
  },
  {
    name: "Mohammed A.",
    location: "Salem",
    rating: 5,
    text: "Used Vishnu Travels for my sister's wedding — booked two vehicles for the full day. Everything ran on time, vehicles were decorated as requested, and the pricing was transparent with no hidden costs.",
  },
  {
    name: "Lakshmi D.",
    location: "Tiruchirappalli",
    rating: 5,
    text: "Hired a 56-seater bus for a temple tour with our community group of 50 people. The bus was comfortable, AC worked perfectly, and the driver was very cooperative throughout the three-day trip.",
  },
];

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "500+", label: "Satisfied Customers" },
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
            <a href="/" className="flex items-center gap-2.5">
              <img src="/assets/logo.jpeg" alt="Vishnu Travels" className="w-9 h-9 rounded-xl object-cover" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Vishnu Travels
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Services", "Fleet", "Reviews", "Contact"].map((item) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.03]" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Trusted Since 2019</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.08] mb-6">
                Premium Travel{" "}
                <br className="hidden sm:block" />
                <span className="text-primary">Built on Trust</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                From compact sedans to 56-seater coaches — dependable, well-maintained
                vehicles driven by experienced professionals. Serving families,
                corporate groups, and tour parties across Tamil Nadu and beyond.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 shadow-md shadow-primary/10"
                  asChild
                >
                  <a href="https://wa.me/9025336238?text=Hi%20Vishnu%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20a%20vehicle" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get a Quote on WhatsApp
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
                {["No Hidden Charges", "Verified Drivers", "Available 24/7"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] border border-border/30 flex items-center justify-center overflow-hidden">
                  <img src="/assets/logo.jpeg" alt="Vishnu Travels" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/[0.1] flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">4.9 Rating</p>
                      <p className="text-xs text-muted-foreground">500+ Reviews</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center">
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
      <section className="py-12 border-y border-border/50 bg-white/60">
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

      {/* About Section — with photo placeholder */}
      <section id="about" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="relative">
                {/* Photo placeholder — replace the inner div with an <img> once you add your photo */}
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/[0.06] to-accent/[0.04] border border-border/30 flex items-center justify-center overflow-hidden">                      {/* Owner photo */}
                  <img
                    src="/assets/owner.jpeg"
                    alt="Vishnu — Founder & Owner"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <div className="hidden flex-col items-center gap-3 p-8">
                    <Camera className="w-12 h-12 text-primary/30" />

                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-border/50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/[0.1] flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">6+ Years</p>
                      <p className="text-xs text-muted-foreground">Industry Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                About Vishnu Travels
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                A Decade of Moving People{" "}
                <span className="text-primary">with Care</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">Vishnu</strong>, and I founded Vishnu Travels
                with a simple belief — that every journey should be safe, comfortable,
                and fairly priced. Over the past six years, we've built a reputation
                for punctuality, transparency, and genuine care for every passenger.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our fleet spans every need — from solo commuters in sedans to
                large tour groups in 56-seater coaches. Every vehicle is
                regularly maintained, every driver is verified and experienced,
                and every booking comes with no hidden charges.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Shield, text: "Verified & Licensed" },
                  { icon: Clock, text: "On-Time Guarantee" },
                  { icon: Star, text: "Premium Fleet" },
                  { icon: MapPin, text: "Pan Tamil Nadu & Beyond" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-white rounded-full shadow-md shadow-primary/10"
                asChild
              >
                <a href="tel:+9025336238">
                  Speak with Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Comprehensive Travel Solutions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether it's a quick airport transfer or a multi-day group tour, we
              deliver the same standard of service — professional, punctual, and
              hassle-free.
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
                <Card className="h-full border-border/40 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-4">
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
              The Right Vehicle for Every Journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every vehicle in our fleet is meticulously maintained, thoroughly
              cleaned, and equipped with modern amenities for your comfort.
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
                <Card className="h-full border-border/40 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mb-4">
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

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 lg:py-28 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Don't just take our word for it — here's what passengers who have
              travelled with us have to say about their experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-300 bg-white">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary/10 mb-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div>
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add Review CTA */}
          <motion.div {...fadeUp} className="mt-10 text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Had a great experience with us? Share it!
            </p>
            <Button
              variant="outline"
              className="rounded-full border-border/60"
              asChild
            >
              <a
                href="https://wa.me/9025336238?text=Hi%2C%20I%20travelled%20with%20Vishnu%20Travels%20and%20would%20like%20to%20share%20my%20feedback"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Share Your Feedback on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/90 p-12 lg:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/[0.04] blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/[0.04] blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Ready to Book Your Journey?
              </h2>
              <p className="mt-4 text-white/75 max-w-lg mx-auto text-lg">
                Share your travel dates and requirements — we'll get back to you
                with the best rates and vehicle options within minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-7 font-semibold shadow-lg"
                  asChild
                >
                  <a href="https://wa.me/9025336238?text=Hi%2C%20I%20would%20like%20to%20book%20a%20vehicle%20for%20travel" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get a Quote on WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-white/15 text-white hover:bg-white/25 border border-white/30 rounded-full px-7"
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
      <section id="contact" className="py-20 lg:py-28 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reach out via phone, WhatsApp, or email — we respond promptly and
              are happy to assist with any travel enquiry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: "+91 90253 36238",
                link: "tel:+9025336238",
                desc: "Available 24/7",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+91 90253 36238",
                link: "https://wa.me/9025336238",
                desc: "Instant Response",
              },
              {
                icon: Mail,
                title: "Email",
                value: "vishnutourandtravels16@gmail.com",
                link: "mailto:vishnutourandtravels16@gmail.com",
                desc: "Write to Us",
              },
              {
                icon: Instagram,
                title: "Instagram",
                value: "@etios_lover_tn25",
                link: "https://www.instagram.com/etios_lover_tn25?igsi=NXJxYzltc3ZyZmN2",
                desc: "Follow Our Work",
              },
            ].map((contact, i) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/40 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-300 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.06] flex items-center justify-center mx-auto mb-4">
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
      <footer className="border-t border-border/50 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/assets/logo.jpeg" alt="Vishnu Travels" className="w-9 h-9 rounded-xl object-cover" />
                <span className="text-lg font-bold tracking-tight">
                  Vishnu Travels
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Safe, reliable, and premium travel services. Trusted by families,
                corporate groups, and tour operators across Tamil Nadu since 2019.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Services", "Fleet", "Reviews", "Contact"].map((item) => (
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
                  className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/etios_lover_tn25?igsi=NXJxYzltc3ZyZmN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="tel:+9025336238"
                  className="w-9 h-9 rounded-lg bg-primary/[0.06] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
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
