import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Flame } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] overflow-hidden">
      {/* Background Pattern/Blur Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-md text-sm">
              Join our 37,000+ Strong Tech Community
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Become Future Ready <br />
              Software Developer <br />
              <span className="block">with AI Skills</span>
            </h1>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 backdrop-blur-sm p-1 rounded mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Build real-world projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 backdrop-blur-sm p-1 rounded mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Master DSA & System Design</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 backdrop-blur-sm p-1 rounded mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">1500+ hiring partners</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 backdrop-blur-sm p-1 rounded mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Exclusive classes from IIT-R</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="accent" size="lg" className="text-base px-8">
                Book a Live Class →
              </Button>
              <Button variant="secondary" size="lg" className="text-base px-8">
                Explore Academy
              </Button>
            </div>

            {/* Batch Info */}
            <p className="text-white text-sm pt-4">
              Next batch starts in <span className="text-yellow-400 font-bold text-base">OCTOBER</span>
            </p>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground">
                Book a <span className="text-accent">Free Live Session!</span>
              </h2>
              <p className="text-muted-foreground">With Scaler Founders & Top Instructors</p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 text-base"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 text-base"
                />
              </div>

              <div className="flex gap-2">
                <Select defaultValue="+91">
                  <SelectTrigger className="w-24 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                    <SelectItem value="+1">🇺🇸 +1</SelectItem>
                    <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  placeholder="Phone"
                  className="flex-1 h-12 text-base"
                />
              </div>

              <Button variant="accent" size="lg" className="w-full h-12 text-base">
                Book Free Live Class
              </Button>

              <div className="flex items-center justify-center gap-2 pt-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-semibold text-card-foreground">10 k+ Enrolled</span>
              </div>

              <p className="text-xs text-muted-foreground text-center pt-2">
                By creating an account I have read and agree to Scaler's{" "}
                <a href="#" className="text-blue-600 hover:underline">Terms</a> and{" "}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
