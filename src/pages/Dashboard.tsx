import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import {
  Car,
  LogOut,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.jpeg" alt="Vishnu Travels" className="w-10 h-10 rounded-xl object-cover" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Vishnu Travels Dashboard
              </p>
              <h1 className="text-2xl font-bold tracking-tight">
                Welcome{user?.name ? `, ${user.name}` : ""} 👋
              </h1>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer gap-2 self-start"
            onClick={handleSignOut}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </header>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="border-border/70 hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <a
                  href="https://wa.me/9025336238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Chat with us →
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/70 hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Call Us</p>
                <a
                  href="tel:+9025336238"
                  className="text-xs text-primary hover:underline"
                >
                  +91 90253 36238 →
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/70 hover:border-primary/30 transition-colors">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email Us</p>
                <a
                  href="mailto:vishnutourandtravels16@gmail.com"
                  className="text-xs text-primary hover:underline break-all"
                >
                  Write email →
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity / Info */}
        <Card className="border-border/70">
          <CardHeader>
            <CardTitle className="text-lg">Quick Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                icon: Calendar,
                label: "Operating Since",
                value: "2019 — 6+ Years",
              },
              {
                icon: Car,
                label: "Fleet Available",
                value: "Sedan, SUV, Tempo Traveller, 56-Seater Bus",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "Tamil Nadu & Pan India",
              },
              {
                icon: MessageCircle,
                label: "Instagram",
                value: "@etios_lover_tn25",
                link: "https://www.instagram.com/etios_lover_tn25?igsi=NXJxYzltc3ZyZmN2",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => navigate("/")}
          >
            ← Back to Website
          </Button>
        </div>
      </div>
    </main>
  );
}
